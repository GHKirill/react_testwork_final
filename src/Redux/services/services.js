import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//import { useContacts } from 'components/hooks/useContacts';

export const contactsApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6478209f362560649a2d3b5d.mockapi.io/',
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.token;

    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`);
    //   }

    //   return headers;
    // },
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
      // async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
      //   const patchResult = dispatch(
      //     contactsApi.util.updateQueryData('getUsers', id, draft => {
      //       Object.assign(draft, patch);
      //     })
      //   );
      //   try {
      //     await queryFulfilled;
      //   } catch {
      //     patchResult.undo();
      //   }
      // },
      invalidatesTags: [{ type: 'Users' }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useUpdateUserMutation,
  // useGetContactsQuery,
  // useAddContactMutation,
  // useDeleteContactMutation,
} = contactsApi;
