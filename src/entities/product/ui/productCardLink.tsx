'use client'
import React from 'react';
import Link from "next/link";
import {IProduct} from "@/entities/product";
import {Card, CardContent, CardFooter} from "@/shared/ui/card";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from "swiper/modules";
import {ImageWithLoader} from "@/shared/ui/custom/ImageWithLoader";


interface IProductCardProps extends React.ComponentProps<'a'> {
    product: IProduct
    href: string
}
const ProductCardLink = ({product, ...rest}: IProductCardProps) => {
    return (
        <Link
            {...rest}
        >
        <Card className={'h-full w-full flex flex-col justify-between'}>
            <CardContent className='h-full'>
                <Swiper
                    className='h-full'
                    modules={[Pagination]}
                    spaceBetween={25}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    {product.images.map((image, index)=>{
                        if (URL.canParse(image)) {
                            return (
                                <SwiperSlide key={index} className={'h-full'}>
                                    <ImageWithLoader src={image} alt={product.title} className="object-cover rounded-2xl" loading='lazy' />
                                </SwiperSlide>
                            )
                        }
                        return null
                    })}
                </Swiper>
            </CardContent>
            <CardFooter>
                <div className='flex flex-col gap-2'>
                    <h2 className="text-md font-semibold">{product.title}</h2>
                    <p className="text-gray-600">${product.price}</p>
                </div>
            </CardFooter>
        </Card>
        </Link>
    );
};

export default ProductCardLink;