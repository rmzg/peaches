<script setup lang="ts">
import DisplayComic from '@/components/DisplayComic.vue'
import comics from '../data'

const take: number[] = []
while (take.length < 9) {
  const rand = Math.floor(Math.random() * comics.length)
  if (!take.includes(rand)) {
    take.push(rand)
  }
}

const random = take.map((i) => comics[i])
</script>

<template>
  <main>
    <h2>Nine random comics:</h2>

    <div id="comics">
      <div v-for="comic in random" :key="comic.num">
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
