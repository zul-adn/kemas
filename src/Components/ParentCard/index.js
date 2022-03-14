import React from 'react';
import axios from 'axios';

const Index = () => {

    const [parents, setParents] = React.useState([])

    React.useEffect(() => {
        getParentServices()
    }, [])


    const getParentServices = () => {
        axios('https://kemas-apiv1.lokalkita.id/services')
            .then(res => {
                console.log(res.data)
                setParents(res.data.data)
            })
    }
    return (
        <div className="cardsContainer">
            {parents.map((v, i) =>
                <a href={`#${v.parent}`} key={i} className="card">
                    <div className="imgContainer">
                        <img
                            src={v.iconUrl}
                        />
                    </div>
                    <div className="titleContainer">
                        <div className="title">{v.parent}</div>
                        <div className="jasaCount"><b>{v.services.length}</b> Jasa tersedia</div>
                    </div>
                </a>
            )}
        </div>
    )
}

export default Index
