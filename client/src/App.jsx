import styles from './App.module.css'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <>
     <h1 className={styles.text}>Header</h1>
     <Outlet></Outlet>
    </>
  )
}

export default App
