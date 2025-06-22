import "@/index.css";

import type { Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";

import { cn } from "@/lib/utils";
import Providers from "~/providers";

export const viewport: Viewport = {
	themeColor: "#FFFFFF",
};

const Satoshi = localFont({
	display: "swap",
	src: "./Satoshi-Variable.woff2",
	variable: "--font-sans",
});

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="font-sans antialiased" suppressHydrationWarning>
			<head>
				<Script
					crossOrigin="anonymous"
					src="//unpkg.com/react-scan/dist/auto.global.js"
				/>
			</head>
			<body className={cn("min-h-svh", Satoshi.variable)}>
				<Providers>
					<div className="min-h-svh">{children}</div>
				</Providers>
			</body>
		</html>
	);
}
