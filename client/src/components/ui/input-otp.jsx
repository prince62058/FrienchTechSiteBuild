import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"

import { cn } from "@/lib/utils"

const InputOTP = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
