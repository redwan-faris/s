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
        <div class="col-sm-6 bg-white pt-5">
          <div class="sign-in-from">
            <h1 class="mb-0">تسجيل الدخول</h1>
            <p>الرجاء ادخال الايميل والرمز السري الخاص بك</p>
            <form class="mt-4" @submit.prevent="submit">
              <div class="form-group">
                <label class="form-label" for="exampleInputEmail1">الايميل</label>

                <input type="email" class="form-control mb-0" id="exampleInputEmail1" placeholder="ادخال الايميل هنا"
                  v-model="v$.form.email.$model">
                <p style="color:red"  v-if="v$.form.email.$error">الرجاء قم بادخال البريد الالكتروني</p>
              </div>
              <div class="form-group">
                <label class="form-label" for="exampleInputPassword1">الرمز السري</label>
                <input type="password" class="form-control mb-0" id="exampleInputPassword1"
                  placeholder="ادخال الرمز السري هنا" v-model="v$.form.password.$model">
                <p style="color:red" v-if="v$.form.password.$error">الرجاء قم بادخال كلمة السر</p>
              </div>
              <router-link :to="{ name: 'auth1.forgot-password'}" class="float-end">هل نسيت كلمة السر؟</router-link>
              <div class="d-inline-block w-100">
             
                <button type="submit" class="btn btn-primary ">تسجيل الدخول</button>
                <div v-if="error" class="alert alert-danger">{{ error }}</div>
              </div>
              <div class="sign-info">
                <span class="dark-color d-inline-block line-height-2">لا تملك حساب؟<router-link  to="/auth/signup"> سجل الأن</router-link></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default {
  name: 'SignIn1',
  setup() {
    return { v$: useVuelidate() }
  },
  components: {},
  data() {
    return {
      form: {
        email: '',
        password: '',
  

      },
      error: '',
      submitStatus: null,
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
    async submit() {
      this.v$.$touch()
      if (this.v$.form.$invalid) {
        console.log('hi')
      } else {
        const res =await this.$store.dispatch('login', {
          email: this.form.email,
          password: this.form.password
        });
        console.log('hi')
        this.$router.push({ name: 'social.book' })
      }
    }
  },
  validations() {
    return {
      form: {
        email: {
          required,
          email
        },
        password: {
          required,
          min: minLength(8)
        },

      },
    }
  },
}
</script>

<style lang="scss" scoped>
h1,
h4,
p,
title,
form {
  direction: rtl;
}

.form-check {
  float: left;
}

a.float-end {
  margin-top: 10px;
}
</style>