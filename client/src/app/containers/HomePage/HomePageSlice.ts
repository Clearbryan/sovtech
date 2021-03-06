import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    people: null
}
const HomePageSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {
        setPeople (state, action) {
            state.people = action.payload
        },
        searchPeople(state, action) {
            state.people = action.payload
        }
    }
})
export const { setPeople, searchPeople } = HomePageSlice.actions;
export default HomePageSlice.reducer;