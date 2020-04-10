import {PlayerShip} from "@/models/PlayerShip";
import {Player} from "@/models/Player";

export interface BattleReport {
    battleText: string;
    attacker: Player;
    defender: Player;

    expAttacker: number,
    expDefender: number,

    wfTitan: number,
    wfSilicon: number,
    wfPVC: number,
}