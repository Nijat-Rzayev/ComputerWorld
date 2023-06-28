import React, { useState } from 'react'
import VacanciesCard from './VacanciesCard'
import "./Vacancies.css"
function Vacancies() {
    const [data, setData] = useState({
        vacancies: [
            {
                id: 1,
                title: "Satış təmsilçisi",
                territory: "Bakı ərazisi üzrə"
            },
            {
                id: 2,
                title: "Kredit mütəxəssisi",
                territory: "Bakı, Ağcabədi və Sumqayıt ərazisi üzrə"
            },
            {
                id: 3,
                title: "Reklam yerləşdirmə üzrə mütəxəssis",
                territory: "Bakı ərazisi üzrə"
            },
        ]
    })
    return (
        <>
            <div className='vacanciesContainer'>
                <VacanciesCard data={data} />
            </div>
        </>
    )
}

export default Vacancies