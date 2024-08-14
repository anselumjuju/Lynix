import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const rapidApiKey = import.meta.env.VITE_RAPID_API_SUMMARIZE_API

export const summarizeAPI = createApi({
	reducerPath: 'summarizeAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
		prepareHeaders: (headers) => {
			headers.set('x-rapidapi-key', rapidApiKey);
			headers.set('x-rapidapi-host', 'article-extractor-and-summarizer.p.rapidapi.com');

			return headers
		}
	}),
	endpoints: (builder) => ({
		getSummary: builder.query({
			query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
		})
	})
})

export const { useLazyGetSummaryQuery } = summarizeAPI