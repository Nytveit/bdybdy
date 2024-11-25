<template>  
  <div>
    <h1>Weather Data from Saltstein</h1>
    
    <table v-if="data.headers?.length">
      <thead>
        <tr>
            <th v-for="header in data.headers" :key="header">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in data.rows" :key="row">
          <td v-for="cell in row" :key="cell">{{ cell }}</td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';

const headers = ref([]);
const rows = ref([]);

const { data } = await useFetch('/api/forecast/saltstein');

if (data?.headers?.length > 0) {
  headers.value = data.headers;
  rows.value = data.rows;
}

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
}
th {
  background-color: #f4f4f4;
  text-align: left;
}
</style>