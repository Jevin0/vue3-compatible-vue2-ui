<template>
  <div >
    num:{{num}} sum: {{sum}}
    <button @click="handleClick">点击</button>
  </div>
</template>

<script setup>
import {ref, computed, onMounted} from 'vue-demi'

defineOptions({
  name: 'NButton'
})


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