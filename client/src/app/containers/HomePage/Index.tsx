import { useEffect } from "react"
import { Dispatch } from "redux"
import { useAppDispatch } from "../../hooks"
import peopleService from "../../services/peopleService/index"
import { GetPeople } from "../../services/peopleService/__generated__/GetPeople"
import { setPeople } from "./HomePageSlice"
import { People } from "./people"

// import React from "react";
interface IHomePageProps {

}



const actionDispatch = (dispatch: Dispatch) => ({
    setPeople: (people: GetPeople["people"]) => dispatch(setPeople(people))
})

export const HomePage = (props: IHomePageProps) => {
    const { setPeople } = actionDispatch(useAppDispatch())

    const fetchPeople = async () => {
        const people = await peopleService.getPeople()
        .catch(err => {
            console.log(`Error: `, err);
        })
        // console.log(people);
        if(people) setPeople(people)
    }

    useEffect(() =>{
        fetchPeople()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div>
            <People />
        </div>
    )
}
