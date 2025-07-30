import { z } from "zod";

// MongoDB schemas using Zod validation
export const insertUserSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const insertContactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

// User schema for MongoDB document
export const userSchema = z.object({
  _id: z.any().optional(),
  username: z.string(),
  password: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

// Contact schema for MongoDB document
export const contactSchema = z.object({
  _id: z.any().optional(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string().nullable().optional(),
  service: z.string().nullable().optional(),
  message: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});