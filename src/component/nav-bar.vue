
<script>
    export default {

    }
</script>

<template>
    <ul :class="$style.container">
        <router-link tag="li" key={home} to="/" ><a>Home</a></router-link>
        <router-link tag="li" key={pics} to="pics" ><a>Pics</a></router-link>
    </ul>
</template>

<style lang="scss" module>
    .container {
        padding: 0;
        margin: 0 0 10px;
        text-align: center;
        list-style-type: none;
        > li {
            display: inline-block;
            margin-right: 10px;
        }
    }
</style>