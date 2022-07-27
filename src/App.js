import {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {YMInitializer} from 'react-yandex-metrika'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Loader from './hoc/Loader/Loader'
import Home from './routes/Home'
import NotFound from './routes/NotFound'

const Donate = lazy(() => import('./routes/Donate'))
const Policy = lazy(() => import('./routes/Policy'))
const Rating = lazy(() => import('./routes/Rating'))
const Failed = lazy(() => import('./routes/Failed'))
const Success = lazy(() => import('./routes/Success'))
const Login = lazy(() => import('./routes/Login'))

function App() {
    return (
        <Router>
            <Navbar/>

            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<Login/>}/>
                    <Route path="/policy" element={<Policy/>}/>
                    <Route path="/donate" element={<Donate/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Suspense>

            {process.env.NODE_ENV === 'development' && <YMInitializer accounts={[66709000]}/>}
        </Router>
    )
}

export default App
