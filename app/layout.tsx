import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chidi Orji (orjichidi95@gmail.com)',
  description: 'Welcome to my portfolio',
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
