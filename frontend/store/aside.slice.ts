import { createSlice } from "@reduxjs/toolkit";
import { JSXElementConstructor, ReactElement, ReactNode } from "react";

interface Props {
  aside?: ReactElement<any, string | JSXElementConstructor<any>>;
}

const initialState: Props = {
  aside: undefined,
};

export const asideSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setAside: (state, action: { type: string; payload: Props }) => {
      state.aside = action.payload.aside;
    },
  },
});

export const { setAside } = asideSlice.actions;
export default asideSlice.reducer;
