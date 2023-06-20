<script>
// import {ref} from "vue"
export default {
  // setup()
  // {
  //   const bpmRef = ref(value)
  //   return value
  // },
  props: ['value']
  // data() {
  //   return {
  //     self_value: 60
  //   }
  // }
}
</script>

<template>
    <span>bpm</span>
    <input :value="value" type="number" min="10" max="240"/>
    <button @click="value++">节奏+</button>
    <button @click="value--">节奏-</button>
</template>