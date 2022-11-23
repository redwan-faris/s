<template>
  <div>
    <iq-card
      id="post-modal-data"
      body-class="iq-card iq-card-block iq-card-stretch iq-card-height"
    >
      <template v-slot:headerTitle>
        <h4 class="card-title">إضافة الأطروحة {{ noOfthesis + 1 }}</h4>
      </template>
      <template v-slot:body>
        <div class="d-flex align-items-center">
          <form
            @submit.prevent="submit"
            class="post-text ml-3 w-100 row"
            v-if="book"
          >
            <div class="form-group col-6">
              <select
                class="form-select"
                data-trigger
                name="choices-single-default"
                id="choices-single-default"
                v-model="v$.thesis.pageStart.$model"
              >
                <option value="">اختر صفحة البداية</option>
                <option
                  v-for="(i, index) in book.pages"
                  :key="index"
                  :value="i"
                >
                  {{ i }}
                </option>
              </select>
              <small style="color: red" v-if="v$.thesis.pageStart.$error"
                >الرجاء قم بادخال صفحة البداية</small
              >
            </div>
            <div class="form-group col-6">
              <select
                class="form-select"
                data-trigger
                name="choices-single-default"
                id="choices-single-default"
                v-model="v$.thesis.pageEnd.$model"
              >
                <option value="">اختر صفحة النهاية</option>
                <option
                  v-for="(i, index) in book.pages"
                  :key="index"
                  :value="i"
                >
                  {{ i }}
                </option>
              </select>
              <small style="color: red" v-if="v$.thesis.pageEnd.$error">{{
                pageError ? pageError : " الرجاء قم بادخال صفحة النهاية"
              }}</small>
            </div>
            <div class="form-group">
              <label class="form-label" for="thesisBody">الأطروحة</label>
              <textarea
                rows="5"
                placeholder="... اكتب أطروحتك"
                class="rounded form-control"
                id="thesisBody"
                v-model="v$.thesis.text.$model"
              ></textarea>
              <p style="color: red" v-if="v$.thesis.text.$error">
                لطفًا قم بكتابة اطروحة عدد حروفها بين 500  و 1800             
              </p>
            </div>

            <div class="form-group">
              <label class="form-label" for="customFile"
                >صورة من مجموعة السفراء</label
              >
              <input
                class="form-control"
                type="file"
                id="customFile"
                ref="file"
                @input="thesis.image_1 = $event.target.files[0]"
              />
              <small style="color: red" v-if="v$.thesis.image_1.$error"
                >الرجاء قم برفع صورة
              </small>
            </div>
            <input
              type="submit"
              value="إضافة"
              href="javascript:void(0);"
              class="btn btn-primary d-block mt-3"
            />
          </form>
        </div>
        <hr />
      </template>
    </iq-card>
  </div>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required, helpers, requiredIf,minLength, maxLength } from "@vuelidate/validators";
import thesisServices from "../../api/thesisServices";

export default {
  name: "CreateThesis",
  created() {
    this.getPhotosCount()
  },
  setup() {
    return { v$: useVuelidate() };
  },
  props: {
    book: {
      type: [Object],
      required: true,
    },
    user_book_id: {
      type: [Number],
      required: true,
    },
    noOfthesis: {
      type: [Number],
      required: true,
    },
  },
  data() {
    return {
      photos_count:0,
      thesis: {
        text: "",
        pageStart: "",
        pageEnd: "",
        image_1: [],
        pages: 0,
      },
      pageError: "",
      imageFlage: false,
    };
  },
  validations() {
    return {
      thesis: {
        text: {
          required,
          minLength: minLength(500),
          maxLength: maxLength(1800)

        },
        pageStart: {
          required,
        },
        pageEnd: {
          required,
          valdiatePages: this.validatePages,
        },
        image_1: {
          required: requiredIf(function (nestedModel) {
            return this.thesis.image_1.length == 0 && this.photos_count < 3; // New changes
          }),
        },
      },
    };
  },
  methods: {
 
    validatePages(){
      const error =  parseInt(this.thesis.pageStart) < parseInt(this.thesis.pageEnd)
      if(!error)this.pageError = 'يجب ان تكون صفحة البداية اقل من صفحة النهاية'
      else this.pageError = ''
 
      return error;
    },
    async submit() {
      this.v$.$touch();
      if (!this.v$.thesis.$invalid) {
        const thesis = await thesisServices.createThesis(
          this.thesis,
          this.user_book_id
        );
        this.thesis.text = "";
        this.thesis.pageEnd = "";
        this.thesis.pageStart = "";
        this.thesis.image_1 = [];
      
        this.$refs.file.value = null;
        this.v$.thesis.$reset();
        this.getPhotosCount();
        this.$emit("addThesis", thesis.data.data);
      }
    },
    uploadFile() {
      this.thesis.file = this.$refs.file.files;
    },
    async getPhotosCount(){
      const count = await thesisServices.getPhotosCount(this.user_book_id);
      this.photos_count = count ;
    }
  },
};
</script>
