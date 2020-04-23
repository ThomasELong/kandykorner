import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider"
import Location from "./Locations"

export default () => {
    const { locations } = useContext(LocationContext)

    return (
        <>
            <h2 className="title">Offices</h2>
        <div className="locations">
        {
            locations.map(loc => <Location key={loc.id} location={loc} />)
        }
        </div>
        </>
    )
}