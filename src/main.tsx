import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '@app/store'
import App from '@app/App'
import GlobalStyles from '@app/GlobalStyles'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>
)
