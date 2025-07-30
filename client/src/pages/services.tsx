import React from "react";
import ModernServices from "@/components/modern-services";
import { useScrollAnimations } from "@/hooks/use-scroll-animations";

export default function Services() {
  useScrollAnimations();
  
  return (
    <div className="pt-20 bg-slate-900 min-h-screen">
      <ModernServices />
    </div>
  );
}