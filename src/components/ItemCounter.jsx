import { useState } from "react";

export const ItemCounter = ({onAdd, stock, initial }) => {
    const [count, setCount] = useState(initial)
    return (
        <>
        <div style={{display: "flex"}}>
        <div>-</div>
        <input />
        <div >+</div>
        </div>
        <button onClick={onAdd}>Agregar al Carrito</button>
        </>
    );
};