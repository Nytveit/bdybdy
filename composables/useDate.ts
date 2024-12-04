export function useDayName(date) {
    /**
     * Convert a date to the day name in English.
     * @param {Date | string} date - The date to convert. Can be a Date object or a string.
     * @returns {string} - The name of the day in English (e.g., "Monday").
     */
    const getDayName = (date) => {
        // Ensure the input is a valid Date object
        const parsedDate = new Date(date);
        if (isNaN(parsedDate)) {
            throw new Error('Invalid date provided');
        }

        // Use Intl.DateTimeFormat to format the day name
        return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(parsedDate);
    };

    return { getDayName };
}