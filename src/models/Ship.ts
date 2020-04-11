export interface Ship {
    id: number,
    name?: string,
    costTitan?: number,
    costSilicon?: number,
    costPVC?: number,
    costTricium?: number,
    structure?: number,
    shield?: number,
    weapon?: number,
    regeneration?: number,
    capacity?: number,
    experience?: boolean
    wfFactor?: number,
    repairFactor?: number,
}