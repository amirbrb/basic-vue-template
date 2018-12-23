<template>
  <div class="">
    <HeaderNavigation></HeaderNavigation>
    <div class="route-content">
      <router-view></router-view>
    </div>
    <FLoatingMenu :bottom="userState.menuPosition.bottom" :right="userState.menuPosition.right"></FLoatingMenu>
    <FooterPanel></FooterPanel>
  </div>
</template>

<script>
  import HeaderNavigation from '@/components/HeaderNavigation.vue'
  import FooterPanel from '@/components/Footer.vue'
  import FLoatingMenu from '@/components/FLoatingMenu.vue'
  import userState from './user-state'
  export default {
    name: 'app',
    components: {HeaderNavigation, FooterPanel, FLoatingMenu},
    methods: {
    },
    data: function () {
      return {
        userState: userState
      }
    }
  }
</script>

<style>
  @import '../static/css/bootstrap.min.css';
  @import '../static/css/site.css';
  .route-content{
    margin-top: 90px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 90px;
  }
</style>