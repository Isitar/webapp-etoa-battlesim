import {Research} from "@/models/Research";
import {Ship} from "@/models/Ship";
import {PlayerShip} from "@/models/PlayerShip";
import {PlayerDefence} from "@/models/PlayerDefence";
import {Mysticum} from "@/models/Mysticum";

export interface Player {
    research: Research,
    mysticum: Mysticum,
    ships: PlayerShip[],
    defences: PlayerDefence[],
}