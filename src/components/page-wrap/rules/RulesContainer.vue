<template>
  <div class="container mx-auto">
    <div class="px-6 md:px-10 lg:px-20">
      <div class="pt-10 pb-24">
        <div class="text-5xl text-white font-bold text-center">规则</div>
        <div class="max-w-2xl mx-auto text-center text-gray-500 mt-5">
          <p class="mb-2">这里是 归途之旅的 规则页面！这个页面让玩家更好地了解这里的规则，所有用户都应该遵守一下规则无论该用户的标签或者游戏时长</p>
          <p class="mb-2">对于所有人而言，当你使用的你的Minecraft账号登录归途之旅时，你就应该遵守下方的规则，如果你在线时出发了以下的规则你会获得相应的惩罚。</p>
          <p>我们的团队花费了很多精力来维护游戏内秩序，并且很努力让大家都拥有愉悦且公平的游戏体验。如果你在游戏中被管理者警告，请尊重他们并且和他们一起解决当前的问题。</p>
        </div>
      </div>
      <div class="content pb-20">
        <section v-for="(rule, index) in rules" :key="index" class="pb-10">
          <div class="heading pb-6">
            <div class="title font-bold text-white text-xl mb-2">{{ rule.title }}</div>
            <div class="description text-gray-600 text-sm">{{ rule.description }}</div>
          </div>
          <div class="rules">
            <ul class="text-lg text-gray-400">
              <li v-for="(detail, index) in rule.content" class="bg-gray-900 rounded-md py-4 px-4 mb-4">
                <div class="top flex items-center">
                  <div class="num bg-gray-800 rounded-full font-bold text-sm w-8 h-8 flex items-center justify-center">{{ index + 1 }}</div>
                  <span class="block text-gray-300 font-bold ml-4">{{ detail }}</span>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted} from "vue";
import {onBeforeRouteLeave} from "vue-router";
import {onPageEnter, onPageLeave} from "../../../hook/appearance.js";

const rules = [
  {
    title: '不当的聊天行为',
    description: '用户在我们的聊天中的行为以及方式至关重要，因为 归途之旅 时为所有年龄段玩家交流的友好场所。 以下是将导致惩罚的行为的示例，违反该分类的玩家会受到禁言的惩罚随次数累积惩罚时间越来越长直到永久禁言。你可以和受到你的伤害的玩家道歉并且对方接收的情况下来获得惩罚的减轻。',
    content: [
      '不尊重/冒犯性的语言和仇恨言论',
      '对国家政策进行不正当讨论和散播谣言',
      '故意跨过聊天过滤器进行言论',
      '刷屏或者发送特殊符号占用聊天框',
      '骚扰和进行任意的语言暴力',
      '把他人的个人信息散步与众或者他人',
      '宣传其他服务器及损害服务器利益'
    ]
  },
  {
    title: '不当的行为',
    description: '我们希望玩家无论何时做出正确的游戏内行为，归途之旅是一个非竞争性质服务器，不是一个玩家内攀比的服务器。下方是一些会导致惩罚的不当行为。请记住你代表你的账号并且你要为你的账号负责！',
    content: [
      '故意破坏其他玩家的地域',
      '故意在PVP以外的场地击杀其他玩家',
      '游戏内进行欺骗交易',
      '不当的建筑或者建筑标志',
      '不当的皮肤和游戏名称',
      '使用批量账户或者他人账户逃避惩罚',
      '使用真实货币在游戏内进行交易'
    ]
  },
  {
    title: '修改和利用BUG',
    description: '归途之旅不允许任何修改客户端以及模组造成不平等游戏环境，吐过一个模组或者客户端给你带来对于其他玩家而言不公平的游戏优势，不要使用它。如果你遇到了服务器漏洞或者游戏漏洞或者是我们自己的机制造成的漏洞，请不要利用他们，如果你利用了也会瞬间遭到惩罚。',
    content: [
      'X-ray 材质包或者客户端',
      '非装饰性修改和客户端',
      '作弊客户端',
      '自动电击器，包括但不限于客户端形式和物理硬件形式',
      '原版我的世界漏洞',
      '以任何形式复制任何物品',
      '有意地使用我们自定义系统的漏洞'
    ]
  }
]
onMounted(() => {
  onPageEnter()
})


onBeforeRouteLeave(() => {
  onPageLeave()
})
</script>

<script>
export default {
  name: "RulesContainer"
}
</script>