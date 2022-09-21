import React from "react";
import OneStudent from "./OneStudent";

const Team = ( {chosenStudents, onRemove } ) => {
    return (
        <div className="card-container">
            {chosenStudents.map((student) => (
                <OneStudent key={student.id} student={student} onRemove={onRemove}/>
            ))}
        </div>
    )
}

export default Team;