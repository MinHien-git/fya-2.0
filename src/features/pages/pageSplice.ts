import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    company_name: "",
    description: "",
    team_members: "",
    languages: [],
    address: "",
    founded_date: "",
    website: "",
    email_address: "",
    phone_number: "",
    page_id: "",
    tagline: "",
    create_by: "",
    page_type: "",
    rating: 0,
    turnover: "",
  },
  reducers: {
    setCompanyName: (state, action) => {
      state.company_name = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setTeamMembers: (state, action) => {
      state.team_members = action.payload;
    },
    setLanguages: (state, action) => {
      state.languages = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setFoundedDate: (state, action) => {
      state.founded_date = action.payload;
    },
    setWebsite: (state, action) => {
      state.website = action.payload;
    },
    setEmailAddress: (state, action) => {
      state.email_address = action.payload;
    },
    setPhoneNumer: (state, action) => {
      state.phone_number = action.payload;
    },
    setTeamMember: (state, action) => {
      state.team_members = action.payload;
    },

    setPage: (state, action) => {
      return { ...action.payload };
    },
  },
});

export const {
  setLanguages,
  setCompanyName,
  setAddress,
  setFoundedDate,
  setWebsite,
  setEmailAddress,
  setPhoneNumer,
  setTeamMember,
  setDescription,
  setPage,
} = pageSlice.actions;

export default pageSlice.reducer;
