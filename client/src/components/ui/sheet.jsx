"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      className
    )}
    {...props}
    ref={ref}
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  {
    variants: {
      side: {
        bottom:
        right:
    defaultVariants: {
  }
)

  <div
    className={cn(
      className
    )}
    {...props}
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      className
    )}
    {...props}
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
}
