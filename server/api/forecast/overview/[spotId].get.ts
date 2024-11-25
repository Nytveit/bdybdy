import { load } from 'cheerio';

export default defineEventHandler(async () => {
    const url = 'https://www.yr.no/api/v0/locations/1-2275032/forecast/coast?language=nb';

    try {
        // Fetch data from the Yr API
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data from Yr API: ${response.statusText}`);
        }

        const data = await response.json();
        // Extract relevant fields for the frontend

        console.log("rows", data);
        return { rows:  data};
    } catch (error) {
        return { error: 'Failed to fetch weather data', details: error.message };
    }
});