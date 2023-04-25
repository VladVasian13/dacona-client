import React from "react";
import Teltonika from "../../assets/images/teletonika.png"
import Router1 from "../../assets/images/router1.png"
import Router2 from "../../assets/images/router2.png"
import Router3 from "../../assets/images/router3.png"
import Switch from "../../assets/images/switch.png"
import Gateway from "../../assets/images/gateway.png"
import './Teltonika.style.css'

const TeltonikaPage = () => {
    return (
        <div className="teltonika-container">
            <img src={Teltonika} alt="Teltonika" style={{ width: "35%", padding: "0px 50px" }} />
            <div className="cards-container">
                <div className="routers-card card">
                    <div className="pictures">
                        <img src={Router1} alt="Router1" className="router-1" />
                        <img src={Router2} alt="Router2" className="router-2" />
                        <img src={Router3} alt="Router3" className="router-3" />
                    </div>
                    <div className="info-title">
                        <h1>
                            Routers
                        </h1>
                        <p>(19 products)</p>
                    </div>
                </div>
                <div className="gate-switch-container">
                    <div className="switches-card card">
                        <div className="pictures-second">
                            <img src={Switch} alt="Switch" className="switch-gateway" />
                        </div>
                        <div className="info-title">
                            <h1>
                                Switches
                            </h1>
                            <p>(8 products)</p>
                        </div>
                    </div>
                    <div className="gateway-card card">
                        <div className="pictures-second">
                            <img src={Gateway} alt="Gateway" className="switch-gateway" />
                        </div>
                        <div className="info-title">
                            <h1>
                                Gateways
                            </h1>
                            <p>(2 products)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TeltonikaPage;