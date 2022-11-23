<template>
    <div class="row">
        <div class="col-sm-12">
            <iq-card>
                <div class="iq-card-body profile-page p-0">
                    <div class="profile-header">
                        <div class="cover-container">
                            <img src="../../assets/images/book-banner.png" alt="profile-bg" class="rounded img-fluid" />
                        </div>
                        <div class="user-detail text-center mb-3">
                            <div class="profile-img">
                                <img src="../../assets/images/reader.png" alt="profile-img"
                                    class="avatar-130 img-fluid" />
                            </div>
                            <div class="profile-detail mt-1">
                                <br />
                                <h3 class="" v-if="book">{{book.book_name}} - قسم الأسئلة العامة</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </iq-card>
            <iq-card class="iq-card">
                <div class="iq-card-body p-0">
                    <div class="user-tabing">
                        <tab-nav :pills="true" id="pills-tab"
                            class="nav nav-pills d-flex align-items-center justify-content-center profile-feed-items p-0 m-0">
                            <tab-nav-items class="w-100 p-0" :active="true" id="pills-feed-tab"
                                href="#questions_container" ariaControls="pills-home" role="tab" :ariaSelected="true"
                                title="المرحلة الثالثة - الاسئلة المعرفية" />
                        </tab-nav>
                    </div>
                </div>
            </iq-card>
        </div>
        <div class="col-sm-12">
            <div class="tab-content">
                <!-- START QUESTIONS -->
                <tab-content-item :active="true" id="questions_container" aria-labelled-by="pills-feed-tab">
                    <div class="iq-card-body p-0">
                        <div class="row">
                            <div class="col-12">
                                <div id="post-modal-data" class="iq-card">
                                    <div>
                                        <iq-card id="post-modal-data" v-if="(questions.length < 12 && auditable) || questions.length==0"
                                            body-class="iq-card iq-card-block iq-card-stretch iq-card-height">
                                            <template v-slot:headerTitle>
                                                <h4 class="card-title">إضافة الأسئلة والاقتباسات</h4>
                                            </template>
                                            <template v-slot:body>
                                                <div class="d-flex align-items-center">
                                                    <div class="d-flex align-items-center mt-3 w-100">
                                                        <form v-if="book" @submit.prevent="submitQuestionForm"
                                                            class="post-text ml-3 w-100 row">
                                                            <div class="form-group col-6">
                                                                <select v-model="v$.questionForm.starting_page.$model"
                                                                    class="form-select" data-trigger
                                                                    name="choices-single-default"
                                                                    id="choices-single-default">
                                                                    <option value="">اختر صفحة البداية</option>
                                                                    <option v-for="(i, index) in book.pages"
                                                                        :key="index" :value="i">
                                                                        {{ i }}
                                                                    </option>
                                                                </select>
                                                                <small style="color: red"
                                                                    v-if="v$.questionForm.starting_page.$error">{{pageError
                                                                    ? pageError
                                                                    :'الرجاء قم بادخال صفحة البداية'}}</small>
                                                            </div>
                                                            <div class="form-group col-6">
                                                                <select class="form-select"
                                                                    v-model="v$.questionForm.ending_page.$model"
                                                                    data-trigger name="choices-single-default"
                                                                    id="choices-single-default">
                                                                    <option value="">اختر صفحة النهاية</option>
                                                                    <option v-for="(i, index) in book.pages"
                                                                        :key="index" :value="i">
                                                                        {{ i }}
                                                                    </option>
                                                                </select>
                                                                <small style="color: red"
                                                                    v-if="v$.questionForm.ending_page.$error">{{pageError
                                                                    ? pageError :` الرجاء قم بادخال صفحة
                                                                    النهاية`}}</small>
                                                            </div>
                                                            <div class="form-group">
                                                                <textarea rows="5" placeholder="... اكتب سؤالًا "
                                                                    class="rounded form-control" id="bookQuestion"  @change="resetInsertSuccessfully()"
                                                                    v-model="v$.questionForm.question.$model"></textarea>
                                                                <small style="color:red;"
                                                                    v-if="v$.questionForm.question.$error">
                                                                    لطفًا قم بكتابة سؤال عدد حروفه بين 100 و 250
                                                                </small>
                                                            </div>
                                                            <div>
                                                            </div>
                                                            <div class="form-group">
                                                                <h4 class="card-title">الاقتباسات </h4>
                                                                <textarea rows="5" placeholder="... اكتب اقتباسًا "
                                                                    v-for="(v,index) in questionForm.quotes"
                                                                    :key="index" class="rounded form-control mt-2"
                                                                    id="bookQuote" v-model="v.text">
                                                                </textarea>
                                                                <small style="color:red;"
                                                                    v-if="v$.questionForm.quotes.$error">
                                                                    قم بادخال اقتباس واحد على الاقل عدد حروفه لا يزيد عن
                                                                    250
                                                                </small>
                                                                <hr>
                                                                <a class="btn btn-primary rounded-pill mb-3 me-1"
                                                                    @click="addField(textarea, questionForm.quotes)">
                                                                    اضافة اقتباس
                                                                </a>
                                                                <a class="btn btn-danger rounded-pill mb-3 me-1"
                                                                    v-show="questionForm.quotes && questionForm.quotes.length > 1"
                                                                    @click="removeField(index, questionForm.quotes)">
                                                                    حذف اقتباس
                                                                </a>
                                                            </div>
                                                            <input type="submit" value="أضافة"
                                                                href="javascript:void(0);"
                                                                class="btn btn-primary d-block mt-3" />
                                                        </form>
                                                    </div>
                                                </div>
                                                <hr />
                                            </template>
                                        </iq-card>
                                    </div>
                                </div>
                                <alert v-if="insertSuccessful" variant="primary"
                                    className="d-flex align-items-center text-center">
                                    <template v-slot>
                                        <div>
                                            <h5 class="card-title">
                                                تمت الاضافة بنجاح
                                            </h5>
                                        </div>
                                    </template>
                                </alert>

                                <iq-card v-if="questions.length>0">
                                    <template v-slot:headerTitle>
                                        <h4 class="card-title">الأسئلة</h4>
                                    </template>
                                    <template v-slot:body>
                                        <form id="form-wizard1" class="text-center mt-3">
                                            <ul id="top-tab-list" class="p-0 row list-inline">
                                                <li v-for="(question,index) in  questions" :key="index"
                                                    :class="checkActive(index, index+1)" class="col-2 mb-2 text-start"
                                                    @click="changeTab(index+1)" id="account">
                                                    <a href="javascript:void(0);">
                                                        <span> {{ index+1 }}</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <!-- fieldsets -->
                                            <fieldset v-for="(question,index) in  questions" :key="index"
                                                :class="current == index+1 ? 'd-block' : 'd-none'">
                                                <ListQuestion :question="question" :index='index' :book="book"
                                                    :user_book="user_book" />
                                            </fieldset>
                                        </form>
                                    </template>
                                </iq-card>

                                <div class="col-lg-12">
                                    <iq-card>
                                        <template v-slot:body>
                                            <button class="btn btn-primary d-block w-100 mb-3" @click="reviewQuestions" v-if="questions.length >= 5 && auditable">
                                                اعتماد
                                            </button>
                                            <button class="btn btn-success d-block w-100" @click="back()">
                                                عودة لصفحة الانجاز 
                                            </button>
                                        </template>
                                    </iq-card>
                                </div>
                            </div>
                        </div>
                    </div>
                </tab-content-item>
                <!-- END QUESTIONS -->
            </div>
        </div>
    </div>
</template >
<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";
import ListQuestion from "../../components/Questions/ListQuestion.vue";
import questionServices from '../../api/questionServices'

export default {
    name: "Questions",
    async created() {
        await this.getQuestions();
    },
    setup() {
        return { v$: useVuelidate() };
    },
    components: {
        ListQuestion,
    },
    data() {
        return {
            auditable: false,
            book: null,
            user_book: null,
            status: "",
            pageError: '',
            questionForm: {
                question: '',
                starting_page: "",
                ending_page: "",
                user_book_id: null,
                quotes: [
                    { text: '' }
                ]
            },
            questions: [],
            show: "",
            current: 1,
            insertSuccessful: false
        };
    },
    validations() {
        return {
            questionForm: {
                question: {
                    required,
                    minLength: minLength(100),
                    maxLength: maxLength(250)
                }, starting_page: {
                    required
                },
                ending_page: {
                    required, valdiatePages: this.validatePages
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
        async getQuestions() {
            const response = await questionServices.getByBook(this.$route.params.id);
            this.book = response.user_book.book
            this.questions = response.questions
            this.user_book = response.user_book
            this.questionForm.user_book_id = response.user_book.id;
            this.status = this.user_book.status
            this.auditable = this.questions.some((element) => {
                if (element.status === "retard" || element.status === null) {
                    return true;
                }
                return false;
            });

        },
        resetInsertSuccessfully(){
            this.insertSuccessful = false;
        },
        async submitQuestionForm() {
            this.v$.$touch();

            if (!this.v$.questionForm.$invalid) {
                this.insertSuccessful=false
                const question = await questionServices.addQuestion(this.questionForm);
                this.questionForm.question = "";
                this.questionForm.starting_page = "";
                this.questionForm.ending_page = "";
                this.questionForm.quotes = [{ text: '' }];
                this.v$.questionForm.$reset()
                this.questions.push(question)
                this.auditable = true
                this.insertSuccessful = true

            }
        },
        validatePages() {
            const error = parseInt(this.questionForm.starting_page) < parseInt(this.questionForm.ending_page)
            if (!error) this.pageError = 'يجب ان تكون صفحة البداية اقل من صفحة النهاية'
            else this.pageError = ''
            return error;
        },
        async reviewQuestions() {
            const swalWithBootstrapButtons = this.$swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-primary btn-lg',
                    cancelButton: 'btn btn-outline-primary btn-lg ms-2'
                },
                buttonsStyling: false
            })
            swalWithBootstrapButtons.fire({
                title: 'هل أنت متأكد؟',
                text: "في حال الاعتماد لن يمكنك اضافة سؤال جديد أو التعديل على الأسئلة التي كتبتها ",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'نعم قم بالاعتماد ',
                cancelButtonText: 'تراجع  ',
                showClass: {
                    popup: 'animate__animated animate__zoomIn'
                },
                hideClass: {
                    popup: 'animate__animated animate__zoomOut'
                }
            })
                .then((willDelete) => {
                    if (willDelete.isConfirmed) {
                        questionServices.reviewQuestion(this.user_book.id)
                            .then(response => {
                                swalWithBootstrapButtons.fire({
                                    title: 'تم الارسال',
                                    text: 'تم اعتماد الأسئلة',
                                    icon: 'success',
                                    showClass: {
                                        popup: 'animate__animated animate__zoomIn'
                                    },
                                    hideClass: {
                                        popup: 'animate__animated animate__zoomOut'
                                    }
                                })
                                this.auditable = false;
                                this.insertSuccessful = false;

                            })
                            .catch(error => {
                                console.log(error)
                            })
                    }
                })
        },

        addField(value, fieldType) {

            fieldType.push({ text: "" });
        },
        removeField(index, fieldType) {
            fieldType.splice(index, 1);
        },

        back() {
            this.$router.push({ name: `achievement.steps`, params: { id: this.$route.params.id } })
        },
        changeTab(tab) {
            this.current = tab
            window.scrollTo({ behavior: 'smooth' })
        },
        checkActive(item, active) {
            let className = ''
            if (this.current > item) {
                className = 'active'
            }
            if (this.current > active) {
                className = className + ' done'
            }
            return className
        }

    },
};
</script>
  