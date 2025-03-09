import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Login from "./components/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const App = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/product/:id" element={user ? <ProductDetail /> : <Navigate to="/login" />} />
                <Route path="/cart" element={user ? <Cart /> : <Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
};

export default App;
