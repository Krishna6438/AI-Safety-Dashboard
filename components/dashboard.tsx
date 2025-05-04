"use client"

import { useState, useEffect } from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardContent } from "@/components/dashboard-content"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"
import type { Incident } from "@/types/incident"
import { mockIncidents } from "@/data/mock-incidents"

export function Dashboard() {
  const [incidents, setIncidents] = useState<Incident[]>([])
  const [filteredIncidents, setFilteredIncidents] = useState<Incident[]>([])
  const [severityFilter, setSeverityFilter] = useState<string>("All")
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    // Simulate loading data from an API
    const timer = setTimeout(() => {
      setIncidents(mockIncidents)
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let filtered = [...incidents]

    // Apply severity filter
    if (severityFilter !== "All") {
      filtered = filtered.filter((incident) => incident.severity === severityFilter)
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (incident) =>
          incident.title.toLowerCase().includes(query) || incident.description.toLowerCase().includes(query),
      )
    }

    // Apply sorting
    filtered.sort((a, b) => {
      const dateA = new Date(a.reported_at).getTime()
      const dateB = new Date(b.reported_at).getTime()
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB
    })

    setFilteredIncidents(filtered)
  }, [incidents, severityFilter, sortOrder, searchQuery])

  const addIncident = (incident: Omit<Incident, "id" | "reported_at">) => {
    const newIncident: Incident = {
      id: incidents.length + 1,
      ...incident,
      reported_at: new Date().toISOString(),
    }

    setIncidents((prev) => [newIncident, ...prev])

    toast({
      title: "Incident Reported",
      description: "Your incident has been successfully reported.",
      variant: "success",
    })
  }

  const getIncidentCounts = () => {
    const total = incidents.length
    const high = incidents.filter((i) => i.severity === "High").length
    const medium = incidents.filter((i) => i.severity === "Medium").length
    const low = incidents.filter((i) => i.severity === "Low").length

    return { total, high, medium, low }
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-background">
        <DashboardSidebar />
        <div className="flex flex-1 flex-col overflow-hidden">
          <DashboardHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <DashboardContent
            incidents={filteredIncidents}
            addIncident={addIncident}
            severityFilter={severityFilter}
            setSeverityFilter={setSeverityFilter}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            incidentCounts={getIncidentCounts()}
            isLoading={isLoading}
          />
        </div>
      </div>
      <Toaster />
    </SidebarProvider>
  )
}
