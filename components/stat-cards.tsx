import type React from "react"
import { AlertTriangle, AlertCircle, AlertOctagon, BarChart2 } from "lucide-react"

interface StatCardsProps {
  counts: {
    total: number
    high: number
    medium: number
    low: number
  }
}

export function StatCards({ counts }: StatCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Incidents"
        value={counts.total}
        icon={<BarChart2 className="h-5 w-5" />}
        color="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700"
        borderColor="border-blue-200"
      />
      <StatCard
        title="High Severity"
        value={counts.high}
        icon={<AlertOctagon className="h-5 w-5" />}
        color="bg-gradient-to-r from-red-50 to-red-100 text-red-700"
        borderColor="border-red-200"
      />
      <StatCard
        title="Medium Severity"
        value={counts.medium}
        icon={<AlertTriangle className="h-5 w-5" />}
        color="bg-gradient-to-r from-orange-50 to-orange-100 text-orange-700"
        borderColor="border-orange-200"
      />
      <StatCard
        title="Low Severity"
        value={counts.low}
        icon={<AlertCircle className="h-5 w-5" />}
        color="bg-gradient-to-r from-green-50 to-green-100 text-green-700"
        borderColor="border-green-200"
      />
    </div>
  )
}

interface StatCardProps {
  title: string
  value: number
  icon: React.ReactNode
  color: string
  borderColor: string
}

function StatCard({ title, value, icon, color, borderColor }: StatCardProps) {
  return (
    <div
      className={`flex items-center rounded-lg border ${borderColor} bg-card p-4 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
    >
      <div className={`mr-4 rounded-full p-2 ${color}`}>{icon}</div>
      <div>
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  )
}
