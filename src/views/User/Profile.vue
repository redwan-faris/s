<template>
    <div class="row">
      <div class="col-sm-12">
        <iq-card body-class=" profile-page p-0">
          <template v-slot:body>
            <div class="profile-header">
              <div class="cover-container">
                <b-img v-bind:src="user.background" alt="profile-bg" rounded fluid class="w-100" />
                <ul class="header-nav d-flex flex-wrap justify-end p-0 m-0">
                </ul>
              </div>
              <div class="profile-info p-4">
                <div class="row">
                  <div class="col-md-6 col-sm-12">
                    <div class="user-detail pl-5">
                      <div class="d-flex flex-wrap align-items-center">
                        <div class="profile-img pr-4">
                          <b-img v-bind:src="user.profile" alt="profile-img" fluid class="avatar-130" />
                        </div>
                        <div class="profile-detail d-flex align-items-center">
                          <h3>{{user.name}}</h3>
                          <p class="m-0 pl-3"> {{user.role}} </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <tab-nav :pills="true" id="pills-tab" class="profile-feed-items d-flex justify-content-end">
                      <tab-nav-items :active="true" id="pills-feed-tab" href="#profile-feed" ariaControls="pills-home" role="tab" :ariaSelected="true" title="Feed" />
                      <tab-nav-items :active="false" id="pills-activity-tab" href="#profile-activity" ariaControls="pills-profile" role="tab" :ariaSelected="false" title="Activity" />
                      <tab-nav-items :active="false" id="pills-friend-tab" href="#profile-friends" ariaControls="pills-contact" role="tab" :ariaSelected="false" title="Friends" />
                      <tab-nav-items :active="false" id="pills-profile-tab" href="#profile-profile" ariaControls="pills-contact" role="tab" :ariaSelected="false" title="profile" />
                    </tab-nav>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </iq-card>
      </div>
      <div class="col-sm-12">
        <div class="row">
          <div class="col-lg-3 profile-left">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">News</h4>
              </template>
              <template v-slot:body>
                <ul class="m-0 p-0">
                  <li class="d-flex" v-for="(list,index) in news" :key="index"  :class="{ 'mb-2': index === 0 }"   >
                    <div class="news-icon" :class="{ 'mb-0': index==news.length-1 }"><i class="ri-chat-4-fill"></i></div>
                    <p class="news-detail mb-0" v-html="list.description"></p>
                  </li>
                </ul>
              </template>
            </iq-card>
            <iq-card body-class="p-0">
              <template v-slot:headerTitle>
                <h4 class="card-title">Gallery</h4>
              </template>
              <template v-slot:headerAction>
                <p class="m-0">132 pics</p>
              </template>
              <template v-slot:body>
                <ul class="profile-img-gallary d-flex flex-wrap p-0 m-0">
                  <li v-for="(item,index) in galary" :key="index" class="col-md-4 col-6 pl-1 pr-0 pb-1">
                    <b-link :href="item.href">
                      <b-img :src="item.image" alt="gallary-image" fluid /></b-link>
                  </li>
                </ul>
              </template>
            </iq-card>
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">Favourite Pages</h4>
              </template>
              <template v-slot:body>
                <ul class="pages-lists m-0 p-0" v-for="(feed,index) in twitterFeed" :key="index">
                  <li class="d-flex mb-4 align-items-center">
                      <div class="user-img img-fluid">
                         <b-img :src="feed.image" alt="" />
                      </div>
                      <div class="media-support-info ml-3">
                        <h6>{{feed.name}}</h6>
                        <p class="mb-0">{{feed.description}}</p>
                      </div>
                      <div class="add-suggestion">
                        <a href="javascript:void();" class="text-warning"><i class="ri-star-half-line"></i></a>
                      </div>
                  </li>
                </ul>
              </template>
            </iq-card>

            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">Recent Places</h4>
              </template>
              <template v-slot:body>
                <ul class="pages-lists m-0 p-0" v-for="(feed,index) in recentPages" :key="index">
                  <li class="d-flex mb-4 align-items-center">
                      <div class="user-img img-fluid">
                        <b-img :src="feed.image" alt="" class="rounded-circle avatar-40" />
                      </div>
                      <div class="media-support-info ml-3">
                        <h5>{{feed.name}}</h5>
                      </div>
                  </li>
                </ul>
              </template>
            </iq-card>
          </div>
          <div class="col-lg-6 profile-center">
            <tab-content id="pills-tabContent-2">
              <tab-content-item :active="true" id="profile-feed" aria-labelled-by="pills-feed-tab">
                <iq-card body-class="p-0">
                  <template v-slot:body>
                    <div class="user-post-data p-3">
                      <div class="d-flex flex-wrap">
                        <div class="media-support-user-img mr-3">
                          <b-img rounded="circle" fluid :src="require('../../assets/images/user/user-1.jpg')" alt=""/>
                        </div>
                        <div class="media-support-info mt-2">
                          <h5 class="mb-0"><b-link href="#" class="">Anna Sthesia</b-link></h5>
                          <p class="mb-0 text-primary">colleages</p>
                        </div>
                        <div class="iq-card-header-toolbar d-flex align-items-center">
                          <b-dropdown id="dropdownMenuButton40" right variant="none" menu-class="p-0">
                            <template v-slot:button-content>
                              <b-link href="#" class="text-secondary">29 mins <i class="ri-more-2-line ml-3"></i></b-link>
                            </template>
                            <b-dropdown-item href="#"><i class="ri-user-unfollow-line mr-2"></i>Unfollow</b-dropdown-item>
                            <b-dropdown-item href="#"><i class="ri-share-forward-line mr-2"></i>Share</b-dropdown-item>
                            <b-dropdown-item href="#"><i class="ri-file-copy-line mr-2"></i>Copy Link</b-dropdown-item>
                          </b-dropdown>
                        </div>
                      </div>
                    </div>
                  </template>
                  <div class="user-post">
                    <b-link href="javascript:void(0);"><b-img :src="require('../../assets/images/page-img/p1.jpg')" alt="post-image" fluid /></b-link>
                  </div>
                  <div class="comment-area p-3">
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="d-flex align-items-center">
                        <div class="d-flex align-items-center feather-icon mr-3">
                          <b-link href="javascript:void(0);"><i class="ri-heart-line"></i></b-link>
                          <span class="ml-1">140</span>
                        </div>
                        <div class="d-flex align-items-center message-icon">
                          <b-link href="javascript:void(0);"><i class="ri-chat-4-line"></i></b-link>
                          <span class="ml-1">140</span>
                        </div>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="iq-media-group">
                          <!-- <b-link href="#" class="iq-media">
                            <b-img class="avatar-40" rounded="circle" fluid :src="require('../../assets/images/user/user-1.jpg')" alt="" />
                          </b-link>
                          <b-link href="#" class="iq-media">
                            <b-img class="avatar-40" rounded="circle" fluid :src="require('../../assets/images/user/user-2.jpg')" alt="" />
                          </b-link>
                          <b-link href="#" class="iq-media">
                            <b-img class="avatar-40" rounded="circle" fluid :src="require('../../assets/images/user/user-3.jpg')" alt="" />
                          </b-link>
                          <b-link href="#" class="iq-media">
                            <b-img class="avatar-40" rounded="circle" fluid :src="require('../../assets/images/user/user-4.jpg')" alt="" />
                          </b-link>
                          <b-link href="#" class="iq-media">
                            <b-img class="avatar-40" rounded="circle" fluid :src="require('../../assets/images/user/user-5.jpg')" alt="" />
                          </b-link> -->
                        </div>
                        <span class="ml-2">+140 more</span>
                      </div>
                    </div>
                    <hr>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                    <hr>
                    <ul class="post-comments p-0 m-0">
                      <li class="mb-2">
                        <div class="d-flex flex-wrap">
                          <div class="user-img">
                            <b-img :src="require('../../assets/images/user/user-2.jpg')" alt="userimg" class="avatar-35" rounded="circle" fluid />
                          </div>
                          <div class="comment-data-block ml-3">
                            <h6>Monty Carlo</h6>
                            <p class="mb-0">Lorem ipsum dolor sit amet</p>
                            <div class="d-flex flex-wrap align-items-center comment-activity">
                              <!-- <b-link href="javascript:void(0);">like</b-link>
                              <b-link href="javascript:void(0);">reply</b-link>
                              <b-link href="javascript:void(0);">translate</b-link> -->
                              <span> 5 min </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex flex-wrap">
                          <div class="user-img">
                            <b-img :src="require('../../assets/images/user/user-3.jpg')" alt="userimg" class="avatar-35" rounded="circle" fluid />
                          </div>
                          <div class="comment-data-block ml-3">
                            <h6>Paul Molive</h6>
                            <p class="mb-0">Lorem ipsum dolor sit amet</p>
                            <div class="d-flex flex-wrap align-items-center comment-activity">
                              <b-link href="javascript:void(0);">like</b-link>
                              <b-link href="javascript:void(0);">reply</b-link>
                              <b-link href="javascript:void(0);">translate</b-link>
                              <span> 5 min </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <!-- <b-form class="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                      <b-form-input type="text" class="rounded" placeholder="Lovely!" />
                      <div class="comment-attagement d-flex">
                        <b-link href="javascript:void(0);"><i class="ri-user-smile-line mr-2"></i></b-link>
                        <b-link href="javascript:void(0);"><i class="ri-camera-line mr-2"></i></b-link>
                      </div>
                    </b-form> -->
                  </div>
                </iq-card>
                <iq-card body-class="p-0">
                  <template v-slot:body>
                    <div class="user-post-data p-3">
                      <div class="d-flex flex-wrap">
                        <div class="media-support-user-img mr-3">
                          <b-img rounded="circle" fluid :src="require('../../assets/images/user/user-2.jpg')" alt="" />
                        </div>
                        <div class="media-support-info mt-2">
                          <h5 class="mb-0"><b-link href="#" class="">jenny issad</b-link></h5>
                          <p class="mb-0 text-primary">colleages</p>
                        </div>
                        <div class="iq-card-header-toolbar d-flex align-items-center">
                          <!-- <b-dropdown id="dropdownMenuButton40" right variant="none" menu-class="p-0">
                            <template v-slot:button-content>
                              <b-link href="#" class="text-secondary">1 hr <i class="ri-more-2-line ml-3"></i></b-link>
                            </template>
                            <b-dropdown-item href="#"><i class="ri-user-unfollow-line mr-2"></i>Unfollow</b-dropdown-item>
                            <b-dropdown-item href="#"><i class="ri-share-forward-line mr-2"></i>Share</b-dropdown-item>
                            <b-dropdown-item href="#"><i class="ri-file-copy-line mr-2"></i>Copy Link</b-dropdown-item>
                          </b-dropdown> -->
                        </div>
                      </div>
                    </div>
                    <hr class="mt-0">
                    <p class="p-3 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                    <div class="comment-area p-3">
                      <hr class="mt-0">
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-center">
                          <div class="d-flex align-items-center feather-icon mr-3">
                            <b-link id="clickme" href="javascript:void(0);"><i class="ri-heart-line"></i></b-link>
                            <span class="ml-1">140</span>
                          </div>
                          <div class="d-flex align-items-center message-icon">
                            <b-link href="javascript:void(0);"><i class="ri-chat-4-line"></i></b-link>
                            <span class="ml-1">140</span>
                          </div>
                        </div>
                        <div class="d-flex align-items-center">
                          <div class="iq-media-group">
                            <!-- <b-link href="#" class="iq-media">
                              <b-img class="avatar-40" rounded="circle" fluid :src="require('../../assets/images/user/user-1.jpg')" alt="" />
                            </b-link>
                            <b-link href="#" class="iq-media">
                              <b-img class="avatar-40" rounded="circle" fluid :src="require('../../assets/images/user/user-2.jpg')" alt="" />
                            </b-link>
                            <b-link href="#" class="iq-media">
                              <b-img class="avatar-40" rounded="circle" fluid :src="require('../../assets/images/user/user-3.jpg')" alt="" />
                            </b-link>
                            <b-link href="#" class="iq-media">
                              <b-img class="avatar-40" rounded="circle" fluid :src="require('../../assets/images/user/user-4.jpg')" alt="" />
                            </b-link>
                            <b-link href="#" class="iq-media">
                              <b-img class="avatar-40" rounded="circle" fluid :src="require('../../assets/images/user/user-5.jpg')" alt="" />
                            </b-link> -->
                          </div>
                          <span class="ml-2">+140 more</span>
                        </div>
                      </div>
                      <!-- <b-form class="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                        <b-form-input type="text" class="rounded" placeholder="Lovely!" />
                        <div class="comment-attagement d-flex">
                          <b-link href="javascript:void(0);"><i class="ri-user-smile-line mr-2"></i></b-link>
                          <b-link href="javascript:void(0);"><i class="ri-camera-line mr-2"></i></b-link>
                        </div>
                      </b-form> -->
                    </div>
                  </template>
                </iq-card>
              </tab-content-item>
              <tab-content-item :active="false" id="profile-activity" aria-labelled-by="pills-activity-tab">
                <iq-card>
                  <template v-slot:headerTitle>
                    <h4 class="card-title">Activity timeline</h4>
                  </template>
                  <template v-slot:headerAction>
                    <!-- <b-dropdown id="dropdownMenuButton5" right variant="none">
                      <template v-slot:button-content>
                        <span class="text-primary">View All</span>
                      </template>
                      <b-dropdown-item href="#"><i class="ri-eye-fill mr-2"></i>View</b-dropdown-item>
                      <b-dropdown-item href="#"><i class="ri-close-circle-line mr-2"></i>Delete</b-dropdown-item>
                      <b-dropdown-item href="#"><i class="ri-pencil-fill mr-2"></i>Edit</b-dropdown-item>
                      <b-dropdown-item href="#"><i class="ri-printer-fill mr-2"></i>Print</b-dropdown-item>
                      <b-dropdown-item href="#"><i class="ri-file-download-fill mr-2"></i>Download</b-dropdown-item>
                    </b-dropdown> -->
                  </template>
                  <template v-slot:body>
                    <TimeLine :items="timelineItems" />
                  </template>
                </iq-card>
              </tab-content-item>
              <tab-content-item :active="false" id="profile-friends" aria-labelled-by="pills-friend-tab">
                <iq-card>
                  <template v-slot:headerTitle>
                    <h4 class="card-title">Friends</h4>
                  </template>
                  <template v-slot:body>
                    <ul class="suggestions-lists m-0 p-0">
                      <li v-for="(item,index) in friends" :key="index" class="d-flex mb-4 align-items-center">
                        <div class="user-img img-fluid">
                          <b-img :src="item.image" alt="story-img" rounded="circle" class="avatar-40" />
                        </div>
                        <div class="media-support-info ml-3">
                          <h6>{{ item.name }}</h6>
                          <p class="mb-0">{{ item.role }}</p>
                        </div>
                        <div class="iq-card-header-toolbar d-flex align-items-center">
                          <!-- <b-dropdown id="dropdownMenuButton40" right variant="none" menu-class="p-0">
                            <template v-slot:button-content>
                              <i class="ri-more-2-line"></i>
                            </template>
                            <b-dropdown-item href="#"><i class="ri-user-unfollow-line mr-2"></i>Unfollow</b-dropdown-item>
                            <b-dropdown-item href="#"><i class="ri-share-forward-line mr-2"></i>Share</b-dropdown-item>
                            <b-dropdown-item href="#"><i class="ri-file-copy-line mr-2"></i>Copy Link</b-dropdown-item>
                          </b-dropdown> -->
                        </div>
                      </li>
                    </ul>
                    <!-- <b-button href="javascript:void(0);" variant="primary" class="d-block"><i class="ri-add-line"></i> Load More</b-button> -->
                  </template>
                </iq-card>
              </tab-content-item>
              <tab-content-item :active="false" id="profile-profile" aria-labelled-by="pills-profile-tab">
                <iq-card>
                  <template v-slot:headerTitle>
                    <h4 class="card-title">Profile</h4>
                  </template>
                  <template v-slot:body>
                    <div class="user-detail text-center">
                      <div class="user-profile">
                        <b-img :src="require('../../assets/images/user/11.png')" alt="profile-img" fluid class="avatar-130" />
                      </div>
                      <div class="profile-detail mt-3">
                        <h3 class="d-inline-block">Nik Jone</h3>
                        <p class="d-inline-block pl-3"> - Web designer</p>
                        <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 500s</p>
                      </div>
                    </div>
                  </template>
                </iq-card>
                <iq-card>
                  <template v-slot:headerTitle>
                    <h4 class="card-title">About User</h4>
                  </template>
                  <template v-slot:body>
                    <div class="user-bio">
                      <p>Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes.Topping cake wafer.</p>
                    </div>
                    <div v-for="(item,index) in userBio" :key="index" class="mt-2">
                      <h6>{{ item.title }}:</h6>
                      <p v-html="item.description"></p>
                    </div>
                  </template>
                </iq-card>
              </tab-content-item>
            </tab-content>
          </div>
          <div class="col-lg-3 profile-right">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">About</h4>
              </template>
              <template v-slot:body>
                <div class="about-info m-0 p-0">
                  <div class="row">
                    <div class="col-12"><p>{{user.about}}</p></div>
                    <div class="col-3">Email: </div>
                    <!-- <div class="col-9"><b-link v-bind:href="user.email"> nikjone@demoo.com </b-link></div> -->
                    <div class="col-3">Phone:</div>
                    <!-- <div class="col-9"><b-link v-bind:href="user.phone">001 2351 256 12</b-link></div> -->
                    <div class="col-3">Location:</div>
                    <div class="col-9">{{user.location}}</div>
                  </div>
                </div>
              </template>
            </iq-card>
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">Stories</h4>
              </template>
              <template v-slot:body>
                <ul class="media-story m-0 p-0">
                  <li v-for="(item,index) in story" :key="index" class="d-flex align-items-center" :class="item.isActive +' '+ item.class">
                    <!-- <b-img :src="item.image" alt="story-img" rounded="circle" fluid /> -->
                    <div class="stories-data ml-3">
                      <h5>{{ item.title }}</h5>
                      <p class="mb-0">{{ item.time }}</p>
                    </div>
                  </li>
                </ul>
              </template>
            </iq-card>
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">Suggestions</h4>
              </template>
              <template v-slot:headerAction>
                <b-link href="#"><i class="ri-more-fill"></i></b-link>
              </template>
              <template v-slot:body>
                <ul class="suggestions-lists m-0 p-0">
                  <li v-for="(item,index) in suggestions" :key="index" class="d-flex mb-4 align-items-center">
                    <div class="user-img img-fluid">
                      <!-- <b-img :src="item.image" alt="story-img" rounded="circle" class="avatar-40" /> -->
                    </div>
                    <div class="media-support-info ml-3">
                      <h6>{{ item.name }}</h6>
                      <p class="mb-0">{{ item.mutual_friend }}</p>
                    </div>
                    <div class="add-suggestion"><b-link href="javascript:void(0);"><i class="ri-user-add-line"></i></b-link></div>
                  </li>
                </ul>
                <!-- <b-link href="javascript:void(0);" class="btn btn-primary d-block"><i class="ri-add-line"></i> Load More</b-link> -->
              </template>
            </iq-card>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
// import { socialvue } from '../../config/pluginInit'
import {getOpenBook} from '../../api/getOpenBook'
export default {
  name: 'Profile',
  async mounted () {
     ('mounted')
    await this.getBook()
  },
  data () {
    return {
  


      user:{}
     
  
    
     
    }
  },methods:{
     async getBook(){
    const user = await  getOpenBook();
    this.user = user;
     (books.category)
    }
  }
}
</script>
