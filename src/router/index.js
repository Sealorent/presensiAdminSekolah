import { createRouter, createWebHistory } from 'vue-router'
import MainLocalStorage from '@/services/mainLocalStorage.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login/LoginView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/menu/HomeView.vue')
    },
    {
      path: '/arrival',
      name: 'arrival',
      component: () => import('@/views/menus/arrival/ArrivalView.vue')
    },
    {
      path: '/arrival-time',
      name: 'arrivalTime',
      component: () => import('@/views/menus/arrival/ArrivalTimeView.vue')
    },
    {
      path: '/back-home',
      name: 'backHome',
      component: () => import('@/views/menus/backHome/BackHomeView.vue')
    },
    {
      path: '/back-home-time',
      name: 'backHomeTime',
      component: () => import('@/views/menus/backHome/BackHomeTimeView.vue')
    },
    {
      path: '/summary',
      name: 'summary',
      component: () => import('@/views/menu/SummaryView.vue')
    },
    {
      path: '/profil',
      name: 'profil',
      component: () => import('@/views/menu/ProfilView.vue')
    },
    {
      path: '/permission',
      name: 'permission',
      component: () => import('@/views/menus/permission/PermissionView.vue')
    },
    {
      path: '/lesson-time-table',
      name: 'lessonTimeTable',
      component: () => import('@/views/menus/lessonTimeTable/LessonTimeTableView.vue')
    },
    {
      path: '/teaching-journal',
      name: 'teachingJournal',
      component: () => import('@/views/menus/teachingJournal/TeachingJournalView.vue')
    },
    {
      path: '/year-summary/:year',
      name: 'summaryYearly',
      component: () => import('@/components/SummaryYearComponent.vue')
    },
    {
      path: '/journal',
      name: 'journal',
      component: () => import('@/components/JournalComponent.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  let login = MainLocalStorage.getSessionLogin()
  if (to.name !== 'login' && login === false && login === null) {
    next({ name: 'login' })
  } else if (to.name === 'login' && login == true) {
    next({ name: 'home' })
  } else {
    next()
  }
})
export default router
