"use client"

import Stripe from "stripe";

interface Props {
    product: Stripe.Product;
}
export default function ProductCard({ product }: Props) {

    return (
        <div>
            <div>
                <input type="text" placeholder="Search products..."/>
            </div>
        </div>
    )
}