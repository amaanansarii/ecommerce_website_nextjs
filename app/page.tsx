import { stripe } from "@/lib/stripe";
import Image from "next/image";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  console.log(products, "products");
  return (
    <div></div>
  );
}
