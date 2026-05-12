import { Route, Routes } from 'react-router-dom'
import NewsDetail from './pages/NewsDetail'
import NewsMain from './pages/NewsMain'
import { useContext, useEffect } from 'react'
import { GlobalContext } from './context/Context'
import image from './assets/Dawood Ibrahim.jpg'

const App = () => {

  const { lan, setLan, light, setLight, getLocalStorage, setLocalStorage } = useContext(GlobalContext)

  useEffect(() => {
    const { lightStore, lanStore } = getLocalStorage();
    if (lightStore !== null) setLight(lightStore);
    if (lanStore !== null) setLan(lanStore);
  }, []);

  useEffect(() => {
  setLocalStorage(light, lan);
}, [light, lan]);


  return (
    <>
      {/* <Routes>
        <Route path='/' element={<NewsMain />} />
        <Route path='/news/:id' element={<NewsDetail />} />
      </Routes> */}
      <img src={image} className='w-auto h-[100vh] object-contain' alt="" /> 
    </>
  )
}

export default App