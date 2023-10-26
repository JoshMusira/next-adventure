import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata = {
  title: 'TechBytes',
  description: ' Explore the latest in software development, gadgets, and digital trends. Join us in unraveling the world of technology, one byte at a time.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-100 dark:bg-medium overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html >
  )
}
