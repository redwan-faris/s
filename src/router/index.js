import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'
const childRoutes = (prop, mode) => [
  {
    path: '',
    name: prop + '.list',
    meta: { auth: true, name: 'Book' },
    component: () => import('../views/Book/Book')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Pages/Home')
  },
 
  {
    path: '/thesis-review',
    name: 'Home',
    component: () => import('../views/Pages/ThesisReview')
  },
  {
    path: '/damn',
    name: 'Damn',
    component: () => import('../views/Pages/Damn')
  },
  {
    path: 'accountsetting',
    name: prop + '.accountsetting',
    meta: { auth: true, name: 'Account Setting' },
    component: () => import('../views/User/AccountSetting')
  },
  {
    path: 'privacysetting',
    name: prop + '.privacy-setting',
    meta: { auth: true, name: 'Privacy Setting' },
    component: () => import('../views/User/PrivacySetting')
  },
  {
    path: 'privacypolicy',
    name: prop + '.privacy',
    meta: { auth: true, name: 'Privacy Policy' },
    component: () => import('../views/Pages/PrivacyPolicy')
  },
  {
    path: 'termofservice',
    name: prop + '.termofservice',
    meta: { auth: true, name: 'Terms Of Use' },
    component: () => import('../views/Pages/TermsOfService')
  },

  {
    path: 'event-detail',
    name: prop + '.event-detail',
    meta: { auth: true, name: 'Event-Detail' },
    component: () => import('../views/SocailMain/Profile/Event-Detail')
  },
  {
    path: 'certificate-auth/:id', 
    name: prop + '.certificateAuth',
    meta: { auth: true, name: 'certificate' },
    component: () => import('../views/Certificate/smallCertificates')
  },
  {
    path: 'certificate/:id',
    name: prop + '.certificate',
    meta: { auth: true, name: 'certificate' },
    component: () => import('../views/Certificate/Certificate')
  },
 
  {
    path: 'certificate/list',
    name: prop + '.certificateList',
    meta: { auth: true, name: 'certificateList' },
    component: () => import('../views/Certificate/list')
  },
  {
    path: 'book',
    name: prop + '.book',
    meta: { auth: true, name: 'Book' },
    component: () => import('../views/Book/Book'),
    props: route => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: 'book-detail',
    name: prop + '.book-detail',
    meta: { auth: true, name: 'Book detail' },
    component: () => import('../views/Book/Book-detail')
  },
  {
    path: 'friendlist',
    name: prop + '.friendlist',
    meta: { auth: true, name: 'Friend List' },
    component: () => import('../views/SocailMain/Friends/FriendList')
  },
  {
    path: 'friendprofile',
    name: prop + '.friendprofile',
    meta: { auth: true, name: 'Friend profile' },
    component: () => import('../views/SocailMain/Friends/FriendProfile')
  },
  {
    path: 'notification',
    name: prop + '.notification',
    meta: { auth: true, name: 'Notification' },
    component: () => import('../views/SocailMain/Notifications/Notification')
  },
  {
    path: 'friendrequest',
    name: prop + '.friendrequest',
    meta: { auth: true, name: 'Friend Request' },
    component: () => import('../views/SocailMain/Friends/FriendRequest')
  }, 
  {
    path: 'profile/',
    name: prop + '.event-detail',
    meta: { auth: true, name: 'Profile' },
    component: () => import('../views/SocailMain/Profile/Profile')
  },
  // {
  //   path: '/user_book/:id',
  //   name: 'user_book',
  //   props: true,
  //   component: Profile
  // },
  {
    path: '/user_book/:id',
    name: prop + '.user_book',
    meta: { auth: true, name: 'user-book' },
    props: true,
    component: () => import('../views/SocailMain/Profile/Profile')
  },
]
const blankchildRoutes = (prop, mode) => [
  {
    path: 'signin',
    name: prop + '.sign-in1',
    component: () => import('../views/AuthPages/Default/SignIn')
  },
  {
    path: 'signin2',
    name: prop + '.sign-in2',
    component: () => import('../views/AuthPages/Default/SignIn1')
  },
  {
    path: 'signup',
    name: prop + '.sign-up',
    component: () => import('../views/AuthPages/Default/SignUp')
  }, 
   {
    path: 'admin/signup',
    name: prop + '.admin_signup',
    meta: { auth: true, name: 'signupadmin' },
    component: () => import('../views/Admin/SignUp')
  },
  {
    path: 'signup/administrators',
    name: prop + '.sign-up-administrators',
    component: () => import('../views/AuthPages/Default/AdministratorsSignUp')
  },
  {
    path: 'signup_2',
    name: prop + '.sign-up-administrators',
    component: () => import('../views/AuthPages/Default/SignUp_1')
  },
  {
    path: 'forgot-password',
    name: prop + '.forgot-password',
    component: () => import('../views/AuthPages/Default/forgot-password')
  },
  {
    path: 'reset-password/:token',
    name: prop + '.reset-password',
    component: () => import('../views/AuthPages/Default/reset-password')
  },
  {
    path: 'lockscreen',
    name: prop + '.lockscreen1',
    component: () => import('../views/AuthPages/Default/LockScreen1')
  },
  {
    path: 'confirmmail',
    name: prop + '.confirmmail1',
    component: () => import('../views/AuthPages/Default/ConfirmMail1')
  },{
    path: 'activeuser',
    name: prop + '.activeUser',
    component: () => import('../views/AuthPages/Default/ActiveUser')
  }
]
const pagesChildRoutes = (prop, mode = false) => [
 
  {
    
    path: 'error/:code',
    name: prop + '.error',
    component: () => import('../views/Pages/ErrorPage')
  },
  {
    path: 'error404',
    name: prop + '.error404',
    component: () => import('../views/Pages/Error404')
  },
  {
    path: 'error500',
    name: prop + '.error500',
    component: () => import('../views/Pages/Error500')
  },
  {
    path: 'coming-soon',
    name: prop + '.coming-soon',
    component: () => import('../views/Pages/ComingSoon')
  },
  {
    path: 'maintenance',
    name: prop + '.maintenance',
    component: () => import('../views/Pages/Maintenance')
  }
]
const defaultlayout = (prop, mode = false) => [
  {
    path: 'admin',
    name: prop + '.admin',
    meta: { auth: true, name: 'Admin' },
    component: () => import('../views/Pages/Admin')
  },
  {
    path: 'blank-page',
    name: prop + '.blank-page',
    meta: { auth: true, name: 'Blank Page' },
    component: () => import('../views/Pages/BlankPage')
  },
  {
    path: 'faq',
    name: prop + '.faq',
    meta: { auth: true, name: 'Faq' },
    component: () => import('../views/Pages/FAQ')
  }, {
    path: 'certificate-auth/:id', 
    name: prop + '.certificateAuth',
    meta: { auth: true, name: 'certificate' },
    component: () => import('../views/Certificate/smallCertificates')
  },
]



const adminControll = (prop, mode = false) => [
  {
    path: 'statistics',
    name: prop + '.statistics',
    meta: { auth: true, name: 'statistics' },
    component: () => import('../views/Admin/statistics')
  },

  {
    path: 'accept-reviewers',
    name: prop + '.accept-reviewers',
    meta: { auth: true, name: 'acceptReviewers' },
    component: () => import('../views/Admin/acceptReviewers')
  },
  {
    path: 'accept-certificates',
    name: prop + '.accept-certificates',
    meta: { auth: true, name: 'acceptCertificates' },
    component: () => import('../views/Admin/acceptCertificate')
  },
  {
    path: 'accept-users',
    name: prop + '.accept-users',
    meta: { auth: true, name: 'acceptNormal' },
    component: () => import('../views/Admin/acceptNormal')
  },
  {
    path: 'faq',
    name: prop + '.faq',
    meta: { auth: true, name: 'Faq' },
    component: () => import('../views/Pages/FAQ')
  }
]

const tableChildRoute = (prop, mode = false) => [
  {
    path: 'datatable',
    name: prop + '.datatable',
    meta: { auth: true, name: 'datatable' },
    component: () => import('../views/Tables/DataTable')
  }
]
const userChildRoute = (prop, mode = false) => [
  {
    path: 'profile-edit',
    name: prop + '.profile-edit',
    meta: { auth: true, name: 'Edit Profile' },
    component: () => import('../views/User/ProfileEdit')
  },
  {
    path: 'accountsetting',
    name: prop + '.accountsetting',
    meta: { auth: true, name: 'Account Setting' },
    component: () => import('../views/User/AccountSetting')
  },
  {
    path: 'privacysetting',
    name: prop + '.privacy-setting',
    meta: { auth: true, name: 'Privacy Setting' },
    component: () => import('../views/User/PrivacySetting')
  }
]
const thesisReview = (prop, mode = false) => [
  {
    path: 'thesis/:user_book_id',
    name: prop + '.thesis',
    meta: { auth: true, name: 'thesis' },
    component: () => import('../views/Review/Thesis/theses')
  },
  {
    path: 'list',
    name: prop + '.list',
    meta: { auth: true, name: 'list' },
    component: () => import('../views/Review/Thesis/list')
  },
  
  {
    path: 'update/:id',
    name: prop + '.update',
    meta: { auth: true, name: 'update' },
    component: () => import('../views/Theses/update')
  },
]

const generalInformation = (prop, mode = false) => [
  {
    path: 'list',
    name: prop + '.list',
    meta: { auth: true, name: 'general_informations' },
    component: () => import('../views/Review/General/list')
  },
  {
    path: 'general_informations/:user_book_id',
    name: prop + '.general_informations',
    meta: { auth: true, name: 'general_informations' },
    component: () => import('../views/Review/General/general_informations')
  },
  {
    path: 'update/:id',
    name: prop + '.update',
    meta: { auth: true, name: 'general_informations_update' },
    component: () => import('../views/GeneralInormation/update')
  },
  
]
 



const questions = (prop, mode = false) => [
  {
    path: 'list',
    name: prop + '.list',
    meta: { auth: true, name: 'List' },
    component: () => import('../views/Review/Questions/list')
  },
  {
    path: 'questions/:user_book_id',
    name: prop + '.questions',
    meta: { auth: true, name: 'questionsList' },
    component: () => import('../views/Review/Questions/questions')
  },
  {
    path: 'update/:id',
    name: prop + '.update',
    meta: { auth: true, name: 'questionsUpdate' },
    component: () => import('../views/Questions/update')
  },
  
]

const achievement = (prop, mode = false) => [
  {
    path: 'steps',
    name: prop + '.steps',
    meta: { auth: true, name: 'steps' },
    component: () => import('../views/Achievement/Steps')
  },
  {
    path: 'theses',
    name: prop + '.theses',
    meta: { auth: true, name: 'theses' },
    component: () => import('../views/Achievement/Theses')
  },
  {
    path: 'general_summary/',
    name: prop + '.general_summary',
    meta: { auth: true, name: 'general_summary' },
    component: () => import('../views/Achievement/GeneralSummary')
  },
  {
    path: 'questions/',
    name: prop + '.questions',
    meta: { auth: true, name: 'questions' },
    component: () => import('../views/Achievement/Questions')
  },
  {
    path: 'check-achievement/',
    name: prop + '.checkAchievement',
    meta: { auth: true, name: 'check-achievement' },
    component: () => import('../views/Achievement/CheckAchievement')
  },

]


const routes = [
  {
    path: '/',
    name: 'social',
    component: () => import('../layouts/Default'),
    children: childRoutes('social')
  },
  {
    path: '/without-leftside',
    name: 'without-leftside',
    component: () => import('../layouts/WithoutLeftside'),
    children: childRoutes('leftside')
  },
  {
    path: '/without-rightside',
    name: 'without-rightside',
    component: () => import('../layouts/WithoutRightside'),
    children: childRoutes('rightside')
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../layouts/Empty'),
    children: blankchildRoutes('auth1')
  },
  {
    path: '/pages',
    name: 'pages',
    component: () => import('../layouts/Empty'),
    children: pagesChildRoutes('default')
  },
  {
    path: '/extra-pages',
    name: 'extra-pages',
    component: () => import('../layouts/Default'),
    meta: { auth: true },
    children: defaultlayout('extra-pages')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('../layouts/Default'),
    meta: { auth: true },
    children: tableChildRoute('table')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../layouts/Default'),
    meta: { auth: true },
    children: userChildRoute('user')
  },
  {
    path: '/thesis-review',
    name: 'thesis-review',
    component: () => import('../layouts/Default'),
    meta: { auth: true },
    children:    thesisReview('thesis-review')
  },
  {
    path: '/general',
    name: 'general',
    component: () => import('../layouts/Default'),
    meta: { auth: true },
    children: generalInformation('general')
  },
  {
    path: '/questions',
    name: 'questions',
    component: () => import('../layouts/Default'),
    meta: { auth: true },
    children: questions('questions')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../layouts/Default'),
    meta: { auth: true },
    children: adminControll('admin')
  },
 
  {
    path: '/achievement/:id/',
    name: 'achievement',
    component: () => import('../layouts/Default'),
    meta: { auth: true },
    children: achievement('achievement')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const authPath = ['/auth/signin','/auth/signup','/auth/admin/signup','/auth/forget-password','/auth/reset-password/:token'];
  const authRequired = !authPath.includes(to.path);
  const authNotRequired = authPath.includes(to.path)

  const loggedIn = localStorage.getItem('user');
    
 
  if (authRequired && !loggedIn) {

    next('/auth/signin');
  } else{
    next()
  }
});
export default router
