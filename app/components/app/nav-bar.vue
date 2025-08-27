<template>
  <VToolbar class="px-3 py-1" density="comfortable">
    <VToolbarTitle class="ml-1">
      <template #text>
        <NuxtLink to="/">
          <Icon name="material-symbols:footprint-outline" /> ByFoot
        </NuxtLink>
      </template>
    </VToolbarTitle>
    <template #append>
      <AppFocusButton
        text="Sign In"
        icon-name="tabler:brand-github"
      />
    </template>
  </VToolbar>
</template>
