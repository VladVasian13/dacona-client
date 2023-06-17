import React, { useState } from "react";
import "./Navbar.style.css"
import { Logo } from "../../assets/svg/Logo";
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Popover } from "@mui/material";
import { ArrowDown } from "../../assets/svg/ArrowDown";
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RouterIcon from '@mui/icons-material/Router';
import HelpIcon from '@mui/icons-material/Help';
import { useNavigate } from "react-router-dom";
import Language from "../Language/Language";
import { useTranslation } from "react-i18next";
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {

    const [popoverOpened, setPopoverOpened] = useState(false);
    const [anchorProd, setAnchorProd] = useState<HTMLElement | null>(null)
    const [openDrawer, setOpenDrawer] = useState(false)

    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleClickProducts = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorProd(e.currentTarget)
        setPopoverOpened(!popoverOpened)
    }


    return (
        <>
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
                                {t("products")}
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
                                        <li
                                            className="dropdown-element"
                                            onClick={(e) => { navigate("/teltonika"); handleClickProducts(e) }}
                                        >
                                            <div>
                                                Teltonika
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
                                {t("features")}
                            </div>
                        </li>
                        <li>
                            <div
                                role="button"
                            >
                                {t("support")}
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="language-change">
                    <Language />
                </div>
            </div>
            <div className="nav-mobile">
                <IconButton onClick={() => setOpenDrawer(true)} sx={{ position: "absolute", right: "20px", top: "10px" }}>
                    <MenuIcon sx={{ color: "#ffffff" }} fontSize="large" />
                </IconButton>
                <Drawer
                    anchor={"left"}
                    open={openDrawer}
                    onClose={() => setOpenDrawer(false)}
                >
                    <Box
                        sx={{ width: 250, backgroundColor: "black", height: "100%", color: "#ffffff" }}
                    >
                        <List>
                            <ListItem key={'Products'} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Inventory2Icon sx={{ color: "#ffffff" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={'Products'} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem key={'Features'} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <RouterIcon sx={{ color: "#ffffff" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={'Features'} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem key={'Support'} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <HelpIcon sx={{ color: "#ffffff" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={'Support'} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                        <Divider sx={{ backgroundColor: "#FFFFFF" }} />
                        <List>
                            <ListItem key={"language"} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        TT
                                    </ListItemIcon>
                                    <Language />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            </div>
        </>
    )
}

export default NavBar;