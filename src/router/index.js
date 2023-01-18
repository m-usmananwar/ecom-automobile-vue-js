import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TestView from "@/views/TestView.vue";
import DetailsView from "@/components/Details.vue";
import VendorsView from "@/components/Vendor.vue";
import LoginView from "@/components/Login.vue";
import RegisterView from "@/components/Register.vue";
import CreatePostView from "@/components/CreatePost.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "resgister",
      component: RegisterView,
    },
    {
      path: "/post-ad",
      name: "adPost",
      component: CreatePostView,
    },
    {
      path: "/details",
      name: "details",
      component: DetailsView,
    },
    {
      path: "/vendors",
      name: "vondors",
      component: VendorsView,
    },
  ],
});

export default router;
