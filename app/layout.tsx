'use client'
import '@/app/style.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import TheHeader from "@/widgets/TheHeader/TheHeader";
import {ThemeProvider} from "next-themes";
import {Toaster} from "@/shared/ui/sonner";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const queryClient = new QueryClient()
    return (
        <html lang="en" suppressHydrationWarning>
            <body className='min-h-screen flex flex-col'>
                <QueryClientProvider client={queryClient}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                    >
                        <TheHeader />
                        {children}
                        <Toaster richColors />
                    </ThemeProvider>
                </QueryClientProvider>
            </body>
        </html>
    );
}
