export default [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("@/layout/Layout.vue"),
    children: [
      {
        path: "",
        component: () => import("@/pages/Home.vue"),
      }
    ]
  },
  {
    path: "/about",
    component: () => import("@/layout/Layout.vue"),
    children: [
      {
        path: "",
        component: () => import("@/pages/About.vue"),
      }
    ]
  },
  {
    path: "/404",
    component: () => import("@/pages/NotFound.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  }
]