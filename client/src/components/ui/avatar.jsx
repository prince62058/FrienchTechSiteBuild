"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      className
    )}
    {...props}
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      className
    )}
    {...props}
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
