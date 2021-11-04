import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import Cursos from "../views/cursos.vue";
import Painel from "../views/painel.vue";
import Novoscursos from "../views/novoscursos.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cursos",
    name: "Cursos",
    component: Cursos,
  },
  {
    path: "/paineladm",
    name: "Painel",
    component: Painel,
  },
  {
    path: "/paineladm",
    name: "Painel",
    component: Painel,
  },
  {
    path: "/novoscursos",
    name: "Novoscursos",
    component: Novoscursos,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
