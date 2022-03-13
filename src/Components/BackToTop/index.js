import React from 'react'


const Index = (props) => {

    const backToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <div className="btt sh-1" onClick={backToTop}>
            <img 
                src="https://cdn-icons-png.flaticon.com/512/130/130906.png"
            />
        </div>
    )
}


export default Index

