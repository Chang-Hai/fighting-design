<script lang="ts" setup name="FHeader">
  import { Props } from './props'
  import { computed } from 'vue'
  import { sizeChange } from '../../_utils'
  import type { CSSProperties, ComputedRef } from 'vue'
  import type { HeaderPropsType } from './props'

  const prop: HeaderPropsType = defineProps(Props)

  // 样式列表
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { height, padding } = prop

    return {
      '--f-header-height': sizeChange(height),
      '--f-header-padding': sizeChange(padding)
    } as CSSProperties
  })
</script>

<template>
  <header class="f-header" :style="styleList">
    <slot />
  </header>
</template>
