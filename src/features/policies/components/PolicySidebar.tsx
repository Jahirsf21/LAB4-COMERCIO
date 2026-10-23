import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarMenu } from "@/components/ui/sidebar"
import { useSidebar } from "@/hooks/use-sidebar"
import { policy_sections } from "@/features/policies/policies"
import { PolicySidebarGroup } from "@/features/policies/components/PolicySidebarGroup"

type PolicySidebarProps = {
  active_section: string
  active_item?: string
}

export function PolicySidebar({ active_section, active_item }: PolicySidebarProps) {
  const { isMobile, setOpenMobile } = useSidebar()

  return (
    <Sidebar
      // En escritorio permanece en el layout; en móvil usa el drawer de shadcn.
      collapsible={isMobile ? "offcanvas" : "none"}
      className="min-h-0 shrink-0 overflow-hidden rounded-xl border border-sidebar-border"
    >
      <SidebarHeader className="hidden gap-1 border-b border-sidebar-border bg-sidebar-accent/40 px-4 py-5 lg:flex">
        <h2 className="text-sm font-semibold">Información y políticas</h2>
        <p className="text-xs leading-5 text-muted-foreground">Todo lo que necesitas para tu compra.</p>
      </SidebarHeader>
      <SidebarContent className="p-3 [scrollbar-gutter:stable]">
        <nav id="policy-index" aria-label="Información comercial y políticas">
          <SidebarGroup className="p-0">
            <SidebarMenu className="gap-2">
              {policy_sections.map((section) => (
                <PolicySidebarGroup
                  key={`${section.id}-${section.id === active_section}-${active_item ?? ""}`}
                  section={section}
                  active={section.id === active_section}
                  active_item={active_item}
                  onSelect={() => setOpenMobile(false)}
                />
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </nav>
      </SidebarContent>
    </Sidebar>
  )
}
