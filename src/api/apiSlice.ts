import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const QUERY_TAG = 'comments' as const;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_SERVER_URL }),
  tagTypes: [QUERY_TAG],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => ({
        url: '/comments',
        method: 'GET',
        providesTags: [QUERY_TAG],
      }),
    }),
    getCommentById: builder.query({
      query: (commentId) => ({
        url: `/comments/${commentId}`,
        method: 'GET',
        providesTags: [QUERY_TAG],
      }),
    }),
    createComment: builder.mutation({
      query: (comment) => ({
        url: '/comments',
        method: 'POST',
        body: comment,
      }),
      invalidatesTags: [QUERY_TAG],
    }),
    updateComment: builder.mutation({
      query: (comment) => ({
        url: `/comments/${comment.id}`,
        method: 'PUT',
        body: comment,
      }),
      invalidatesTags: [QUERY_TAG],
    }),
    deleteCommentById: builder.mutation({
      query: (id) => ({
        url: `/comments/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [QUERY_TAG],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useGetCommentByIdQuery,
  useCreateCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentByIdMutation,
} = apiSlice;
