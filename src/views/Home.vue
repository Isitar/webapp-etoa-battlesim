<template>
    <div class="container">
        <h2 class="title is-2">Allgemeine Einstellungen</h2>
        <RoundSelect></RoundSelect>

        <h2 class="title is-2">Angreiffer</h2>
        <div class="columns">
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
        <div class="columns">
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
                             :remove-handle="removeDefenderDefence" :quantity-handle="setDefenderDefenceQuantity"></DefenceForm>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import RoundSelect from "@/components/RoundSelect.vue";
    import ResearchForm from "@/components/ResearchForm.vue";
    import ShipForm from "@/components/ShipForm.vue";
    import DefenceForm from "@/components/DefenceForm.vue";
    import MysticumForm from "@/components/MysticumForm.vue";

    export default Vue.extend({
        name: 'Home',
        components: {
            RoundSelect,
            ResearchForm,
            MysticumForm,
            ShipForm,
            DefenceForm,
        },
        computed: {
            attackerResearch() {
                return this.$store.state.attacker.research;
            },
            attackerResearchSet(): Function {
                return (fields: object) => this.$store.commit('setAttackerResearchFields', fields);
            },
            attackerMysticum() {
                return this.$store.state.attacker.mysticum;
            },
            attackerMysticumSet(): Function {
                return (fields: object) => this.$store.commit('setAttackerMysticumFields', fields);
            },
            attackerShips() {
                return this.$store.state.attacker.ships;
            },
            addAttackerShip() {
                return (id: number) => this.$store.commit('addAttackerShip', id);
            },
            removeAttackerShip() {
                return (id: number) => this.$store.commit('removeAttackerShip', id);
            },
            setAttackerShipQuantity() {
                return (id: number, quantity: number) => this.$store.commit('setAttackerShipQuantity', {
                    id: id,
                    quantity: quantity
                });
            },

            defenderResearch() {
                return this.$store.state.defender.research;
            },
            defenderResearchSet(): Function {
                return (fields: object) => this.$store.commit('setDefenderResearchFields', fields);
            },
            defenderMysticum() {
                return this.$store.state.defender.mysticum;
            },
            defenderMysticumSet(): Function {
                return (fields: object) => this.$store.commit('setDefenderMysticumFields', fields);
            },
            defenderShips() {
                return this.$store.state.defender.ships;
            },
            addDefenderShip() {
                return (id: number) => this.$store.commit('addDefenderShip', id);
            },
            removeDefenderShip() {
                return (id: number) => this.$store.commit('removeDefenderShip', id);
            },
            setDefenderShipQuantity() {
                return (id: number, quantity: number) => this.$store.commit('setDefenderShipQuantity', {
                    id: id,
                    quantity: quantity
                });
            },
            defenderDefences() {
                return this.$store.state.defender.defences;
            },
            addDefenderDefence() {
                return (id: number) => this.$store.commit('addDefenderDefence', id);
            },
            removeDefenderDefence() {
                return (id: number) => this.$store.commit('removeDefenderDefence', id);
            },
            setDefenderDefenceQuantity() {
                return (id: number, quantity: number) => this.$store.commit('setDefenderDefenceQuantity', {
                    id: id,
                    quantity: quantity
                });
            },
        },
        created(): void {
            this.$store.commit('loadRound', 19);
        }
    });
</script>
