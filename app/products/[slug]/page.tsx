import ProductPage from "@/pages/ProductPage";

export default async function Page({params}: { params: Promise<{ slug: string }>;
    }) {
    return <ProductPage params={params}/>;
};
export const revalidate = 300