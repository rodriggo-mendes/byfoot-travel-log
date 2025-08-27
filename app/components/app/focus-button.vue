<script lang="ts" setup>
type Props = {
  text: string;
  iconName?: string;
  accentColor?: string;
};

const props = withDefaults(defineProps<Props>(), {
  accentColor: 'primary',
});

const cssVars = computed(() => {
  return {
    '--accent-color': `var(--color-${props.accentColor}-100)`,
  };
});
</script>

<template>
  <VBtn :style="cssVars" class="app-focus-button flex items-center content-center">
    <Icon
      v-if="props.iconName"
      class="mr-1"
      size="18"
      :name="props.iconName"
    />
    {{ text }}
  </VBtn>
</template>

<style lang="scss">
.app-focus-button {
  display: flex !important;
  border: 1px solid var(--accent-color) !important;
  color: var(--accent-color) !important;
  padding: 10px;
  font-size: 14px;
  transition: 200ms ease-out !important;

  &:hover {
    background-color: var(--accent-color) !important;
    color: black !important;
    padding: 14px;
    font-size: 16px;
  }
}
</style>
