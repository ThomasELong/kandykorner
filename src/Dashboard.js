import React from "react";

import LocationList from "./components/locations/LocationList"
import { LocationProvider } from "./components/locations/LocationProvider"

export default () => (
<>
    <h2>Kandy Korner</h2>
    <LocationProvider>
        <LocationList />
    </LocationProvider>
</>
);