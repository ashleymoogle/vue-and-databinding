import home from './views/home.vue'
export default [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/pics',
        name: 'pics',
        component: () => lazyLoadView(require('./views/pics.vue')),
        beforeEnter(routeTo, routeFrom, next) {
            console.log("pics")
        }
    },
    {
        path: '/404',
        name: '404',
        component: require('./views/404.vue').default,
        props: true,
    },
    {
        path: '*',
        redirect: '404',
    },
]

// Lazy-loads view components, but with better UX. A loading view
// will be used if the component takes a while to load, falling
// back to a timeout view in case the page fails to load. You can
// use this component to lazy-load a route with:
//
// component: () => lazyLoadView(import('./views/my-view'))
//
// NOTE: Components loaded with this strategy DO NOT have access
// to in-component guards, such as beforeRouteEnter,
// beforeRouteUpdate, and beforeRouteLeave. You must either use
// route-level guards instead or lazy-load the component directly:
//
// component: () => import('./views/my-view')
//
function lazyLoadView(AsyncView) {
    const AsyncHandler = () => ({
        component: AsyncView,
        // A component to use while the component is loading.
        loading: require('./views/loading.vue').default,
        // A fallback component in case the timeout is exceeded
        // when loading the component.
        error: require('./views/timeout.vue').default,
        // Delay before showing the loading component.
        // Default: 200 (milliseconds).
        delay: 400,
        // Time before giving up trying to load the component.
        // Default: Infinity (milliseconds).
        timeout: 10000,
    });

    return Promise.resolve({
        functional: true,
        render(h, { data, children }) {
            // Transparently pass any props or children
            // to the view component.
            return h(AsyncHandler, data, children)
        },
    })
}