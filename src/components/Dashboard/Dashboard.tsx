import React from "react";
import "./Dashboard.style.css"
import Teltonika from "../../assets/images/teletonika.png"
import { TextField } from "@mui/material";

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="left-container">
                <h1> Network, security, protection</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti minus minima vero aperiam ut fugiat id soluta aliquam alias pariatur accusamus placeat aliquid exercitationem omnis voluptas at et ducimus necessitatibus reiciendis, totam ex esse sunt.
                </p>
                <div className="search-container">
                    <TextField
                        variant="outlined"
                        placeholder="Search for products"
                    />
                </div>
            </div>
            <div className="right-container">
                <div>
                    Dacona most popular selling brand
                </div>
                <div>
                    <img src={Teltonika} alt="Teltonika" />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;