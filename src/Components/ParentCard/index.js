import React from 'react';
import axios from 'axios';

const Index = () => {

    const [parents, setParents] = React.useState([])

    React.useEffect(() => {
        getParentServices()
    }, [])


    const getParentServices = () => {
        axios('http://localhost:8000/services')
            .then(res => {
                console.log(res.data)
                setParents(res.data.data)
            })
    }
    return (
        <div className="cardsContainer">
            {parents.map((v, i) =>
                <div className="card">
                    <div className="imgContainer">
                        <img
                            src={v.iconUrl}
                        />
                    </div>
                    <div className="titleContainer">
                        <div className="title">{v.parent}</div>
                        <div><b>{v.services.length}</b> Jasa tersedia</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Index
