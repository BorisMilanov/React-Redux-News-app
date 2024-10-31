import axios from 'axios';

const apiKey = process.env.REACT_APP_NEWS_API_KEY;
const baseUrl = 'https://newsapi.org/v2/everything';

export const fetchOpelNews = async () => {
    try {
        const response = await axios.get(baseUrl, {
            params: {
                q: 'opel',
                from: '2024-09-30',
                sortBy: 'publishedAt',
                apiKey: apiKey,
            },
        });
    } catch (error) {
        console.log('Error fetching news:', error);
        return [];
    }
}