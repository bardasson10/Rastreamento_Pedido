import { ProductEvent } from "@/interface/productEvent";
import { api } from "../api";


export async function Track(productCode: string): Promise<ProductEvent> {
    const response = await api.get (`/simulation/tracking?productCode=${productCode}`)
    if (response.status !== 200) {
        throw new Error('Failed to fetch data')
    }
    const data = response.data
    return data
}