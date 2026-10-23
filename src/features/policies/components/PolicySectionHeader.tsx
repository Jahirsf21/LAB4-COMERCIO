import { Link } from "react-router-dom"
import { ChevronRightIcon } from "lucide-react"
import type { PolicySection } from "@/features/policies/policies"
import { policy_presentation } from "@/features/policies/policyPresentation"

export function PolicySectionHeader({ section, item }: { section: PolicySection; item?: PolicySection["items"][number] }) {
  const { icon: Icon } = policy_presentation[section.id]

  return (
    <header className="mb-6 border-b border-input pb-6 sm:mb-8">
      <nav aria-label="Ruta de la política" className="mb-4 text-xs leading-5 text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <li>Políticas</li>
          <li aria-hidden="true"><ChevronRightIcon className="size-3" /></li>
          <li className="min-w-0 break-words">
            {item ? (
              <Link to={section.path} className="inline-flex min-h-11 items-center rounded-md py-2 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{section.title}</Link>
            ) : <span aria-current="page">{section.title}</span>}
          </li>
          {item && (
            <>
              <li aria-hidden="true"><ChevronRightIcon className="size-3" /></li>
              <li aria-current="page" className="min-w-0 break-words">{item.title}</li>
            </>
          )}
        </ol>
      </nav>
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
          <Icon aria-hidden="true" className="size-5" />
        </div>
        <div className="min-w-0">
          <div aria-live="polite" aria-atomic="true">
            <h2 id="policy-title" className="break-words text-xl leading-snug font-semibold tracking-tight sm:text-2xl">{item?.title ?? section.title}</h2>
          </div>
        </div>
      </div>
    </header>
  )
}
