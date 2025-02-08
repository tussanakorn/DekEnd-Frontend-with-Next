import type { Metadata } from "next"
import "./globals.css"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: "Dekend - เว็บหาที่ฝึกงาน หางาน สำหรับนักศึกษา",
  description: "เว็บไซต์สำหรับค้นหางาน ฝึกงาน สำหรับนักศึกษาและบัณฑิตจบใหม่",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th">
      <body>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}