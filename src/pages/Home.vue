<template>
  <div>
    首页
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue';

const value = ref<any[]>([]);

watch(value, () => {
  console.log(value.value);
});
</script>
