import React from 'react'
import { ImPlus, ImMinus } from "react-icons/im";

const OneStudent = ({ student, onAdd, onRemove }) => {
  return (
    <div className='card'>
        <img className='card-img-top' src={student.image} alt="Neka slika"/>
        <div className='card-body'>
            <h3 className='card-title'>{student.name}</h3>
            <p className='card-text'>
                {student.description}
            </p>
            {student.chosen ? (
        <button className="btn" onClick={() => onRemove(student.id)}>
        <ImMinus />
      </button>
      ):
      <button className="btn" onClick={() => onAdd(student.id)}>
        <ImPlus />
      </button>
      }
        </div>
    </div>
  )
}

export default OneStudent