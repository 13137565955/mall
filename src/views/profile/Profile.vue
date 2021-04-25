<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <template v-slot:center><div>Coderwh商城</div></template>
    </nav-bar>

    <img src="~assets/img/profile/profile.png" class="a"/>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar';
	export default {
		name: "Profile",
    components: {
      NavBar
    },
	}
</script>

<style scoped>
  #profile {
    background-color: #f2f2f2;
  }

  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
 .a{
   width: 100%;
   height: 100%;
 }
  

</style>
