"use client"

import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu {...props} />
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group {...props} />
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal {...props} />
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return <MenubarPrimitive.RadioGroup {...props} />
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />
}

const Menubar = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      className
    )}
    {...props}
))
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      className
    )}
    {...props}
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      className
    )}
    {...props}
    {children}
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      className
    )}
    {...props}
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      className
    )}
    {...props}
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      className
    )}
    checked={checked}
    {...props}
    {children}
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      className
    )}
    {...props}
    {children}
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      className
    )}
    {...props}
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({
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
MenubarShortcut.displayname = "MenubarShortcut"

export {
}
