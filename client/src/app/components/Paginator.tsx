import { useState } from "react"
import { Dispatch } from "redux"
import { setPeople } from "../containers/HomePage/HomePageSlice"
import { useAppDispatch } from "../hooks"
import peopleService from "../services/peopleService"

const actionDispatch = (dispatch: Dispatch) => ({
    setPeople: (people: any) => dispatch(setPeople(people))
})


export const Paginator = (props: any) => {
    let [pageNumber, setPageNumber] = useState(1)
    const { setPeople } = actionDispatch(useAppDispatch())

    const paginate = async (page: Number) => {
        const people = await peopleService.queryPeoplePage(page)
        .catch(err => {
            console.log(`Error: `, err);
        })
        if(people) setPeople(people)
    }
    const goTonextPage = () => {
        setPageNumber(pageNumber+= 1)
        paginate(pageNumber)
    }
    const goToPreviousPage = () => {
        setPageNumber(pageNumber-= 1)
        paginate(pageNumber) 
    }


    return (
    <nav aria-label="Page navigation ">
        <ul className="pagination justify-content-end container">
            <li className="page-item">
            <button onClick={goToPreviousPage} className="page-link" title="prev">
                <i className="fa fa-angle-left"></i>
                <span className="sr-only">Previous</span>
            </button>
            </li>
            <li className="page-item primary"><p className="page-link">{pageNumber}</p></li>
            <li className="page-item">
            <button onClick={goTonextPage} className="page-link" title="next" >
                <i className="fa fa-angle-right"></i>
                <span className="sr-only">Next</span>
            </button>
            </li>
        </ul>
    </nav>
    )
}

Paginator.defaultProps = {
    page: 1
}