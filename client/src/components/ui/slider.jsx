import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef(
const ComponentName = React.forwardRef(({ ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      className
    )}
    {...props}
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
