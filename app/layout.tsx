import type { Metadata } from "next";
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import "./globals.css";
import React from "react";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title : {
        default: 'Cloudtail',
        template: `%s | Cloudtail`
    },
    keywords: [
        'Cloud',
        'Logging',
        'CLI',
        'Nextra',
        'Next.js',
        'React',
        'Typescript',
    ],
    description: 'Display or tail logs from Google Cloud Logging',
    generator: 'Next.js',
    applicationName: 'Cloudtail',
    openGraph: {
        // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
        url: './',
        siteName: 'Cloudtail',
        locale: 'en_US',
        type: 'website'
    },
    alternates: {
        // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
        canonical: './',
    },
};

const navbar = (
    <Navbar
        logo={
            <span style={{fontWeight: 600 }}>
                Cloudtail
            </span>
        }
        projectLink="https://github.com/auxence-m/cloudtail"
    />
)

const footer = (
    <Footer>
        MIT {new Date().getFullYear()} © Cloudtail
    </Footer>
)

export default async function RootLayout({children}: Readonly<{ children: React.ReactNode}>) {
    const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
        <Head>
            <link rel="shortcut icon" href="/favicon.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <body className={`${geistSans.className} ${geistMono.className} antialiased`} >
            <Layout
                navbar={navbar}
                footer={footer}
                editLink="Edit this page on GitHub"
                docsRepositoryBase="https://github.com/auxence-m/cloudtail-docs/tree/main/app/docs"
                sidebar={{ defaultMenuCollapseLevel: 2 }}
                pageMap={pageMap}
            >
                {children}
            </Layout>
        </body>
    </html>
  );
}
