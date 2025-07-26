import React from 'react' 
import Layout from './components/Layout'
import MacPage from './pages/MacPage'
import WatchPage from './pages/WatchPage'
import IphonePage from './pages/IphonePage'
import NotFoundPage from './pages/NotFoundPage'
import AboutePage from './pages/DetailWievPage'
import { BrowserRouter , Router, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<IphonePage/>} />
          <Route path='/Mac/:id' element={<AboutePage/>}/>
          <Route path='/Mac' element={<MacPage/>}/>
          <Route path='/Watch' element={<WatchPage/>}/>
        </Route>
        <Route path='/NotFound' element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
