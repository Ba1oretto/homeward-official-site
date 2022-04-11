<template>
  <div class="sm:container mx-auto">
    <!--todo-->
    <div :style="getImageAddress(data.post.featureImage)" class="cover-image w-100 h-64 md:h-img bg-cover bg-center border border-lighten"/>
    <div class="content-wrap bg-black/50 mt-16 px-6 md:px-10 lg:px-20">
      <div class="pt-20 mb-10">
        <!--todo-->
        <h1 class="text-3xl text-white font-bold">{{ data.post.title }}</h1>
        <!--todo-->
        <div id="meta" class="flex items-center font-semibold">
          <div class="tracking-wide uppercase tag tag-update" :style="getColor(data.post.tag.color)">{{ data.post.tag.name }}</div>
          <div class="spacer mx-3">–</div>
          <time class="text-gray-500">{{ getDate(data.post.createTime) }}</time>
        </div>
      </div>
      <!--todo-->
      <div class="content pb-20" v-html="generatePostContent(data.post.html)"/>
    </div>
    <div class="p-10 md:p-15 mb-20">
      <div id="title" class="text-center pb-10">
        <h3 class="text-white text-3xl font-bold">Looking For More?</h3>
        <h5 class="mb-0 text-gray-500">Check out some of our other posts if you haven’t already!</h5>
      </div>
      <div class="grid gap-8 lg:grid-cols-2 md:px-10">
        <a v-for="post in data.recentPosts" :href="getPostURL(post.slug)" class="post mb-4 lg:mb-0 group">
          <div class="cover-wrap mb-6">
            <div class="blackout"/>
            <div :style="getImageAddress(post.featureImage)" class="cover shadow-border bg-cover bg-center transition ease-in-out duration-150 group-hover:opacity-90 group-hover:shadow-purple-inner"/>
          </div>
          <div class="post-body transition-opacity ease-in-out duration-150 group-hover:opacity-90 text-center">
            <h3 class="font-bold text-white mb-1 text-xl">{{ post.title }}</h3>
            <div class="flex lg:items-center flex-col-reverse lg:flex-row text-gray-500 justify-center">
              <div :style="getColor(post.tag.color)" class="font-semibold tracking-wide uppercase">{{ post.tag.name }}</div>
              <div class="mx-2 hidden lg:block">–</div>
              <div class="date">{{ getDate(post.createTime) }}</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostContainer"
}
</script>

<script setup>
import {getDate, getImageAddress, getColor, getPostURL, generatePostContent} from "../../../hook/attribute-generator.js";
import {reactive} from "vue";
import {useRoute} from "vue-router";
import axios from "axios";
import pubsub from "pubsub-js";

const route = useRoute()
const postId = route.params.postId;

const params = {
  offset: 1,
  records: 2
}
const data = reactive({
  post: {
    tag: {
      name: '',
      color: ''
    }
  },
  recentPosts: []
})
const getDetails = async () => {
  const {data: res} = await axios.get(`http://127.0.0.1:3000/baioretto/homeward/api/post/${postId}`)
  const result = res.data
  data.post = {...result}
  pubsub.publish('setCurrentBackground', data.post.featureImage)
}
const getRecentPost = async () => {
  const {data: res} = await axios.get('http://127.0.0.1:3000/baioretto/homeward/api/post/selector', {params})
  const result = res.data
  data.recentPosts = [...result]
}
getDetails()
getRecentPost()
</script>