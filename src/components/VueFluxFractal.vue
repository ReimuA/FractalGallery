<template>
  <div style="height: 100vh; width: 100vw">
    <VueFlux
      :options="options"
      :rscs="rscs"
      :transitions="transitions"
      style="width: 100%; height: 100%"
      ref="$vueFlux"
    >
      <template #preloader="preloaderProps">
        <FluxPreloader v-bind="preloaderProps" />
      </template>

      <template #controls="controlsProps">
        <FluxControls v-bind="controlsProps" />
      </template>

      <template #pagination="paginationProps">
        <FluxPagination v-bind="paginationProps" />
      </template>

      <template #index="indexProps">
        <FluxIndex v-bind="indexProps" />
      </template>
    </VueFlux>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowReactive } from 'vue'
import {
  VueFlux,
  Img,
  FluxPreloader,
  FluxControls,
  FluxPagination,
  FluxIndex,
  Fade,
  type VueFluxOptions,
} from 'vue-flux'
import 'vue-flux/style.css'
import ressources from '@/ressources.json'

const $vueFlux = ref()

const options = shallowReactive<VueFluxOptions>({
  autoplay: true,
  allowFullscreen: true,
  autohideTime: 25000,
})

const rscs = shallowReactive(
  ressources.map(x => new Img(x.path, x.name, 'fill')),
)

const transitions = shallowReactive([Fade])
</script>

<style>
body {
  margin: 0;
}

.flux-button.pause {
  display: none !important;
}
.flux-button.play {
  display: none !important;
}
</style>
