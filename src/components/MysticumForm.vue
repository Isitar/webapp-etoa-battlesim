<template>
    <div class="card">
        <header class="card-header">
            <h1 class="card-header-title">Mysticum</h1>
        </header>
        <div class="card-content">

            <form>
                <div class="field">
                    <label class="label is-small">%-Waffe</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="Waffentechnik" min="0" v-model="weapon">
                    </div>
                </div>
                <div class="field">
                    <label class="label is-small">%-Panzerung</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="Panzerung" min="0" v-model="structure">
                    </div>
                </div>
                <div class="field">
                    <label class="label is-small">%-Schild</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="Schild" min="0" v-model="shield">
                    </div>
                </div>
                <div class="field">
                    <label class="label is-small">%-Regeneration</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="Schild" min="0" v-model="regeneration">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Mysticum} from "@/models/Mysticum";

    export default Vue.extend({
        name: "MysticumForm",
        props: {
            handle: Object,
            setterHandle: Function,
            title: String,
        },
        computed: {
            weapon: {
                get(): number {
                    return (this.handle as Mysticum).weaponPercent
                },
                set(value: number): void {
                    this.setterHandle({weaponPercent: parseInt(value.toString())});
                }
            },
            structure: {
                get(): number {
                    return (this.handle as Mysticum).structurePercent
                },
                set(value: number): void {
                    this.setterHandle({structurePercent: parseInt(value.toString())});
                }
            },
            shield: {
                get(): number {
                    return (this.handle as Mysticum).shieldPercent
                },
                set(value: number): void {
                    this.setterHandle({shieldPercent: parseInt(value.toString())});
                }
            },
            regeneration: {
                get(): number {
                    return (this.handle as Mysticum).regenerationPercent
                },
                set(value: number): void {
                    this.setterHandle({regenerationPercent: parseInt(value.toString())});
                }
            },
        },
    });
</script>

<style scoped lang="scss">

</style>