import { FileTextIcon, RotateCcwIcon, TruckIcon, ShieldCheckIcon, CircleHelpIcon, type LucideIcon } from "lucide-react"

export const policy_presentation: Record<string, { icon: LucideIcon }> = {
  terms: {
    icon: FileTextIcon,
  },
  returns: {
    icon: RotateCcwIcon,
  },
  shipping: {
    icon: TruckIcon,
  },
  privacy: {
    icon: ShieldCheckIcon,
  },
  faq: {
    icon: CircleHelpIcon,
  },
}
