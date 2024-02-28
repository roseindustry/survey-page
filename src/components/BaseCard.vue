<template>
  <article class="card custom-card-margin">
    <div class="position-relative">
      <div v-if="cardTagsShow" class="badge bg-primary position-absolute top-0 start-0 m-2">
        Popular
      </div>
      <img :src="cardImgSrc" alt="Coffee Cup Image" class="card-img-top rounded" />
    </div>

    <div class="card-body p-3">
      <div class="d-flex justify-content-between align-items-center">
        <h4 class="card-title mb-0">{{ cardTitle }}</h4>
        <div class="badge bg-secondary">
          {{ cardPrice }}
        </div>
      </div>

      <div class="d-flex justify-content-between align-items-center mt-2">
        <div>
          <a href="#" v-if="cardRating === null" class="d-flex align-items-center gap-2">
            <img :src="cardEmptyStarSrc" alt="Star Icons" />
            <span>No Rating</span>
          </a>

          <a href="#" v-else class="d-flex align-items-center gap-2">
            <img :src="cardStarSrc" alt="Star Icons" />
            <span>
              {{ cardRating }} <small>({{ cardVote }} votes)</small>
            </span>
          </a>
        </div>

        <p v-if="!cardAvailable" class="text-danger mb-0">
          Sold Out
        </p>
      </div>
    </div>
  </article>
</template>

<style scoped>
.custom-card-margin {
  margin: 1rem;
}

@media (max-width: 768px) {
  .custom-card-margin {
    margin: 0.5rem;
  }
}
</style>

<script setup>
defineProps([
  "cardTags",
  "cardTagsShow",
  "cardImgSrc",
  "cardTitle",
  "cardVote",
  "cardPrice",
  "cardStarSrc",
  "cardEmptyStarSrc",
  "cardRating",
  "cardAvailable",
]);
</script>