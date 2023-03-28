import React, { useState } from "react";
import { Globe } from "../../assets/svg/Globe";
import { ArrowDown } from "../../assets/svg/ArrowDown";
import "./Language.style.css"
import { Popover } from "@mui/material";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Language = () => {

    const [popoverOpened, setPopoverOpened] = useState(false);
    const [anchorLang, setAnchorLang] = useState<HTMLElement | null>(null)

    const { t } = useTranslation();

    const handleClickLanguage = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorLang(e.currentTarget)
        setPopoverOpened(!popoverOpened)
    }


    return (
        <div
            className="language"
            onClick={handleClickLanguage}
        >
            {t("language")}
            <Globe />
            <ArrowDown />
            <Popover
                open={popoverOpened}
                anchorEl={anchorLang}
                onClose={handleClickLanguage}
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
                        <li className="dropdown-lang-element" onClick={() => i18next.changeLanguage('en')}>
                            <div>
                                {t("english")}
                            </div>
                        </li>
                        <li className="dropdown-lang-element" onClick={() => i18next.changeLanguage('ro')}>
                            <div>
                                {t("romanian")}
                            </div>
                        </li>
                    </ul>
                </div>
            </Popover>
        </div>
    )
}

export default Language;