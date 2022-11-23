<template>
  <div class="iq-top-navbar">
    <nav class="nav navbar navbar-expand-lg navbar-light iq-navbar p-lg-0">
      <div class="container-fluid navbar-inner">
        <div
          class="d-flex align-items-center gap-3"
          v-if="role == 'admin' || role == 'reviewer' || role == 'auditor'"
        >
          <router-link
            :to="{ name: 'social.book' }"
            class="d-flex align-items-center gap-2 iq-header-logo d-none d-md-flex"
          >
            <img
              src="@/assets/images/logo.png"
              class="img-fluid rounded-circle me-3"
              alt="user"
              loading="lazy"
            />
          </router-link>
          <router-link
            class="sidebar-toggle"
            @click="toggleSidebar"
            data-toggle="sidebar"
            data-active="true"
            to="#"
          >
            <div class="icon material-symbols-outlined iq-burger-menu">
              menu
            </div>
          </router-link>
        </div>

        <div class="d-block" v-else>
          <router-link
            :to="{ name: 'social.book' }"
            class="d-flex align-items-center gap-2 iq-header-logo"
          >
            <img
              src="@/assets/images/logo.png"
              class="img-fluid rounded-circle me-3"
              alt="user"
              loading="lazy"
            />
          </router-link>
        </div>

        <a
          class="d-lg-none d-flex"
          href="javascript:void(0);"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <div class="icon material-symbols-outlined iq-burger-menu">menu</div>
        </a>
        <div
          class="offcanvas offcanvas-end iq-profile-menu-responsive"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div class="offcanvas-header">
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body pt-0">
            <ul class="navbar-nav ms-auto navbar-list">
              <li class="nav-item">
                <router-link
                  :to="{ name: 'social.book' }"
                  class="d-flex align-items-center"
                >
                  <i class="material-symbols-outlined">home</i>
                  <span class="mobile-text d-lg-none ms-3">الرئيسية</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ path: `/profile` }"
                  class="d-flex align-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                    />
                  </svg>
                  <span class="mobile-text d-lg-none ms-3">انجازاتي</span>
                </router-link>
              </li>
              <!-- BUG -->
              <!-- <li class="nav-item">
                                <router-link :to="({name: 'social.user_book', params: { id: 1}})" class="d-flex align-items-center">
                                    <i class="material-symbols-outlined">edit_note</i>
                                    <span class="mobile-text d-lg-none ms-3">الطلب</span>
                                </router-link>
                            </li> -->
              <!-- <li class="nav-item">
                                <router-link :to="{ name: 'certificate.my-certificates'}" class="d-flex align-items-center">
                                    <i class="material-symbols-outlined">card_membership</i>
                                    <span class="mobile-text d-lg-none ms-3">شهاداتي</span>
                                </router-link>
                            </li> -->
              <!-- <li class="nav-item">
                                <router-link :to="{ name: 'social.book' }" class="d-flex align-items-center">
                                    <i class="material-symbols-outlined">notifications</i>
                                    <span class="mobile-text d-lg-none ms-3">الاشعارات</span>
                                </router-link>
                            </li>
                             -->
              <li class="nav-item">
                <a
                  href="javascript:void(0);"
                  class="d-flex align-items-center"
                  @click="store.dispatch('logout')"
                >
                  <i class="material-symbols-outlined">logout</i>
                  <span class="mobile-text d-lg-none ms-3">تسجيل خروج</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue"; 
export default {
  name: "DefaultHeader",
  props: {
    image: {
      type: String,
      default: require("@/assets/images/logo.png"),
    },
    role: {
      type: String,
    },
  },
  data() {
    return {
      show: false,
   
    };
  },
  
  setup() {
    const store = useStore();
    const sidebarType = computed(() => store.getters["setting/sidebar_type"]);
    const toggleSidebar = () => {
      // Code Here
      if (sidebarType.value.includes("sidebar-mini")) {
        store.dispatch(
          "setting/sidebar_type",
          sidebarType.value.filter((item) => item !== "sidebar-mini")
        );
      } else {
        store.dispatch("setting/sidebar_type", [
          ...sidebarType.value,
          "sidebar-mini",
        ]);
      }
    };
    return {
      store,
      sidebarType,
      toggleSidebar,
    };
  },
};
</script>
