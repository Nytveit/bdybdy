<template>
  <div>
    <h1>Weather Overview for Saltstein</h1>
    <table v-if="data?.rows?.dayIntervals.length > 0">
      <thead>
      <tr>
        <th>Day</th>
        <th>Max Wind</th>
        <th>Max Gust</th>
        <th>Max Wave Height</th>
        <th>Varsel</th>
        <th>Temp</th>
      </tr>
      </thead>
      <tbody >
        <tr v-for="item in data?.rows?.dayIntervals">
          <td>{{ item.start}} </td>
          <td>{{ item.wind.min }} - {{ item.wind.max }} ms</td>
          <td>{{ item.wind.maxGust }} ms</td>
          <td> {{ item.sea.wave.maxHeight }} m</td>
          <td> {{ item.symbolConfidence }} </td>
          <td> {{ item.sea.temperature.min }} / {{ item.sea.temperature.max }} </td>
        </tr>
      </tbody>
    </table>
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