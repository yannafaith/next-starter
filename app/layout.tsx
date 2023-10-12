import '@/globals.css';

export const metadata = {
    title: 'Next.js Template',
    description: 'A starter NextJs template',
}

export interface LayoutProps {
    children: any;
}

export default function Layout({ children }: LayoutProps ): JSX.Element {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}