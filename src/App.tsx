import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Raiting} from "./components/Raiting/Raiting";

function App() {
    return (
        <div>
            <PageTitle title={"Hello"}/>
            <PageTitle title={"Yo"}/>
            Article 1
            <Raiting value={3}/>
            <Accordion title={"Main Cool MENU"}/>
            <Accordion title={"Luxary MENU"}/>

            Article 2
            <Raiting value={0}/>
            <Raiting value={1}/>
            <Raiting value={2}/>
            <Raiting value={3}/>
            <Raiting value={4}/>
            <Raiting value={5}/>
        </div>
    );
}

function PageTitle(props: any) {
    debugger;
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
