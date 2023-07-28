import React, { useState } from "react";
import ItemList from "./ItemList";
import { produce, pantryItems } from "./storeItems";


export default function GroceryCart () {
    const [cart, setCart] = useState({});

    const addItem = (item) => {
        setCart((prev) => {
            [item, ...prev];
        });
    };

    const removeItem = (targetIndex) => {
        setCart((prev) => {
            return prev.filter((item, index) => index !==targetIndex);
        });
    };

    return (
        <div>

        </div>
    )
}
