export interface Data {
    status: boolean,
    data: ApiData
}
export interface ApiData {
    abbreviation: string,
    name: string,
    season: string,
    seasonDisplay: string,
    standings: StandingsData[]
}

export interface StandingsData {
    abbreviation: string,
    displayName: string,
    id: string,
    isActive: boolean,
    isNational: boolean,
    logos: [],
    name: string,
    shortDisplayName: string,
    uid: string
};

export interface Standing {
    team: object,
    note?: object | null,
    stats: any[],
};