import { Link, useLocation } from "react-router-dom"
// interface Person {
//   name: String,
//   height: String,
//   gender: String,
//   mass: String,
//   homeworld: String
// } 

export const PersonPage = (props: any) => {
  const location = useLocation()
  const data: any = location.state
  const { person } = data
  
  return (         
    <section className="py-sm-7 py-5 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="row py-lg-7 py-5">
              <div className="col-lg-3 col-md-5 position-relative my-auto">
                <i className="fas fa-user fa-5x text-center"></i>
              </div>
              <div className="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mt-sm-0 mt-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h4 className="mb-0"><strong>Name:</strong> {person.name}</h4>
                </div>
                <div className="row mb-4">
                  <div className="col-auto">
                    <span className="h6">Gender: </span>
                    <span>{person.gender}</span>
                  </div>
                  <div className="col-auto">
                    <span className="h6">Height</span>
                    <span>{person.height}</span>
                  </div>
                  <div className="col-auto">
                    <span className="h6">Mass</span>
                    <span>{person.mass}</span>
                  </div>
                </div>
                <p className="text-lg mb-0">
                <span className="h6">Homeworld: </span>
                {person.homeworld}
                  <br />
                </p>
                <hr />
                <Link to="/" className="text-dark icon-move-right"><i className="fas fa-arrow-left text-sm ms-1"></i> Back to main page</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}