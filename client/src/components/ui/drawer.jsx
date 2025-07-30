"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const DrawerContent = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        className
      )}
      {...props}
      {children}
))
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      className
    )}
    {...props}
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

const DrawerDescription = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export {
}
