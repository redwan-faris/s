<template>
    <div class="row">
        <div class="col-sm-12">
            <div class="card position-relative inner-page-bg bg-primary" style="height: 150px;">
                <div class="inner-page-title">
                    <h3 class="text-white">مراجعة التخليص والسؤال العام</h3>
                    <p class="text-white">تبقى {{totalInfo}}</p>
                </div>
            </div>
        </div>
        <div class="col-sm-12" v-if="informationsToAudit.length ==0 && informationsToReview.length==0">
            <iq-card class="iq-card">
                <div class="iq-card-body p-0">
                    <div class="image-block text-center">
                        <img src="@/assets/images/export-congrats.png" class="img-fluid rounded w-50" alt="blog-img">
                    </div>
                    <h4 class="text-center mt-3 mb-3">لا يوجد تلخيصات</h4>
                </div>
            </iq-card>
        </div>
        <div class="col-12" v-if="informationsToReview.length>0">
            <iq-card>
                <template v-slot:headerTitle>
                    <h4 class="card-title">تلخيصات عامة بحاجة للمراجعة</h4>
                </template>
                <template v-slot:body>
                    <div class="table-responsive">
                        <table id="datatable" class="table table-striped table-bordered">
                            <thead class="col-12">
                                <tr>
                                    <th>اسم السفير</th>
                                    <th>اسم الكتاب</th>
                                    <th>عدد التلخيصات</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="information in informationsToReview" :key="information.id">
                                    <td>
                                        <a href="javascript:void(0);" @click="listGeneralInformations(information.user_book.id)">
                                            {{ information.user_book.user.name }}
                                        </a>

                                    </td>
                                    <td>
                                        {{ information.user_book.book.book_name }}
                                    </td>
                                    <td>
                                        1
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </template>
            </iq-card>
        </div>
        <div class="col-sm-12" v-if="informationsToAudit.length>0">
            <iq-card>
                <template v-slot:headerTitle>
                    <h4 class="card-title">تلخيصات عامة بحاجة للتدقيق</h4>
                </template>
                <template v-slot:body>
                    <div class="table-responsive">
                        <table id="datatable" class="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>اسم السفير</th>
                                    <th>اسم الكتاب</th>
                                    <th>عدد التلخيصات</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="information in informationsToAudit" :key="information.id">
                                    <td>
                                        <a href="javascript:void(0);" @click="listGeneralInformations(information.user_book.id)">
                                            ***************
                                        </a>

                                    </td>
                                    <td>
                                        {{ information.user_book.book.book_name }}
                                    </td>
                                    <td>
                                        1
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </template>
            </iq-card>
        </div>

    </div>
</template>
<script>
import iqCard from '../../../components/custom/cards/iq-card.vue'
import generalInformationsServices from '../../../api/generalInformationsServices'
import UserInfo from "../../../services/userInfo.service";

export default {
    components: { iqCard },
    name: 'informations',
    async created() {
        if (UserInfo.getRole()[0] === 'reviewer' || UserInfo.getRole()[0] === 'admin') {
            this.status = "review";
            this.informationsToReview = await this.generalInformations(this.status)

        }
        if (UserInfo.getRole()[0] === 'auditor' || UserInfo.getRole()[0] === 'admin') {

            this.status = "audit";
            this.informationsToAudit = await this.generalInformations(this.status)
        }
    },
    data() {
        return {
            status:'',
            informationsToReview:[],
            informationsToAudit:[],
        }
    },
    methods: {
        async generalInformations(status) {
            return await generalInformationsServices.getByStatus(status);
        }, 
        listGeneralInformations(user_book_id){
            this.$router.push({ name: `general.general_informations`,params: { user_book_id: user_book_id }})  
        },
    },
    computed: {
        totalInfo() {
            return this.informationsToAudit.length + this.informationsToReview.length;
        }
    },

}
</script>
