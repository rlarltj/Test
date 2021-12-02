import { createWebHistory, createRouter } from "vue-router";
import Login from './LoginUser.vue'
import Join from './JoinUser.vue'
import Card from './Card.vue'
import Home from './Home.vue'
import About from './About.vue'

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/join",
    component: Join,
  },
  {
    path: "/shop",
    component: Card,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 