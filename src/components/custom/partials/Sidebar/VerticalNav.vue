<template>
    <!-- Sidebar Menu Start -->
    <ul class="navbar-nav iq-main-menu" id="sidebar-menu">        
        <!-- ##### DISPLAY ONLY FOR ADMIN ##### -->
        <!-- <li class="nav-item" v-if="role=='admin'">
            <a :class="checkActive(profiles) ? 'active nav-link' : 'nav-link'" data-bs-toggle="collapse" href="#profile"
                role="button" :aria-expanded="checkActive(profiles)" aria-controls="profile">
                <i class="icon material-symbols-outlined">
                    person
                </i>
                <span class="social.profilemain">الشهادات المصدرة </span>
            </a>
        </li> -->
        <!-- ##### END DISPLAY ONLY FOR ADMIN ##### -->

        <!-- <li class="nav-item" v-if="role=='admin'">
            <router-link :class="checkActive('social.book') ? 'active nav-link' : 'nav-link'" aria-current="page"
                :to="{ name: 'social.book' }">
                <i class="icon material-symbols-outlined">
                    book
                </i>
                <span class="item-name">Book</span>
            </router-link>
        </li> -->
        <!-- <li class="nav-item" v-if="role=='admin'">
            <router-link :class="checkActive('social.notification') ? 'active nav-link' : 'nav-link'"
                aria-current="page" :to="{ name: 'social.notification' }">
                <i class="icon material-symbols-outlined">
                    notifications
                </i>
                <span class="item-name">Notification</span>
            </router-link>
        </li> -->
        <!-- ##### DISPLAY ONLY FOR ADMIN ##### -->
        <li class="nav-item static-item">
            <a class="nav-link static-item disabled" href="#" tabindex="-1">
                <span class="default-icon">التحكم</span>
                <span class="mini-icon" data-bs-toggle="tooltip" title="elements" data-bs-placement="right">-</span>
            </a>
        </li>

        <li class="nav-item">
            <a :class="checkActive(admin) ? 'active nav-link' : 'nav-link'" data-bs-toggle="collapse"
                href="#admin-control" role="button" :aria-expanded="checkActive(admin)" aria-controls="admin-control">
                <i class="icon material-symbols-outlined">
                    admin_panel_settings
                </i>
                <span class="item-name">التحكم</span>
                <i class="right-icon material-symbols-outlined">chevron_right</i>
            </a>
            <ul :class="checkActive(admin) ? 'show sub-nav collapse' : 'sub-nav collapse'" id="admin-control"
                data-bs-parent="#admin-control">
                <li class="nav-item" v-if="role=='admin'">    
                    <router-link :class="checkActive('admin.statistics') ? 'active nav-link' : 'nav-link'"
                :to="{ name: 'admin.statistics' }">
                <i class="icon material-symbols-outlined">
                    table_chart
                </i>
                <span class="item-name">احصائيات</span>
            </router-link>
                </li>

                <li class="nav-item" v-if="role=='admin'">
                    <router-link :class="checkActive('admin.accept-reviewers') ? 'active nav-link' : 'nav-link'"
                        :to="{ name: 'admin.accept-reviewers' }">
                        <i class="icon material-symbols-outlined filled">
                            fiber_manual_record
                        </i>
                        <i class="sidenav-mini-icon"> p </i>
                        <span class="item-name"> قبول المراجعين </span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :class="checkActive('admin.accept-users') ? 'active nav-link' : 'nav-link'"
                        :to="{ name: 'admin.accept-users' }">
                        <i class="icon material-symbols-outlined filled">
                            fiber_manual_record
                        </i>
                        <i class="sidenav-mini-icon"> p </i>
                        <span class="item-name"> قبول المستخدمين </span>
                    </router-link>
                </li>
                 <li class="nav-item">
                    <router-link :class="checkActive('admin.accept-certificates') ? 'active nav-link' : 'nav-link'"
                        :to="{ name: 'admin.accept-certificates' }">
                        <i class="icon material-symbols-outlined filled">
                            fiber_manual_record
                        </i>
                        <i class="sidenav-mini-icon"> p </i>
                        <span class="item-name"> قبول الشهادات </span>
                    </router-link>
                </li>
            </ul>
        </li>
        <!-- ##### END DISPLAY ONLY FOR ADMIN ##### -->
        

        <li class="nav-item static-item">
            <a class="nav-link static-item disabled" href="#" tabindex="-1">
                <span class="default-icon">المراجعة</span>
                <span class="mini-icon" data-bs-toggle="tooltip" title="elements" data-bs-placement="right">-</span>
            </a>
        </li>
        <li class="nav-item mb-4">
            <a :class="checkActive(reviews) ? 'active nav-link' : 'nav-link'" data-bs-toggle="collapse"
                href="#review-section" role="button" :aria-expanded="checkActive(reviews)" aria-controls="review-section">
                <i class="icon material-symbols-outlined">
                    table_chart
                </i>
                <span class="item-name">المراجعة</span>
                <i class="right-icon material-symbols-outlined">chevron_right</i>
            </a>
            <ul :class="checkActive(reviews) ? 'show sub-nav collapse' : 'sub-nav collapse'" id="review-section"
                data-bs-parent="#review-section">
                <li class="nav-item">
                    <router-link :class="checkActive('thesis-review.list') ? 'active nav-link' : 'nav-link'"
                        :to="{ name: 'thesis-review.list' }">
                        <i class="icon material-symbols-outlined filled">
                            fiber_manual_record
                        </i>
                        <i class="sidenav-mini-icon"> D </i>
                        <span class="item-name">أطروحات للمراجعة</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :class="checkActive('general.list') ? 'active nav-link' : 'nav-link'"
                        :to="{ name: 'general.list' }">
                        <i class="icon material-symbols-outlined filled">
                            fiber_manual_record
                        </i>
                        <i class="sidenav-mini-icon"> D </i>
                        <span class="item-name"> العامة </span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :class="checkActive('questions.list') ? 'active nav-link' : 'nav-link'"
                        :to="{ name: 'questions.list' }">
                        <i class="icon material-symbols-outlined filled">
                            fiber_manual_record
                        </i>
                        <i class="sidenav-mini-icon"> D </i>
                        <span class="item-name">الاسئلة </span>
                    </router-link>
                </li>
                <li class="nav-item" v-if="role=='admin' || role=='auditor'">
                    <a :class="checkActive('plagiarism-checker') ? 'active nav-link' : 'nav-link'" href="https://plagiarismdetector.net/" target="_blank">
                        <i class="icon material-symbols-outlined filled">
                            plagiarism
                        </i>
                        <i class="sidenav-mini-icon"> p </i>
                        <span class="item-name"> Plagiarism Checker </span>
                    </a>
                </li>

            </ul>
        </li>
    </ul>
    <!-- Sidebar Menu End -->
</template>
<script>
export default {
    name: 'VerticalNav',
    props: [
        'role'
    ],
    data() {
        return {
            profiles: ['social.profile1', 'social.profile2', 'social.profile3', 'social.profileimage', 'social.profilevideo', 'social.profileevent', 'social.profilebadges', 'social.profileforum'],
            admin: ['admin.statistics', 'admin.accept-users', 'admin.accept-reviewers','admin.faq'],
            reviews: ['thesis-review.list', 'general.list', 'questions.list','plagiarism-checker'],
        }
    },
    methods: {
        checkActive(route) {
            if (this.$route.name === route) {
                return true
            }
            if (route.includes(this.$route.name)) {
                return true
            }
        }
    }
}
</script>
