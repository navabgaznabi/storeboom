import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrownLogo } from "../../asserts/crown.svg";
import { UserContext } from "../../context/user.context";
import { CartContext } from '../../context/card.context';

import { userSignOut } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/CardIcon";
import CartDropdown from "../../components/cart-dropdown/CardDropdown";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <Link className="nav-link" onClick={userSignOut}>
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
