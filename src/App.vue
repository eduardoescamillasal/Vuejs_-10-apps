<template>
  <AppHeader />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <LoginModal />
</template>

<script>
import AppHeader from './components/AppHeader';
import LoginModal from './components/LoginModal';
import firebase from './utilities/firebase';

export default {
  mounted() {
    firebase.default.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit('setIsLoggedIn',true);
        this.$store.commit('setAuthUser', user);
      } else {
        this.$store.commit('setIsLoggedIn', false);
        this.$store.commit('setAuthUser', {});
      }
    });
  },
  components: {
    AppHeader,
    LoginModal,
  },
};
</script>

<style>

</style>
