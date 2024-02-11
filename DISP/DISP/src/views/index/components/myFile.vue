<script setup>
// const urls =
//     ''
const utilFuns = {};
const files = import.meta.globEager('/serve/uploads/*.mp4');
Object.keys(files).forEach((fileName) => {
    const name = fileName.replace(/\.\/|\.ts/g, '');
    utilFuns[name] = files[fileName].default;
});

</script>

<template>
    <el-row :gutter="20">
        <el-col v-for="(item,index) in utilFuns" :key="index" :span="8">
            <div class="grid-content ep-bg-purple"/>
            <video style="width: 100%; height: 180px" :src="item">
            </video>
        </el-col>
    </el-row>
</template>

<style scoped>
.el-row {
    margin-bottom: 20px;
}
.el-row:last-child {
    margin-bottom: 0;
}
.el-col {
    border-radius: 4px;
    background-color: rgba(173, 191, 203, 20%);
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.el-col-8 {
    max-width: 30.3333333333%;
    margin: 10px;

}
</style>
