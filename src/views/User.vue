<template>
  <div>
<!--    <h2>This is user {{$route.params.id}}</h2>-->
    <ul>
      <li>123</li>
      <li>456</li>
      <li>789</li>
    </ul>
    <router-link to="/user/child">test</router-link>
    <router-view/>
  </div>
</template>

<script>
import childTest from "@/views/childTest";

export default {
  name: "User",
  // components:childTest
}
</script>

<style scoped>

</style>