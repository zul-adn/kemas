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
        <div className="bottomContainer sh-1">
            {parents.map((v, i) =>
                <a href={`#${v.parent}`} key={i} className="imgBottom">
                    <img
                        src={v.iconUrl}
                    />
                </a>
            )}
        </div>
    )
}

export default Index
