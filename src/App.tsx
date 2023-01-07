import { MyContextProvider } from './context/Context'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Home from './pages/Home'

function App() {
  return (
    <MyContextProvider>
      <Navbar />
      <main className="pt-28 max-w-6xl mx-auto px-4">
        <Home />
      </main>
      <Footer />
    </MyContextProvider>
  )
}

export default App
