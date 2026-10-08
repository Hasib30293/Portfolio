import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'Md. Hasibul Hossain — Front-End Developer', description: 'Portfolio of Md. Hasibul Hossain.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
