import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6478209f362560649a2d3b5d.mockapi.io/',
  }),
  tagTypes: ['Users'],
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => `/users`,
      providesTags: [{ type: 'users' }],
    }),
    addUsers: builder.mutation({
      query: body => ({
        url: '/users',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Users' }],
    }),
    deleteUsers: builder.mutation({
      query: id => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Users' }],
    }),
    updateUser: builder.mutation({
      query: (id, patch) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: [{ type: 'Users' }],
    }),
  }),
});

export const { useGetUsersQuery, useUpdateUserMutation } = contactsApi;
