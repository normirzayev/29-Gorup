import React from 'react'
import { Routes , Route } from 'react-router-dom'
import { Table } from './Table'
import { Form } from './Form'

export function ShowPage() {
  return (
    <div className='ShowPage'>
        <Routes>
            <Route path='/tablepage' element={<Table/>}/>
            <Route path='/formpage' element={<Form/>}/>
        </Routes>
    </div>
  )
}
