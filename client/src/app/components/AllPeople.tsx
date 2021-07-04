import { Fragment } from "react"
import { Link } from "react-router-dom"
import { Nodata } from "./Nodata"
import { Paginator } from "./Paginator"

export const AllPeople = (props: any) => {
    if(props.people.length < 1) return <Nodata message="No people found"/>
    return (
        <Fragment>
            <table className="mt-2 mb-2 table container table-striped table-responsive text-center">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Height</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Homeworld</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            { props.people.map((person: any) => {
                return (
                <tr key={person.height}>
                <th scope="row">{person.name}</th>
                <td>{person.height}</td>
                <td>{person.gender}</td>
                <td>{person.homeworld}</td>
                <td>
                    <Link to={{pathname: `/person`, state: {
                        person
                    }}} >
                    <i className="fas fa-eye"></i>
                    </Link>
                </td>
                </tr>
                )
            }) }
            </tbody>
        </table>
        <Paginator />
      </Fragment>
      )
}