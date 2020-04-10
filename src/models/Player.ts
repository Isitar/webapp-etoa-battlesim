import {Research} from "@/models/Research";
import {PlayerShip} from "@/models/PlayerShip";
import {PlayerDefence} from "@/models/PlayerDefence";
import {Mysticum} from "@/models/Mysticum";
import {Defence} from "@/models/Defence";
import {Ship} from "@/models/Ship";

export class Player {
    research: Research = {
        regenerationLevel: 0,
        shieldLevel: 0,
        structureLevel: 0,
        weaponLevel: 0
    };
    mysticum: Mysticum = {
        structurePercent: 0,
        shieldPercent: 0,
        weaponPercent: 0,
        regenerationPercent: 0
    };
    ships: PlayerShip[] = [];
    defences: PlayerDefence[] = [];
    ingi = false;


    //<editor-fold desc="Attack">
    getAttackWithoutResearch(shipConfigs: Ship[], defenceConfigs: Defence[]): number {
        return this.defences.reduce((carry, defence) => carry + (defenceConfigs.find(d => d.id === defence.id)?.weapon ?? 0) * defence.quantity, 0)
            + this.ships.reduce((carry, ship) => carry + (shipConfigs.find(s => s.id === ship.id)?.weapon ?? 0) * ship.quantity, 0);
    }

    getAttackResearchModificator(): number {
        return 1 + (this.research.weaponLevel / 10) + (this.mysticum.weaponPercent / 100);
    }

    getAttack(shipConfigs: Ship[], defenceConfigs: Defence[]): number {
        return Math.trunc(this.getAttackWithoutResearch(shipConfigs, defenceConfigs) * this.getAttackResearchModificator());
    }

    //</editor-fold>

    //<editor-fold desc="Shield">
    getShieldWithoutResearch(shipConfigs: Ship[], defenceConfigs: Defence[]): number {
        return this.defences.reduce((carry, defence) => carry + (defenceConfigs.find(d => d.id === defence.id)?.shield ?? 0) * defence.quantity, 0)
            + this.ships.reduce((carry, ship) => carry + (shipConfigs.find(s => s.id === ship.id)?.shield ?? 0) * ship.quantity, 0);
    }

    getShieldResearchModificator(): number {
        return 1 + (this.research.shieldLevel / 10) + (this.mysticum.shieldPercent / 100);
    }

    getShield(shipConfigs: Ship[], defenceConfigs: Defence[]): number {
        return Math.trunc(this.getShieldWithoutResearch(shipConfigs, defenceConfigs) * this.getShieldResearchModificator());
    }

    //</editor-fold>

    //<editor-fold desc="Structure">
    getStructureWithoutResearch(shipConfigs: Ship[], defenceConfigs: Defence[]): number {
        return this.defences.reduce((carry, defence) => carry + (defenceConfigs.find(d => d.id === defence.id)?.structure ?? 0) * defence.quantity, 0)
            + this.ships.reduce((carry, ship) => carry + (shipConfigs.find(s => s.id === ship.id)?.structure ?? 0) * ship.quantity, 0);
    }

    getStructureResearchModificator(): number {
        return 1 + (this.research.structureLevel / 10) + (this.mysticum.structurePercent / 100);
    }

    getStructure(shipConfigs: Ship[], defenceConfigs: Defence[]): number {
        return Math.trunc(this.getStructureWithoutResearch(shipConfigs, defenceConfigs) * this.getStructureResearchModificator());
    }

    //</editor-fold>

    //<editor-fold desc="Regeneration">
    getRegenerationWithoutResearch(shipConfigs: Ship[], defenceConfigs: Defence[]): number {
        return this.defences.reduce((carry, defence) => carry + (defenceConfigs.find(d => d.id === defence.id)?.regeneration ?? 0) * defence.quantity, 0)
            + this.ships.reduce((carry, ship) => carry + (shipConfigs.find(s => s.id === ship.id)?.regeneration ?? 0) * ship.quantity, 0);
    }

    getRegenerationResearchModificator(): number {
        return 1 + (this.research.regenerationLevel / 10) + (this.mysticum.regenerationPercent / 100);
    }

    getRegeneration(shipConfigs: Ship[], defenceConfigs: Defence[]): number {
        return Math.trunc(this.getRegenerationWithoutResearch(shipConfigs, defenceConfigs) * this.getRegenerationResearchModificator());
    }

    //</editor-fold>

}