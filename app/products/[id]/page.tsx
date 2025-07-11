import {ProductPage} from "@/pages/ProductPage";

export default async function Page(
    {
        params
    }: {
        params: Promise<{ id: string }>;
    }) {
        const id: string = (await params).id
        return <ProductPage productId={id} />
};