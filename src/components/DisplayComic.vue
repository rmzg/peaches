<script setup lang="ts">
import { imgUri } from '@/data'

const props = defineProps(['comic'])
</script>

<template>
  <div>
    <a :href="'/comic/' + props.comic.num">
      <div>{{ comic.title }}</div>
      <img :src="imgUri(props.comic)" />
    </a>
  </div>
</template>
