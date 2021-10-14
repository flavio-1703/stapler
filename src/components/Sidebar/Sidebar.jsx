import React from "react";
import { Link } from "react-router-dom";
/* STYLES */
import './Style/Sidebar.css';

/* ICONS */
import SettingsIcon from '@mui/icons-material/Settings';
import HomeWorkRoundedIcon from '@mui/icons-material/HomeWorkRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import CreateIcon from '@mui/icons-material/Create';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import LocalBarRoundedIcon from '@mui/icons-material/LocalBarRounded';

const logoName = "Flavio";

const menuItems = [
    {
        text: "Home",
        icon: HomeWorkRoundedIcon,
        path: "/"
    },
    {
        text: "Products",
        icon: LocalBarRoundedIcon,
        path: "/"
    },
    {
        text: "Email",
        icon: EmailRoundedIcon,
        path: "/"
    },
    {
        text: "Create",
        icon: CreateIcon,
        path: "/"
    },
    {
        text: "Chat",
        icon: ChatBubbleOutlinedIcon,
        path: "/"
    },
    {
        text: "Settings",
        icon: SettingsIcon,
        path: "/settings"
    }
];


const Sidebar = () => {

    return(
        <nav className="Sidebar">
            <ul className="sidebar-nav">
                <li className="logo">
                    <a href="" className="nav-link">
                        <span className="link-text">{ logoName }</span>
                        <DoubleArrowRoundedIcon className="nav-icon logo-chevron" />
                    </a>
                </li>
                { menuItems.map( item => {
                    return (
                        <li className="nav-item">
                            <Link to={ item.path } className="nav-link">
                                <item.icon className="nav-icon" />
                                <span className="link-text">{ item.text }</span>
                            </Link>
                        </li>
                    );}
                )}
            </ul>
        </nav>
    );
}

export default Sidebar;