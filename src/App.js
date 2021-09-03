import React from "react"
import {Header, Headline} from "./components/index"
import "./App.scss"

export const App = () => {
    return (
        <div>
            <Header/>
            <section className="main">
                <Headline header="Posts" description="Click the button to render posts!"/>
            </section>
        </div>
    )
}