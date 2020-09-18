import React from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
   /* collapsed: boolean*/
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        )
    }

type AccordionTitlePropsType = {
    title: string;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    debugger;
    return (
        <h3>{props.title}</h3>
    );
}


function AccordionBody() {
    debugger;
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>3</li>
        </ul>
    );
}

import React from "react";
import React from "react";
import React from "react";


