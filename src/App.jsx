
import './App.css'

import Lottery from './lottery'
import Ticket from './Ticket'
function App() {
  return (
    <>
<Lottery/>
<Ticket ticket={[0,1,2]}/>
</>
  )
}

export default App
