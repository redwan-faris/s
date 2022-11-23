<template>
  <div class="col-sm-12 mt-3">
    <iq-card class="iq-card">
      <div class="iq-card-header-toolbar d-flex align-items-center mx-auto">
        <h3 class="text-center mt-3 mb-3">تعديل الاطروحة</h3>
      </div>
      <div class="iq-card-body p-3">
        <div class="image-block text-center">
          <img
            src="@/assets/images/update-forms.png"
            class="img-fluid rounded w-50"
            alt="blog-img"
          />
        </div>

        <div
          class="d-flex align-items-center mt-3"
          v-if="
            thesisToupdate.status == null || thesisToupdate.status == 'retard'
          "
        >
          <form @submit.prevent="submit" class="post-text ml-3 w-100 row">
            <div class="form-group col-6">
              <select
                class="form-select"
                data-trigger
                name="choices-single-default"
                id="choices-single-default"
                v-model="v$.thesis.starting_page.$model"
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
             <small style="color: red" v-if="v$.thesis.starting_page.$error"
                >{{pageError ? pageError :' الرجاء قم بادخال صفحة البداية'}}</small
              >
            </div>
            <div class="form-group col-6">
              <select
                class="form-select"
                data-trigger
                name="choices-single-default"
                id="choices-single-default"
                v-model="v$.thesis.ending_page.$model"
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
                <small style="color: red" v-if="v$.thesis.ending_page.$error"
                >{{pageError ? pageError :' الرجاء قم بادخال صفحة النهاية'}}</small
              >
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
                الرجاء قم بكتابة الأطروحة
              </p>
            </div>

 

            <div class="col-sm-12 text-center" v-if="loader">
              <img
                src="../../assets/images/page-img/page-load-loader.gif"
                alt="loader"
                style="height: 100px"
              />
            </div>
            <h4 class="text-center mt-3 mb-3" v-if="message">{{ message }}</h4>
            <div class="d-inline-block w-100 text-center">
              <button
                type=""
                @click="back()"
                class="btn d-block btn-primary mt-3 mb-3 w-75 mx-auto"
                v-if="message"
              >
                عودة لصفحة الأنجاز
              </button>
              <input type="submit" value="تعديل" href="javascript:void(0);" class="btn btn-primary d-block mt-3 w-100"
                v-else />
          </div>
            
          </form>
          
        </div>
        
        <div class="d-flex align-items-center mt-3 row" v-else>
          <h4 class="text-center mt-3 mb-3 col-12">
            لا يمكنك تعديل السؤال لأنه في حالة التقييم أو تم تقييمه
          </h4>
          <div class="d-inline-block w-100 text-center col-12">
            <button
              type=""
              @click="back()"
              class="btn d-block btn-primary mt-3 mb-3 w-75 mx-auto"
            >
              عودة لصفحة الأنجاز
            </button>
            
          </div>
          
        </div>
      </div>
      
    </iq-card>
    
  </div>

 <div class="col-sm-12 mt-3">
    <iq-card class="iq-card">
       <div class="iq-card-header-toolbar d-flex align-items-center mx-auto">
        <h3 class="text-center mt-3 mb-3">تعديل صور الاطروحة</h3>
      </div>
         <div class="iq-card-body p-3">
      <div class="user-post" v-if="thesis.photos">
              <div class="d-grid grid-rows-2 grid-flow-col gap-3">
                <div
                  class="row-span-2 row-span-md-1"
                  v-for="(image,index) in thesis.photos"
                  :key="image.id"
                >
                  <img
                    :src="resolve_img_url(image)"
                    alt="post-image"
                    class="img-fluid rounded w-100"
                  />
                  <hr>
                    <input
                class="form-control"
                type="file"
                id="customFile2"
                ref="file"
                @input="uploadImage(index,$event.target.files[0])"
                 
              />
              <small v-if="errors[index]" style="color:red"><p>الرجاء اختيار صورة اولا</p></small>
               <button
                type=""
                @click="updatePhoto(image,index)"
                class="btn d-block btn-primary mt-3 mb-3 w-75 mx-auto"
             
              >
              
                    تعديل
              </button> 
                 <button
                type=""
                @click="deletePhoto(image)"
                class="btn d-block btn-danger mt-3 mb-3 w-75 mx-auto"
                v-if="photosCount > 3"
              >
              
                    حذف
              </button> 
                </div>
               <div
                  class="row-span-2 row-span-md-1"
                  v-if="thesis.photos.length == 0" >
                  <img
                  src="@/assets/images/stage2.png"
                    alt="post-image"
                    class="img-fluid rounded w-100"
                  />
                  <hr>
                    <input
                class="form-control"
                type="file"
                id="customFile2"
                ref="file"
                   @input="uploadImage(2,$event.target.files[0])"
               
  
              />   <small v-if="errors[2]" style="color:red"><p>الرجاء اختيار صورة اولا</p></small>
               <button
                type=""
               
                class="btn d-block btn-primary mt-3 mb-3 w-75 mx-auto"
              @click="uploadNewThesisImage()"
              >
              
                    رفع صورة 
              </button> 
                  
               </div>
              </div>
            </div>
         </div>
             </iq-card>
             </div>
</template>
<script>
import thesisServices from "../../api/thesisServices";
import useVuelidate from "@vuelidate/core";
import { required, integer, requiredIf } from "@vuelidate/validators";
import IqCard from '../../components/custom/cards/iq-card.vue';
export default {
  name: "UpdateQuestion",
  async created() {
    this.thesisToupdate = await thesisServices.getById(this.$route.params.id);
     this.user_book_id = this.thesisToupdate.user_book.id
    this.book = this.thesisToupdate.user_book.book;
    this.thesis.text = this.thesisToupdate.thesis_text;
    this.thesis.ending_page = this.thesisToupdate.ending_page;
    this.thesis.starting_page = this.thesisToupdate.starting_page;
    this.thesis.photos = this.thesisToupdate.photos;
    await this.getPhotosCount();
    console.log(this.photosCount)
  },
  components: {IqCard},
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      user_book_id:0,
      loader: false,
      photosCount:0,
      thesis: { 
        text: "",
        starting_page: "",
        ending_page: "",
       
      },
      book: [],
      upload:[],
      files:[[],[],[]],
      message: "",
      thesisToupdate: [],
      errors:[false,false,false]
      ,pageError:''
    };
  },
  validations() {
    return {
      thesis: {
        text: {
          required,
        },
        starting_page: {
          required,valdiatePages:this.validatePages
        },
        ending_page: {
          required,valdiatePages:this.validatePages
        },
       
      },
    };
  },
  methods: {

    async uploadNewThesisImage(){
        await thesisServices.uploadPhoto(this.files[2],this.thesisToupdate.id);
        window.location.reload()
    },
    
    async getPhotosCount(){
      const  count = await thesisServices.getPhotosCount(this.user_book_id)
      this.photosCount = count;
   
    },
      async deletePhoto(image){
         await thesisServices.deletePhoto(image.id);
         window.location.reload();
    },
      validatePages(){
      const error =  parseInt(this.thesis.starting_page) < parseInt(this.thesis.ending_page)
      
      if(!error)this.pageError = 'يجب ان تكون صفحة البداية اقل من صفحة النهاية'
      else this.pageError = ''
      return error;
    },
    async submit() {
      this.v$.$touch();
      if (!this.v$.thesis.$invalid) {
        this.message = "";
        this.loader = true;
        const thesis = await thesisServices.updateThesis(
          this.thesis,
          this.$route.params.id
        );
      
        this.loader = false;
        this.message = "تم التعديل بنجاح";
      }
    },
    back() {
      this.$router.push({ name: 'achievement.theses' , params: { id: this.thesisToupdate.user_book.book.id } })
    },
    resolve_img_url: function (image) {
      const url = `http://127.0.0.1:8000/api/thesises/image?path=${image.path}`;
      return url;
    },
   async updatePhoto(image,index){
    
      if(this.files[index].length === 0){
        this.errors[index] = true
      }else{
     
      const res =  await thesisServices.updatePicture(this.files[index],image.path);
      this.thesis.photos[index] = res;
      }
    },
     
    uploadImage(index,file){
      this.files[index] = file;
      this.errors[index] = false;
    }
  },


  
};
</script>
