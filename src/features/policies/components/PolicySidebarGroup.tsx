import { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar"
import { cn } from "@/lib/shared/utils"
import type { PolicySection } from "@/features/policies/policies"
import { policy_presentation } from "@/features/policies/policyPresentation"

type PolicySidebarGroupProps = {
  section: PolicySection
  active: boolean
  active_item?: string
  onSelect: () => void
}

export function PolicySidebarGroup({ section, active, active_item, onSelect }: PolicySidebarGroupProps) {
  const [open, set_open] = useState(active)
  const Icon = policy_presentation[section.id].icon

  return (
    <SidebarMenuItem className="min-w-0">
      <Collapsible open={open} onOpenChange={set_open}>
        <div className="flex min-w-0 items-center gap-1">
          <SidebarMenuButton
            render={<Link to={section.path} />}
            isActive={active}
            onClick={onSelect}
            aria-current={active ? (active_item ? "location" : "page") : undefined}
            className={cn("policy-index-link h-auto min-h-11 min-w-0 flex-1 gap-2.5 rounded-lg border-l-2 border-transparent px-2.5 py-3 font-medium whitespace-normal break-words focus-visible:ring-inset [&>span:last-child]:whitespace-normal [&>span:last-child]:overflow-visible", active && "border-sidebar-primary")}
          >
            <Icon aria-hidden="true" className={cn("size-4 self-start mt-0.5 text-muted-foreground", active && "text-sidebar-primary")} />
            <span className="min-w-0 leading-5">{section.title}</span>
          </SidebarMenuButton>
          <CollapsibleTrigger
            render={<Button variant="ghost" className="size-11 cursor-pointer text-muted-foreground focus-visible:ring-inset" />}
            aria-label={`${open ? "Contraer" : "Expandir"} ${section.title}`}
            aria-expanded={open}
            aria-controls={`policy-${section.id}-items`}
          >
            <ChevronDownIcon aria-hidden="true" className={cn("size-4 transition-transform duration-200 motion-reduce:transition-none", open && "rotate-180")} />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent id={`policy-${section.id}-items`} className="policy-index-panel">
          <SidebarMenuSub className="mt-2 mr-0 mb-2 ml-5 gap-1 border-sidebar-border pl-3">
            {section.items.map((item) => {
              const selected = active && active_item === item.id
              return (
                <SidebarMenuSubItem key={item.id}>
                  <SidebarMenuSubButton
                    render={<Link to={`${section.path}?seccion=${item.id}`} />}
                    isActive={selected}
                    onClick={onSelect}
                    aria-current={selected ? "page" : undefined}
                    className="policy-index-link h-auto min-h-11 rounded-lg border-l-2 border-transparent px-3 py-2 text-[0.8125rem] leading-5 whitespace-normal break-words text-muted-foreground focus-visible:ring-inset data-active:border-sidebar-primary data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground"
                  >
                    {item.title}
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              )
            })}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  )
}
