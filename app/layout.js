import './globals.css'

export const metadata = {
  title: 'Instagram',
  description: 'Instagram frontend',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
