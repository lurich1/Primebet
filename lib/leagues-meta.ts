export interface LeagueMeta {
  slug: string
  name: string
  country: string
  flag: string
  sport: 'football' | 'basketball' | 'tennis' | 'baseball' | 'hockey'
  matchFilters: string[]
}

export const leagueMeta: LeagueMeta[] = [
  {
    slug: 'champions-league',
    name: 'UEFA Champions League',
    country: 'Europe',
    flag: '🏆',
    sport: 'football',
    matchFilters: ['UEFA Champions League', 'Champions League'],
  },
  {
    slug: 'europa-league',
    name: 'UEFA Europa League',
    country: 'Europe',
    flag: '🏆',
    sport: 'football',
    matchFilters: ['UEFA Europa League', 'Europa League'],
  },
  {
    slug: 'premier-league',
    name: 'Premier League',
    country: 'England',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    sport: 'football',
    matchFilters: ['EPL', 'Premier League'],
  },
  {
    slug: 'la-liga',
    name: 'La Liga',
    country: 'Spain',
    flag: '🇪🇸',
    sport: 'football',
    matchFilters: ['La Liga - Spain', 'La Liga'],
  },
  {
    slug: 'serie-a',
    name: 'Serie A',
    country: 'Italy',
    flag: '🇮🇹',
    sport: 'football',
    matchFilters: ['Serie A - Italy', 'Serie A'],
  },
  {
    slug: 'bundesliga',
    name: 'Bundesliga',
    country: 'Germany',
    flag: '🇩🇪',
    sport: 'football',
    matchFilters: ['Bundesliga - Germany', 'Bundesliga'],
  },
  {
    slug: 'ligue-1',
    name: 'Ligue 1',
    country: 'France',
    flag: '🇫🇷',
    sport: 'football',
    matchFilters: ['Ligue 1 - France', 'Ligue 1'],
  },
  {
    slug: 'mls',
    name: 'MLS',
    country: 'USA',
    flag: '🇺🇸',
    sport: 'football',
    matchFilters: ['MLS', 'Major League Soccer'],
  },
  {
    slug: 'nba',
    name: 'NBA',
    country: 'USA',
    flag: '🇺🇸',
    sport: 'basketball',
    matchFilters: ['NBA'],
  },
  {
    slug: 'euroleague',
    name: 'EuroLeague',
    country: 'Europe',
    flag: '🏀',
    sport: 'basketball',
    matchFilters: ['EuroLeague'],
  },
  {
    slug: 'nhl',
    name: 'NHL',
    country: 'USA',
    flag: '🏒',
    sport: 'hockey',
    matchFilters: ['NHL'],
  },
  {
    slug: 'mlb',
    name: 'MLB',
    country: 'USA',
    flag: '⚾',
    sport: 'baseball',
    matchFilters: ['MLB'],
  },
]

export function getLeagueMeta(slug: string): LeagueMeta | undefined {
  return leagueMeta.find((l) => l.slug === slug)
}
