import Vue from 'vue'
import Vuex from 'vuex'
import {RoundChange} from "@/models/RoundChange";
import {Round20Changes} from "@/data/Round20Changes";
import {Round19Changes} from "@/data/Round19Changes";
import {Ship} from "@/models/Ship";
import {Defence} from "@/models/Defence";
import {defences, ships} from "@/data/BaseData";
import {Player} from "@/models/Player";
import {BattleReport} from "@/models/BattleReport";
import {PlayerShip} from "@/models/PlayerShip";
import {PlayerDefence} from "@/models/PlayerDefence";

Vue.use(Vuex);

interface State {
    rounds: RoundChange[];
    ships: Ship[];
    defences: Defence[];
    maxHeal: number;

    attacker: Player;
    defender: Player;
    currentRoundId: number;

    battleReport: BattleReport | null;
}

export default new Vuex.Store<State>({
    state: {
        rounds: [
            Round19Changes,
            Round20Changes,
        ],
        ships: [],
        defences: [],
        maxHeal: 0.9,
        currentRoundId: 19,
        attacker: new Player(),
        defender: new Player(),
        battleReport: null,

    } as State,
    getters: {
        shipById: state => (id: number) => {
            return state.ships.find(s => id === s.id);
        },
        defenceById: state => (id: number) => {
            return state.defences.find(s => id === s.id);
        },

    },
    mutations: {
        loadRound(state, payload: number) {
            const rounds = state.rounds.filter(r => r.id <= payload).sort((r1, r2) => r1.id - r2.id);
            const shipData = ships.concat();
            const defenceData = defences.concat();
            let maxHeal = 0;
            for (let i = 0; i < rounds.length; i++) {
                const round = rounds[i];
                for (let j = 0; j < round.shipChanges.length; j++) {
                    const shipChange = round.shipChanges[j];
                    const index = shipData.findIndex(s => s.id === shipChange.id);
                    if (index >= 0) {
                        shipData[index] = Object.assign({}, shipData[index], shipChange);
                    } else {
                        shipData.push(shipChange);
                    }
                }

                for (let j = 0; j < round.defenceChanges.length; j++) {
                    const defenceChange = round.defenceChanges[j];
                    const index = defenceData.findIndex(s => s.id === defenceChange.id);
                    if (index >= 0) {
                        defenceData[index] = Object.assign({}, defenceData[index], defenceChange);
                    } else {
                        defenceData.push(defenceChange);
                    }
                }
                maxHeal = round.maxHeal;
            }
            state.ships = shipData;
            state.defences = defenceData;
            state.maxHeal = maxHeal;
            state.currentRoundId = payload;
        },
        setAttackerResearchFields(state, payload: object) {
            state.attacker.research = Object.assign({}, state.attacker.research, payload);
        },
        setAttackerMysticumFields(state, payload: object) {
            state.attacker.mysticum = Object.assign({}, state.attacker.mysticum, payload);
        },
        addAttackerShip(state, payload: number) {
            state.attacker.ships.push({id: payload, quantity: 0});
        },
        removeAttackerShip(state, payload: number) {
            state.attacker.ships = state.attacker.ships.filter(s => payload !== s.id);
        },
        setAttackerShipQuantity(state, payload: { id: number; quantity: number }) {
            const ship = state.attacker.ships.find(s => payload.id === s.id) ?? null;
            if (null === ship) {
                return;
            }
            ship.quantity = payload.quantity;
        },

        setDefenderFields(state, payload: object) {
            state.defender = Object.assign({}, state.defender, payload);
        },
        setDefenderResearchFields(state, payload: object) {
            state.defender.research = Object.assign({}, state.defender.research, payload);
        },
        setDefenderMysticumFields(state, payload: object) {
            state.defender.mysticum = Object.assign({}, state.defender.mysticum, payload);
        },
        addDefenderShip(state, payload: number) {
            state.defender.ships.push({id: payload, quantity: 0});
        },
        removeDefenderShip(state, payload: number) {
            state.defender.ships = state.defender.ships.filter(s => payload !== s.id);
        },
        setDefenderShipQuantity(state, payload: { id: number; quantity: number }) {
            const ship = state.defender.ships.find(s => payload.id === s.id) ?? null;
            if (null === ship) {
                return;
            }
            ship.quantity = payload.quantity;
        },
        addDefenderDefence(state, payload: number) {
            state.defender.defences.push({id: payload, quantity: 0});
        },
        removeDefenderDefence(state, payload: number) {
            state.defender.defences = state.defender.defences.filter(s => payload !== s.id);
        },
        setDefenderDefenceQuantity(state, payload: { id: number; quantity: number }) {
            const defence = state.defender.defences.find(s => payload.id === s.id) ?? null;
            if (null === defence) {
                return;
            }
            defence.quantity = payload.quantity;
        },

        setBattleReport(state, payload: BattleReport | null) {
            state.battleReport = payload;
        }
    },
    actions: {
        async recalculateBattleReport(context) {

            const battleReport: BattleReport = {
                attacker: new Player(),
                defender: new Player(),
                battleText: '',
                expAttacker: 0,
                expDefender: 0,
                wfTitan: 0,
                wfSilicon: 0,
                wfPVC: 0,
            };

            // deep clone attacker
            const contextAttacker = context.state.attacker;
            console.log(contextAttacker.ships);
            for (let i = 0; i < contextAttacker.ships.length; i++) {
                const ship = contextAttacker.ships[i];
                battleReport.attacker.ships.push({id: ship.id, quantity: ship.quantity});
            }
            battleReport.attacker.research = Object.assign({}, contextAttacker.research);
            battleReport.attacker.mysticum = Object.assign({}, contextAttacker.mysticum);

            const contextDefender = context.state.defender;
            for (let i = 0; i < contextDefender.ships.length; i++) {
                const ship = contextDefender.ships[i];
                battleReport.defender.ships.push({id: ship.id, quantity: ship.quantity});
            }
            for (let i = 0; i < contextDefender.defences.length; i++) {
                const defence = contextDefender.defences[i];
                battleReport.defender.defences.push({id: defence.id, quantity: defence.quantity});
            }
            battleReport.defender.research = Object.assign({}, contextDefender.research);
            battleReport.defender.mysticum = Object.assign({}, contextDefender.mysticum);


            const shipList = context.state.ships;
            const defenceList = context.state.defences;
            let roundIndex = 1;
            let winnerDeclared = false;
            while (roundIndex <= 5 && !winnerDeclared) {
                battleReport.battleText += `Runde ${roundIndex}\n`;

                // fight per round
                const initialAttackerStructure = battleReport.attacker.getStructure(shipList, defenceList);
                const initialAttackerShield = battleReport.attacker.getShield(shipList, defenceList);
                const attackerWeapon = battleReport.attacker.getAttack(shipList, defenceList);

                const initialDefenderStructure = battleReport.defender.getStructure(shipList, defenceList);
                const initialDefenderShield = battleReport.defender.getShield(shipList, defenceList);
                const defenderWeapon = battleReport.defender.getAttack(shipList, defenceList);


                const attackerRemainingStructureShield = Math.max(0, initialAttackerShield + initialAttackerStructure - defenderWeapon);
                const defenderRemainingStructureShield = Math.max(0, initialDefenderShield + initialDefenderStructure - attackerWeapon);

                const remainingAttackerPercentAfterAttack = attackerRemainingStructureShield / (initialAttackerShield + initialAttackerStructure);
                const remainingDefenderPercentAfterAttack = defenderRemainingStructureShield / (initialDefenderShield + initialDefenderStructure);


                battleReport.battleText += `Der Angreiffer schiesst mit ${attackerWeapon} gegen den Verteidiger. Der Verteidiger hat danach noch ${defenderRemainingStructureShield} Struktur & Schildpunkte\n`;
                battleReport.battleText += `Der Verteidiger schiesst mit ${defenderWeapon} gegen den Verteidiger. Der Verteidiger hat danach noch ${attackerRemainingStructureShield} Struktur & Schildpunkte\n`;

                // destory ships
                for (let i = 0; i < battleReport.attacker.ships.length; i++) {
                    const ship = battleReport.attacker.ships[i];
                    ship.quantity = Math.ceil(remainingAttackerPercentAfterAttack * ship.quantity);
                }

                for (let i = 0; i < battleReport.defender.ships.length; i++) {
                    const ship = battleReport.defender.ships[i];
                    ship.quantity = Math.ceil(remainingDefenderPercentAfterAttack * ship.quantity);
                }

                for (let i = 0; i < battleReport.defender.defences.length; i++) {
                    const defence = battleReport.defender.defences[i];
                    defence.quantity = Math.ceil(remainingDefenderPercentAfterAttack * defence.quantity);
                }

                // heal ships
                const attackerRegeneration = Math.min(battleReport.attacker.getRegeneration(shipList, defenceList), context.state.maxHeal * defenderWeapon);
                const defenderRegeneration = Math.min(battleReport.attacker.getRegeneration(shipList, defenceList), context.state.maxHeal * attackerWeapon);

                if (attackerRegeneration > 0 && remainingAttackerPercentAfterAttack > 0) {
                    // revert damage by dividing / remainingAttackerPercentAfterAttack and then calculate the "new" damage by multiplying (regen + after dmg)/initial
                    const regenerationPercentage = ((attackerRemainingStructureShield + attackerRegeneration) / (initialAttackerShield + initialAttackerStructure)) / remainingAttackerPercentAfterAttack;
                    // destory ships
                    for (let i = 0; i < battleReport.attacker.ships.length; i++) {
                        const ship = battleReport.attacker.ships[i];
                        ship.quantity = Math.ceil(regenerationPercentage * ship.quantity);
                    }
                    battleReport.battleText += `Der Angreiffer stellt ${attackerRegeneration} Punkte wiederher.\n`;
                }
                if (defenderRegeneration > 0 && remainingDefenderPercentAfterAttack > 0) {
                    const regenerationPercentage = ((defenderRemainingStructureShield + defenderRegeneration) / (initialDefenderShield + initialDefenderStructure)) / remainingDefenderPercentAfterAttack;
                    // destory ships
                    for (let i = 0; i < battleReport.defender.ships.length; i++) {
                        const ship = battleReport.defender.ships[i];
                        ship.quantity = Math.ceil(regenerationPercentage * ship.quantity);
                    }

                    for (let i = 0; i < battleReport.defender.defences.length; i++) {
                        const defence = battleReport.defender.defences[i];
                        defence.quantity = Math.ceil(defenderRegeneration * defence.quantity);
                    }
                    battleReport.battleText += `Der Verteidiger stellt ${defenderRegeneration} Punkte wiederher.\n`;
                }

                // cleanup
                battleReport.attacker.ships = battleReport.attacker.ships.filter(s => s.quantity > 0);
                battleReport.defender.ships = battleReport.defender.ships.filter(s => s.quantity > 0 || (context.getters.shipById(s.id)?.repairFactor ?? 0) > 0);
                battleReport.defender.defences = battleReport.defender.defences.filter(d => d.quantity > 0 || (defenceList.find(defence => d.id === defence.id)?.repairFactor ?? 0) > 0);
                winnerDeclared = battleReport.attacker.ships.filter(s => s.quantity > 0).length === 0 || (battleReport.defender.ships.filter(s => s.quantity > 0).length + battleReport.defender.defences.filter(d => d.quantity > 0).length) === 0;
                roundIndex++;
            }

            //restore ships
            for (let i = 0; i < contextDefender.ships.length; i++) {
                const defenderShip = contextDefender.ships[i];
                const ship = context.getters.shipById(defenderShip.id);
                if (undefined === ship?.repairFactor || ship.repairFactor <= 0) {
                    continue;
                }

                let battleReportDefenderShip = battleReport.defender.ships.find(s => s.id === defenderShip.id);
                if (undefined === battleReportDefenderShip) {
                    battleReportDefenderShip = {id: defenderShip.id, quantity: 0};
                    battleReport.defender.ships.push(battleReportDefenderShip);

                }
                const remaining = battleReportDefenderShip.quantity ?? 0;
                const restore = (defenderShip.quantity - remaining) * ship.repairFactor;

                battleReportDefenderShip.quantity += restore;
            }

            // restore deff
            for (let i = 0; i < contextDefender.defences.length; i++) {
                const defenderDefence = contextDefender.defences[i];
                const defence = defenceList.find(d => d.id === defenderDefence.id);

                const repairFactor = (defence?.repairFactor ?? 0) + (context.state.defender.ingi ? 1 : 0) * 0.4;

                if (repairFactor <= 0) {
                    continue;
                }

                let battleReportDefenderDefence = battleReport.defender.defences.find(d => d.id === defenderDefence.id);
                if (undefined === battleReportDefenderDefence) {
                    battleReportDefenderDefence = {id: defenderDefence.id, quantity: 0};
                    battleReport.defender.defences.push(battleReportDefenderDefence);

                }
                const remaining = battleReportDefenderDefence.quantity ?? 0;
                const restore = (defenderDefence.quantity - remaining) * repairFactor;

                battleReportDefenderDefence.quantity += restore;

                console.log('repaired ', restore, ' of ', defence?.name, ' since only ', remaining, 'remained (factor:', repairFactor, ')');
            }

            //calc wf
            const destroyedShips: ({ id: number; quantity: number; costTitan: number; costSilicon: number; costPVC: number; costTricium: number; wfFactor: number; experience: boolean } | undefined)[] =
                contextAttacker.ships.map(s => ({id: s.id, quantity: s.quantity - (battleReport.attacker.ships.find(remainingShip => remainingShip.id === s.id)?.quantity ?? 0)}))
                    .concat(contextDefender.ships.map(s => ({id: s.id, quantity: s.quantity - (battleReport.defender.ships.find(remainingShip => remainingShip.id === s.id)?.quantity ?? 0)})))
                    .map(s => {
                        const ship = shipList.find(ship => s.id === ship.id);
                        if (undefined === ship) {
                            return undefined;
                        }
                        return {
                            id: s.id,
                            quantity: s.quantity,
                            costTitan: ship.costTitan ?? 0,
                            costSilicon: ship.costSilicon ?? 0,
                            costPVC: ship.costPVC ?? 0,
                            costTricium: ship.costTricium ?? 0,
                            wfFactor: ship.wfFactor ?? 0,
                            experience: ship.experience ?? false,
                        };
                    })
                    .filter(s => undefined !== s);

            const destroyedDefences: ({ id: number; quantity: number; costTitan: number; costSilicon: number; costPVC: number; costTricium: number; wfFactor: number; experience: boolean } | undefined)[] =
                contextDefender.defences.map(s => ({id: s.id, quantity: s.quantity - (battleReport.defender.defences.find(remainingDefence => remainingDefence.id === s.id)?.quantity ?? 0)}))
                    .map(d => {
                        const defence = defenceList.find(defence => d.id === defence.id);
                        if (undefined === defence) {
                            return undefined;
                        }
                        console.log('defence', d);
                        console.log('defence', defence);
                        return {
                            id: d.id,
                            quantity: d.quantity,
                            costTitan: defence.costTitan ?? 0,
                            costSilicon: defence.costSilicon ?? 0,
                            costPVC: defence.costPVC ?? 0,
                            costTricium: defence.costTricium ?? 0,
                            wfFactor: defence.wfFactor ?? 0,
                            experience: defence.experience ?? false,
                        };
                    })
                    .filter(s => undefined !== s);


            battleReport.wfTitan = destroyedShips.reduce((carry, s) => carry + (s?.quantity ?? 0) * (s?.costTitan ?? 0) * (s?.wfFactor ?? 0), 0)
                + destroyedDefences.reduce((carry, d) => carry + (d?.quantity ?? 0) * (d?.costTitan ?? 0) * (d?.wfFactor ?? 0), 0);
            battleReport.wfSilicon = destroyedShips.reduce((carry, s) => carry + (s?.quantity ?? 0) * (s?.costSilicon ?? 0) * (s?.wfFactor ?? 0), 0)
                + destroyedDefences.reduce((carry, d) => carry + (d?.quantity ?? 0) * (d?.costSilicon ?? 0) * (d?.wfFactor ?? 0), 0);
            battleReport.wfPVC = destroyedShips.reduce((carry, s) => carry + (s?.quantity ?? 0) * (s?.costPVC ?? 0) * (s?.wfFactor ?? 0), 0)
                + destroyedDefences.reduce((carry, d) => carry + (d?.quantity ?? 0) * (d?.costPVC ?? 0) * (d?.wfFactor ?? 0), 0);

            context.commit('setBattleReport', battleReport);
        }
    },
    modules: {}
})
