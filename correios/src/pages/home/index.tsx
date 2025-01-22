import { Track } from "@/api/track";
import { StatusEvents } from "@/components/statusEvents";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProductEvent } from "@/interface/productEvent";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

export function Home() {
    const [trackingPackage, setTrackingPackage] = useState<ProductEvent[]>([]);
    const [productCode, setProductCode] = useState<string>("");


    console.log(productCode);
    const handleSearch = async () => {
        try {
            const response = await Track(productCode);
            console.log(response);
            setTrackingPackage([response]);
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div className="w-full h-full flex-col flex justify-center space-y-2 items-center">
            <h1 className="text-3xl">Encontre sua encomenda aqui!</h1>
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input className="" type="text" onChange={(e) => setProductCode(e.target.value)} placeholder="Ex: AA123456789BR" />
                <Button type="submit" onClick={handleSearch}><IoSearch /></Button>
            </div>
            {trackingPackage.map((tracking, index) => (
                <div key={index} className="flex-col w-fit content-center h-fit p-2">
                    <h2 className="text-4xl">Código de rastreio: {tracking.code}</h2>
                    <h2 className="text-2xl text-center">Serviço: {tracking.service}</h2>
                    {tracking.events && tracking.events.length > 0 ? (
                        tracking.events.map((event, eventIndex) => (
                            <StatusEvents
                                key={eventIndex}
                                status={event.status}
                                date={event.date}
                                time={event.time}
                                city={event.city}
                                uf={event.uf}
                            />
                        ))
                    ) : (
                        <p>Nenhum evento encontrado.</p>
                    )}
                </div>
            ))}
        </div>
    )
}