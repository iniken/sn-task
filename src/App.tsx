import React from 'react';
import './App.css';

function App() {
    debugger;
    return (
        <div>

            <AppTitle />
            <Raiting />
            <Accordion />
            <Raiting />
        </div>
    );
}

function AppTitle() {
    debugger;
    return (
    <>This is App component</>
    )
}

function Raiting() {
    debugger;
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}

function Star() {
    debugger;
    return (
        <div>Star</div>
    );
}

function Accordion() {
    debugger;
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    );
}


function AccordionTitle() {
    debugger;
    return (
            <h3>Меню</h3>
    );
}


function AccordionBody() {
    debugger;
    return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
    );
}

export default App;
