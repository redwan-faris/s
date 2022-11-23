<template>
  <div class="row">
    <div class="col-sm-12">
      <iq-card>
        <div class="iq-card-body profile-page p-0">
          <div class="profile-header">
            <div class="cover-container">
              <img src="../../../assets/images/book-banner.png" alt="profile-bg" class="rounded img-fluid" />
            </div>
            <div class="user-detail text-center mb-3">
              <div class="profile-img">
                <img src="../../../assets/images/reader.png" alt="profile-img" class="avatar-130 img-fluid" />
              </div>
              <div class="profile-detail mt-1">
                <br />
              </div>
            </div>
            <div class="profile-info p-4 d-flex align-items-center justify-content-between position-relative"></div>
          </div>
        </div>
      </iq-card>
      <iq-card class="iq-card">
        <div class="iq-card-body p-0">
          <div class="user-tabing">
            <tab-nav :pills="true" id="pills-tab"
              class="nav nav-pills d-flex align-items-center justify-content-center profile-feed-items p-0 m-0">
              <tab-nav-items class="w-50 p-0" :active="true" id="pills-friend-tab" href="#profile-friends"
                ariaControls="pills-contact" role="tab" :ariaSelected="true" title="احصائيات" />
              <tab-nav-items class="w-50 p-0" :active="false" id="pills-profile-tab" href="#profile-feed"
                ariaControls="pills-contact" role="tab" :ariaSelected="false" title="انجازاتي" />
            </tab-nav>
          </div>
        </div>
      </iq-card>
    </div>
    <div class="col-12">
      <div class="tab-content">
        <!-- START STATISTICS -->
        <tab-content-item :active="true" id="profile-friends">
          <div class="container">

            <div class="row">
              <div class="col-lg-12">
                <div class="card card-block card-stretch card-height">
                  <div class="card-header">
                    <div class="d-flex justify-content-between flex-wrap">
                      <h4 class="card-title">مستوى الكتب</h4>
                    </div>
                  </div>
                  <div class="card-body">

                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="row">
                  <div class="col-6 col-md-6 col-lg-6">
                    <div class="card">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-center">
                          <div
                            class="border rounded bg-soft-info avatar-55 d-flex align-items-center justify-content-center">
                            <span class="material-symbols-outlined"> menu_book </span>
                          </div>
                        </div>
                        <div class="mt-4">
                          <h3 class="text-center">{{ statistics.certificates }}</h3>
                          <p class="mb-0 text-center">انجاز</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-6 col-md-6 col-lg-6">
                    <div class="card">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-center">
                          <div
                            class="border rounded bg-soft-warning avatar-55 d-flex align-items-center justify-content-center">
                            <span class="material-symbols-outlined"> draw </span>
                          </div>
                        </div>
                        <div class="mt-4">
                          <h3 class="text-center">{{ statistics.thesises.total }}</h3>
                          <p class="mb-0 text-center">أطروحة</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-md-6 col-lg-6">
                    <div class="card">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-center">
                          <div
                            class="border rounded bg-soft-danger avatar-55 d-flex align-items-center justify-content-center">
                            <span class="material-symbols-outlined">
                              contact_support
                            </span>
                          </div>
                        </div>
                        <div class="mt-4">
                          <h3 class="text-center">{{ statistics.questions.total }}</h3>
                          <p class="mb-0 text-center">سؤال</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-md-6 col-lg-6">
                    <div class="card">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-center">
                          <div
                            class="border rounded bg-soft-success avatar-55 d-flex align-items-center justify-content-center">
                            <span class="material-symbols-outlined"> summarize </span>
                          </div>
                        </div>
                        <div class="mt-4">
                          <h3 class="text-center">{{ statistics.general_informations.total }}</h3>
                          <p class="mb-0 text-center">ملخص عام</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-header">
                    <div class="header-title">
                      <h4 class="card-title">الاسئلة</h4>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="mb-3">
                      <div class="d-flex justify-content-between mt-2 text-dark">
                        <h6>أمتياز</h6>
                        <small>{{ statistics.questions.very_excellent }}</small>
                      </div>
                      <b-progress class="shadow-none w-100 mt-2" style="height: 6px">
                        <b-progress-bar :value='statistics.questions.very_excellent' variant="danger"></b-progress-bar>
                      </b-progress>
                    </div>
                    <div class="mb-3">
                      <div class="d-flex justify-content-between mt-2 text-dark">
                        <h6>ممتاز</h6>
                        <small>{{ statistics.questions.excellent }}</small>
                      </div>
                      <b-progress class="shadow-none w-100 mt-2" style="height: 6px">
                        <b-progress-bar :value='statistics.questions.excellent' variant="info"></b-progress-bar>
                      </b-progress>
                    </div>
                    <div class="mb-3">
                      <div class="d-flex justify-content-between mt-2 text-dark">
                        <h6>جيد جدا</h6>
                        <small>{{ statistics.questions.veryGood }}</small>
                      </div>
                      <b-progress class="shadow-none w-100 mt-2" style="height: 6px">
                        <b-progress-bar :value='statistics.questions.veryGood' variant="primary"></b-progress-bar>
                      </b-progress>
                    </div>
                    <div class="mb-3">
                      <div class="d-flex justify-content-between mt-2 text-dark">
                        <h6>جيد</h6>
                        <small>{{ statistics.questions.good }}</small>
                      </div>
                      <b-progress class="shadow-none w-100 mt-2" style="height: 6px">
                        <b-progress-bar :value='statistics.questions.good' variant="success"></b-progress-bar>
                      </b-progress>
                    </div>
                    <div class="mb-3">
                      <div class="d-flex justify-content-between mt-2 text-dark">
                        <h6>مقبول</h6>
                        <small>{{ statistics.questions.accebtable }}</small>
                      </div>
                      <b-progress class="shadow-none w-100 mt-2" style="height: 6px">
                        <b-progress-bar :value='statistics.questions.accebtable' variant="success"></b-progress-bar>
                      </b-progress>
                    </div>

                  </div>
                </div>

              </div>
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-header">
                    <div class="header-title">
                      <h4 class="card-title">الملخص العام</h4>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="mb-3">
                      <div class="d-flex justify-content-between mt-2 text-dark">
                        <h6>أمتياز</h6>
                        <small>{{ statistics.general_informations.very_excellent }}</small>
                      </div>
                      <b-progress class="shadow-none w-100 mt-2" style="height: 6px">
                        <b-progress-bar :value='statistics.general_informations.very_excellent' variant="danger">
                        </b-progress-bar>
                      </b-progress>
                    </div>
                    <div class="mb-3">
                      <div class="d-flex justify-content-between mt-2 text-dark">
                        <h6>ممتاز</h6>
                        <small>{{ statistics.general_informations.excellent }}</small>
                      </div>
                      <b-progress class="shadow-none w-100 mt-2" style="height: 6px">
                        <b-progress-bar :value='statistics.general_informations.excellent' variant="info">
                        </b-progress-bar>
                      </b-progress>
                    </div>
                    <div class="mb-3">
                      <div class="d-flex justify-content-between mt-2 text-dark">
                        <h6>جيد جدا</h6>
                        <small>{{ statistics.general_informations.veryGood }}</small>
                      </div>
                      <b-progress class="shadow-none w-100 mt-2" style="height: 6px">
                        <b-progress-bar :value='statistics.general_informations.veryGood' variant="primary">
                        </b-progress-bar>
                      </b-progress>
                    </div>
                    <div class="mb-3">
                      <div class="d-flex justify-content-between mt-2 text-dark">
                        <h6>جيد</h6>
                        <small>{{ statistics.general_informations.good }}</small>
                      </div>
                      <b-progress class="shadow-none w-100 mt-2" style="height: 6px">
                        <b-progress-bar :value='statistics.general_informations.good' variant="success">
                        </b-progress-bar>
                      </b-progress>
                    </div>
                    <div class="mb-3">
                      <div class="d-flex justify-content-between mt-2 text-dark">
                        <h6>مقبول</h6>
                        <small>{{ statistics.general_informations.accebtable }}</small>
                      </div>
                      <b-progress class="shadow-none w-100 mt-2" style="height: 6px">
                        <b-progress-bar :value='statistics.general_informations.accebtable' variant="success">
                        </b-progress-bar>
                      </b-progress>
                    </div>

                  </div>
                </div>

              </div>

              <div class="col-lg-12">
                <div class="card">
                  <div class="card-header">
                    <div class="header-title">
                      <h4 class="card-title">الاطروحات</h4>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="mb-3">
                      <div class="d-flex justify-content-between mt-2 text-dark">
                        <h6>أمتياز</h6>
                        <small>{{ statistics.thesises.very_excellent }}</small>
                      </div>
                      <b-progress class="shadow-none w-100 mt-2" style="height: 6px">
                        <b-progress-bar :value='statistics.thesises.very_excellent' variant="danger"></b-progress-bar>
                      </b-progress>
                    </div>
                    <div class="mb-3">
                      <div class="d-flex justify-content-between mt-2 text-dark">
                        <h6>ممتاز</h6>
                        <small>{{ statistics.thesises.excellent }}</small>
                      </div>
                      <b-progress class="shadow-none w-100 mt-2" style="height: 6px">
                        <b-progress-bar :value='statistics.thesises.excellent' variant="info"></b-progress-bar>
                      </b-progress>
                    </div>
                    <div class="mb-3">
                      <div class="d-flex justify-content-between mt-2 text-dark">
                        <h6>جيد جدا</h6>
                        <small>{{ statistics.thesises.veryGood }}</small>
                      </div>
                      <b-progress class="shadow-none w-100 mt-2" style="height: 6px">
                        <b-progress-bar :value='statistics.thesises.veryGood' variant="primary"></b-progress-bar>
                      </b-progress>
                    </div>
                    <div class="mb-3">
                      <div class="d-flex justify-content-between mt-2 text-dark">
                        <h6>جيد</h6>
                        <small>{{ statistics.thesises.good }}</small>
                      </div>
                      <b-progress class="shadow-none w-100 mt-2" style="height: 6px">
                        <b-progress-bar :value='statistics.thesises.good' variant="success"></b-progress-bar>
                      </b-progress>
                    </div>
                    <div class="mb-3">
                      <div class="d-flex justify-content-between mt-2 text-dark">
                        <h6>مقبول</h6>
                        <small>{{ statistics.thesises.accebtable }}</small>
                      </div>
                      <b-progress class="shadow-none w-100 mt-2" style="height: 6px">
                        <b-progress-bar :value='statistics.thesises.accebtable' variant="success"></b-progress-bar>
                      </b-progress>
                    </div>

                  </div>
                </div>

              </div>


            </div>
          </div>
        </tab-content-item>

        <!-- END STATISTICS -->

        <!-- START achievement -->
        <tab-content-item :active="false" id="profile-feed" aria-labelled-by="pills-feed-tab">
          <div class="row">
            <div class="col-lg-12">
              <iq-card>
                <template v-slot:headerTitle>
                  <h4 class="card-title">طلبات الشهادات</h4>
                </template>
                <template v-slot:body>
                  <div class="card card-block card-stretch card-height blog-list"
                    v-for="(certificate, index) in certificates" :key="index">
                    <div class="card-body">
                      <div class="row align-items-center">
                        <div class="col-md-6">
                          <div class="blog-description p-2 text-center">

                            <h3 class="mb-2 text-center">اسم الكتاب: {{ certificate.book.book_name }} </h3>
                            <button type="submit" class="btn btn-primary d-block w-100"
                              @click="$router.push({ path: `/certificate-auth/${certificate.user_book_id}` })">
                              عرض الشهادة
                            </button>

                            <button type="submit" class="btn btn-primary d-block w-100 mt-3"
                              @click="$router.push({ path: `/certificate/${certificate.user_book_id}` })">
                              عرض الشهادة مع الانجاز
                            </button>


                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </iq-card>
            </div>
          </div>
        </tab-content-item>
        <!-- END achievement -->
      </div>
    </div>
  </div>
</template>
<script>
import userServices from '@/api/userServices'
import certificateService from '../../../api/certificateServices'
export default {
  name: "Profile",
  async created() {
    await this.getStatistics();
    await this.getUserCertificates();
  },
  data() {
    return {
      statistics: {
        general_informations: {},
        questions: {},
        thesises: {}
      }, certificates: []
    }
  },
  methods: {

    async getUserCertificates() {
      const certificates = await certificateService.getUserCertificates();
      console.log(certificates)
      this.certificates = certificates;
    },

    async getStatistics() {
      const statistics = await userServices.getUserStatistics();
      this.statistics = statistics
      console.log(statistics)
    }
  }
};
</script>
<script setup>
import { ref, reactive } from "vue";
import FlatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
const inlineDate = ref("");
const inlineDatepicker = reactive({
  inline: true,
  minDate: "today",
  dateFormat: "Y-m-d",
});
const level = ref({
  series: [
    {
      name: "Total Levels",
      data: [4762, 2889, 1098, 680],
    },
  ],
  options: {
    colors: ["#50b5ff"],
    chart: {
      toolbar: {
        show: false,
      },
    },
    forecastDataPoints: {
      count: 2,
    },
    stroke: {
      width: 3,
    },
    grid: {
      show: true,
      strokeDashArray: 7,
    },
    markers: {
      size: 6,
      colors: "#FFFFFF",
      strokeColors: ["#50b5ff"],
      strokeWidth: 2,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 0,
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
    },
    xaxis: {
      categories: ["بسيط", "متوسط", "عميق", "متقدم"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  },
});
</script>