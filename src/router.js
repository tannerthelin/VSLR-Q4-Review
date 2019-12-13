import Vue from 'vue'
import Router from 'vue-router'
import Menu from './components/Menu.vue'
import NewEngland from './components/NewEngland'
import Grit from './components/Grit'
import Legion from './components/Legion'
import Republic from './components/Republic'
import Core from './components/Core'
import Atomic from './components/Atomic'
import Originals from './components/Originals'
import Rhythm from './components/Rhythm'
import Flow from './components/Flow'
import Southwest from './components/Southwest'
import Hawaii from './components/Hawaii'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hashbang: false,
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'menu',
      component: Menu
    },
    {
        path: '/new-england',
        name: 'new-england',
        component: NewEngland
      },
    {
    path: '/grit',
    name: 'grit',
    component: Grit
    },
    {
        path: '/legion',
        name: 'legion',
        component: Legion
    },
    {
        path: '/republic',
        name: 'republic',
        component: Republic
    },
    {
        path: '/core',
        name: 'core',
        component: Core
    },
    {
        path: '/atomic',
        name: 'atomic',
        component: Atomic
    },
    {
        path: '/originals',
        name: 'originals',
        component: Originals
    },
    {
        path: '/rhythm',
        name: 'rhythm',
        component: Rhythm
    },
    {
        path: '/flow',
        name: 'flow',
        component: Flow
    },
    {
        path: '/southwest',
        name: 'southwest',
        component: Southwest
    },
    {
        path: '/hawaii',
        name: 'hawaii',
        component: Hawaii
    },
    {
      path: '*',
      component: Menu
    }
  ]
})