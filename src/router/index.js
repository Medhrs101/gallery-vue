import Vue from "vue";
import VueRouter from "vue-router";
import galleryList from "../views/GalleryList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/gallery-list",
    name: 'gallery-list',
    component: galleryList,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
