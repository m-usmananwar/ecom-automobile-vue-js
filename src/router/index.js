import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailsView from "@/components/Details.vue";
import VendorsView from "@/components/Admin/Vendors.vue";
import LoginView from "@/components/Login.vue";
import RegisterView from "@/components/Register.vue";
import CreatePost from "@/components/vendor/CreatePost.vue";
import SearchView from "@/views/SearchView.vue";
import VendorDashboard from "@/components/vendor/Dashboard.vue";
import VendorDetails from "@/components/vendor/VendorDetails.vue";
import VendorEditCard from "@/components/vendor/EditCard.vue";
import AdminDashboard from "@/components/admin/Dashboard.vue";
import AdminDetails from "@/components/admin/AdminDetails.vue";
import AdminEditCard from "@/components/admin/EditCard.vue";
import UserEditCard from "@/components/admin/UserEditCard.vue";
import NotFound from "@/components/NotFound.vue";
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
      path: "/search",
      name: "search",
      component: SearchView,
    },
    {
      path: "/details/:id",
      name: "details",
      component: DetailsView,
    },
    {
      path: "/dashboard/vendor",
      name: "VendorDashboard",
      component: VendorDashboard,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/dashboard/vendor/details/:id",
      name: "VendorAdDetails",
      component: VendorDetails,
    },
    {
      path: "/dashboard/vendor/edit/ad/:id",
      name: "VendorAdEdit",
      component: VendorEditCard,
    },
    {
      path: "/dashboard/vendor/post-ad",
      name: "post-ad",
      component: CreatePost,
    },
    {
      path: "/dashboard/admin",
      name: "AdminDashboard",
      component: AdminDashboard,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/dashboard/admin/vendors",
      name: "vondors",
      component: VendorsView,
    },
    {
      path: "/dashboard/admin/details/:id",
      name: "AdminAdDetails",
      component: AdminDetails,
    },
    {
      path: "/dashboard/admin/edit/ad/:id",
      name: "AdminEditCard",
      component: AdminEditCard,
    },
    {
      path: "/dashboard/admin/edit/user/:id",
      name: "AdminUserEditCard",
      component: UserEditCard,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});
router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !localStorage.getItem("token")) {
    return {
      name: "login",
      query: { redirect: to.fullPath },
    };
  }
});
export default router;
