import React from 'react';
import type { Metadata } from 'next'
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: 'Graybuck Media | Web Design, Web Development, Photography & Video ',
  description: 'Evolving creatively, protecting your vision',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
