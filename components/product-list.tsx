"use client"

import Stripe from "stripe";
import ProductCard from "./products-card";

interface Props {
    products: Stripe.Product[];
}
export default function ProductList({ products }: Props) {

    return (
        <div>
            <div>
                <input type="text" placeholder="Search products..."/>
            </div>

            <ul>
                {products.map((products, key) => {
                    return <li key={key}><ProductCard product={products}></ProductCard></li>
                })}
            </ul>
        </div>
    )
}