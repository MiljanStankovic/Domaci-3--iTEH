import React from 'react'
import OneStudent from './OneStudent'

const Students = ({ students, onAdd, onRemove }) => {
  return (
    <div className='all-students'>
        {students.map((student) => (
            <OneStudent key={student.id} student={student} onAdd={onAdd} onRemove={onRemove}/>
        ))}
    </div>
  )
}

export default Students