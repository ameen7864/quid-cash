import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "http://www.localhost:3000/v1/admin";

// termCondition/getTermCondition?title=advertisement

const AUTH_TOKEN = JSON.parse(localStorage.getItem("AccessToken"));

export const LoginApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  
  }),
  endpoints: (builder) => ({
    verify: builder.mutation({
      query: (credentials) => ({
        url: "verify-otp",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});


export const { useVerifyMutation } = LoginApi;