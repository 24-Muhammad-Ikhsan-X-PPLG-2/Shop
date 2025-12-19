export type ProductType = {
    id: number;
    name: string;
    slug: string;
    image_url: string | null; // Nullable di DB
    description: string | null; // Nullable di DB
    category: string;
    star: number;
    price: number;
    sizes: string | null; // Disimpan sebagai text (mungkin JSON string)
    colors: string | null; // Disimpan sebagai text (mungkin JSON string)
    brand: string;
    stock_quantity: number;
    created_at: string | Date | null;
    updated_at: string | Date | null;
};

export type CountCategories = {
    men: number;
    women: number;
    casual: number;
    formal: number;
    accessories: number;
    new_arrivals: number;
    activewear: number;
    footwear: number;
    summer_collection: number;
};
