import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './count'
import Runs from './Runs'
import Bowler from './Bowler'

function App() {

  function handleClick(){
    alert('Button-1')
  }

  const sumNumber = (num) => alert(`Button-4 = ${num+5}`); 

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h4>Vite + React</h4>

      <Bowler></Bowler>
      <Runs></Runs>
      <Count></Count>

      <button onClick={handleClick}>Button- 1</button>
      <button onClick={ function btn2Click(){
        alert('Button-2')
      } }>Button- 2</button>
      <button onClick={() => alert('Button-3')}>Button- 3</button>
      <button onClick={()=> sumNumber(40)}>Button- 4</button>

    </>
  )
}

export default App
