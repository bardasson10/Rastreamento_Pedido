
interface event {
    date: string,
    time: string,
    city: string,
    uf: string,
    status: string,
}

export interface ProductEvent {
    code: string,
    service: string,
    quantity: number,
    events: event[];
}