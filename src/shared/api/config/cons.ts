export interface IApiConfig {
    getProducts: string
    getProduct: string
}
export const ApiConfig = {
    getProducts: '/api/v1/products',
    getProductBySlug: '/api/v1/products/slug'
}