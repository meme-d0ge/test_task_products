'use client'

import React, {useState} from "react";
import Loader from "@/shared/ui/custom/Loader";

export const ImageWithLoader = ({ className, ...rest }: React.ComponentProps<'img'>) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative h-full w-full">
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