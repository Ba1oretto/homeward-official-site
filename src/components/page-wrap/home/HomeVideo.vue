<template>
  <div class="container mx-auto">
    <div class="grid lg:grid-cols-2 gap-5">
      <div @click="openPlayer" class="video-wrap">
        <div class="video border border-white transition duration-150 hover:shadow-pink">
          <div class="play transition-all ease-in-out duration-150">
            <svg viewBox="0 0 512 512" fill="currentColor" class="mx-auto mb-3 w-16 h-16 opacity-75">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"/>
            </svg>
            <p class="text-white font-bold uppercase text-sm text-shadow">观看测试版本预览</p>
          </div>
        </div>
      </div>
      <div class="text text-center lg:text-left md:flex md:flex-col md:justify-center">
        <h2 class="text-white text-3xl font-bold mb-4 tracking-0.2">什么是归途之旅?</h2>
        <p class="mb-2 font-medium text-gray-500">归途之旅是一个 <b>Minecraft: Java Edition</b> 服务器致力于打造基于原版的探索体验。我们的目标是让玩家爱上生存模式并为玩家提供新的自定义方块，探索以及战斗，新的生物群系，养殖和角色扮演等内容</p>
        <p class="font-medium text-gray-500">在这里，你不光可以成为一个建造者建造华丽的建筑，也可以探索这广阔无垠的大陆，也可以痴迷于炼药和锻造，或者参与小镇的任务成为知名的探险家，归途之旅充满着无限的可能性!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import pubsub from "pubsub-js";

const openPlayer = () => {
  pubsub.publish('enablePlayer')
}
</script>

<script>
export default {
  name: "HomeVideo"
}
</script>