<script>
export default {
  data() {
    return {
      bpm: 130
    }
  }
}
</script>

<template>
    <span>bpm</span>
    <input :value="bpm" type="number" min="10" max="240"/>
    <button @click="bpm++">节奏+</button>
    <button @click="bpm--">节奏-</button>
</template>