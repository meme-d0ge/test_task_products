import {ICategory} from "@/entities/product/interfaces/category.interface";

export interface IProduct {
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    category: ICategory;
    images: string[];
    creationAt: string;
    updatedAt: string;
}
