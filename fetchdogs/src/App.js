import './App.css'
import FetchWithClassComponentUngrouped from './FetchWithClassComponentUngrouped'
import FetchWithClassComponentGrouped from './FetchWithClassComponentGrouped'
import FetchWithClassComponentGroupedComponents from './FetchWithClassComponentGroupedComponents'

function App() {
  return (
    <>
      <h1>Fetch Dogs</h1>
      {/* <FetchWithClassComponentUngrouped /> */}
      {/* <FetchWithClassComponentGrouped /> */}
      <FetchWithClassComponentGroupedComponents />
    </>
  )
}

export default App
