"use client"


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/store/card-store";

export default function ChecoutPage() {

  const {items, addItem, removeItem} = useCartStore();

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  if(total === 0 || items.length === 0){
    return (
      <div>
        <h1>Your cart is empty</h1>
      </div>
    )
  } else {

  }
  return (
    <div>
      <h1>Checkout Page</h1>
    <Card>
      <CardHeader>
        <CardTitle> Order Summary</CardTitle>
      </CardHeader>

      <CardContent>
        <ul>
          {items.map((item, key) => (
            <li key={key}>
                <div>
                  <span>{item.name}</span>
                  <span> ${((item.price * item.quantity) / 100).toFixed(2)}</span>
                </div>
                <div>
                  <Button variant="outline" onClick={() => removeItem(item.id)}>
            –
          </Button>
          <span className="text-lg font-semibold">{item.quantity}</span>
          <Button onClick={() => addItem(item)}>+</Button>
                </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
    </div>
  );
}