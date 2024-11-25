import { load } from 'cheerio';

export default defineEventHandler(async () => {
    const url = 'https://www.yr.no/nb/kyst/tabell/1-2275032/Norge/Vestfold/Larvik/Saltstein';

    try {
        // Fetch HTML using fetch
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch the page: ${response.statusText}`);
        }

        const html = await response.text();

        // Load HTML into Cheerio
        const $ = load(html);

        // Extract table rows
        const tableRows = [];
        $('table tbody tr').each((i, el) => {
            const cells = $(el).find('td').map((_, cell) => $(cell).text().trim()).get();
            tableRows.push(cells);
        });

        // Extract table headers
        const headers = $('table thead tr th').map((_, el) => $(el).text().trim()).get();

        console.log("headers", tableRows, headers);
        return { headers, rows: tableRows };
    } catch (error) {
        return { error: 'Failed to scrape data', details: error.message };
    }
});