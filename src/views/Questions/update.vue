<template>
  <div class="col-sm-12 mt-3 text-center">
    <iq-card class="iq-card">
      <div class="iq-card-header-toolbar d-flex align-items-center mx-auto">
        <h3 class="text-center mt-3 mb-3">
          تعديل سؤال
        </h3>
      </div>
      <div class="iq-card-body p-3">
        <div class="image-block text-center">
          <img src="@/assets/images/update-forms.png" class="img-fluid rounded w-50" alt="blog-img">
        </div>

        <div class="d-flex align-items-center mt-3"
          v-if="questionToupdate.status == null || questionToupdate.status == 'retard'  ">
          <form  @submit.prevent="submitQuestionUpdate" class="post-text ml-3 w-100 row">
            <div class="form-group col-6">
              <select :disabled="message" v-model="v$.questionForm.starting_page.$model" class="form-select" data-trigger
                name="choices-single-default" id="choices-single-default">
                <option value="">اختر صفحة البداية</option>
                <option v-for="(i, index) in book.pages" :key="index" :value="i">
                  {{ i }}
                </option>
              </select>
              <small style="color: red" v-if="v$.questionForm.starting_page.$error"
                >{{pageError ? pageError :' الرجاء قم بادخال صفحة البداية'}}</small
              >
            </div>
            <div class="form-group col-6">
              <select :disabled="message" class="form-select" v-model="v$.questionForm.ending_page.$model" data-trigger
                name="choices-single-default" id="choices-single-default">
                <option value="">اختر صفحة النهاية</option>
                <option v-for="(i, index) in book.pages" :key="index" :value="i">
                  {{ i }}
                </option>
              </select>
               <small style="color: red" v-if="v$.questionForm.ending_page.$error"
                >{{pageError ? pageError :' الرجاء قم بادخال صفحة النهاية'}}</small
              >
            </div>

            <div class="form-group">
              <textarea :disabled="message" rows="5" placeholder="... اكتب سؤالًا " class="rounded form-control" id="bookQuestion"
                v-model="v$.questionForm.question.$model"></textarea>
              <small style="color:red;" v-if="v$.questionForm.question.$error">
                لطفًا قم بكتابة سؤال عدد حروفه بين 100  و 250
              </small>
            </div>
            <hr>
            <div class="form-group">
              <h4>الاقتباسات</h4>
              <textarea :disabled="message" rows="5" placeholder="... اكتب اقتباسًا " v-for="(v,index) in questionForm.quotes" :key="index"
                class="rounded form-control mt-2" id="bookQuote" v-model="v.text">
                </textarea>
              <small style="color:red;" v-if="v$.questionForm.question.$error">
                قم بادخال اقتباس واحد على الاقل عدد حروفه لا يزيد عن 250
              </small>
              <a  v-if='!message' class="btn btn-primary rounded-pill mb-3 me-1 mt-3" @click="addField(textarea, questionForm.quotes)">
                اضافة اقتباس
              </a>
              <a v-if='!message' class="btn btn-danger rounded-pill mb-3 me-1 mt-3"
                v-show="questionForm.quotes && questionForm.quotes.length > 1"
                @click="removeField(index, questionForm.quotes)">
                حذف اقتباس
              </a>
            </div>
            <hr>
            <div class="col-sm-12 text-center" v-if="loader">
              <img src="../../assets/images/page-img/page-load-loader.gif" alt="loader" style="height: 100px;">
            </div>
            <h4 class="text-center mt-3 mb-3" v-if="message"> {{message}}</h4>
            <div class="d-inline-block w-100 text-center">
              <button type="" @click="back()" class="btn d-block btn-primary mt-3 mb-3 w-75 mx-auto" v-if="message">
                عودة لصفحة الأنجاز
              </button>
              <input type="submit" value="تعديل" href="javascript:void(0);" class="btn btn-primary d-block mt-3 w-100"
                v-else />
            </div>
          </form>
        </div>
        <div class="d-flex align-items-center mt-3 row" v-else>
          <h4 class="text-center mt-3 mb-3 col-12"> لا يمكنك تعديل السؤال لأنه في حالة التقييم أو تم تقييمه</h4>
          <div class="d-inline-block w-100 text-center col-12">
            <button type="" @click="back()" class="btn d-block btn-primary mt-3 mb-3 w-75 mx-auto">
              عودة لصفحة الأنجاز
            </button>

          </div>
        </div>
      </div>
    </iq-card>
  </div>
</template>
<script>
import questionServices from '../../api/questionServices';
import useVuelidate from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";
export default {
  name: "UpdateQuestion",
  async created() {
    this.questionToupdate = await questionServices.getById(this.$route.params.id)
    this.book = this.questionToupdate.user_book.book
    this.questionForm.question = this.questionToupdate.question
    this.questionForm.user_book_id = this.questionToupdate.user_book.id
    this.questionForm.starting_page = this.questionToupdate.starting_page
    this.questionForm.ending_page = this.questionToupdate.ending_page
    this.questionForm.quotes = this.questionToupdate.quotation
  },
  components: {
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      loader: false,
      questionForm: {
        question: '',
        starting_page: "",
        ending_page: "",
        user_book_id:0,
        quotes: [
          { text: '' }
        ]
      },  pageError:'',
      book: [],
      message: null,
      questionToupdate:[],
    };
  },
  validations() {
    return {
      questionForm: {
        question: {
          required,
          minLength: minLength(100),
          maxLength: maxLength(250)

        },  starting_page: {
          required,valdiatePages:this.validatePages
        },
        ending_page: {
          required,valdiatePages:this.validatePages
        }, quotes: {
          required,
          minLength: minLength(1),
          $each: {
            text: {
              minLength: minLength(250)
            }
          }
        }
      }
    };
  },
  methods: {
       validatePages(){
      const error =  parseInt(this.questionForm.starting_page) < parseInt(this.questionForm.ending_page)
      if(!error)this.pageError = 'يجب ان تكون صفحة البداية اقل من صفحة النهاية'
      else this.pageError = ''
      return error;
    },
    addField(value, fieldType) {
      fieldType.push({ text: "" });
    },
    removeField(index, fieldType) {
      fieldType.splice(-1);
    },
    async submitQuestionUpdate() {
      this.v$.$touch(); 
      if (!this.v$.questionForm.$invalid) {
        this.message = "";
        this.loader = true;
        const question = await questionServices.updateQuestion(this.questionForm, this.questionToupdate.id);
      
        this.questionForm.question = question.question;
        this.questionForm.pageEnd = question.ending_page;
        this.questionForm.pageStart = question.starting_page; 
        this.v$.questionForm.$reset()
        this.loader = false;
        this.message = "تم التعديل بنجاح"
      }


    },
    back() {
      this.$router.push({ name: 'achievement.questions' , params: { id: this.questionToupdate.user_book.book.id } })
    }
  },
};
</script>
