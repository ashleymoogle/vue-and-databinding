<script>
    import Layout from '../layouts/main.vue'
    export default {
        data () {
            return {
                posts: []
            }
        },
        beforeRouteEnter(routeTo, routeFrom, next) {
            console.log("pics")
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => {
                    let d = data.slice(0, 20);
                    next(vm => vm.posts = d);
                })
        },
        page: {
            title: 'Home',
            meta: [{ name: 'description', content: 'Home page' }],
        },
        components: { Layout },
    }
</script>

<template>
    <Layout>
        <h1>Home</h1>
        <div>
            <div v-for="post in posts">
                <h2>{{post.title}}</h2>
                <p>{{post.body}}</p>
            </div>
        </div>
    </Layout>
</template>