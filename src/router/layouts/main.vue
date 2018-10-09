<script>
    import NavBar from '../../component/nav-bar.vue'
    export default {
        components: { NavBar },
    }
</script>

<template>
    <div :class="$style.container">
        <NavBar />
        <slot />
    </div>
</template>

<style lang="scss" module>
    .container {
        min-width: 500px;
        max-width: 1600px;
        margin: 0 auto;
    }
</style>