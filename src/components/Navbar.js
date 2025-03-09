import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { cart } = useContext(CartContext);
    const { user, logout } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">E-Shop</Link>
                <div>
                    <Link className="btn btn-light mx-2" to="/cart">
                        Cart ({cart.length})
                    </Link>
                    {user ? (
                        <button className="btn btn-danger" onClick={logout}>Logout</button>
                    ) : (
                        <Link className="btn btn-primary" to="/login">Login</Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
