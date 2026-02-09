import type { Metadata } from "next";
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
    title : {
        default: 'Cloudtail',
        template: `%s | Cloudtail`
    },
    description: 'Display or tail logs from Google Cloud Logging',
    generator: 'Next.js',
    applicationName: 'Cloudtail',
    openGraph: {
        url: './',
        siteName: 'Cloudtail',
        locale: 'en_US',
        type: 'website'
    }
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
        MIT {new Date().getFullYear()} © Cloudtail.
    </Footer>
)

export default async function RootLayout({children}: Readonly<{ children: React.ReactNode}>) {
    const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <body>
            <Layout
                navbar={navbar}
                footer={footer}
                docsRepositoryBase="https://github.com/auxence-m/cloudtail-docs/tree/main/app/docs"
                sidebar={{ defaultMenuCollapseLevel: 1 }}
                pageMap={pageMap}
            >
                {children}
            </Layout>
        </body>
    </html>
  );
}
