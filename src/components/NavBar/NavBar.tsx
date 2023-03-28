import React, { useState } from "react";
import "./Navbar.style.css"
import { Logo } from "../../assets/svg/Logo";
import { Popover } from "@mui/material";
import { ArrowDown } from "../../assets/svg/ArrowDown";
import { useNavigate } from "react-router-dom";
import Language from "../Language/Language";

const NavBar = () => {

    const [popoverOpened, setPopoverOpened] = useState(false);
    const [anchorProd, setAnchorProd] = useState<HTMLElement | null>(null)

    const navigate = useNavigate();

    const handleClickProducts = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorProd(e.currentTarget)
        setPopoverOpened(!popoverOpened)
    }


    return (
        <div className="navbar-container">
            <div
                className="logo"
                onClick={() => navigate("/")}
            >
                <Logo />
                Dacona
            </div>
            <div className="nav-content">
                <ul className="nav-list">
                    <li>
                        <div
                            role="button"
                            onClick={handleClickProducts}
                        >
                            Products
                            <ArrowDown />
                        </div>
                        <Popover
                            open={popoverOpened}
                            anchorEl={anchorProd}
                            onClose={handleClickProducts}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            sx={{
                                ".MuiPaper-rounded": {
                                    backgroundColor: "#292929",
                                    marginTop: "5px"
                                }
                            }}
                        >
                            <div className="dropdown-container">
                                <ul>
                                    <li className="dropdown-element">
                                        <div>
                                            Teltonika
                                        </div>
                                    </li>
                                    <li className="dropdown-element">
                                        <div>
                                            Hikvision
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Popover>
                    </li>
                    <li>
                        <div
                            role="button"
                        >
                            Features
                        </div>
                    </li>
                    <li>
                        <div
                            role="button"
                        >
                            Pricing
                        </div>
                    </li>
                    <li>
                        <div
                            role="button"
                        >
                            Support
                        </div>
                    </li>
                </ul>
            </div>
            <div className="language-change">
                <Language />
            </div>
        </div>
    )
}

export default NavBar;