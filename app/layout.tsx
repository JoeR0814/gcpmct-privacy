import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Gold Coast Property Maintenance LLC - Landscape & Construction Services',
	description:
		'Professional landscape and construction services for commercial, residential, and community properties in Connecticut.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<nav className='bg-green-800 text-white p-4'>
					<div className='max-w-6xl mx-auto flex justify-between items-center'>
						<Link href='/' className='text-xl font-bold'>
							Gold Coast Property Maintenance LLC
						</Link>
						<div className='space-x-4'>
							<Link href='/' className='hover:text-green-200'>
								Home
							</Link>
							<Link href='/privacy-policy' className='hover:text-green-200'>
								Privacy Policy
							</Link>
							<Link href='/terms-conditions' className='hover:text-green-200'>
								Terms & Conditions
							</Link>
						</div>
					</div>
				</nav>
				{children}
				<footer className='bg-gray-800 text-white p-6 mt-10'>
					<div className='max-w-6xl mx-auto text-center'>
						<p className='mb-2'>© 2026 Gold Coast Property Maintenance LLC. All rights reserved.</p>
						<div className='space-x-4'>
							<Link href='/privacy-policy' className='hover:text-gray-300'>
								Privacy Policy
							</Link>
							<span>|</span>
							<Link href='/terms-conditions' className='hover:text-gray-300'>
								Terms & Conditions
							</Link>
						</div>
					</div>
				</footer>
			</body>
		</html>
	);
}
