import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";


export const Layout = () => {
    return (
        <div className="w-full h-lvh flex-col justify-between  bg-gray-300 dark:bg-slate-950">
            <Header />
            <main className="w-full flex justify-center items-center">
                <Outlet />
            </main>
        </div>
    )
}