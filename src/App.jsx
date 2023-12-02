import { Routes , Route } from 'react-router-dom'
import Profile from './pages/Profile/index'
import Explore from './pages/Explore/index'
import Router from './constants/Routes'
import Inbox from './pages/Inbox/index'
import Home from './pages/Home/index'

const App = () => {
  return (
    <>
      <Routes>
          <Route path={Router.home} element={Home} />
          <Route path={Router.inbox} element={Inbox} />
          <Route path={Router.explore} element={Explore} />
          <Route path={Router.profile} element={Profile} />
      </Routes>
    </>
  )
}

export default App