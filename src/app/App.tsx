import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { Home, BookDetail } from '@/pages'

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1;
`

function AppContent() {
  const location = useLocation()
  const isBookDetail = location.pathname.startsWith('/book/')

  return (
    <Layout>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetail />} />
        </Routes>
      </Main>
      {!isBookDetail && <Footer />}
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
