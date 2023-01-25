export interface Data {
    status: boolean,
    data: any
}
export interface ApiData {
    abbreviation: string,
    name: string,
    season: string,
    seasonDisplay: string,
    standings: []
}

export interface TeamData {
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