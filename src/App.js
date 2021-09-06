import React from "react"
import {Header, Headline, Button} from "./components/index"
import "./App.scss"

const tempArr = [{
    firstName: "vahid",
    lastName: "ghadiri",
    age: 30,
    job: "front-end developer",
    email: "vahid.ghadiri1990@gmail.com",
    isMarried: false
}]

export const App = () => {
    return (
        <div>
            <Header/>
            <section className="main">
                <Headline header="Posts" description="Click the button to render posts!" tempArr={tempArr}/>
            </section>
        </div>
    )
}