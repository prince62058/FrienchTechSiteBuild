import mongoose from 'mongoose';
import { userSchema, contactSchema } from "../shared/schema.js";

// MongoDB connection - For Replit environment, fallback to in-memory storage
const connectDB = async () => {
  try {
    // Only try to connect to MongoDB if MONGODB_URI is explicitly provided
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('MongoDB connected successfully');
      return true;
    } else {
      console.log('No MONGODB_URI provided, using in-memory storage');
      return false;
    }
  } catch (error) {
    console.log('MongoDB connection failed, using in-memory storage');
    return false;
  }
};

// MongoDB User Model
const UserModel = mongoose.model('User', new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true }));

// MongoDB Contact Model
const ContactModel = mongoose.model('Contact', new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, default: null },
  service: { type: String, default: null },
  message: { type: String, required: true },
}, { timestamps: true }));

// Fallback in-memory storage - defined first
export class MemStorage {
  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
  }

  async getUser(id) {
    return this.users.get(id);
  }

  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser) {
    const id = this.currentUserId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact) {
    const id = this.currentContactId++;
    const contact = { 
      ...insertContact, 
      id,
      phone: insertContact.phone || null,
      service: insertContact.service || null,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts() {
    return Array.from(this.contacts.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }
}

export class MongoStorage {
  constructor() {
    this.isConnected = false;
    this.memoryFallback = new MemStorage();
    this.connectDB();
  }

  async connectDB() {
    this.isConnected = await connectDB();
  }

  async getUser(id) {
    if (!this.isConnected) return undefined;
    try {
      return await UserModel.findById(id);
    } catch (error) {
      console.error('Error getting user:', error);
      return undefined;
    }
  }

  async getUserByUsername(username) {
    if (!this.isConnected) return undefined;
    try {
      return await UserModel.findOne({ username });
    } catch (error) {
      console.error('Error getting user by username:', error);
      return undefined;
    }
  }

  async createUser(userData) {
    if (!this.isConnected) throw new Error('Database not connected');
    try {
      const user = new UserModel(userData);
      return await user.save();
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async createContact(contactData) {
    if (!this.isConnected) {
      // Fallback to in-memory storage when database is not connected
      console.log('Database not connected, storing contact in memory');
      return this.memoryFallback.createContact(contactData);
    }
    try {
      const contact = new ContactModel(contactData);
      return await contact.save();
    } catch (error) {
      console.error('Error creating contact:', error);
      // Fallback to in-memory storage on error
      return this.memoryFallback.createContact(contactData);
    }
  }

  async getContacts() {
    if (!this.isConnected) {
      return this.memoryFallback.getContacts();
    }
    try {
      return await ContactModel.find().sort({ createdAt: -1 });
    } catch (error) {
      console.error('Error getting contacts:', error);
      return this.memoryFallback.getContacts();
    }
  }
}



// Try MongoDB first, fallback to memory storage
let storage;
try {
  storage = new MongoStorage();
} catch (error) {
  console.warn('Failed to initialize MongoDB, using memory storage:', error);
  storage = new MemStorage();
}

export { storage };