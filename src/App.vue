<template>
    <div id="app">
        <header class="hero">
            <div class="hero-body">
                <div class="content has-text-centered">
                    <h1 class="title is-1">Etoa battle simulator - isitar</h1>
                </div>
            </div>
        </header>
        <section class="section">
            <router-view/>
        </section>
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                    etoa battle simulator.
                </p>
            </div>
        </footer>
    </div>
</template>

<style lang="scss">
    #app {
        height: 100%;
        display: flex;
        flex-direction: column;

        > header,
        > footer {
            flex: 0 0 auto;
        }

        > section {
            flex: 1 0 auto;
        }
    }
</style>
