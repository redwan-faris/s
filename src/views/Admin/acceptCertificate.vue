<template>
    <div class="row" v-if="certificates.length>0">
        <div class="col-lg-12" v-for="certificate in certificates" :key="certificate.id">
            <iq-card>
                <template v-slot:headerTitle>
                    <h4 class="card-title">طلبات الشهادات</h4>
                </template>
                <template v-slot:body>
 
            <div class="card card-block card-stretch card-height blog-list">
                <div class="card-body">
                    <div class="row align-items-center">
                       
                        <div class="col-md-6">
                            <div class="blog-description p-2 text-center">
                                <h3 class="mb-2 text-center"> اسم اليوزر: {{ certificate.user.name }}</h3>
                                      <h3 class="mb-2 text-center">اسم الكتاب:{{ certificate.book.book_name }}</h3>
                                <button @click="acceptrequest(certificate.id)" type="submit"
                                    class="btn btn-primary d-block w-100">قبول </button>

                                    <button @click="deleterequest(certificate.id)" type="submit"
                                    class="btn btn-primary d-block w-100 mt-3">رفض </button>
                                    
                                    <button @click="$router.push({path:`/certificate/${certificate.id}}`})" type="submit"
                                    class="btn btn-primary d-block w-100 mt-3">عرض الشهادة </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            </template>
            </iq-card>
        </div>
    </div>
    <div class="row" v-else>
        <div class="col-sm-12">
            <iq-card>
                <template v-slot:headerTitle>
                    <h4 class="card-title">طلبات الشهادات</h4>
                </template>
                <template v-slot:body>

            <h4>
                لا يوجد طلبات
            </h4>
            </template>
            </iq-card>
        </div>
    </div>

</template>
<script>
import { socialvue } from '../../config/pluginInit' 
import userBookServices from '../../api/userBookServices'
import certificateServices from '../../api/certificateServices'

export default {
    name: 'acceptCertificates',
    components: {},
    mounted() {
        socialvue.index()
    },
    created() {
        userBookServices.getByStatus('audited')
            .then(response => {
                this.certificates = response
                console.log(response)
            })
            .catch(error => {

            })
    },

    data() {
        return {
            certificates: [],
        }
    },
    methods: {
        deleterequest(id) {
            const swalWithBootstrapButtons = this.$swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-primary btn-lg',
                    cancelButton: 'btn btn-outline-primary btn-lg ms-2'
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: 'هل أنت متأكد؟',
                text: "موافقتك تعني حذف هذا المستخدم",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'نعم قم بالحذف',
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
                        userBookServices.changeStatus("rejected",id)
                            .then(response => {
                                swalWithBootstrapButtons.fire({
                                    title: 'تم الحذف',
                                    text: 'تم حذف المستخدم',
                                    icon: 'success',
                                    showClass: {
                                        popup: 'animate__animated animate__zoomIn'
                                    },
                                    hideClass: {
                                        popup: 'animate__animated animate__zoomOut'
                                    }
                                })
                                location.reload()
                            })
                            .catch(error => {
                                (error)
                            })


                    }
                })
        },
        acceptrequest(id) {
            const swalWithBootstrapButtons = this.$swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-primary btn-lg',
                    cancelButton: 'btn btn-outline-primary btn-lg ms-2'
                },
                buttonsStyling: false
            })
            swalWithBootstrapButtons.fire({
                title: 'هل أنت متأكد؟',
                text: "موافقتك تعني قبول هذا الشهاده",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'نعم قم بالقبول',
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
                        certificateServices.createCertificate(id)
                            .then(response => {
                                swalWithBootstrapButtons.fire({
                                    title: 'تم القبول',
                                    text: 'تم قبول الشهادة',
                                    icon: 'success',
                                    showClass: {
                                        popup: 'animate__animated animate__zoomIn'
                                    },
                                    hideClass: {
                                        popup: 'animate__animated animate__zoomOut'
                                    }
                                })
                                location.reload()
                            })
                            .catch(error => {
                                console.log(error)
                            })


                    }
                })
        },
        resolve_img_url: function (image) {
      
            const url = `http://127.0.0.1:8000/api/certificates/image?path=${image}`
              
            return url;
        },

    }
}
</script>