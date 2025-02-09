export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) {
    return <div className="min-h-screen">{children}</div>
  }