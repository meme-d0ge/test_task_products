import {ApiConfig} from "@/shared/api/config/cons";
import {axiosInstance} from "@/shared/api/axiosInstance";
import {IProduct} from "@/entities/product";
import {Card} from "@/shared/ui/card";
import {notFound} from "next/navigation";
import ProductGallery from "@/entities/product/ui/ProductGallery";
import {Button} from "@/shared/ui/button";

export default async function ProductPage(
    {params}: { params: Promise<{ slug: string }>;
    }) {
    const slug = (await params).slug
    const product = await getProductBySlug(slug);
    if (!product) {
        notFound()
    }
    return (
        <main className='container mx-auto px-2 flex-1'>
            <Card className='flex gap-2 p-0 flex-row not-md:flex-col'>
                <Card className='w-1/2 not-md:w-full p-2'>
                    <ProductGallery className='h-full w-full' images={product.images}></ProductGallery>
                </Card>
                <Card className='w-full p-2'>
                    <span className='font-bold text-center w-full'>{product.title}</span>
                    <span className='font-bold text-center w-full'>Cost: {product.price}$</span>
                    <span className='font-bold text-center w-full'>Category: {product.category.name}</span>
                    <span className='font-bold text-center w-full'>{product.description}</span>

                    <div className='flex-1 flex flex-col-reverse mt-8'>
                        <Button className='cursor-pointer' variant='outline'>add favorite</Button>
                    </div>
                </Card>
            </Card>
        </main>
    );
};

async function  getProductBySlug (productSlug: string){
    const url  = `${ApiConfig.getProductBySlug}/${productSlug}`
    try {
        return (await axiosInstance.get<IProduct>(url))?.data
    } catch {
        return undefined
    }
}
