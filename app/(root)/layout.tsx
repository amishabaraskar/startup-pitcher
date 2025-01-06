import React from 'react'
import Navbar from "@/components/Navbar";
export const revalidate = 0;
export const dynamic = 'force-dynamic';
const Layout = ({children}:Readonly<{ children:React.ReactNode }>) => {
    return (
        <main className="font-work-sans">
            <Navbar />
            {children}
        </main>
    )
}
export default Layout
