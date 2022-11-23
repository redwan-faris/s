<template>
    <div class="row" v-if="users.length>0">
        <div class="col-lg-12" v-for="user in users" :key="user.id">
            <iq-card>
                <template v-slot:headerTitle>
                    <h4 class="card-title">طلبات المستخدمين</h4>
                </template>
                <template v-slot:body>

            <div class="card card-block card-stretch card-height blog-list">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-md-6 text-center">
                            <div class="image-block">
                                <img :src="resolve_img_url(user.picture)" class="img-fluid rounded w-50" alt="blog-img" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="blog-description p-2 text-center">
                                <h3 class="mb-2 text-center">{{ user.name }}</h3>
                                <button @click="acceptrequest(user.id)" type="submit"
                                    class="btn btn-primary d-block w-100">قبول </button>

                                    <button @click="deleterequest(user.id)" type="submit"
                                    class="btn btn-primary d-block w-100 mt-3">رفض </button>
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
                    <h4 class="card-title">طلبات المستخدمين</h4>
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
import userServices from '../../api/userServices'

export default {
    name: 'acceptNormal',
    components: {},
    mounted() {
        socialvue.index()
    },
    created() {
        userServices.getUnactive()
            .then(response => {
                this.users = response.data.data
                console.log(response)
            })
            .catch(error => {

            })
    },

    data() {
        return {
            users: [],
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
                        userServices.deleteUser(id)
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
                text: "موافقتك تعني قبول هذا المستخدم",
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
                        userServices.acceptUser(id)
                            .then(response => {
                                swalWithBootstrapButtons.fire({
                                    title: 'تم القبول',
                                    text: 'تم قبول المستخدم',
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
        resolve_img_url: function (image) {
      
            const url = `http://127.0.0.1:8000/api/users/image?path=${image}`
              
            return url;
        },

    }
}
</script>