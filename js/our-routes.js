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
import beverlyHills from '../components/dining/beverly-hills-boulangerie.vue'
import boneChillin from '../components/dining/bone-chillin.vue'
import cafelaBamba from '../components/dining/cafe-la-bamba.vue'
import chezAlcatraz from '../components/dining/chez-alcatraz.vue'
import duffBrewery from '../components/dining/duff-brewery.vue'
import ffb from '../components/dining/fast-food-boulevard.vue'
import finnegans from '../components/dining/finnegans.vue'
import florean from '../components/dining/florean-fortescues-ice-cream-parlor.vue'
import fountain from '../components/dining/fountain-of-fair-fortune.vue'
import guidos from '../components/dining/guidos-gelato.vue'
import kzpc from '../components/dining/kid-zone-pizza-company.vue'
import leakyCauldron from '../components/dining/leaky-cauldron.vue'
import lombards from '../components/dining/lombards.vue'
import louies from '../components/dining/louies.vue'
import mels from '../components/dining/mels-drive-in.vue'
import moes from '../components/dining/moes-tavern.vue'
import monstersCafe from '../components/dining/monsters-cafe.vue'
import richters from '../components/dining/richters.vue'
import sfcf from '../components/dining/san-francisco-candy-factory.vue'
import sfpc from '../components/dining/san-francisco-pastry-company.vue'
import schwabs from '../components/dining/schwabs-pharmacy.vue'
import starbucks from '../components/dining/starbucks.vue'
import studioSweets from '../components/dining/studio-sweets.vue'
import hoppingPot from '../components/dining/the-hopping-pot.vue'

import eventsIndex from '../components/events/index.vue'
import acohp from '../components/events/a-celebration-of-harry-potter.vue'
import hhn from '../components/events/halloween-horror-nights.vue'
import haus from '../components/events/holidays-at-universal-orlando.vue'
import mg from '../components/events/mardi-gras.vue'
import rtu from '../components/events/rock-the-universe.vue'

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
                path: 'beverly-hills-boulangerie',
                component: beverlyHills
            },
            {
                path: 'bone-chillin',
                component: boneChillin
            },
            {
                path: 'cafe-la-bamba',
                component: cafelaBamba
            },
            {
                path: 'chez-alcatraz',
                component: chezAlcatraz
            },
            {
                path: 'duff-brewery',
                component: duffBrewery
            },
            {
                path: 'fast-food-boulevard',
                component: ffb
            },
            {
                path: 'finnegans',
                component: finnegans
            },
            {
                path: 'florean-fortescues-ice-cream-parlor',
                component: florean
            },
            {
                path: 'fountain-of-fair-fortune',
                component: fountain
            },
            {
                path: 'guidos-gelato',
                component: guidos
            },
            {
                path: 'kid-zone-pizza-company',
                component: kzpc
            },
            {
                path: 'leaky-cauldron',
                component: leakyCauldron
            },
            {
                path: 'lombards',
                component: lombards
            },
            {
                path: 'louies',
                component: louies
            },
            {
                path: 'mels-drive-in',
                component: mels
            },
            {
                path: 'moes-tavern',
                component: moes
            },
            {
                path: 'monsters-cafe',
                component: monstersCafe
            },
            {
                path: 'richters',
                component: richters
            },
            {
                path: 'san-francisco-candy-factory',
                component: sfcf
            },
            {
                path: 'san-francisco-pastry-company',
                component: sfpc
            },
            {
                path: 'schwabs-pharmacy',
                component: schwabs
            },
            {
                path: 'starbucks',
                component: starbucks
            },
            {
                path: 'studio-sweets',
                component: studioSweets
            },
            {
                path: 'the-hopping-pot',
                component: hoppingPot
            },
        ]
    },
    {
        path: '/events',
        component: eventsIndex,
        children: [
            {
                path: 'a-celebration-of-harry-potter',
                component: acohp
            },
            {
                path: 'halloween-horror-nights',
                component: hhn
            },
            {
                path: 'holidays-at-universal-studios',
                component: haus
            },
            {
                path: 'mardi-gras',
                component: mg
            },
            {
                path: 'rock-the-universe',
                component: rtu
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