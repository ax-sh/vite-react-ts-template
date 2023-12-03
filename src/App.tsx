import { Suspense } from 'react'
import {
    useRoutes,
} from 'react-router-dom'
import routes from '~react-pages'
import Loader from "./ui/Loader.tsx";

function App() {

  return (
      <Suspense fallback={<Loader/>}>
          {useRoutes(routes)}
      </Suspense>
  )
}

export default App
