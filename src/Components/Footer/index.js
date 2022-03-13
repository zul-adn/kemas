import React from 'react';
import { Button } from '..';
import axios from 'axios';

const Index = () => {

    const [sosmed, setSosmed] = React.useState([])

    React.useEffect(() => {
        getBanner()
    }, [])


    const getBanner = () => {
        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        // const url = https://dinartech.com/kemas/kemasBanner.json
        axios('https://kemas-apiv1.lokalkita.id/socialmedia')
            .then(res => {
                console.log(res.data)
                setSosmed(res.data.data)
            })
    }


    return (
        <div className="footer">
            <div className="content">
                <img
                    className="footerImg"
                    src={'https://dinartech.com/kemas/logo.png'}
                />
                <p style={{ color:'white' }}>Singkawang, Indonesia</p>
                {
                    sosmed.map((v, i) => 
                        <a key={i} href={v.url}>
                            <img 
                                src={v.icon}
                                className="sosmedIcon sh-1"
                            />
                        </a>
                    )
                }
            </div>
            <div className="content">
                <h3 style={{ color:'white' }}>Tentang Kami</h3>
                <p style={{ color:'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="content">
                <div className="footerCard sh-1">
                    <h3>Ingin menjadi mitra kami?</h3>
                   <Button 
                        label={'Klik untuk mendaftar'}
                   />
                </div>
            </div>
        </div>
    )
}

export default Index
