"use client"

import { IncidentList } from "@/components/incident-list"
import { IncidentForm } from "@/components/incident-form"
import { StatCards } from "@/components/stat-cards"
import { IncidentFilters } from "@/components/incident-filters"
import { SkeletonLoader } from "@/components/skeleton-loader"
import type { Incident } from "@/types/incident"

interface DashboardContentProps {
  incidents: Incident[]
  addIncident: (incident: Omit<Incident, "id" | "reported_at">) => void
  severityFilter: string
  setSeverityFilter: (filter: string) => void
  sortOrder: "newest" | "oldest"
  setSortOrder: (order: "newest" | "oldest") => void
  incidentCounts: {
    total: number
    high: number
    medium: number
    low: number
  }
  isLoading: boolean
}

export function DashboardContent({
  incidents,
  addIncident,
  severityFilter,
  setSeverityFilter,
  sortOrder,
  setSortOrder,
  incidentCounts,
  isLoading,
}: DashboardContentProps) {
  return (
    <main className="flex flex-1 flex-col gap-6 overflow-auto p-6">
      <h1 className="text-2xl font-bold">AI Safety Incident Dashboard</h1>

      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <>
          <StatCards counts={incidentCounts} />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <IncidentFilters
                severityFilter={severityFilter}
                setSeverityFilter={setSeverityFilter}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
              />
              <IncidentList incidents={incidents} />
            </div>

            <div className="rounded-lg border bg-card p-4 shadow-md transition-shadow hover:shadow-lg">
              <h2 className="mb-4 text-xl font-semibold">Report New Incident</h2>
              <IncidentForm onSubmit={addIncident} />
            </div>
          </div>
        </>
      )}
    </main>
  )
}
