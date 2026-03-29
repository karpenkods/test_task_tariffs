import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Tariff } from '@/common'

export const tariffsApi = createApi({
  reducerPath: 'tariffsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_API
  }),

  endpoints: (build) => ({
    getTariffs: build.query<Tariff[], void>({
      query: () => ({
        url: '/Test/GetTariffs'
      }),
      transformResponse: (response: Tariff) => JSON.parse(response as unknown as string)
    })
  })
})

export const { useGetTariffsQuery } = tariffsApi
