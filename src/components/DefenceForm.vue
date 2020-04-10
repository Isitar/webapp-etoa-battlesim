<template>
    <div class="card">
        <header class="card-header">
            <h1 class="card-header-title">Verteidigung</h1>
        </header>
        <div class="card-content">
            <form>
                <div class="field" v-for="defence in playerDefences" :key="defence.id">
                    <label class="label is-small">{{defenceName(defence.id)}}</label>
                    <div class="control">
                        <div class="field has-addons">
                            <p class="control is-expanded">
                                <input class="input" type="number" :placeholder="defenceName(defence.id)" min="0" :value="defence.quantity"
                                       @change="newValue => setQuantity(defence.id, newValue.target.value)">
                            </p>
                            <div class="control">
                                <button class="button is-danger" @click.prevent="removeDefence(defence.id)">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="checkbox">
                        <input type="checkbox" :value="ingi" @change="e => setIngi(e.target.checked)">
                        Ingi
                    </label>

                </div>
            </form>
            <div class="field">
                <label class="label">Verteidigung hinzufügen</label>
                <div class="control">
                    <select @change="e => addDefence(e.target.value)" :value="addDefenceValue">
                        <option></option>
                        <option v-for="defence in allDefences" :key="'select-defence' + defence.id" :value="defence.id">
                            {{defence.name}}
                        </option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {PlayerDefence} from "@/models/PlayerDefence";
    import {Defence} from "@/models/Defence";

    export default Vue.extend({
        name: "ResearchForm",
        props: {
            defences: Array,
            addHandle: Function,
            quantityHandle: Function,
            removeHandle: Function,
            title: String,
            ingi: Boolean,
            setIngi: Function,
        },
        data() {
            return {
                addDefenceValue: null,
            };
        },
        computed: {
            playerDefences(): PlayerDefence[] {
                return (this.defences as PlayerDefence[])
            },
            allDefences(): Defence[] {
                const playerDefenceIds = this.playerDefences.map(s => s.id);
                return this.$store.state.defences.filter((d: Defence) => !playerDefenceIds.includes(d.id));
            },
        },
        methods: {
            addDefence(id: number) {
                this.addHandle(parseInt(id.toString()));
                this.addDefenceValue = null;
            },
            setQuantity(id: number, quantity: number) {
                this.quantityHandle(id, parseInt(quantity.toString()));
            },
            removeDefence(id: number) {
                this.removeHandle(id);
            },

            defenceName(id: number): string | null {
                return this.$store.state.defences.find((d: Defence) => id === d.id)?.name ?? null;
            },
        }
    });
</script>

<style scoped lang="scss">

</style>