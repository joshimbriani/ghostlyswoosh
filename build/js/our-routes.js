import app from '../components/app.vue'
import two from '../components/two.vue'

import areaIndex from '../components/areas/index.vue'
import diagonAlley from '../components/areas/diagon-alley.vue'
import hollywood from '../components/areas/hollywood.vue'
import newYork from '../components/areas/new-york.vue'
import productionCentral from '../components/areas/production-central.vue'
import springfield from '../components/areas/springfield.vue'
import worldExpo from '../components/areas/world-expo.vue'

import ridesIndex from '../components/rides/index.vue'
import curiousGeorge from '../components/rides/curious-george-goes-to-town.vue'
import despicableMe from '../components/rides/despicable-me-minion-mayhem.vue'
import etAdventure from '../components/rides/et-adventure.vue'
import fastAndFurious from '../components/rides/fast-and-furious-supercharged.vue'
import fievelsPlayland from '../components/rides/fievels-playland.vue'
import gringotts from '../components/rides/gringotts.vue'
import hollywoodRipRideRockit from '../components/rides/hollywood-rip-ride-rockit.vue'
import kangAndKodos from '../components/rides/kang-and-kodos-tilt-and-hurl.vue'
import mIB from '../components/rides/men-in-black-alien-attack.vue'
import raceThroughNewYork from '../components/rides/race-through-new-york.vue'
import rOTM from '../components/rides/revenge-of-the-mummy.vue'
import shrek4D from '../components/rides/shrek-4d.vue'
import simpsons from '../components/rides/simpsons-ride.vue'
import transformers from '../components/rides/transformers-the-ride.vue'
import woodyWoodpecker from '../components/rides/woody-woodpecker-nuthouse-coaster.vue'

import diningIndex from '../components/dining/index.vue'

import eventsIndex from '../components/events/index.vue'

import shoppingIndex from '../components/shopping/index.vue'

import showsIndex from '../components/shows/index.vue'

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
        path: '/areas',
        component: areaIndex,
        children: [
            {
                path: 'diagon-alley',
                component: diagonAlley
            },
            {
                path: 'hollywood',
                component: hollywood
            },
            {
                path: 'new-york',
                component: newYork
            },
            {
                path: 'production-central',
                component: productionCentral
            },
            {
                path: 'springfield',
                component: springfield
            },
            {
                path: 'world-expo',
                component: worldExpo
            }
        ]
    },
    {
        path: '/rides',
        component: ridesIndex,
        children: [
            {
                path: 'curious-george-goes-to-town',
                component: curiousGeorge
            },
            {
                path: 'despicable-me-minion-mayhem',
                component: despicableMe
            },
            {
                path: 'et-adventure',
                component: etAdventure
            },
            {
                path: 'fast-and-furious-supercharged',
                component: fastAndFurious
            },
            {
                path: 'fievels-playland',
                component: fievelsPlayland
            },
            {
                path: 'gringotts',
                component: gringotts
            },
            {
                path: 'hollywood-rip-ride-rockit',
                component: hollywoodRipRideRockit
            },
            {
                path: 'kang-and-kodos-tilt-and-hurl',
                component: kangAndKodos
            },
            {
                path: 'men-in-black-alien-attack',
                component: mIB
            },
            {
                path: 'race-through-new-york',
                component: raceThroughNewYork
            },
            {
                path: 'revenge-of-the-mummy',
                component: rOTM
            },
            {
                path: 'shrek-4d',
                component: shrek4D
            },
            {
                path: 'simpsons-ride',
                component: simpsons
            },
            {
                path: 'transformers-the-ride',
                component: transformers
            },
            {
                path: 'woody-woodpecker-nuthouse-coaster',
                component: woodyWoodpecker
            },
        ]
    },
    {
        path: '/dining',
        component: diningIndex,
        children: [
            {
                path: 'diagon-alley',
                component: diagonAlley
            },
        ]
    },
    {
        path: '/events',
        component: eventsIndex,
        children: [
            {
                path: 'diagon-alley',
                component: diagonAlley
            },
        ]
    },
    {
        path: '/shopping',
        component: shoppingIndex,
        children: [
            {
                path: 'diagon-alley',
                component: diagonAlley
            },
        ]
    },
    {
        path: '/shows',
        component: showsIndex,
        children: [
            {
                path: 'diagon-alley',
                component: diagonAlley
            },
        ]
    }

]