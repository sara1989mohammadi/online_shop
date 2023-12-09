import axios from 'axios';
import { Product } from '../models/shop';

const client = axios.create({ baseURL: 'https://localhost:7267/api' });

export const getProductAll = async (): Promise<Product[]> => {
    const res = await client.get<Product[]>('/products');
    const data: Product[] = res.data;
    return data;
}


export const createProduct = async (product: Product): Promise<Product> => {
    const res = await client.post<Product>('/products', product, {
        headers: { 'Content-Type': 'application/json' }
    });
    const data: Product = res.data;
    return data;
}

export const deleteProduct = async (id: number): Promise<void> => {
    const res = await client.delete(`/products/${id}`);
}

export const updateProduct = async (id: number, product: Product): Promise<void> => {
    const res = await client.put(`/products/${id}`, product, {
        headers: { 'Content-Type': 'application/json' }
    });
}

