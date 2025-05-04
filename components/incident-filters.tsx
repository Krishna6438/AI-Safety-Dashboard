"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

interface IncidentFiltersProps {
  severityFilter: string
  setSeverityFilter: (filter: string) => void
  sortOrder: "newest" | "oldest"
  setSortOrder: (order: "newest" | "oldest") => void
}

export function IncidentFilters({ severityFilter, setSeverityFilter, sortOrder, setSortOrder }: IncidentFiltersProps) {
  return (
    <div className="mb-4 flex flex-col gap-4 rounded-lg border bg-card p-4 shadow-md sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2">
        <Button
          variant={severityFilter === "All" ? "default" : "outline"}
          onClick={() => setSeverityFilter("All")}
          className="min-w-20 transition-all duration-200"
        >
          All
        </Button>
        <Button
          variant={severityFilter === "Low" ? "default" : "outline"}
          onClick={() => setSeverityFilter("Low")}
          className={`min-w-20 transition-all duration-200 ${
            severityFilter === "Low"
              ? "bg-green-600 text-white hover:bg-green-700"
              : "border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800"
          }`}
        >
          Low
        </Button>
        <Button
          variant={severityFilter === "Medium" ? "default" : "outline"}
          onClick={() => setSeverityFilter("Medium")}
          className={`min-w-20 transition-all duration-200 ${
            severityFilter === "Medium"
              ? "bg-orange-600 text-white hover:bg-orange-700"
              : "border-orange-200 text-orange-700 hover:bg-orange-50 hover:text-orange-800"
          }`}
        >
          Medium
        </Button>
        <Button
          variant={severityFilter === "High" ? "default" : "outline"}
          onClick={() => setSeverityFilter("High")}
          className={`min-w-20 transition-all duration-200 ${
            severityFilter === "High"
              ? "bg-red-600 text-white hover:bg-red-700"
              : "border-red-200 text-red-700 hover:bg-red-50 hover:text-red-800"
          }`}
        >
          High
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Sort by:</span>
        <Select value={sortOrder} onValueChange={(value) => setSortOrder(value as "newest" | "oldest")}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
