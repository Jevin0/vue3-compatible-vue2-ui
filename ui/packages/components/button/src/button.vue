<template>
  <div >
    num:{{num}} sum: {{sum}}
    <button @click="handleClick">点击</button>
  </div>
</template>

<script>
/* eslint-disable import/first */
export default {
  name: 'NButton'
}
</script>
<script setup>
import {ref, computed, onMounted} from 'vue-demi'


const num = ref(0)

const sum = computed(() => num.value * 2)

onMounted(() => {
  console.log(this, 'this');
})

const handleClick = () => {
  console.log('click');
  num.value++
}

</script>