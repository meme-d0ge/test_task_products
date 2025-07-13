'use client'

import React, {useState} from "react";
import Loader from "@/shared/ui/custom/Loader";

interface IImageWithLoaderProps extends React.ComponentProps<'img'>{
    className?: string
    classNameContainer?: string
}
export const ImageWithLoader = ({ className, classNameContainer, ...rest }: IImageWithLoaderProps) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={`relative ${classNameContainer}`}>
            {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <Loader />
                </div>
            )}
            <img
                {...rest}
                className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
}