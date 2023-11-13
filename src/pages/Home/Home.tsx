import React from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Dacona is a Romanian company which distributes, sells and work with different types of network and security devices. Our main brand is called Teltonika | Networks ,a Lithuanian company which sells different types of industrial routers, gateways, switches and modems." />
                <title>Dacona</title>
                <link rel="canonical" href="http://dacona.ro/teltonika" />
            </Helmet>
            <Dashboard />
        </>
    )
}

export default Home;