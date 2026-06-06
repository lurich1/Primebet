export type Sport = {
  id: string;
  name: string;
  icon: string;
  count: number;
};

export type Market = {
  label: string; // e.g. "1", "X", "2"
  odds: number;
};

export type Match = {
  id: string;
  league: string;
  leagueFlag: string;
  country: string;
  sport: string;
  home: string;
  away: string;
  homeShort: string;
  awayShort: string;
  homeColor: string;
  awayColor: string;
  kickoff: string; // ISO-ish display string
  live: boolean;
  minute?: number;
  scoreHome?: number;
  scoreAway?: number;
  markets: Market[]; // 1 X 2
  marketCount: number;
  featured?: boolean;
};

export type Selection = {
  id: string; // matchId-market
  matchId: string;
  match: string; // "Arsenal vs Chelsea"
  market: string; // "Match Result"
  pick: string; // "Arsenal" / "Draw"
  odds: number;
};

export type Txn = {
  id: string;
  type: "deposit" | "withdrawal" | "winning" | "bet";
  method: string;
  amount: number;
  status: "completed" | "pending" | "failed";
  date: string;
};

export type Bet = {
  id: string;
  type: "single" | "multi";
  legs: { match: string; pick: string; odds: number; result: "won" | "lost" | "pending" }[];
  stake: number;
  totalOdds: number;
  potential: number;
  status: "won" | "lost" | "pending" | "cashout";
  date: string;
};
