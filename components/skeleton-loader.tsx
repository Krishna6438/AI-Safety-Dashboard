import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonLoader() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Stat Cards Skeleton */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center rounded-lg border bg-card p-4 shadow-md">
            <Skeleton className="mr-4 h-10 w-10 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-6 w-12" />
            </div>
          </div>
        ))}
      </div>

      {/* Filters Skeleton */}
      <div className="rounded-lg border bg-card p-4 shadow-md">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-9 w-20" />
            ))}
          </div>
          <Skeleton className="h-9 w-[180px]" />
        </div>
      </div>

      {/* Incidents List Skeleton */}
      <div className="rounded-lg border bg-card p-4 shadow-md">
        <Skeleton className="mb-4 h-7 w-40" />
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-lg border bg-card p-4 shadow-sm">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-5 w-3/4" />
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-5 w-16 rounded-full" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                </div>
                <Skeleton className="h-9 w-28" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form Skeleton */}
      <div className="rounded-lg border bg-card p-4 shadow-md">
        <Skeleton className="mb-4 h-7 w-48" />
        <div className="space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-24 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <div className="space-y-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4 rounded-full" />
                  <Skeleton className="h-4 w-16" />
                </div>
              ))}
            </div>
          </div>
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    </div>
  )
}
