'use client'
import React, {useCallback, useEffect} from 'react';
import {useGetProducts} from "@/entities/product/api/getProducts";
import ProductCardLink from "@/entities/product/ui/productCardLink";
import Loader from "@/shared/ui/custom/Loader";
import {toast} from "sonner";

export const ProductsPage = () => {
    const { data, isLoading, isFetchingNextPage, isFetchNextPageError, isError, error, fetchNextPage} = useGetProducts(20)

    useEffect(() => {
        if (error) {
            toast.error(error.message, {
                description: error?.name || 'error',
                action: {
                    label: "Close",
                    onClick: () => {},
                },
            });
        } else {

        }
    }, [isFetchNextPageError, isError, error]);

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
        <main className={'container mx-auto px-2 flex-1'}>
            <div className='grid gap-2'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
                    {data?.pages.flat().map((product) => (
                        <ProductCardLink key={product.id} href={`/products/${product.slug}`} product={product}></ProductCardLink>
                    ))}
                </div>
                {isLoading || isFetchingNextPage ? <div className='flex justify-center items-center py-5'>
                    <Loader/>
                </div> : null}
                <div ref={observerRef}/>
            </div>
        </main>
    );
};