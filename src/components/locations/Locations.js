import React from "react"

export default ({location}) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <address className="location__address">Address: {location.address}</address>
        <div className="location__size">Square Footage: {location.squareFootage}</div>
        <div className="location__ada">Handicap Accessible? {location.adaComp ? "Yup" : "Afraid Not"}</div>
    </section>
)