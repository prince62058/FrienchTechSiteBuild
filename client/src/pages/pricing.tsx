import React from "react";
import EnhancedPricing from "@/components/enhanced-pricing";
import { useScrollAnimations } from "@/hooks/use-scroll-animations";

export default function Pricing() {
  useScrollAnimations();
  
  return (
    <div className="pt-20 bg-slate-900 min-h-screen">
      <EnhancedPricing />
    </div>
  );
}
