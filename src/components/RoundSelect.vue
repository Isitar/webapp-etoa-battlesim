<template>
    <div class="field">
        <label class="label">Runde</label>
        <div class="control">
            <div class="select">
                <select v-model="currentRoundId">
                    <option v-for="roundId in roundIds" :key="roundId">{{roundId}}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {RoundChange} from "@/models/RoundChange";

    export default Vue.extend({
        name: "RoundSelect",
        computed: {
            roundIds(): number[] {
                return this.$store.state.rounds.map((r: RoundChange) => r.id);
            },
            currentRoundId: {
                get() {
                    return this.$store.state.currentRoundId;
                },
                set(value: number) {
                    this.$store.commit('loadRound', value);
                }
            }
        },
    });
</script>

<style scoped lang="scss">

</style>