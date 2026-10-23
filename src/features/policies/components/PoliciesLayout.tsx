import { useEffect, useRef, type CSSProperties, type ReactNode } from "react"
import { ListIcon, ChevronDownIcon } from "lucide-react"
import { ShopHeader } from "@/components/shop-header"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import { policy_document } from "@/features/policies/policyContent"

export function PoliciesLayout({ sidebar, children, content_key }: { sidebar: ReactNode; children: ReactNode; content_key: string }) {
  const content_ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Cada política o subíndice comienza en su encabezado, incluso después de leer una sección larga.
    content_ref.current?.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [content_key])

  return (
    <div className="policy-view flex h-dvh flex-col bg-background">
      <ShopHeader />
      <main className="mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col overflow-y-auto px-4 py-8 lg:overflow-hidden lg:px-6">
        <div className="mb-6 flex shrink-0 flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold">{policy_document.title}</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Última actualización: <time dateTime={policy_document.updated_at}>{policy_document.updated_label}</time>
            </p>
          </div>
          <span className="rounded-full border border-input bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">Versión {policy_document.version}</span>
        </div>
        <TooltipProvider>
          <SidebarProvider className="min-h-0 flex-1 gap-6 overflow-hidden" style={{ "--sidebar-width": "280px" } as CSSProperties}>
            {sidebar}
            <div ref={content_ref} className="min-h-0 min-w-0 flex-1 overflow-y-auto [scrollbar-gutter:stable]">
              <div className="sticky top-0 z-10 bg-background pb-4 lg:hidden">
                <SidebarTrigger
                  variant="outline"
                  size="default"
                  className="h-11 w-full cursor-pointer justify-start gap-2 border-input px-3"
                  aria-controls="policy-index"
                >
                  <ListIcon aria-hidden="true" />
                  Índice
                  <ChevronDownIcon aria-hidden="true" className="ml-auto" />
                </SidebarTrigger>
              </div>
              {children}
            </div>
          </SidebarProvider>
        </TooltipProvider>
      </main>
    </div>
  )
}
