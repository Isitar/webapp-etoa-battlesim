import Vue from 'vue'
import Vuex from 'vuex'
import {RoundChange} from "@/models/RoundChange";
import {Round20Changes} from "@/data/Round20Changes";
import {Round19Changes} from "@/data/Round19Changes";
import {Ship} from "@/models/Ship";
import {Defence} from "@/models/Defence";
import {defences, ships} from "@/data/BaseData";
import {Player} from "@/models/Player";

Vue.use(Vuex);

interface State {
    rounds: RoundChange[];
    ships: Ship[];
    defences: Defence[];

    attacker: Player;
    defender: Player;
    currentRoundId: number;
}

export default new Vuex.Store<State>({
    state: {
        rounds: [
            Round19Changes,
            Round20Changes,
        ],
        ships: [],
        defences: [],
        currentRoundId: 19,
        attacker: {
            ships: [],
            defences: [],
            mysticum: {
                weaponPercent: 0,
                shieldPercent: 0,
                structurePercent: 0,
                regenerationPercent: 0,
            },
            research: {
                weaponLevel: 0,
                shieldLevel: 0,
                structureLevel: 0,
                regenerationLevel: 0
            }
        },
        defender: {
            ships: [],
            defences: [],
            mysticum: {
                weaponPercent: 0,
                shieldPercent: 0,
                structurePercent: 0,
                regenerationPercent: 0,
            },
            research: {
                weaponLevel: 0,
                shieldLevel: 0,
                structureLevel: 0,
                regenerationLevel: 0
            }
        }
    } as State,
    mutations: {
        loadRound(state, payload: number) {
            const rounds = state.rounds.filter(r => r.id <= payload).sort((r1, r2) => r1.id - r2.id);
            const shipData = ships;
            const defenceData = defences;
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
            }
            state.ships = shipData;
            state.defences = defenceData;
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
    },
    actions: {},
    modules: {}
})
