"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      className
    )}
    {...props}
    {children}
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      className
    )}
    {...props}
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      className
    )}
    {...props}
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        position === "popper" &&
        className
      )}
      position={position}
      {...props}
      <SelectPrimitive.Viewport
        className={cn(
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
        {children}
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      className
    )}
    {...props}

))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
}
