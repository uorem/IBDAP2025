<script setup>

import lazyImages from "@/views/index/components/lazyImages.vue";
import CollapseCard from "@/views/index/components/collapseCard.vue";
</script>

<template>
  <!--                    视频背景-->
    <div class="videoContainer">
        <video class="fullscreenVideo" id="bgVid" playsinline="" autoplay="" muted="" loop="">
            <source src="@/assets/video/bg_video.mp4" type="video/mp4">
        </video>
        <!--                    懒加载图片插件-->
        <lazy-Images/>
    </div>
  <!--                    折叠卡片-->
    <collapse-card/>
</template>

<style scoped>
::-webkit-scrollbar {
    width: 6px;
}
::-webkit-scrollbar-thumb {
    background-color: #17B3A3;
    border-radius: 3px;
}

.videoContainer{
    display: flex;
    width: 100%;
    height: 500px;
    overflow: auto;
    margin-top: -20px;
}

.videoContainer:before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    z-index: -1;
    top: 0;
    left: 0;
}

.fullscreenVideo{
    width: 70%;
    height: 500px;
    object-fit: fill;
}
</style>