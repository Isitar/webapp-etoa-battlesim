<template>
    <div class="container">
        <h2 class="title is-2">Allgemeine Einstellungen</h2>
        <RoundSelect></RoundSelect>

        <h2 class="title is-2">Angreiffer</h2>
        <p>
            {{attackerWeapon}} ({{attackerWeaponPercent}}) | {{attackerShield}} ({{attackerShieldPercent}}) | {{attackerStructure}} ({{attackerStructurePercent}})
        </p>
        <div class="columns  is-multiline">
            <div class="column">
                <ResearchForm :handle="attackerResearch" :setterHandle="attackerResearchSet"></ResearchForm>
            </div>
            <div class="column">
                <MysticumForm :handle="attackerMysticum" :setterHandle="attackerMysticumSet"></MysticumForm>
            </div>
            <div class="column">
                <ShipForm :ships="attackerShips" :add-handle="addAttackerShip"
                          :remove-handle="removeAttackerShip" :quantity-handle="setAttackerShipQuantity"></ShipForm>
            </div>
        </div>

        <h2 class="title is-2">Verteidiger</h2>
        <div class="columns  is-multiline">
            <div class="column">
                <ResearchForm :handle="defenderResearch" :setterHandle="defenderResearchSet"></ResearchForm>
            </div>

            <div class="column">
                <MysticumForm :handle="defenderMysticum" :setterHandle="defenderMysticumSet"></MysticumForm>
            </div>
            <div class="column">
                <ShipForm :ships="defenderShips" :add-handle="addDefenderShip"
                          :remove-handle="removeDefenderShip" :quantity-handle="setDefenderShipQuantity"></ShipForm>
            </div>
            <div class="column">
                <DefenceForm :defences="defenderDefences" :add-handle="addDefenderDefence"
                             :remove-handle="removeDefenderDefence" :quantity-handle="setDefenderDefenceQuantity"
                             :ingi="defenderIngi" :set-ingi="setDefenderIngi"
                ></DefenceForm>
            </div>
        </div>

        <h2 class="title is-2">Kampf</h2>
        <BattleResult></BattleResult>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import RoundSelect from "@/components/RoundSelect.vue";
    import ResearchForm from "@/components/ResearchForm.vue";
    import ShipForm from "@/components/ShipForm.vue";
    import DefenceForm from "@/components/DefenceForm.vue";
    import MysticumForm from "@/components/MysticumForm.vue";
    import BattleResult from "@/components/BattleResult.vue";

    export default Vue.extend({
        name: 'Home',
        components: {
            RoundSelect,
            ResearchForm,
            MysticumForm,
            ShipForm,
            DefenceForm,
            BattleResult,
        },
        computed: {
            attackerResearch() {
                return this.$store.state.attacker.research;
            },
            attackerResearchSet(): Function {
                return (fields: object) => {
                    this.$store.commit('setAttackerResearchFields', fields);
                    this.recalcBattleReport();
                }
            },
            attackerMysticum() {
                return this.$store.state.attacker.mysticum;
            },
            attackerMysticumSet(): Function {
                return (fields: object) => {
                    this.$store.commit('setAttackerMysticumFields', fields);
                    this.recalcBattleReport();
                }
            },
            attackerShips() {
                return this.$store.state.attacker.ships;
            },
            addAttackerShip() {
                return (id: number) => {
                    this.$store.commit('addAttackerShip', id);
                    this.recalcBattleReport();
                }
            },
            removeAttackerShip() {
                return (id: number) => {
                    this.$store.commit('removeAttackerShip', id);
                    this.recalcBattleReport();
                }
            },
            setAttackerShipQuantity() {
                return (id: number, quantity: number) => {
                    this.$store.commit('setAttackerShipQuantity', {
                        id: id,
                        quantity: quantity
                    });
                    this.recalcBattleReport();
                }
            },

            defenderResearch() {
                return this.$store.state.defender.research;
            },
            defenderResearchSet(): Function {
                return (fields: object) => {
                    this.$store.commit('setDefenderResearchFields', fields);
                    this.recalcBattleReport();
                }
            },
            defenderMysticum() {
                return this.$store.state.defender.mysticum;
            },
            defenderMysticumSet(): Function {
                return (fields: object) => {
                    this.$store.commit('setDefenderMysticumFields', fields);
                    this.recalcBattleReport();
                }
            },
            defenderShips() {
                return this.$store.state.defender.ships;
            },
            addDefenderShip() {
                return (id: number) => {
                    this.$store.commit('addDefenderShip', id);
                    this.recalcBattleReport();
                }
            },
            removeDefenderShip() {
                return (id: number) => {
                    this.$store.commit('removeDefenderShip', id);
                    this.recalcBattleReport();
                }
            },
            setDefenderShipQuantity() {
                return (id: number, quantity: number) => {
                    this.$store.commit('setDefenderShipQuantity', {
                        id: id,
                        quantity: quantity
                    });
                    this.recalcBattleReport();
                }
            },
            defenderDefences() {
                return this.$store.state.defender.defences;
            },
            addDefenderDefence() {
                return (id: number) => {
                    this.$store.commit('addDefenderDefence', id);
                    this.recalcBattleReport();
                }
            },
            removeDefenderDefence() {
                return (id: number) => {
                    this.$store.commit('removeDefenderDefence', id);
                    this.recalcBattleReport();
                }
            },
            setDefenderDefenceQuantity() {
                return (id: number, quantity: number) => {
                    this.$store.commit('setDefenderDefenceQuantity', {
                        id: id,
                        quantity: quantity
                    });
                    this.recalcBattleReport();
                }
            },
            defenderIngi(): boolean {
                return this.$store.state.defender.ingi;
            },
            setDefenderIngi() {
                return (value: boolean) => {
                    this.$store.commit('setDefenderFields', {ingi: value});
                    this.recalcBattleReport();
                }
            },

            attackerWeapon(): string {
                return this.formatNumber(this.$store.state.attacker.getAttack(this.$store.state.ships, this.$store.state.defences));
            },
            attackerWeaponPercent(): string {
                return this.formatPercent(this.$store.state.attacker.getAttackResearchModificator());
            },
            attackerShield(): string {
                return this.formatNumber(this.$store.state.attacker.getShield(this.$store.state.ships, this.$store.state.defences));
            },
            attackerShieldPercent(): string {
                return this.formatPercent(this.$store.state.attacker.getShieldResearchModificator());
            },
            attackerStructure(): string {
                return this.formatNumber(this.$store.state.attacker.getStructure(this.$store.state.ships, this.$store.state.defences));
            },
            attackerStructurePercent(): string {
                return this.formatPercent(this.$store.state.attacker.getStructureResearchModificator());
            }
        },
        methods: {
            formatPercent(v: number): string {
                return (v * 100).toFixed(0) + '%';
            },
            formatNumber(v: number): string {
                return v.toLocaleString();
            },
            recalcBattleReport() {
                this.$store.dispatch('recalculateBattleReport');
            }
        },
        created(): void {
            this.$store.commit('loadRound', 20);
        }
    });
</script>
