export interface IApiConfig {
    baseUrl: string,
    getProducts: string
}
export const ApiConfig = {
    baseUrl: 'https://api.escuelajs.co',

    getProducts: '/api/v1/products'
}