import React from "react";
import ModernServices from "@/components/modern-services";
import { useScrollAnimations } from "@/hooks/use-scroll-animations";
import { useLoading } from "@/hooks/use-loading";
import { PageSkeleton } from "@/components/skeleton-loaders";

export default function Services() {
  useScrollAnimations();
  const { isLoading } = useLoading({ delay: 900 });

  if (isLoading) {
    return <PageSkeleton type="services" />;
  }
  
  return (
    <div className="pt-20 bg-slate-900 min-h-screen">
      <ModernServices />
    </div>
  );
}