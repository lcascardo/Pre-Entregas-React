import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({ children }) {

    const [cart, setCart] = useState( JSON.parse(localStorage.getItem("cart")) || [] );
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const total = () => {
            return cart.reduce((acc, product) => acc + product.quantity * product.price, 0);
        }
        setTotalPrice(total);
    }, [cart])


    const totalProducts = () => cart.reduce((acc, product) => acc + product.quantity, 0);

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id !== id) ? true : false;

    const removeItem = (id) => setCart(cart.filter(product => product.id !== id));

    const addItem = (item, quantity) => {
        let newCart;
        let product = cart.find(product => product.id === item.id);
        if (product) {
            product.quantity += quantity;
            newCart = [...cart];
        } else {
            product = { ...item, quantity: quantity };
            newCart = [...cart, product];
        }
        setCart(newCart)
    }

    useEffect(() => {
      localStorage.setItem("cart" , JSON.stringify(cart));
    }, [cart])
    

    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeItem,
            addItem,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}
