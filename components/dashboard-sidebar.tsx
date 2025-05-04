"use client"

import { LayoutDashboard, AlertTriangle, FileText, Settings, PlusCircle } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"

export function DashboardSidebar() {
  const { isMobile, toggleSidebar } = useSidebar()

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-center p-4">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          AI Safety
        </h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton isActive tooltip="Dashboard">
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Incidents">
              <AlertTriangle className="h-5 w-5" />
              <span>Incidents</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Report Incident">
              <PlusCircle className="h-5 w-5" />
              <span>Report Incident</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Reports">
              <FileText className="h-5 w-5" />
              <span>Reports</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Settings">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4">
        {isMobile && (
          <Button variant="outline" className="w-full" onClick={toggleSidebar}>
            Close Menu
          </Button>
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
