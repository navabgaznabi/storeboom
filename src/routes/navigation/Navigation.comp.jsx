import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrownLogo } from "../../asserts/crown.svg";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import { userSignOut } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import NavMenuComp from "../../components/nav-menu/Nav-menu.comp";
import FooterComp from "../../components/footer/Footer.Comp";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
                <div className="sticky navigation">
                    <Link className="logo-container" to="/">
                        <CrownLogo className="logo" />
                    </Link>
                    <NavMenuComp />
                    <div className="nav-links-container">
                        {currentUser ? (
                            <Link
                                className="nav-link sign-in"
                                onClick={userSignOut}
                            >
                                LOG OUT
                            </Link>
                        ) : (
                            <Link className="nav-link" to="/auth">
                                LOGIN/REGISTER
                            </Link>
                        )}
                        <CartIcon />
                    </div>
                    {isCartOpen && <CartDropdown />}
                </div>

            <Outlet />
            <FooterComp/>
        </Fragment>
    );
};
export default Navigation;
