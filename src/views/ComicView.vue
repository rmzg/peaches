<script setup lang="ts">
import comics, { imgUri } from '@/data'
const props = defineProps(['id'])

const comic = comics.find((comic) => comic.num == props.id)
console.log(props)
</script>

<template>
  <div v-if="comic">
    <div>
      {{ comic.year }}&dash;{{
        String(comic.month).length == 2 ? comic.month : '0' + comic.month
      }}&dash;{{ String(comic.day).length == 2 ? comic.day : '0' + comic.day }}
    </div>
    <img :src="imgUri(comic)" />
    <div>{{ comic.alt }}</div>
  </div>
  <div v-else>Invalid Comic Id</div>
</template>
