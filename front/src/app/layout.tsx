import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@/style/reset.css"
import "@/style/globalStyle.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Login',
  description: 'Pagina de login',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
        <body className={inter.className}>{children}</body>
    </html>
  )
}
