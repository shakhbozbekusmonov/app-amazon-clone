import React from 'react';
import {useCart} from "react-use-cart";

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,

    } = useCart();

    if (isEmpty)

    return (
        <div className="container-fluid bg-white">
            <div className="row">
                <div className="col-12">
                    <h3>Cart ({totalUniqueItems}) total Items: ({totalItems})</h3>
                    <table className="table table-hover table-striped">
                        {items.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.title}</td>
                                    <td>
                                        <img src={item.image} alt="Error"/>
                                    </td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;