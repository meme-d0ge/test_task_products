'use client'
import '@/app/style.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const queryClient = new QueryClient()
    return (
        <html lang="en">
            <body className='container mx-auto'>
                <QueryClientProvider client={queryClient}>
                    <header></header>
                    {children}
                    <footer></footer>
                </QueryClientProvider>
            </body>
        </html>
    );
}
