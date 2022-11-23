<template>
      <div>
      <iq-card id="post-modal-data" body-class="iq-card iq-card-block iq-card-stretch iq-card-height">
        <template v-slot:body>
          <div class="d-flex align-items-center">
            <form @submit.prevent="submitUpdate" class="post-text ml-3 w-100 row" v-if="book">
              <div class="form-group col-6">
                <select class="form-select" data-trigger name="choices-single-default" id="choices-single-default"
                  v-model="v$.updateForm.pageStart.$model">
                  <option value="">اختر صفحة البداية</option>
                  <option v-for="(i, index) in book.pages" :key="index" :value="i">
                    {{ i }}
                  </option>
                </select>
                <small style="color:red;" v-if="v$.updateForm.pageStart.$error">الرجاء قم بادخال صفحة البداية</small>
              </div>  
              <div class="form-group col-6">
                <select class="form-select" data-trigger name="choices-single-default" id="choices-single-default"
                  v-model="v$.updateForm.pageEnd.$model">
                  <option value="">اختر صفحة النهاية</option>
                  <option v-for="(i, index) in book.pages" :key="index" :value="i">
                    {{ i }}
                  </option>
                </select>
                <small style="color: red" v-if="v$.thesis.pageEnd.$error"
                >{{pageError ? pageError :' الرجاء قم بادخال صفحة النهاية'}}</small
              >
              </div>
              <div class="form-group">
                <label class="form-label" for="thesisBody">الأطروحة</label>
                <textarea rows="5" placeholder="... اكتب أطروحتك" class="rounded form-control" id="thesisBody"
                  v-model="v$.updateForm.text.$model"></textarea>
                <p class="error" v-if="v$.updateForm.text.$error">الرجاء قم بكتابة الأطروحة </p>
              </div>
  
              <div class="form-group">
                <label class="form-label" for="customFile">صورة من مجموعة السفراء</label>
              <input class="form-control" type="file" id="customFile" ref="file" @change="uploadFile" multiple />
                <small style="color:red;" v-if="v$.updateForm.file.$error">الرجاء قم برفع صورة او صورتين</small>
              </div>  
              <input type="submit" value="تعديل" href="javascript:void(0);" class="btn btn-primary d-block mt-3" />
            </form>
          </div>
          <hr />
        </template>
      </iq-card>
    </div>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required, integer, requiredIf } from "@vuelidate/validators";
import thesisServices from '../../api/thesisServices'
export default {
  name: "UpdateThesis",
  created(){
    this.getThesis()
    console.log(this.updateForm)
    console.log('s')
    this.updateForm.text=this.thesisToupdate.thesis_text;
    this.updateForm.pageStart=this.thesisToupdate.starting_page;
    this.updateForm.pageEnd=this.thesisToupdate.ending_page;

  },
  
  setup() {
    return { v$: useVuelidate() };
  },
  props: {
    book: {
      type: [Object],
      required: true,
    },
    noOfThesis: {
      type: [Number],
      required: true,
    },
    thesisToupdate: {
      type: [Object],
      required: true,
    },
  },
  data() {
    return {
      thesisToupdate:{},
      updateForm: {
        text: "",
        pageStart: "",
        pageEnd: "",
      
        pages:0,
      },pageError:''

    };
  },
  validations() {
    return {
      updateForm: {
        text: {
          required,
        },
        pageStart: {
          required,
        },
        pageEnd: {
       required,valdiatePages:this.validatePages
        },
        file: {
          required: requiredIf(function (nestedModel) {
            return this.updateForm.file.length == 0; // New changes
          }),
        },
      },
    };
  },
  methods: {
     validatePages(){
      const error =  parseInt(this.thesis.pageStart) < parseInt(this.thesis.pageEnd)
      console.log(error)
      if(!error)this.pageError = 'يجب ان تكون صفحة البداية اقل من صفحة النهاية'
      else this.pageError = ''
      return error;
    }
    ,
    async submitUpdate() {
  
      this.v$.$touch();
      if (!this.v$.thesis.$invalid) {
          const thesis = await thesisServices.updateThesis(this.thesis,this.$route.params.id)
      } 
    },
      uploadFile() { 
        console.log(this.$refs)
      // this.updateForm.file = this.$refs.file.files;
    },
    async getThesis(){
      const thesis= await thesisServices.getById(this.$route.params.id);
      this.thesisToupdate = thesis;
    }
  },
};
</script>
