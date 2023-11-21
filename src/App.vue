<script setup lang="ts">
import comics from '@/data'
import { RouterLink, RouterView } from 'vue-router'

const comicYears = comics
  .reduce((acc, comic) => {
    if (!acc.includes(comic.year)) {
      acc.push(comic.year)
    }
    return acc
  }, [] as number[])
  .sort()
const comicMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const comicDays = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30, 31
]
</script>

<template>
  <header>
    <h1>MyPeach XKCD Viewer</h1>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/random">Random</RouterLink>
      </nav>
      <div id="filter">
        <form action="/search" method="GET">
          <label>Query: <input type="text" name="q" /></label>
          <label>
            Years:
            <select name="year">
              <option value="">&nbsp;</option>
              <option v-for="year of comicYears" :key="year">{{ year }}</option>
            </select>
          </label>
          <label>
            Month:
            <select name="month">
              <option value="">&nbsp;</option>
              <option v-for="month of comicMonths" :key="month">{{ month }}</option>
            </select>
          </label>
          <label>
            Day:
            <select name="day">
              <option value="">&nbsp;</option>
              <option v-for="day of comicDays" :key="day">{{ day }}</option>
            </select>
          </label>

          <input type="submit" value="Filter" />
        </form>
      </div>
    </div>
  </header>

  <RouterView :key="$route.fullPath" />
</template>

<style scoped>
header {
  line-height: 1.5;
}

header h1 {
  text-align: center;
  padding-bottom: 20px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

#filter {
  text-align: center;
}
</style>
