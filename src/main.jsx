import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Products from './components/Products';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App/>}/>

          <Route path='/urun/:id' element={<Products/>}/>
        
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
