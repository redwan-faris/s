<template>
  <div class="row">
    <div class="col-12">
      <div v-if="rejected" class="alert alert-danger">
        <h4>تم رفض انجازك للاسباب التالية</h4>
        <p>{{ rejectedMsg }}</p>
      </div>
      <div v-else-if="retard" class="alert alert-danger">
        <h4>لديك انجاز يجب يجب اعادته</h4>
        <div v-if="retardTheses.length > 0" class="">
          <h5> الأطروحات</h5>
          <ul>
            <li v-for="(value, key) in retardTheses" :key="key">
              الأطروحة : {{ value }}
            </li>
          </ul>
        </div>
        <div v-if="retardQuestions.length > 0" class="">
          <h5> الأسئلة</h5>
          <ul>
            <li v-for="(value, key) in retardQuestions" :key="key">
              السؤال : {{ value }}
            </li>
          </ul>
        </div>
        <div v-if="retardGeneralInformations" class="">
          <h5> التلخيص العام</h5>
        </div>
      </div>
      <iq-card>
        <template v-slot:headerTitle>
          <h1 class="card-title">خطواتك نحو التوثيق</h1>
        </template>
        <template v-slot:body>
          <TimeLine :items="timelineItems" />
        </template>
      </iq-card>
    </div>
    <iq-card v-if="completionPercentage">
      <template v-slot:body>
        <h4 class="text-center mb-2"> املأ خزان ثقافتك بالقراءة </h4>
        <Chart :percintage=completionPercentage />
      </template>
      <div v-if="msg" class="col-12 alert alert-danger">
        <h5 class="text-center">{{ msg }}</h5>
      </div>
      <div v-else>
        <h3 class="text-center">
          التسليــم النهائــي </h3>
        <br />
        <h5 class="text-center mb-3">
          سيتم تمكينك من الضغط هنا فقط في حال اكمالك اعتماد كامل إجابتك أدناه
        </h5>
      <div class="col-12 d-flex justify-content-center mb-3">
        <input type="submit" value="تسليم" href="javascript:void(0);" class="btn btn-primary d-block w-75"
          @click="updateUserBook()" :disabled='isDisabled' />
      </div>
    </div>

    </iq-card>
  </div>

</template>
<script>
import userBookServices from '../../api/userBookServices'
import Chart from '../../components/chart.vue'
export default {
  name: 'Steps',
  components: {
    Chart,
  },
  mounted() {

  },
  async created() {
    await this.getByBookId();
  },
  data() {
    return {
      timelineItems: [
        {
          color: 'primary',
          title: 'الأطروحات',
          description: `تعتبر كتابة الأطروحة من المراحل السامية في القراءة النافعة، حيث تشكل عملية عقلية وحركية، تبدأ بتلقيك فكريًا لأفكار الكاتب ومعلومات الكتاب، ثم إعادة فرزها وتحليلها وإخضاعها لتجاربك وأفكارك الذاتية ومعلوماتك وخبراتك. فينتج عنها حركيًا كتابة لمزيج من الأفكار و الاراء في محاورتك لما طرحه الكاتب تنتج في سطور. نطلب منك هنا كحد أدنى (8) أطروحات شاملة في قراءتك لهذا الكتاب على أن تزودنا بتصوير الشاشة لأطروحتين على الأقل في مجموعة السفراء في منشور الكتاب المعني، علمًا أننا سنقوم بعمل جولة تفقدية للبحث عن هذه الأطروحات جميعها داخل مجموعة السفراء لتحصل على قبول التوثيق.`,
          child: {
            type: 'btn',
            route: {
              name: 'achievement.theses',
              param: this.$route.params.id,
            },
            items: [
            ]
          },
        },
        {
          color: 'primary',
          title: 'التلخيص العام',
          description: `
          <h4 class="mb-2">كيف اكتب المخلص العام، وكيف أحدد السؤال العام </h4>
          لكل مادة مقروءة (كتاب) هناك سؤالًا عامًا يسعى الكتاب لنقاشه، ومنه يتفرع
                                            الكتاب على شكل
                                            فصول أساسية ومن
                                            ثم مباحث داخل كل فصل. عند شروعك في قراءة الكتاب، عليك المرور على مقدمة
                                            المؤلف ومحاولة
                                            معرفة (السؤال
                                            العام) الذي يسعى الكتاب للإجابة عنه.
                                            <br />
                                            أمثلة 👇🏻
                                            <br />
                                            كتاب أغنى رجل في بابل = يدور السؤال العام حول كيفية صناعة الثروة المالية
                                            للفرد ✅
                                            <br />
                                            كتاب سيكولوجية الجماهير = يدور السؤال العام في الكتاب حول قدرة المسؤول على
                                            التحكم في
                                            الجماهير والشعوب
                                            من الناحية السكولوجية ✅
                                            <br />

                                            ومن جانب آخر، لكل مادة مقروءة (كتاب) هناك تلخيص عام للأفكار العامة والمحاور
                                            الأساسية
                                            التي يدور حولها
                                            الكتاب. فيجب على القارئ أن يستطيع دائمًا تقديم ملخص من الكتاب، ويستحسن
                                            استخدام أفكار
                                            الكاتب والفاظه
                                            باغتضاب لصناعة الملخص، لا تقم بإضافة أفكارك واعتقاداتك على المخلص، ستفعل ذلك
                                            حين تكتب
                                            الأطروحة حين تمزج
                                            ملخص الكاتب مع أفكارك وإسقاطاتك الفكرية ومخزونك المعرفي ومقارنته مع الكتاب.`,
          child: {
            type: 'btn',
            route: {
              name: 'achievement.general_summary',
              param: this.$route.params.id,
            },
            items: [
            ]

          }
        },
        {
          color: 'primary',
          title: 'الأسئلة',
          description: `القراءة السليمة، هي تلك التي نبدأها بحثًا عن بعض الإجابات وتنقيبًا عن معلومات وأفكار، ونخرج منها بأسئلة أخرى وأجوبة وأفكار. نطلب منك في هذه الخانة تزويدنا بالسؤال الذي تجيب عنه الصفحات التي تحددها وسنقوم نحن بتفقد هذه الصفحات بحثًا عن مدى دقة إجابة هذه الصفحات لهذا التساؤل. أنت هنا تتدرب على احتراف القراءة السليمة.`,
          child: {
            type: 'btn',
            text: '',
            route: {
              name: 'achievement.questions',
              param: this.$route.params.id,
            },
            items: [
            ]

          }
        },
      ],
      loader: false,
      isDisabled: true,
      msg: '',
      userBook: null,
      isThesesReady: false,
      isGeneralReady: false,
      isQuestionsReady: false,
      completionPercentage: null,
      rejected: false,
      rejectedMsg: '',
      retard: false,
      retardMsg: 'لديك انجاز يجب يجب اعادته',
      retardTheses: null,
      retardQuestions: null,
      retardGeneralInformations: false,

    }
  },
  methods: {
    async updateUserBook() {
      this.isDisabled = true
      this.loader = true
      await userBookServices.updateUserBook('review', this.userBook.id)
      this.loader = false;
      this.msg = 'تم تسليم طلبك'
    },
    async getByBookId() {
      const response = await userBookServices.getByBookID(this.$route.params.id);
      this.completionPercentage = response.completionPercentage
      this.userBook = response.userBook

      if (this.userBook.status == 'rejected') {
        this.rejected = true;
        this.rejectedMsg = this.userBook.reviews
      }
      else if (this.userBook.status == 'retard') {
        this.retard = true;
        this.retardTheses = this.userBook.thesises.reduce(function (retardTheses, element, index) {
          if (element.status === 'retard')
            retardTheses.push((index + 1));
          return retardTheses;
        }, []);
        this.retardQuestions = this.userBook.questions.reduce(function (retardQuestions, element, index) {
          if (element.status === 'retard')
            retardQuestions.push((index + 1));
          return retardQuestions;
        }, []);
        if (this.userBook.general_information.status == "retard") {
          this.retardGeneralInformations = true
        }

      }
      else if (this.userBook.status != null) {
        this.msg="تم التسليم"
      }

      function isReady(stuff) {
        return stuff.status != "rejected"  || stuff.status != null  ;
      }
console.log(this.userBook.thesises.find(isReady))
      // isThesesReady
      if (this.userBook.thesises.find(isReady)) {
        this.isThesesReady = true
        this.timelineItems[0].child.text = "عرض"
      }

      //isQuestionsReady
      if (this.userBook.questions.find(isReady)) {
        this.isQuestionsReady = true
        this.timelineItems[2].child.text = "عرض"
      }

      //isGeneralReady
      if ((this.userBook.general_information && (this.userBook.general_information.status != "retard" && this.userBook.general_information.status != null))) {
        this.timelineItems[1].child.text = "عرض"
        this.isGeneralReady = true;
      }
      else {
        this.isGeneralReady = false;
      }

      if ((this.isThesesReady && this.isGeneralReady && this.isQuestionsReady) && (this.userBook.status == null || this.userBook.status == 'retard')) {
        this.isDisabled = false
      }
      else {
        this.isDisabled = true
      }
    },

  },

}
</script>
