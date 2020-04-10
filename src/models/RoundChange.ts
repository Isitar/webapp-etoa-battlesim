import {Ship} from "@/models/Ship";
import {Defence} from "@/models/Defence";

export interface RoundChange {
    id: number,
    shipChanges: Ship[],
    defenceChanges: Defence[],
}