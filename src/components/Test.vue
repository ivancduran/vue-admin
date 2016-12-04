<template>
  <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur earum quos, officiis unde nobis maiores perferendis ut soluta praesentium reiciendis? Perferendis amet accusamus, aliquid? Quia reprehenderit nobis laborum nam accusamus.
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos quas expedita asperiores recusandae et impedit amet hic quo, magnam optio beatae, ut blanditiis ea, pariatur necessitatibus labore adipisci laudantium corrupti!</p>
    <p></p>

    <div :class="['app', 'app--' + $route.name]">
      <h1>Vue App</h1>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
      <router-view transition="fade" transition-mode="out-in"></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'Testing Message'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
