import React from 'react';
import Slider from "react-slick";
import axios from "axios";

const settings = {
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 5000,
};

const Index = () => {

    const [banners, setBanners] = React.useState([])

    React.useEffect(() => {
        getBanner()
    }, [])


    const getBanner = () => {
        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        // const url = https://dinartech.com/kemas/kemasBanner.json
        axios('https://kemas-apiv1.lokalkita.id/banners')
            .then(res => {
                console.log(res.data)
                setBanners(res.data.data)
            })
    }

    return (
        <div className="bannerContainer">
            <Slider {...settings}>
                {
                    banners.map((v, i) =>
                        <div>
                            <img
                                className="bannerImg"
                                key={i}
                                src={v.url}
                            />
                        </div>
                    )
                }
            </Slider>
        </div>

    )
}

export default Index
