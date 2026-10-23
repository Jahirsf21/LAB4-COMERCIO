import { useEffect } from "react"
import { Navigate, useLocation, useSearchParams } from "react-router-dom"
import { policy_sections } from "@/features/policies/policies"
import { policy_content } from "@/features/policies/policyContent"
import { PolicyContent } from "@/features/policies/components/PolicyContent"
import { PoliciesLayout } from "@/features/policies/components/PoliciesLayout"
import { PolicySidebar } from "@/features/policies/components/PolicySidebar"
import { PolicySectionHeader } from "@/features/policies/components/PolicySectionHeader"
import "@/features/policies/policies.css"

export default function PoliciesPage() {
  const { pathname, key } = useLocation()
  const [search_params] = useSearchParams()
  const section = policy_sections.find((entry) => entry.path === pathname)
  const requested_item = search_params.get("seccion")
  const item = section?.items.find((entry) => entry.id === requested_item)

  useEffect(() => {
    // Al entrar desde el footer, mostrar la vista en lugar de conservar el scroll inferior.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [key, pathname, requested_item])

  if (!section) return <Navigate to="/politicas-privacidad" replace />
  // Una subsección desconocida vuelve a la portada de su política.
  if (requested_item !== null && !item) return <Navigate to={section.path} replace />

  return (
    <PoliciesLayout content_key={`${pathname}:${requested_item ?? ""}:${key}`} sidebar={<PolicySidebar active_section={section.id} active_item={item?.id} />}>
      <article aria-labelledby="policy-title" className="mx-auto min-h-80 w-full max-w-3xl rounded-xl border border-input bg-card p-5 sm:p-6 lg:p-8">
        <PolicySectionHeader section={section} item={item} />
        {item ? (
          <PolicyContent blocks={policy_content[section.id][item.id]} />
        ) : (
          <div className="divide-y divide-input">
            {section.items.map((subsection) => (
              <section key={subsection.id} aria-labelledby={`policy-heading-${subsection.id}`} className="py-7 first:pt-0 last:pb-0">
                <h3 id={`policy-heading-${subsection.id}`} className="mb-4 text-base leading-7 font-semibold">{subsection.title}</h3>
                <PolicyContent blocks={policy_content[section.id][subsection.id]} />
              </section>
            ))}
          </div>
        )}
      </article>
    </PoliciesLayout>
  )
}
