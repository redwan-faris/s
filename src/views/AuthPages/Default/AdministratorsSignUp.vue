<template>
<section class="sign-in-page">
    <div id="container-inside">
      <div id="circle-small"></div>
      <div id="circle-medium"></div>
      <div id="circle-large"></div>
      <div id="circle-xlarge"></div>
      <div id="circle-xxlarge"></div>
    </div>
    <div class="container p-0">
      <div class="row no-gutters">
        <div class="col-md-6 text-center pt-5">
          <div class="sign-in-detail text-white">
          </div>
        </div>
        <div class="col-sm-6 bg-white pt-2">
          <div class="sign-in-from">
            <h1 class="mb-0">انشاء حساب</h1>
            <form class="mt-2" @submit.prevent="onSubmit()">
              <div class="form-group">
                <label for="exampleInputEmail1">الاسم</label>
                <input type="text" class="form-control mb-0" id="exampleInputEmail1" placeholder="ادخال الاسم هنا">
              </div>
              <div class="form-group">
                <label for="exampleInputEmail2">الايميل</label>
                <input type="email" class="form-control mb-0" id="exampleInputEmail2" placeholder="ادخال الايميل هنا">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">الرمز السري</label>
                <input type="password" class="form-control mb-0" id="exampleInputPassword1" placeholder="ادخال ارمز السري هنا">
              </div>
              <div class="form-group col-6">
                <select class="form-select" data-trigger name="choices-single-default" id="choices-single-default">
                  <option value="">تسجيل كــ </option>
                  <option value="Choice 1">مراجع</option>
                  <option value="Choice 2">مدقق</option>
                </select>
              </div>
              <div class="d-inline-block w-100">
                <button type="submit" class="btn btn-primary float-end" >انشاء حساب</button>
              </div>
              
              <div class="sign-info">
                <span class="dark-color d-inline-block line-height-2"> تملك حساب؟<router-link
                  :to="{ name: 'auth1.sign-in1'}"> تسجيل الدخول </router-link></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</section>
</template>
<script>

export default {
  name: 'SignUp',
  components: {  },
  data () {
    return {
      options: {
        centeredSlides: false,
        loop: false,
        slidesPerView: 1,
        autoplay: {
          delay: 3000
        },
        spaceBetween: 15,
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      }
    }
  },
  methods: {
    onSubmit () {
      this.$router.push({ name: 'auth1.sign-in1' })
    }
  }
}
</script>

<style lang="scss" scoped>
    h1, h4, p, title, form{
    direction: rtl;
  }
  .form-check {
    float: left;
  }
  a.float-end{
    margin-top: 10px;
  }
</style>
