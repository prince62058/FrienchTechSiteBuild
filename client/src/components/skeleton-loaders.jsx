import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

// Card Skeleton Loader
export function CardSkeleton({ showButton = false }) {
  return (
    <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Skeleton className="h-12 w-12 rounded-lg" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
        {showButton && (
          <div className="mt-4">
            <Skeleton className="h-10 w-32" />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Hero Section Skeleton
export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center space-y-6">
        <Skeleton className="h-16 w-96 mx-auto" />
        <Skeleton className="h-6 w-80 mx-auto" />
        <div className="flex gap-4 justify-center">
          <Skeleton className="h-12 w-32" />
          <Skeleton className="h-12 w-32" />
        </div>
      </div>
    </div>
  );
}

// Navigation Skeleton
export function NavigationSkeleton() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Skeleton className="w-12 h-12 rounded" />
            <Skeleton className="h-8 w-32" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-6 w-16" />
            ))}
            <Skeleton className="h-10 w-24" />
          </div>
          <Skeleton className="md:hidden w-6 h-6" />
        </div>
      </div>
    </nav>
  );
}

// Grid Skeleton Loader
export function GridSkeleton({ items = 6, columns = 3 }) {
  return (
    <div className={`grid gap-6 md:grid-cols-${columns}`}>
      {Array.from({ length: items }).map((_, i) => (
        <CardSkeleton key={i} showButton={i % 2 === 0} />
      ))}
    </div>
  );
}

// Project Card Skeleton
export function ProjectCardSkeleton() {
  return (
    <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 overflow-hidden">
      <div className="relative">
        <Skeleton className="w-full h-48" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <CardContent className="p-6">
        <div className="space-y-4">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
          <div className="flex gap-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-6 w-16 rounded-full" />
            ))}
          </div>
          <div className="flex justify-between items-center">
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Pricing Card Skeleton
export function PricingCardSkeleton() {
  return (
    <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 relative">
      <CardContent className="p-8">
        <div className="text-center space-y-6">
          <Skeleton className="h-8 w-32 mx-auto" />
          <div className="space-y-2">
            <Skeleton className="h-12 w-24 mx-auto" />
            <Skeleton className="h-4 w-20 mx-auto" />
          </div>
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-4 flex-1" />
              </div>
            ))}
          </div>
          <Skeleton className="h-12 w-full" />
        </div>
      </CardContent>
    </Card>
  );
}

// Job Card Skeleton
export function JobCardSkeleton() {
  return (
    <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
      <CardContent className="p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-start gap-4 mb-4">
              <Skeleton className="w-12 h-12 rounded-lg" />
              <div className="flex-1 space-y-3">
                <Skeleton className="h-6 w-3/4" />
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Skeleton key={i} className="h-6 w-20 rounded-full" />
                  ))}
                </div>
                <div className="flex gap-4">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-32" />
                </div>
                <Skeleton className="h-4 w-full" />
                <div className="flex flex-wrap gap-2 mt-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-6 w-16 rounded" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:ml-6">
            <Skeleton className="h-12 w-full lg:w-32" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Contact Form Skeleton
export function ContactFormSkeleton() {
  return (
    <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
      <CardContent className="p-6">
        <div className="space-y-4">
          <Skeleton className="h-6 w-32" />
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-24 w-full" />
          </div>
          <Skeleton className="h-12 w-32" />
        </div>
      </CardContent>
    </Card>
  );
}

// Statistics Skeleton
export function StatsSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="text-center space-y-2">
          <Skeleton className="h-12 w-20 mx-auto" />
          <Skeleton className="h-4 w-24 mx-auto" />
        </div>
      ))}
    </div>
  );
}

// Technology Stack Skeleton
export function TechStackSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="text-center space-y-4">
          <Skeleton className="w-16 h-16 mx-auto rounded-lg" />
          <Skeleton className="h-4 w-16 mx-auto" />
        </div>
      ))}
    </div>
  );
}

// Page Skeleton - Combines multiple skeletons for full page loading
export function PageSkeleton({ type }) {
  const getSkeletonContent = () => {
    switch (type) {
      case 'home':
        return (
          <>
            <HeroSkeleton />
            <div className="py-20 bg-slate-800">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                  <Skeleton className="h-12 w-80 mx-auto" />
                  <Skeleton className="h-6 w-96 mx-auto" />
                </div>
                <StatsSkeleton />
              </div>
            </div>
          </>
        );
      case 'projects':
        return (
          <>
            <HeroSkeleton />
            <div className="py-20 bg-slate-800">
              <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <ProjectCardSkeleton key={i} />
                  ))}
                </div>
              </div>
            </div>
          </>
        );
      case 'pricing':
        return (
          <>
            <HeroSkeleton />
            <div className="py-20 bg-slate-800">
              <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <PricingCardSkeleton key={i} />
                  ))}
                </div>
              </div>
            </div>
          </>
        );
      case 'careers':
        return (
          <>
            <HeroSkeleton />
            <div className="py-20 bg-slate-800">
              <div className="container mx-auto px-6">
                <div className="space-y-8">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <JobCardSkeleton key={i} />
                  ))}
                </div>
              </div>
            </div>
          </>
        );
      case 'contact':
        return (
          <>
            <HeroSkeleton />
            <div className="py-20 bg-slate-800">
              <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12">
                  <ContactFormSkeleton />
                  <div className="space-y-6">
                    <GridSkeleton items={3} columns={1} />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 'about':
        return (
          <>
            <HeroSkeleton />
            <div className="py-20 bg-gray-50">
              <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                  <Skeleton className="w-full h-64 rounded-xl" />
                  <div className="space-y-6">
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                    <StatsSkeleton />
                  </div>
                </div>
                <div className="text-center mb-16 space-y-4">
                  <Skeleton className="h-8 w-64 mx-auto" />
                  <Skeleton className="h-6 w-96 mx-auto" />
                </div>
                <TechStackSkeleton />
              </div>
            </div>
          </>
        );
      default:
        return <HeroSkeleton />;
    }
  };

  return (
    <div className="pt-20">
      {getSkeletonContent()}
    </div>
  );
}