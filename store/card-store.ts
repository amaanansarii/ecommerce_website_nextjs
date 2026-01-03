

export interface CartItem {
    id: string;
    name: string;
    price: number;
    imageUrl: string | null;
    quantity: number;
}

export interface CartStore {
    items: CartItem[];
    addItem: (item: CartItem) => void;
}