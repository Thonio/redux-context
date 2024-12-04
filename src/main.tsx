import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { MenuComponent } from './MenuComponent.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { Cart } from './Cart.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MenuComponent />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
