import Link from "next/link";

export function Navbar(){
    return (
        <nav>
            <div>
                <Link href="/">My Ecommerce</Link>
            </div>
            <div>
                <Link href="/">My Ecommerce</Link>
                <Link href="/products">Products</Link>
                <Link href="/checkout">Checkout</Link>
            </div>
        </nav>
    )
}