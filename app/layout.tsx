import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';

const urbanist = Urbanist({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-urbanist',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Claude Aboki | Analyste de Données',
    description: 'Portfolio de Claude Aboki, analyste de données spécialisé en Power BI, Excel, Python, SQL et visualisation de données.',
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className={`scroll-smooth ${urbanist.variable}`}>
            <body 
                className="antialiased"
                style={{ fontFamily: 'var(--font-urbanist), system-ui, sans-serif' }}
            >
                {children}
            </body>
        </html>
    );
}