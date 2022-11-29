import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getallblogAPI = createApi({
    reducerPath: "getallblogAPI",
    baseQuery: fetchBaseQuery({ baseUrl: '' }),
    endpoints: (builder) => ({
        getallBlog: builder.query({
            query: () => ({
                url: 'blog',
                method: 'GET',
            })
        }),
        signupUser: builder.mutation({
            query:(inputs)=>({
                url: 'signupuser',
                method: 'POST',
                body: inputs,
                // headers : {
                //     'content-type': 'application/json;charset=UTF=8',
                // }
            })
        }),
        loginUser: builder.mutation({
            query: (loginInput)=>({
                url: "login",
                method: "POST",
                body: loginInput
            })
        }),
        userBlog: builder.query({
            query: (userID)=>({
                url: `user/${userID}`,
                method: "GET"
            })

        }),
        postUserBlog: builder.mutation({
            query: (blogInput)=>({
                url: "add/blog",
                method: "POST",
                body: blogInput
            })
        })
    })
})

export const {useGetallBlogQuery, useSignupUserMutation, useLoginUserMutation, useUserBlogQuery,usePostUserBlogMutation} = getallblogAPI