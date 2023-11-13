import React from "react";
import "./Dashboard.style.css"
import Teltonika from "../../assets/images/teletonika.png"
import { TextField } from "@mui/material";
import { SearchIcon } from "../../assets/svg/SearchIcon";
import { useTranslation } from "react-i18next";

const Dashboard = () => {

    const { t } = useTranslation()

    return (
        <div className="dashboard-container">
            <div className="left-container">
                <h1> {t("networkSecurityProtection")}</h1>
                <p>
                    {t("homeDescription")}
                </p>
                <div className="search-container">
                    <TextField
                        variant="outlined"
                        placeholder={t("searchForProducts")!}
                        inputProps={{
                            style: {
                                color: "white",
                                padding: "30px 10px",
                                fontSize: "18px",
                            },
                        }}
                        style={{
                            borderRadius: "25px",
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#6DDCFF",
                                    borderRadius: "60px",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#6DDCFF",
                                }
                            },
                            width: "100%",
                            "@media only screen and (max-width: 768px)": {
                                width: "100%"
                            }
                        }}
                        InputProps={{
                            endAdornment: <button className="searchButton">{t("findAProduct")}</button>,
                            startAdornment: <SearchIcon />
                        }}
                    />
                </div>
            </div>
            <div className="right-container">
                <div>
                    {t("daconaMostPopular")}
                </div>
                <div>
                    <img src={Teltonika} alt="Teltonika" style={{ width: "100%" }} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;