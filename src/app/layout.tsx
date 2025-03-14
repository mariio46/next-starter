import type { Metadata } from 'next';

import { geistMono, geistSans } from '@/fonts';
import { cn } from '@/lib/utils';

import './globals.css';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className={cn(geistSans.variable, geistMono.variable)}>
            <body className='font-sans antialiased' suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
