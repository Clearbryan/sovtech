import React, { Fragment } from "react"
import loader from "./loader.gif"

export const Loader = () => {
    return (
        <Fragment>
            <section className="py-md-7 py-5">
            <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8 col-10 mx-auto text-center">
                <div className="mb-md-5">
                    <h5>Please wait...</h5>
                    <img src={loader} height="60px" width="60px" alt="Loader" />
                </div>
                </div>
            </div>
            </div>
            </section>
        </Fragment>
    )
}