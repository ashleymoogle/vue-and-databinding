var app = new Vue({
    el: '#app',
    data: {
        message: 'These are the pics',
        pics: []
    },
    mounted () {
        this.load()
    },
    methods: {
        load() {
            fetch('https://jsonplaceholder.typicode.com/photos')
                .then(response => response.json())
                .then(data => {
                    this.pics = data.slice(0, 50);
                })
        }
    }
});
