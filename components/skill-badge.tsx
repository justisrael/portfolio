import type { ReactNode } from "react"

interface SkillBadgeProps {
  children: ReactNode
}

export default function SkillBadge({ children }: SkillBadgeProps) {
  return <div className="px-3 py-1 bg-neutral-100 text-neutral-800 rounded-full text-sm">{children}</div>
}
