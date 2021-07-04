import { createSelector } from "reselect";
import React from "react";
import { makeSelectPeoplePage } from "./selectors";
import { useAppSelector } from "../../hooks";
import { Loader } from "../../components/Loader";
import { SearchResult } from "../../components/Search";
import { AllPeople } from "../../components/AllPeople";
import { Nodata } from "../../components/Nodata";



const stateSelector = createSelector(makeSelectPeoplePage, (peoplePage) => ({
    peoplePage
}))

export const People = () => {

    const peoplePage: any = useAppSelector(stateSelector).peoplePage
    const isEmptyPeople = !peoplePage || peoplePage.length === 0
    if(isEmptyPeople) return <Loader />
    const { people, search } = peoplePage

    if(search) return <SearchResult search={search}/>
    if(people) return <AllPeople people={people}/>

    return <Nodata message="No people found"/>
    
    

}