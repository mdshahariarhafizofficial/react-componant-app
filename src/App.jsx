import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './count'
import Runs from './Runs'
import Bowler from './Bowler'
import User from './User'
import { Suspense } from 'react'
import Post from './Post'
import Comments from './Comments'

const LoadComments = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/comments')
  return res.json()
}

const UserData = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

const loadPost = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}

function App() {
  const loadPostPromise = loadPost();
  const loadComments = LoadComments();

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

      <Suspense fallback = {<h2 style={{Color: 'red'}}>All Comments Loading....</h2>}>
        <Comments loadComments = {loadComments}></Comments>
      </Suspense>

      <Suspense fallback = {<h2>Post is Loading...</h2>}>
        <Post loadPostPromise = {loadPostPromise}></Post>
      </Suspense>

      <Suspense fallback = { <h2>User Data is Loading...</h2> }>
        <User UserData = {UserData}></User>
      </Suspense>

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
