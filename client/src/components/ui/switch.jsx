import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      className
    )}
    {...props}
    ref={ref}
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
