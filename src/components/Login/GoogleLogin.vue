<template>
  <section class="mt-5 text-center">
    <button
      class="border px-2 rounded"
      @click="loginWithGoogle">
        Login with Google
    </button>
  </section>
</template>

<script>
import firebase from '../../utilities/firebase';
export default {
  methods: {
    loginWithGoogle() {
      var provider = new firebase.default.auth.GoogleAuthProvider();
      firebase
      .default
      .auth()
      .signInWithPopup(provider)
      .then(()=>{
        this.$emit("close-login-from-google");
      });
    },
  },
}
</script>

<style>

</style>
