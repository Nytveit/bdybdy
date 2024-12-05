<template>
  <div>
    <h1>Weather Overview for Saltstein</h1>
    <v-expansion-panels  v-if="data?.rows?.dayIntervals.length > 0">
      <v-expansion-panel
          v-for="item in data?.rows?.dayIntervals">
        <v-expansion-panel-title>
          <v-row>
            <v-col>{{ item.start }}</v-col>
            <v-col>
              {{ item.wind.min }} - {{ item.wind.max }} ({{ item.wind.maxGust }} ) ms
            </v-col>
            <v-col>
              {{ item.sea.wave.minHeight }} - {{ item.sea.wave.maxHeight }} m
            </v-col>
            <v-col>
              {{ item.sea.temperature.min }} / {{ item.sea.temperature.max }}
            </v-col>
            <v-col>{{ item.symbolConfidence }}</v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
            <p>Wind: {{ item.wind.min }} - {{ item.wind.max }} ms</p>
            <p>Max gust: {{ item.wind.maxGust }} ms</p>
            <p>Temperature: {{ item.sea.temperature.min }} / {{ item.sea.temperature.max }}</p>
            <p>Symbol confidence: {{ item.symbolConfidence }}</p>
          <pre>{{ item }}</pre>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>

const { data } = await useFetch('/api/forecast/overview/saltstein');

</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
  margin: 20px 0;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f4f4f4;
}
</style>