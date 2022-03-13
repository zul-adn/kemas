import React from 'react'

const Index = (props) => {
    return (
        <div>
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
