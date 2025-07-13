'use client'
import React, {useCallback} from 'react';
import {useGetProducts} from "@/entities/product/api/getProducts";
import ProductCardLink from "@/entities/product/ui/productCardLink";
import Loader from "@/shared/ui/custom/Loader";

export const ProductsPage = () => {
    const { data, isLoading, isFetchingNextPage, isFetchNextPageError, isError, error, fetchNextPage} = useGetProducts(20)

    const observerRef = useCallback((node: HTMLDivElement) => {
        const observer = new IntersectionObserver(() => {
            fetchNextPage()
        })
        observer.observe(node)

        return () => {
            observer.unobserve(node)
        }
    }, [fetchNextPage]);

    return (
        <main className={'container mx-auto px-2'}>
            <div className='grid gap-2'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
                    {data?.pages.flat().map((product) => (
                        <ProductCardLink className={'min-h-32 sm:min-h-48 md:min-h-64 h-full'} key={product.id} href={`/products/${product.id}`} product={product}></ProductCardLink>
                    ))}
                </div>
                {isLoading || isFetchingNextPage ? <div className='flex justify-center items-center py-5'>
                    <Loader/>
                </div> : null}
                {isError || isFetchNextPageError ? <span className='bg-red-300'>{error.message}</span> : null}
                <div ref={observerRef}/>
            </div>
        </main>
    );
};