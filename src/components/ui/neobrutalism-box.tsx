import * as React from "react"
import { cn } from "@/lib/utils"

interface NeobrutalismBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "primary" | "secondary" | "accent" | "white"
}

const NeobrutalismBox = React.forwardRef<HTMLDivElement, NeobrutalismBoxProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-white",
      primary: "bg-brand-primary",
      secondary: "bg-brand-secondary",
      accent: "bg-brand-accent",
      white: "bg-white"
    }

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border-2 border-black shadow-lg",
          variants[variant],
          className
        )}
        {...props}
      />
    )
  }
)
NeobrutalismBox.displayName = "NeobrutalismBox"

export { NeobrutalismBox }
