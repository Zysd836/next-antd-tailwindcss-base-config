import { baseAPI } from '../baseApi'
import { RequestT, ResponseT } from './type'

export const crudApiExample = baseAPI.injectEndpoints({
  endpoints: builder => ({
    // TODO Get
    get: builder.query({
      query: data => `${data.endPoint}${data?.query}`,
    }),
    // TODO Get One
    getOne: builder.query({
      query: data => ({
        url: `${data.endPoint}/${data.id}`,
      }),
    }),
    // TODO Create
    create: builder.mutation<ResponseT, RequestT>({
      query: data => ({
        method: 'POST',
        url: `${data}`,
        body: data,
      }),
    }),
    // TODO Update
    update: builder.mutation({
      query: data => ({
        method: 'PUT',
        url: `${data.endPoint}/${data.id}`,
        body: data.body,
      }),
    }),
    // TODO Delete
    delete: builder.mutation({
      query: data => ({
        method: 'DELETE',
        url: `${data.endPoint}/${data.id}`,
      }),
    }),
  }),
})
