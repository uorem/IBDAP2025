<template>
    <el-upload
        class="upload-demo"
        drag
        action="http://127.0.0.1:3000/api/upload"
        name="filename"
        multiple
    >
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">
            Drop file here or <em>click to upload</em>
        </div>
    </el-upload>
</template>

<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue'
</script>
