<template>
  <div class="login_wrapper">

    <div id="register" class="animate form">
      <section class="login_content">
        <form v-on:submit.prevent="onSubmit">
          <h1>Create Account</h1>
          <div>
            <input type="text" v-model="username" class="form-control" placeholder="Username" required="" />
          </div>
          <div>
            <input type="email" v-model="email" class="form-control" placeholder="Email" required="" />
          </div>
          <div>
            <input type="password" v-model="password" class="form-control" placeholder="Password" required="" />
          </div>

          <div>
            <input type="submit" class="btn btn-default submit" value="Submit">
          </div>

          <div class="clearfix"></div>

          <div class="separator">
            <p class="change_link">Already a member?
              <router-link to="/login" class="to_register">Log In</router-link>
            </p>

            <div class="clearfix"></div>
            <br />

            <div>
              <h1><i class="fa fa-paw"></i>IMG</h1>
              <p>©2016 All Rights Reserved. IMG. Privacy and Terms</p>
            </div>
          </div>
        </form>
      </section>
    </div>

  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit: function () {
      if (this.username !== '' && this.email !== '' && this.password !== '') {
        this.$router.push('/login')
      } else {
        console.log('error')
      }
      // this.$http.get('/someUrl').then((response) => {
      //   console.log('success')
      // }, (response) => {
      //   console.log('error')
      // })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
