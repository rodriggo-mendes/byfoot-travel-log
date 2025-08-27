<template>
  <div class="h-vh container mx-auto">
    <div class="hero flex-row justify-center justify-items-center">
      <h1 class="hero-title">
        Make traveling even more fun
      </h1>
      <p class="hero-description my-4">
        Keep track of your travels and adventures. Add locations, photos and notes to create a digital journal of your journeys
      </p>
      <AppFocusButton
        text="Sign In"
        icon-name="tabler:brand-github"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  padding: 84px 0;

  .hero-title {
    background-image: colors.$gradient-primary;
    color: transparent;
    background-clip: text;
    font-size: 62px;
    font-weight: 800;
    line-height: 64px;
    text-align: center;
    width: 550px;
  }

  .hero-description {
    font-size: 18px;
  }
}
</style>
