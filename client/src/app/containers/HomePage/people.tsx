import { createSelector } from "reselect";
import React from "react";
import { makeSelectPeoplePage } from "./selectors";
import { useAppSelector } from "../../hooks";



const stateSelector = createSelector(makeSelectPeoplePage, (peoplePage) => ({
    peoplePage
}))

export const People = () => {

    const peoplePage: any = useAppSelector(stateSelector).peoplePage
    const isEmptyPeople = !peoplePage || peoplePage.length === 0
    if(isEmptyPeople) return <div>No data</div>
    const { people } = peoplePage
    
    return (
        <header className="position-relative">
        <div className="page-header min-vh-50" >
          <span className="mask bg-gradient-dark opacity-6"></span>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-sm-9 text-center mx-auto mb-4">
                <h2 className="text-white mb-3">How can we help you?</h2>
                <div className="row">
                  <div className="col-md-8 col-7">
                    <div className="input-group">
                      <span className="input-group-text"><i className="fas fa-search"></i></span>
                      <input type="text" className="form-control" placeholder="Search after" />
                    </div>
                  </div>
                  <div className="col-md-4 col-5 text-start ps-0">
                    <button type="button" className="btn bg-gradient-info w-100 mb-0 h-100">Search issue</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute w-100 z-index-1 bottom-0">
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="moving-waves">
              <use xlinkHref="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.40" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.35)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.25)" />
              <use xlinkHref="#gentle-wave" x="48" y="8" fill="rgba(255,255,255,0.20)" />
              <use xlinkHref="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)" />
              <use xlinkHref="#gentle-wave" x="48" y="16" fill="rgba(255,255,255,0.95" />
            </g>
          </svg>
        </div>
      </header>
    )

}