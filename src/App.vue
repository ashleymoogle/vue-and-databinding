<template>
    <div id="app">
        <!--
        Even when routes use the same component, treat them
        as distinct and create the component again.
        -->
        <router-view/>
    </div>
</template>

<script>
    export default {
        page: {
            // All subcomponent titles will be injected into this template.
            titleTemplate(title) {
                title = typeof title === 'function' ? title(this.$store) : title
                return title ? `${title} | test` : 'test'
            },
        },
    }
</script>

<style scoped>
    .title {
        color:rebeccapurple;
    }
</style>