<template>
  <div class="col-sm-12 mt-3">
    <iq-card class="iq-card">
      <div class="iq-card-body p-0">
        <div class="image-block text-center">
          <img src="@/assets/images/registration-review.png" class="img-fluid rounded w-25" alt="blog-img">
        </div>

        <h2 class="text-center mt-3">انتظر تفعيل حسابك</h2>
        <h4 class="text-center mb-3">
          يقوم الفريق المختص بمراجعة طلبك
        </h4>
      </div>
      <a href="javascript:void(0);" class="d-flex align-items-center m-3" @click="logout">
        <i class="material-symbols-outlined">logout</i>
        <span class="mobile-text d-lg-none ms-3">تسجيل خروج</span>
      </a>

    </iq-card>

  </div>
</template>
<script>
export default {
  name: "ActiveUser",
  methods:{
    logout(){
      this.$store.dispatch('logout');
      this.$router.push('/auth/signin')
    }
  }
};
</script>