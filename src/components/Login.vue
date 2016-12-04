<template>
  <div class="login_wrapper">

    <div class="animate form login_form">
      <section class="login_content">
        <form v-on:submit.prevent="onSubmit">
          <h1>Login Form</h1>
          <div>
            <input type="text" v-model="username" name="username" class="form-control" placeholder="Username" required="" />
          </div>
          <div>
            <input type="password" v-model="password" name="password" class="form-control" placeholder="Password" required="" />
          </div>

          <div>
            <button type="submit" class="btn btn-default submit">Log in</button>
            <a class="reset_pass" href="#">Lost your password?</a>
          </div>

          <div class="clearfix"></div>

          <div class="separator">
            <p class="change_link">New to site?
              <router-link to="/register" class="to_register">Create Account</router-link>
            </p>

            <div class="clearfix"></div>
            <br />

            <div>
              <h1><i class="fa fa-paw"></i> IMG</h1>
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
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit: function () {
      if (this.username === 'test' && this.password === 'test') {
        this.$router.push('/panel')
        window.localStorage.setItem('username', this.username)
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
