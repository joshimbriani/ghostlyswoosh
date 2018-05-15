import app from '../components/app.vue'
import two from '../components/two.vue'
import diagonAlley from '../components/areas/diagon-alley.vue'

export default [
    {
        path: '/',
        component: app
    },
    {
        path: '/two',
        component: two
    },
    {
        path: '/areas/diagon-alley',
        component: diagonAlley
    }
]