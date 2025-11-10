import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Header from "@/app/components/header/header";

export const metadata: Metadata = {
    title: "ShelfLife",
    description: "Share toys. Skip the clutter.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body>
                    <Header></Header>
                    <div  className="px-4 md:px-8 lg:px-16">
                        {children}
                    </div>
                </body>
            </html>
        </ClerkProvider>
    );
}