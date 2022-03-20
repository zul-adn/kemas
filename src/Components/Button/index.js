import React from 'react';
import ReactGA from "react-ga";

ReactGA.initialize('UA-223380139-1');

const Index = (props) => {
    return (
        <div
            onClick={() => ReactGA.event({
                category: 'Klik Service',
                action: `Klik service ${props.service}`
            })}
        >
            <a
                style={{ textDecoration: 'none' }}
                href={props.url}
                target="_blank"
            ><div className="btn primary">
                    {props.label}
                </div></a>
        </div>
    )
}

export default Index
