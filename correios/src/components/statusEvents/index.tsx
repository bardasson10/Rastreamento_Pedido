import { Label } from "@radix-ui/react-label";

interface StatusEventsProps {
    status?: string;
    date?: string;
    time?: string;
    city?: string;
    uf?: string;
}

export function StatusEvents({ status, date, time, city, uf }: StatusEventsProps) {
    return (
        <div className=" w-full h-fit flex-col justify-center items-center  mt-2">
            <div className="w-full justify-center items-center flex space-x-2">
                <Label htmlFor="status">Status:</Label>
                <p id="status">{status}</p>
            </div>
            <div className="w-full justify-center items-center flex  space-x-2 m-0">
                <Label htmlFor="dateTime">Atualização:</Label>
                <p id="dateTime">{date + " " + time}</p>
            </div>
            <div className="w-full flex justify-center items-center space-x-2 m-0">
                <Label htmlFor="local">Localicade:</Label>
                <p id="local">{city + "/" + uf}</p>
            </div>
        </div>
    );
}