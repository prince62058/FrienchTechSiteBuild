import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      className
    )}
    {...props}
    ref={ref}
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        className
      )}
      {...props}
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      className
    )}
    {...props}
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      className
    )}
    {...props}
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      className
    )}
    {...props}
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
}
