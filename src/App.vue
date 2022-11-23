<template>
  <router-view/>
</template>
<script>
import EventBus from "./common/EventBus";
export default {
  name: 'App',
    beforeMount() {
    EventBus.remove("logout");
  },
  mounted () {
        EventBus.on("logout", () => {
      this.logOut();
    });
  },
  methods:{
     logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
}
</script>

<style lang="scss">
  @import "./assets/scss/socialv.scss";
  @import "./assets/scss/customizer.scss";
  @import url("./plugins/Leaflet/leaflet.css");
  @import url("./plugins/fullcalendar/core/main.css");
  @import url("./plugins/fullcalendar/daygrid/main.css");
  @import url("./plugins/fullcalendar/timegrid/main.css");
  @import url("./plugins/fullcalendar/list/main.css");
</style>
