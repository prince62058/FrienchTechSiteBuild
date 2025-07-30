import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const Command = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      className
    )}
    {...props}
))
Command.displayName = CommandPrimitive.displayName

const CommandDialog = ({ children, ...props ) => {
  return (
          {children}
  )
}

const CommandInput = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        className
      )}
      {...props}
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      className
    )}
    {...props}
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      className
    )}
    {...props}
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        className
      )}
      {...props}
  )
}
CommandShortcut.displayName = "CommandShortcut"

export {
}
