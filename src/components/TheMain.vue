<template>
  <main class="container bg-dark text-light rounded py-5 px-3">
    <img src="../assets/vector.svg" alt="Vector Svg" class="position-absolute top-0 start-50 translate-middle-x"
      style="right: -62px;" />

    <div class="row" id="survey-button" style="margin: 1rem;">
      <div class="col d-flex justify-content-end">
        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#surveyModal">
          Encuesta de satisfacción
        </button>
      </div>
    </div>

    <div class="row">
      <div class="col d-flex justify-content-center">
        <h1 class="text-center mb-4">
          Nuestro Menu
        </h1>
      </div>
    </div>

    <div class="d-flex gap-2 justify-content-center mb-4">
      <button type="button" class="btn btn-outline-light" @click="filterCard(false)">
        Todos
      </button>

      <button type="button" class="btn btn-outline-light" @click="filterCard(true)">
        Disponibles
      </button>
    </div>

    <div class="row">
      <div class="d-flex flex-wrap justify-content-center">
        <BaseCard v-for="card in cardDetails" :key="card.id" :card-title="card.name" :card-tags-show="card.popular"
          :card-img-src="card.image" :card-price="card.price" :card-rating="card.rating" :card-vote="card.votes"
          :card-available="card.available" :card-star-src="StarFill" :card-empty-star-src="emptyStar" />
      </div>
    </div>

  </main>
  <!-- Modal survey -->
  <div class="modal fade" id="surveyModal" tabindex="-1" role="dialog" aria-labelledby="surveyModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="surveyModalLabel">Encuesta de satisfaccion</h5>
        </div>
        <div class="modal-body">
          <SurveyComponent :model="survey" />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onBeforeMount, onMounted, ref, computed } from "vue";
import BaseCard from "./BaseCard.vue";
import StarFill from "../assets/star-fill.svg";
import emptyStar from "../assets/star.svg";
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';

const surveyJson = {
  elements: [{
    name: "FirstName",
    title: "Enter your first name:",
    type: "text"
  }, {
    name: "LastName",
    title: "Enter your last name:",
    type: "text"
  }]
};

const survey = new Model(surveyJson);

const cardData = ref({});
const cardDetails = ref([]);
const btnFocus = ref(null);

onBeforeMount(() => {
  getCardDetails();
});

onMounted(() => {
  btnFocus.value?.focus();
});

// Fetch Card Details With Axios
const getCardDetails = async () => {
  try {
    const res = await axios.get("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json");
    cardData.value = res.data;
    cardDetails.value = cardData.value;
  } catch (error) {
    console.error(error);
  }
};

// Filter Available Card
const filterCard = (availableCard) => {
  cardDetails.value = cardData.value;

  if (availableCard === true) {
    cardDetails.value = cardDetails.value.filter(card => card.available === availableCard);
  }
};
</script>
<style scoped>
.card {
  flex: 1 0 21%;
  margin: 10px;
  max-width: 21%;
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .card {
    flex: 1 0 46%;
    max-width: 46%;
  }
}

@media (max-width: 768px) {
  .card {
    flex: 1 0 100%;
    max-width: 100%;
  }
}
</style>