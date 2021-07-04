import { IHomePageState } from '../HomePage/types';
// import { GetPeople } from './../../services/peopleService/__generated__/GetPeople';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IHomePageState = {
    people: null
}

const HomePageSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {
        setPeople (state, action) {
            state.people = action.payload
        }
    }
})

export const { setPeople } = HomePageSlice.actions;
export default HomePageSlice.reducer;