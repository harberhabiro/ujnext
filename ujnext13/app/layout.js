import './globals.css'
import NavBar from './components/navbarComponents/Navbar'

export const metadata = {
  title: "Home",
  description: "Home page for unethicaljokes",
  others: [
    {
      rel: 'stylesheet',
      url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    }
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head /> */}
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
