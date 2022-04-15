<template>
  <div class="sm:container mx-auto">
    <div :style="getImageAddress(data.post.featureImage)" class="cover-image w-100 h-64 md:h-img bg-cover bg-center border border-lighten"/>
    <div class="content-wrap bg-black/50 mt-16 px-6 md:px-10 lg:px-20">
      <div class="pt-20 mb-10">
        <h1 class="text-3xl text-white font-bold">{{ data.post.title }}</h1>
        <div id="meta" class="flex items-center font-semibold">
          <div class="tracking-wide uppercase tag tag-update" :style="getColor(data.post.tag.color)">{{ data.post.tag.name }}</div>
          <div class="spacer mx-3">–</div>
          <time class="text-gray-500">{{ getDate(data.post.createTime) }}</time>
        </div>
      </div>
      <div class="content pb-20" v-html="generatePostContent(data.post.html)"/>
    </div>
    <div class="p-10 md:p-15 mb-20">
      <div id="title" class="text-center pb-10">
        <h3 class="text-white text-3xl font-bold">Looking For More?</h3>
        <h5 class="mb-0 text-gray-500">Check out some of our other posts if you haven’t already!</h5>
      </div>
      <div class="grid gap-8 lg:grid-cols-2 md:px-10">
        <router-link v-for="post in data.recentPosts" :to="getPostURL(post.slug)" @click="onchange" class="post mb-4 lg:mb-0 group">
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
        </router-link>
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
import {onBeforeRouteLeave, useRoute} from "vue-router";
import axios from "axios";
import {publishSync} from "pubsub-js";
import {onPageEnter, onPageLeave} from "../../../hook/appearance.js";

const route = useRoute()
const postId = route.params.postId;

const data = reactive({
  post: {
    tag: {
      name: '',
      color: ''
    }
  },
  recentPosts: []
})

const selectPostAndPreviewList = async () => {
  const requestList = [
    {url: `http://127.0.0.1:3000/baioretto/homeward/api/post/${postId}`, params: null},
    {url: 'http://127.0.0.1:3000/baioretto/homeward/api/post/selector', params: {records: 3}}
  ]
  await Promise.all(requestList.map((endpoint) => {
    axios.get(endpoint.url, {params: {...endpoint.params}}).then(
        ({data: result}) => {
          if (result.data instanceof Array) {
            data.recentPosts = [...result.data]
            let isFormatted = false
            data.recentPosts.forEach((value, index) => {
              if (value.slug === postId) {
                data.recentPosts.splice(index, 1)
                isFormatted = true
              }
            })
            if (!isFormatted) data.recentPosts.pop()
          } else {
            data.post = {...result.data}
            publishSync('setCurrentBackground', data.post.featureImage)
          }
        }
    )
  })).then(() => {
    onPageEnter()
  })
}
selectPostAndPreviewList()


const onchange = () => {
  window.scroll({top: 0, behavior:"smooth"})
  publishSync('changeFooterCondition', false)
}
onBeforeRouteLeave(() => {
  onPageLeave()
})
</script>