<template>
    <div class="card">
        <header class="card-header">
            <h1 class="card-header-title">Forschung</h1>
        </header>
        <div class="card-content">

            <form>
                <div class="field">
                    <label class="label is-small">Waffentechnik</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="Waffentechnik" min="0" v-model="weapon">
                    </div>
                </div>
                <div class="field">
                    <label class="label is-small">Panzerung</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="Panzerung" min="0" v-model="structure">
                    </div>
                </div>
                <div class="field">
                    <label class="label is-small">Schild</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="Schild" min="0" v-model="shield">
                    </div>
                </div>
                <div class="field">
                    <label class="label is-small">Regeneration</label>
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
    import {Research} from "@/models/Research";

    export default Vue.extend({
        name: "ResearchForm",
        props: {
            handle: Object,
            setterHandle: Function,
            title: String,
        },
        computed: {
            weapon: {
                get(): number {
                    return (this.handle as Research).weaponLevel
                },
                set(value: number): void {
                    this.setterHandle({weaponLevel: parseInt(value.toString())});
                }
            },
            structure: {
                get(): number {
                    return (this.handle as Research).structureLevel
                },
                set(value: number): void {
                    this.setterHandle({structureLevel: parseInt(value.toString())});
                }
            },
            shield: {
                get(): number {
                    return (this.handle as Research).shieldLevel
                },
                set(value: number): void {
                    this.setterHandle({shieldLevel: parseInt(value.toString())});
                }
            },
            regeneration: {
                get(): number {
                    return (this.handle as Research).regenerationLevel
                },
                set(value: number): void {
                    this.setterHandle({regenerationLevel: parseInt(value.toString())});
                }
            },
        },
    });
</script>

<style scoped lang="scss">

</style>