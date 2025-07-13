import {axiosInstance} from "@/shared/api/axiosInstance";
import {ApiConfig} from "@/shared/api/config/cons";
import {useInfiniteQuery} from "@tanstack/react-query";
import {IProduct} from "@/entities/product/interfaces/product.interface";

const fetchGetProducts = async ( offset: number, limit: number ): Promise<IProduct[]> => {
    const params = new URLSearchParams({ offset: String(offset), limit: String(limit)}).toString();
    const url = `${ApiConfig.getProducts}?${params}`;
    const response = await axiosInstance.get<IProduct[]>(url);
    return response.data
};

export const useGetProducts = (
    limit: number = 10,
) => {
    return useInfiniteQuery<IProduct[]>({
        queryKey: ['products'],
        initialPageParam: 0,
        queryFn: ({pageParam = 0}) => fetchGetProducts(Number(pageParam), Number(limit)),
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = allPages.flat().length;
            return lastPage.length !== 0 ? nextPage  : null
        },
        // ...options,
    })
}