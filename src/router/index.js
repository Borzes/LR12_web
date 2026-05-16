import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import UsersPage from '../views/UsersPage.vue'
import FormPage from '../views/FormPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/users', name: 'users', component: UsersPage },
  { path: '/form', name: 'form', component: FormPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router