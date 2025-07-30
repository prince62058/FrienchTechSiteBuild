import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      className
    )}
    {...props}
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
