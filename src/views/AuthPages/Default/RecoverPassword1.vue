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
          <a class="sign-in-logo mb-5" href="#"><img src="@/assets/images/logo-full.png" class="img-fluid" alt="logo"></a>
          <Swiper :options="options">
            <SwiperSlide  class="item">
              <img src="@/assets/images/login/1.png" class="img-fluid mb-4" alt="logo">
            </SwiperSlide>
            <SwiperSlide class="item">
              <img src="@/assets/images/login/2.png" class="img-fluid mb-4" alt="logo">
            </SwiperSlide>
            <SwiperSlide class="item">
              <img src="@/assets/images/login/3.png" class="img-fluid mb-4" alt="logo">
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div class="col-sm-6 bg-white pt-5">
        <div class="sign-in-from">
          <h1 class="mb-0">إعادة تعيين كلمة المرور</h1>
          <p>ادخل الايميل الخاص بك وسنرسل لك خطوات بأعادة تعيين كلمة المرور</p>
          <form class="mt-4" @submit.prevent="onSubmit()">

            <div class="form-group">
              <label for="exampleInputEmail1">الايميل</label>
              <input type="email" class="form-control mb-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ادخال الأيميل هنا">
            </div>

            <div class="d-inline-block w-100">
              <button type="submit" class="btn btn-primary float-end">اعادة تعيين كلمة المرور</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>

import Swiper from '../../../components/custom/slider/Swiper'
import SwiperSlide from '../../../components/custom/slider/SwiperSlide'
export default {
  name: 'RecoverPassword1',
  components: { Swiper, SwiperSlide },
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