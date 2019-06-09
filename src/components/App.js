import React, { useState } from 'react'
import ResourceList from './ResourceList'
import UserList from './UserList'
const App = props => {
  const [ resource, setResource ] = useState('posts')
  return (
    <div className='container'>
      <div className='row mt-md-5'>
        <button onClick={() => setResource('posts')} className='btn btn-primary mr-3'>Posts</button>
        <button onClick={() => setResource('todos')} className='btn btn-primary'>Todos</button>
      </div>
      <div className='row mt-md-5'>
        <UserList />
        <ResourceList resource={resource}/>
      </div>
    </div>
  )
}

export default App
