"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Incident } from "@/types/incident"
import { formatDate } from "@/lib/utils"

interface IncidentListProps {
  incidents: Incident[]
}

export function IncidentList({ incidents }: IncidentListProps) {
  const [expandedIds, setExpandedIds] = useState<number[]>([])

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "bg-gradient-to-r from-red-100 to-red-200 text-red-800 hover:from-red-200 hover:to-red-300 border-red-300"
      case "Medium":
        return "bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 hover:from-orange-200 hover:to-orange-300 border-orange-300"
      case "Low":
        return "bg-gradient-to-r from-green-100 to-green-200 text-green-800 hover:from-green-200 hover:to-green-300 border-green-300"
      default:
        return "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300 border-gray-300"
    }
  }

  return (
    <div className="rounded-lg border bg-card shadow-md">
      <div className="p-4">
        <h2 className="mb-4 text-xl font-semibold">Recent Incidents</h2>
        {incidents.length === 0 ? (
          <p className="py-8 text-center text-muted-foreground">No incidents found matching your criteria.</p>
        ) : (
          <ul className="space-y-3">
            {incidents.map((incident) => (
              <li
                key={incident.id}
                className="rounded-lg border bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div className="flex-1">
                    <h3 className="font-medium">{incident.title}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <Badge className={`border ${getSeverityColor(incident.severity)}`}>{incident.severity}</Badge>
                      <span className="text-sm text-muted-foreground">
                        Reported: {formatDate(incident.reported_at)}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleExpand(incident.id)}
                    className="mt-2 transition-all duration-200 hover:bg-muted sm:mt-0"
                  >
                    {expandedIds.includes(incident.id) ? (
                      <>
                        <ChevronUp className="mr-1 h-4 w-4" />
                        Hide Details
                      </>
                    ) : (
                      <>
                        <ChevronDown className="mr-1 h-4 w-4" />
                        View Details
                      </>
                    )}
                  </Button>
                </div>
                {expandedIds.includes(incident.id) && (
                  <div className="mt-3 animate-accordion-down border-t pt-3">
                    <p className="text-sm text-muted-foreground">{incident.description}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
