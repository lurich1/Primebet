'use client'

import Link from 'next/link'
import { sports, countries } from '@/lib/mock-data'

interface SportsSidebarProps {
  activeSport: string
  onSportChange: (sport: string) => void
}

export function SportsSidebar({ activeSport, onSportChange }: SportsSidebarProps) {
  return (
    <aside className="w-64 bg-card border-r border-border h-[calc(100vh-64px)] overflow-y-auto custom-scrollbar hidden lg:block">
      <div className="p-4">
        {/* Sports */}
        <div className="space-y-1">
          {sports.map((sport) => (
            <button
              key={sport.id}
              onClick={() => onSportChange(sport.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                activeSport === sport.id
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-secondary'
              }`}
            >
              <span className="text-lg">{sport.icon}</span>
              <span className="font-medium">{sport.name}</span>
            </button>
          ))}
        </div>

        {/* Countries A-Z */}
        <div className="mt-6">
          <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mb-3">
            Countries
          </p>
          <div className="space-y-0.5">
            {countries.map((country) => (
              <Link
                key={country.code}
                href={`/football/${country.code.toLowerCase()}`}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <span className="shrink-0">{country.flag}</span>
                <span className="text-sm truncate">{country.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
