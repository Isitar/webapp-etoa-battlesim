<template>
    <div class="container">
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">Kampfbericht</h1>
            </header>
            <div class="card-content">
                <p class="nl2br">{{battleText}} </p>
            </div>
        </div>

        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">Verteidiger nach dem Kampf</h1>
            </header>
            <div class="card-content">
                <ul>
                    <li v-for="defenderShip in defenderShips" :key="defenderShip.id">{{shipName(defenderShip.id)}} {{defenderShip.quantity}}</li>
                </ul>
                <ul>
                    <li v-for="defenderDefence in defenderDefences" :key="defenderDefence.id">{{defenceName(defenderDefence.id)}} {{defenderDefence.quantity}}</li>
                </ul>
            </div>
        </div>

        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">Angreifer nach dem Kampf</h1>
            </header>
            <div class="card-content">
                <ul>
                    <li v-for="attackerShip in attackerShips" :key="attackerShip.id">{{shipName(attackerShip.id)}} {{attackerShip.quantity}}</li>
                </ul>
            </div>
        </div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">Trümmerfeld</h1>
            </header>
            <div class="card-content">
                <p>Titan: {{wfTitan}}</p>
                <p>Silizium: {{wfSilicon}}</p>
                <p>PVC: {{wfPVC}}</p>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
    import Vue from 'vue'
    import {BattleReport} from "@/models/BattleReport";
    import {PlayerShip} from "@/models/PlayerShip";
    import {PlayerDefence} from "@/models/PlayerDefence";
    import {Ship} from "@/models/Ship";
    import {Defence} from "@/models/Defence";

    export default Vue.extend({
        name: "FightResult",

        computed: {
            battleReport(): BattleReport | null {
                return this.$store.state.battleReport;
            },
            battleText(): string {
                return this.battleReport?.battleText ?? '';
            },
            defenderShips(): PlayerShip[] {
                return this.battleReport?.defender.ships ?? [];
            },
            defenderDefences(): PlayerDefence[] {
                return this.battleReport?.defender.defences ?? [];
            },

            attackerShips(): PlayerShip[] {
                return this.battleReport?.attacker.ships ?? [];
            },

            wfTitan(): string {
                return this.formatNumber(this.battleReport?.wfTitan ?? 0);
            },
            wfSilicon(): string {
                return this.formatNumber(this.battleReport?.wfSilicon ?? 0);
            },
            wfPVC(): string {
                return this.formatNumber(this.battleReport?.wfPVC ?? 0);
            },
        },
        methods: {
            formatNumber(value: number): string {
                return value.toLocaleString();
            },
            shipName(id: number): string {
                return this.$store.state.ships.find((s: Ship) => id === s.id)?.name ?? '';
            },
            defenceName(id: number): string {
                return this.$store.state.defences.find((d: Defence) => id === d.id)?.name ?? '';
            },
        }
    });
</script>

<style scoped lang="scss">

</style>