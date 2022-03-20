import React from 'react';

import {
    Navbar,
    Slider,
    ParentCard,
    ServiceCard,
    Footer,
    Btt,
    BottomMenu
} from '../../Components';

import ReactGA from "react-ga4";

import 'animate.css';
import '../../Styles/Main.css';
import '../../Styles/const.css';

//Initialize React GA
ReactGA.initialize('G-15MFB5K8KP');

const Index = () => {

    React.useEffect(() => {
        ReactGA.send({ hitType: "Home Page", page: "/home" });
    }, [])

    return (
        <div className="wrapper">
            <Btt />
            {/* Section Header */}
            <section className="sectionHeadContainer phor-15">
                <div className="pver-5 animate__bounceInDown">
                    <Navbar />
                    <Slider />
                </div>
            </section>

            <section className="phor-15 ">
                <div className="pver-5 animate__bounceInDown">
                    <ParentCard />
                </div>
            </section>

            {/* <section className="phor-15 ">
                <div className="pver-5 sh-1">
                   <div className="transactionTutor">
                        <div className="tutorImg">
                            <img 
                                src="https://img.freepik.com/free-vector/organic-flat-people-asking-questions_23-2148896826.jpg?w=740"
                            />
                        </div>
                        <div>

                        </div>
                   </div>
                </div>
            </section> */}

            <section className="phor-15" style={{ paddingBottom:30 }}>
                <div className="pver-5 animate__bounceInDown">
                    <ServiceCard />
                </div>
            </section>


            <section className="sectionHeadContainer phor-15">
                <div className="pver-5 animate__bounceInDown">
                    <Footer />
                </div>
            </section>

            <BottomMenu />

        </div >
    )
}

export default Index
