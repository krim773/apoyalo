import React from 'react';

const PersonCard = (props) => {
    //desestructurar de los props y crear nuevas constantes 
    const { firstName, lastName, age, hairColor } = props;
    return (
        // en este div se renderizaran los datos con los respectvos ordenes dados en la tarea de "apoyalos"
        <div>
            <h2>{lastName},{''} {firstName}</h2>
            <p>Age: {''}{age}</p>
            <p>Hair Color: {''} {hairColor}</p>
        </div>
    );
};

export default PersonCard;
