import type { PolicyBlock } from "@/features/policies/policyContent"

function PolicyText({ text }: { text: string }) {
  // Solo énfasis y contactos del documento: React escapa el texto sin insertar HTML.
  return text.split(/(\*\*[^*]+\*\*|spaceshop@gmail\.com|\+506 8322-6524)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>
    }
    if (part === "spaceshop@gmail.com" || part === "+506 8322-6524") {
      return (
        <a
          key={index}
          href={part.includes("@") ? `mailto:${part}` : "tel:+50683226524"}
          className="rounded-sm text-primary underline underline-offset-4 hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {part}
        </a>
      )
    }
    return part
  })
}

export function PolicyContent({ blocks }: { blocks: PolicyBlock[] }) {
  return (
    <div className="space-y-5 text-sm leading-7 text-foreground/85 wrap-anywhere sm:text-[0.9375rem]">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return <p key={index}><PolicyText text={block.text} /></p>
          case "list":
          case "steps": {
            const List = block.type === "steps" ? "ol" : "ul"
            return (
              <List key={index} className={`space-y-3 pl-5 marker:font-medium marker:text-muted-foreground ${block.type === "steps" ? "list-decimal" : "list-disc"}`}>
                {block.items.map((item, item_index) => <li key={item_index}><PolicyText text={item} /></li>)}
              </List>
            )
          }
          case "table":
            return (
              <div key={index} className="overflow-hidden rounded-lg border border-input">
                <table className="w-full table-fixed text-left text-sm leading-6">
                  <caption className="sr-only">Costos de envío según el subtotal de la orden o retiro en tienda</caption>
                  <thead className="bg-muted text-foreground">
                    <tr>{block.headers.map((header) => <th key={header} scope="col" className="px-3 py-3 font-medium">{header}</th>)}</tr>
                  </thead>
                  <tbody className="divide-y divide-input">
                    {block.rows.map((row, row_index) => (
                      <tr key={row_index} className="even:bg-muted/30">
                        {row.map((cell, cell_index) => <td key={cell_index} className="px-3 py-3 align-top"><PolicyText text={cell} /></td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          case "faq":
            return (
              <dl key={index} className="space-y-2 rounded-lg border border-input bg-muted/20 p-4 sm:p-5">
                <dt className="font-semibold leading-6 text-foreground">{block.question}</dt>
                <dd><PolicyText text={block.answer} /></dd>
              </dl>
            )
        }
      })}
    </div>
  )
}
