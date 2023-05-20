import React, { useEffect, useState } from "react";
import Teltonika from "../../assets/images/teletonika.png"
import Routers from "../../assets/images/routers.png"
import Switch from "../../assets/images/switch.png"
import Gateway from "../../assets/images/gateway.png"
import './Teltonika.style.css'
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../api/api";
import { Box, CircularProgress } from "@mui/material";

const TeltonikaPage = () => {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const fetchProducts = async () => {
        setLoading(true);
        const products = await getProducts();
        setProducts(products)
        setLoading(false)
    }

    const getProductNumber = (productId: number) => {
        if (productId === 1) { //ROUTERS
            const routers = products.filter((prod: any) => prod.productType === productId)
            return routers.length
        }
        if (productId === 2) { //Switches
            const switches = products.filter((prod: any) => prod.productType === productId)
            return switches.length
        }
        if (productId === 3) { //Gateways
            const gateways = products.filter((prod: any) => prod.productType === productId)
            return gateways.length
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>
            {isLoading ?
                <Box sx={{ position: "inherit", width: "100%", height: "100%", display: "flex", justifyContent: "center", margin: "auto", marginTop: "20%" }}>
                    <CircularProgress size="3rem" color='info' />
                </Box>
                :
                <div className="teltonika-container">
                    <img src={Teltonika} alt="Teltonika" style={{ width: "35%", padding: "0px 50px" }} />
                    <div className="cards-container">
                        <div className="routers-card card" onClick={() => navigate('/teltonika/routers')}>
                            <div className="pictures">
                                <img src={Routers} alt="Router1" className="router-1" />                    </div>
                            <div className="info-title">
                                <h1>
                                    Routers
                                </h1>
                                <p>({getProductNumber(1)} products)</p>
                            </div>
                        </div>
                        <div className="gate-switch-container">
                            <div className="switches-card card" onClick={() => navigate('/teltonika/switches')}>
                                <div className="pictures-second">
                                    <img src={Switch} alt="Switch" className="switch-gateway" />
                                </div>
                                <div className="info-title">
                                    <h1>
                                        Switches
                                    </h1>
                                    <p>({getProductNumber(2)} products)</p>
                                </div>
                            </div>
                            <div className="gateway-card card" onClick={() => navigate('/teltonika/gateways')}>
                                <div className="pictures-second">
                                    <img src={Gateway} alt="Gateway" className="switch-gateway" />
                                </div>
                                <div className="info-title">
                                    <h1>
                                        Gateways
                                    </h1>
                                    <p>({getProductNumber(3)} products)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
};

export default TeltonikaPage;