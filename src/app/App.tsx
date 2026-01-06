import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

// Placeholders for future feature integration
const Home = () => <div>Home Page (Coming Soon)</div>
const BookDetail = () => <div>Book Detail (Coming Soon)</div>
const Header = () => <header style={{ padding: '1rem', background: '#eee' }}>Header (Foundation)</header>
const Footer = () => <footer style={{ padding: '1rem', background: '#eee' }}>Footer (Foundation)</footer>

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1;
`

function AppContent() {
  return (
    <Layout>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetail />} />
        </Routes>
      </Main>
      <Footer />
    </Layout>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App