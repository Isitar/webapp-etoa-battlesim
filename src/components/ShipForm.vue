<template>
    <div class="card">
        <header class="card-header">
            <h1 class="card-header-title">Schiffe</h1>
        </header>
        <div class="card-content">
            <form>
                <form>
                    <div class="field" v-for="ship in playerShips" :key="ship.id">
                        <label class="label is-small">{{shipName(ship.id)}}</label>
                        <div class="control">
                            <div class="field has-addons">
                                <p class="control is-expanded">
                                    <input class="input" type="number" :placeholder="shipName(ship.id)" min="0" :value="ship.quantity"
                                           @change="newValue => setQuantity(ship.id, newValue.target.value)">
                                </p>
                                <div class="control">
                                    <button class="button is-danger" @click.prevent="removeShip(ship.id)">Delete</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>

                <div class="field">
                    <label class="label">Schiff hinzufügen</label>
                    <div class="control is-expanded">
                        <div class="select is-fullwidth">
                            <select @change="e => addShip(e.target.value)" :value="addShipValue">
                                <option></option>
                                <option v-for="ship in allShips" :key="'select-ships' + ship.id" :value="ship.id">
                                    {{ship.name}}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {PlayerShip} from "@/models/PlayerShip";
    import {Ship} from "@/models/Ship";

    export default Vue.extend({
        name: "ResearchForm",
        props: {
            ships: Array,
            addHandle: Function,
            quantityHandle: Function,
            removeHandle: Function,
            title: String,
        },
        data() {
            return {
                addShipValue: null,
            };
        },
        computed: {
            playerShips(): PlayerShip[] {
                return (this.ships as PlayerShip[])
            },
            allShips(): Ship[] {
                const playerShipIds = this.playerShips.map(s => s.id);
                return this.$store.state.ships.filter((s: Ship) => !playerShipIds.includes(s.id)).sort((s1: Ship, s2: Ship) => s1.name?.localeCompare(s2.name ?? 'Z'));
            }
        },
        methods: {
            addShip(id: number) {
                this.addHandle(parseInt(id.toString()));
                this.addShipValue = null;
            },
            setQuantity(id: number, quantity: number) {
                this.quantityHandle(id, parseInt(quantity.toString()));
            },
            removeShip(id: number) {
                this.removeHandle(id);
            },

            shipName(id: number): string | null {
                return this.$store.state.ships.find((s: Ship) => id === s.id)?.name ?? null;
            },
        }
    });
</script>

<style scoped lang="scss">

</style>