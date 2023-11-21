<script setup lang="ts">
import DisplayComic from '@/components/DisplayComic.vue'
import comics, { type Comic } from '@/data'
import { useRoute } from 'vue-router'
import { search } from 'fast-fuzzy'

const route = useRoute()

let results: Comic[]

if (route.query.q) {
  results = search(String(route.query.q), comics, {
    keySelector: (comic) => comic.title + ' ' + comic.alt
  })
} else {
  results = comics
}

if (route.query.year) {
  // The vue typing is extremely weird here
  results = results.filter((comic) => comic.year == (route.query.year as unknown as number))
}
if (route.query.month) {
  results = results.filter((comic) => comic.month == (route.query.month as unknown as number))
}
if (route.query.day) {
  results = results.filter((comic) => comic.day == (route.query.day as unknown as number))
}
</script>

<template>
  <div>
    <h2>Search Results</h2>
    <div v-for="result of results.slice(0, 10)" :key="result.num">
      <DisplayComic :comic="result" />
    </div>
  </div>
</template>
