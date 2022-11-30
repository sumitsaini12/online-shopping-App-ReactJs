import React, { useState } from "react";
import { CartContext } from "../Contexts";
import { withUser } from "../withProvider";
import { getCart, getProductByIds, saveCart } from "../api";
import { useEffect } from "react";


function CartProvider({ children, isLoggedIn }) {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (isLoggedIn) {
            getCart().then((savedCart) => {
                setCart(savedCart);
            });
        } else {
            const savedDataString = localStorage.getItem("my-cart") || "{}";
            const savedData = JSON.parse(savedDataString);
            quantityMapToCart(savedData);
        };
    }, [isLoggedIn])

    const quantityMapToCart = (quantityMap) => {
        getProductByIds(Object.keys(quantityMap)).then((products) => {
            const savedCart = products.map((p) => ({
                product: p,
                quantity: quantityMap[p.id],
            }));
            setCart(savedCart);
        })
    };

    const addToCard = (productId, count) => {
        const quantityMap = cart.reduce(
            (m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity })
            , {}
        )

        const oldCount = quantityMap[productId] || 0;
        const newCart = { ...quantityMap, [productId]: oldCount + count };
        updateCart(newCart);
    };

    const updateCart = (quantityMap) => {
        if (isLoggedIn) {
            saveCart(quantityMap).then((response) => {
                // setCart(response);
                quantityMapToCart(quantityMap);
            })
        } else {
            const quantityMapString = JSON.stringify(quantityMap);
            localStorage.setItem("my-cart", quantityMapString);
            quantityMapToCart(quantityMap);
        }
    };

    const cartCount = cart.reduce((previous, current) => {
        return previous + current.quantity;
    }, 0);

    return (
        <CartContext.Provider value={{ cart, cartCount, updateCart, addToCard }}>
            {children}
        </CartContext.Provider>
    );
}

export default withUser(CartProvider);
