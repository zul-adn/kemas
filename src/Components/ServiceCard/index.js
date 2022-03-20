import React from 'react';
import axios from 'axios';

import ReactGA from "react-ga";

import { Button } from '..';


ReactGA.initialize('UA-223380139-1');

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
        <div>
            {parents.map((v, i) =>
                <section id={v.parent} key={i}>
                    <div className="cardsServiceTitle">
                        {v.parent}
                    </div>
                    <div className="cardsServiceContainer">
                        {v.services.map((val, index) =>
                            <div className="cardService sh-1">
                                <img
                                    className="thumb"
                                    src={val.imgUrl}
                                />
                                <div className="cardServiceTitle">
                                    <div className="titleText">{val.name}</div>
                                    <div className="rattingContainer">
                                        <div className="rattingText">{val.success} Pekerjaan sukses</div>

                                        <div className="bar" />
                                        {/* <img
                                                className="img"
                                                src="https://cdn-icons-png.flaticon.com/512/4185/4185509.png"
                                            /> */}


                                    </div>

                                    <div className="rattingContainer">
                                        <div className="rattingImg">
                                            <img
                                                className="img"
                                                src="https://cdn-icons-png.flaticon.com/512/616/616489.png"
                                            />
                                            <span className="rattingTextNumber">5.2</span>
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    label={'Pesan Jasa'}
                                    url={val.formUrl}
                                    service={val.name}
                                />
                            </div>
                        )}
                    </div>
                </section>
            )}
        </div>
    )
}

export default Index
