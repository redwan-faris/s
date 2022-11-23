<template>
    <div class="row">
        <div class="col-sm-12 d-flex justify-content-center" v-if="already_have_one">
            <div class="col-sm-12">
                <iq-card class="iq-card">
                    <div class="iq-card-body p-3">
                        <div class="image-block text-center">
                            <img src="@/assets/images/start_new.png" class="img-fluid rounded w-25 mt-3"
                                alt="blog-img" />
                        </div>
                        <h2 class="text-center mt-3 mb-3">ملاحظة</h2>
                        <h4 class="text-center mt-3 mb-3">
                            يقتضي حصولك على شهادة توثيق قراءتك جهد كبير من المختصين في التحقق
                            من قراءتك وتقييم النتاج المعرفي الذي قدمت في قراءتك، بالتالي نعتذر
                            عن إمكانية تقييم أكثر من كتاب لك دفعة واحدة. انتظر حصولك على
                            الشهادة لكتابك المقدم آنفًا قبل الشروع بتقديم طلب جديد للحصول على
                            توثيق القراءة الخاص بك
                        </h4>
                        <div class="row">
                            <div class="col-12">
                                <a  @click="$router.go(-1)" type="submit"
                                    class="col-6 btn btn-primary d-block w-75 mx-auto mb-3">
                                    عودة
                                </a>
                                <a @click="currentAchievement(already_have_one.book_id)" type="submit"
                                    class="col-6 btn btn-success d-block w-75 mx-auto mb-3">
                                    متابعة التوثيق
                                </a>
                            </div>
                        </div>
                    </div>
                </iq-card>
            </div>
        </div>
        <div class="col-sm-12 d-flex justify-content-center" v-else>
            <div class="col-sm-12">
                <iq-card class="iq-card">
                    <div class="iq-card-body p-0">
                        <div class="image-block text-center">
                            <img src="@/assets/images/start_new.png" class="img-fluid rounded w-25 mt-3"
                                alt="blog-img" />
                        </div>

                        <h2 class="text-center mt-3 mb-3">ملاحظة</h2>
                        <h4 class="text-center mt-3 mb-3">
                            سعداء بأنك تستعد لصعود أولى درجات سلم المجد، من خلال طلبك لفتح طلب
                            تقييم ل قراءتك لهذا الكتاب. لكن انتبه، في حال فتحك لطلب تقييم
                            قراءتك ضمن هذا الكتاب فلن تكون قادرًا على طلب تقييم كتب إضافية إلا
                            بعد انتهاء فريق التقييم من مراجعة طلبك الحالي
                        </h4>

                        <button @click="start()" type="submit"
                            class="btn btn-primary d-block w-75 mx-auto mb-3">
                            بدء التوثيق
                        </button>

                        <button @click="$router.go(-1)" type="submit" class="btn btn-success d-block w-75 mx-auto mb-3">
                            عودة
                        </button>


                    </div>
                </iq-card>
            </div>
        </div>
    </div>
</template >
<script>
import bookServices from "../../api/bookServices";
import userBookServices from "../../api/userBookServices";

export default {
    name: "Profile",
    async created() {
        await this.checkAchievement();
    },
    components: {
    },
    data() {
        return {
            already_have_one: null,
            error:''
        };
    },
    methods: {
        async checkAchievement() {
            this.already_have_one = await bookServices.checkAchievement(this.$route.params.id);
        },
        async start() {
            const response = await userBookServices.requestCertificate(this.$route.params.id);
            if (response.success) {
                this.$router.push({ name: `achievement.steps`, params: { id: this.$route.params.id } })
            } else {
                this.error="حدث خطأ"
            }
        },
        currentAchievement(id){
            this.$router.push({ name: `achievement.steps`, params: { id: id } })
        }
    },
};
</script>
  