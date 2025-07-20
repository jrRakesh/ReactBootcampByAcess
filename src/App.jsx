import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import SinglePage from './pages/SinglePage'
import Create from './pages/Create'
import Edit from './pages/Edit'
import LearningUseState from './pages/LearningUseState'


//This is a component not a funciton
function App() {
  //Js syntax are written in this section before reutrn and after curly backet
  
  return (
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/single/:id' element={<SinglePage />}/>
      <Route path='/create/blog' element={<Create />}/>
      <Route path='/edit/blog/:id' element={<Edit />}/>
      <Route path='/learningusestate' element={<LearningUseState />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
