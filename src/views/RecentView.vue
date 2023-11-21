<script setup lang="ts">
import DisplayComic from '@/components/DisplayComic.vue'
import comics from '../data'

// We assume un-sorted datafiles in order to make regenerating the data easier at the expensive of slightly more runtime computation
const recent = comics
  .sort((a, b) => b.year - a.year || b.month - a.month || b.day - a.day)
  .slice(0, 9)
</script>

<template>
  <main>
    <h2>Nine most recent comics:</h2>

    <div id="comics">
      <div v-for="comic in recent" :key="comic.num">
        <DisplayComic :comic="comic" />
      </div>
    </div>
  </main>
</template>

<style>
#comics {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  column-gap: 15px;
}

#comics img {
  max-width: 100%;
  max-height: 250px;
}
</style>
