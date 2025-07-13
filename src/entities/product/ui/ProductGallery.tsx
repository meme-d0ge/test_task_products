'use client'
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import {ImageWithLoader} from "@/shared/ui/custom/ImageWithLoader";
import 'swiper/css';
import 'swiper/css/pagination';

const ProductGallery = ({images, className} : {images: string[], className: string}) => {
    return (
        <Swiper
            className={className}
            modules={[Pagination]}
            spaceBetween={25}
            slidesPerView={1}
            pagination={{ clickable: true }}
        >
            {images.map((image, index)=>{
                if (URL.canParse(image)) {
                    return (
                        <SwiperSlide key={index} className={'h-full'}>
                            <ImageWithLoader src={image} alt='product-image' classNameContainer={'w-full h-full'} className="object-cover rounded-2xl" loading='lazy' />
                        </SwiperSlide>
                    )
                }
                return null
            })}
        </Swiper>
    );
};

export default ProductGallery;