import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchCart = async () => {
            const userEmail = localStorage.getItem("authUser");
            if (userEmail) {
                const response = await axios.get(https://crudcrud.com/api/your_api_key/cart${userEmail});
                setCart(response.data);
            }
        };
        fetchCart();
    }, []);

    const addToCart = async (product) => {
        setCart([...cart, product]);
        const userEmail = localStorage.getItem("authUser");
        await axios.post(https://crudcrud.com/api/your_api_key/cart${userEmail}, product);
    };

    const removeFromCart = async (id) => {
        setCart(cart.filter((item) => item.id !== id));
        const userEmail = localStorage.getItem("authUser");
        await axios.delete(https://crudcrud.com/api/your_api_key/cart${userEmail}/${id});
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
