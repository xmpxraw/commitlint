import Router from './router'
// import { Link } from '@/components/link'
// <Link to="/">Home Page</Link>
// <Link to="/about">About Page</Link>

function App() {
  console.log('import.meta.env, ==test', import.meta.env.VITE_APP_NAME)
  return (
    <div className="App">
      <Router />
    </div>
  )
}

export default App
