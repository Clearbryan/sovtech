import { useState } from "react";
import { Dispatch } from 'redux'
import { setPeople } from "../containers/HomePage/HomePageSlice";
import { useAppDispatch } from "../hooks";
import peopleService from "../services/peopleService";

const actionDispatch = (dispatch: Dispatch) => ({
      setPeople: (people: any) => dispatch(setPeople(people))
    })
    
export const Header = () => {
  const [searchString, setSearchString] = useState("")
  const { setPeople } = actionDispatch(useAppDispatch())

    const getSearchString = (e:any) => {
      setSearchString(e.target.value)
    }

    const fetchPeople = async (searchString: String) => {
      const people = await peopleService.searchPeople(searchString)
      .catch(err => {
          console.log(`Error: `, err);
      })
      if(people) setPeople(people)
  }

  const searchPeople = () => {
    fetchPeople(searchString)
  }

    
    return (
      <header className="position-relative">
        <div className="page-header min-vh-50" >
        <span className="mask bg-gradient-dark"></span>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-white text-center">
                <h2 className="text-white">Welcome</h2>
                <p className="lead">Search person by name</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5">
      <div className="row bg-white shadow mt-n6 border-radius-md py-4 p-3 position-relative">
        <div className="col-md-10 mb-md-0 mb-2">
          <div className="input-group">
            <span className="input-group-text"><i className="fas fa-search"></i></span>
            <input value={searchString}  onChange={getSearchString} type="text" className="form-control" placeholder="Search for people" />
          </div>
        </div>
        <div className="col-md-2 ps-md-0">
          <button onClick={searchPeople} type="submit" className="btn bg-gradient-dark w-100 mb-0 h-100 position-relative z-index-2">Search</button>
        </div>
      </div>
    </div>
    </header>
    )
}