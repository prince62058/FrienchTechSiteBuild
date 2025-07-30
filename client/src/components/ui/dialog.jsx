"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      className
    )}
    {...props}
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        className
      )}
      {...props}
      {children}
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      className
    )}
    {...props}
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      className
    )}
    {...props}
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      className
    )}
    {...props}
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
}
