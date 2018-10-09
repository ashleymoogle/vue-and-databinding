<template>
    <Layout>
        <h1>PICS</h1>
        <div>
            <ul>
                <li v-for="pic in pics">
                    {{ pic.title }}
                    <img :src=pic.url />
                </li>
            </ul>
        </div>
    </Layout>
</template>

<script>
    import Layout from '../layouts/main.vue'
    export default {
        data () {
            return {
                pics: []
            }
        },
        beforeRouteEnter(routeTo, routeFrom, next) {
            console.log("pics")
            fetch('https://jsonplaceholder.typicode.com/photos')
                .then(response => response.json())
                .then(data => {
                    let d = data.slice(0, 50);
                    next(vm => vm.pics = d);
                })
        },
        page: {
            title: 'pics',
            meta: [{ name: 'description', content: 'pics page' }],
        },
        components: { Layout },
    }
</script>

<style scoped>
    li {
        list-style:none;
    }
</style>