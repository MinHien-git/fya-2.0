import { createSlice } from "@reduxjs/toolkit";
import { IProject } from "../../components/PostProjectPopup/PostProjectPopup";

export const userSlice = createSlice({
  name: "project",
  initialState: {
    services: [],
    skills: [],
    location: "",
    localization: true,
    companyName: "",
    companySize: "",
    industry: "",
    position: "",
    bugetRange: "",
    projectDuration: "",
    projectTitle: "",
    projectDescription: "",
    languages: [],
  },
  reducers: {
    setServices: (state, action) => {
      state.services = action.payload;
    },
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setLocalization: (state, action) => {
      state.localization = action.payload;
    },
    setCompanyName: (state, action) => {
      state.localization = action.payload;
    },
    setCompanySize: (state, action) => {
      state.companySize = action.payload;
    },
    setIndustry: (state, action) => {
      state.industry = action.payload;
    },
    setPosition: (state, action) => {
      state.position = action.payload;
    },
    setBugetRange: (state, action) => {
      state.bugetRange = action.payload;
    },
    setProjectDuration: (state, action) => {
      state.projectDuration = action.payload;
    },
    setProjectTitle: (state, action) => {
      state.projectTitle = action.payload;
    },
    setProjectDescription: (state, action) => {
      state.projectDescription = action.payload;
    },
    setLanguages: (state, action) => {
      state.languages = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setServices,
  setSkills,
  setLocation,
  setLocalization,
  setCompanyName,
  setCompanySize,
  setIndustry,
  setPosition,
  setBugetRange,
  setProjectDuration,
  setProjectTitle,
  setProjectDescription,
  setLanguages,
} = userSlice.actions;

export default userSlice.reducer;
