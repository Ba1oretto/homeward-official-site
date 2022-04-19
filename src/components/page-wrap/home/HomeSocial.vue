<template>
  <section id="discord">
    <div class="container mx-auto px-10 py-20 md:py-32">
      <div class="grid lg:grid-cols-2 gap-3 items-center">
        <div class="img text-center">
          <img src="/src/assets/image/robot.png" class="block mx-auto md:h-discord" alt="robot">
        </div>
        <div class="text text-center lg:text-left">
          <h2 class="text-white text-3xl font-bold mb-4">让我们一起交流</h2>
          <p class="mb-4 text-gray-500 font-medium">我们认为交流是十分重要的，这允许我们更好地了解玩家或得到玩家的及时反馈，同时良好的沟通也可以使我们的发展方向更加明确。请加入我们的Discord来认识更多有趣的人!</p>
          <a href="https://baioretto.com" target="_blank" class="inline-block bg-btn-discord border border-lighten py-3 px-6 shadow-discord uppercase font-extrabold tracking-wide text-btn-discord-t transition-opacity duration-150 ease-in-out hover:opacity-75 mt-3">加入我们的 Discord</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeSocial"
}
</script>