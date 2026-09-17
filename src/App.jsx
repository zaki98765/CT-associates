import './App.css'
import { Route,Routes } from 'react-router-dom'
import Header from './componets/Header'
import Footer from './componets/Footer'
import Home from './pages/Home'
import Kozhikode from './pages/Kozhikode'
import Mkm from './pages/Mkm'
import Tham from './pages/Tham'
import Kalppeta from './pages/Kalppeta'
import About from './componets/About'
import Contact from './componets/Contact'
function App() {

  return (
    <>
    <Header/>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/mkm' element={<Mkm/>}/>
<Route path='/koz' element={<Kozhikode/>}/>
<Route path='/tham' element={<Tham/>}/>
<Route path='/kal' element={<Kalppeta/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/Contact' element={<Contact/>}/>



    </Routes>
    
    <Footer/>
    </>
  )
}

export default App
