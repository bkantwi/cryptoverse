import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': 'ca53666ed3msh70abbd997cdd903p17c56cjsn8531658c2dcb',
    'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
}

const baseUrl = 'https://news-api14.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;