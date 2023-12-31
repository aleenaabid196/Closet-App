import Auth from "@/components/auth";
import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";
// import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";
import React from "react";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@/app/globals.css"
import { cn } from "@/lib/utils"
require("@/lib/database");
import { ThemeProvider } from "@/components/FeaturePanel/theme-provider";
import SidebarStateProvider from '@/components/FeaturePanel/sidebarState';

const inter = Inter({ subsets: ['latin'] })

interface Props {
    children: React.ReactNode;
}




export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default async function Layout({
    children,
}: Props) {

    const session: any = await getServerSession(authOptions);

    // if (!session) {
    //     return (
    //         <div className="container h-screen mx-auto max-w-7xl">
    //             <Auth />
    //         </div>
    //     );
    // }

    return (
        <html lang="en">
            <body className={cn(
                "min-h-screen bg-background font-sans antialiased",
                "text-text",
            )}>
                <SidebarStateProvider>
                    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
                        {children}
                    </ThemeProvider>
                </SidebarStateProvider>
            </body>
        </html>
    )
}

