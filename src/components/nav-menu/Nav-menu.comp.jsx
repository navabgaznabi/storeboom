import React from "react";
import { Link } from "react-router-dom";

const NavMenuComp = () => {
    return (
        <nav className="nav-links-container menu">
            <ol>
                <li className="menu-item">
                    <Link className="in-nav-link" to="/shop">
                        SHOP
                    </Link>
                </li>
                <li className="menu-item">
                    <Link className="in-nav-link" to="/shop/mens">
                        MENS
                    </Link>
                </li>
                <li className="menu-item">
                    <Link className="in-nav-link" to="/shop/womens">
                        WOMENS
                    </Link>
                </li>
                <li className="menu-item">
                    <div className="in-nav-link">CATEGORIES</div>
                    <ol className="sub-menu">
                        <li className="menu-item">
                            <Link className="in-nav-link" to="/shop/hats">
                                HATS
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link className="in-nav-link" to="/shop/jackets">
                                JACKETS
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link className="in-nav-link" to="/shop/sneakers">
                                SNEAKERS
                            </Link>
                        </li>
                    </ol>
                </li>
                <li className="menu-item">
                    <Link className="in-nav-link" to="/">
                        CONTACT
                    </Link>
                </li>
            </ol>
        </nav>
    );
};

export default NavMenuComp;
