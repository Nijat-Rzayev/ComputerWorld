import React from 'react'
import { Link } from 'react-router-dom';
import "./VacanciesCard.css"
function VacanciesCard(props) {
    const { data } = props;
    return (
        <>
            {
                data.vacancies.map((item) => (
                    <div className='VacanciesCard' key={item.id}>
                        <div className="VacanciesCardInner">
                            <div className="CardLeft">
                                <h3>{item.title}</h3>
                                <p>{item.territory}</p>
                            </div>
                            <div className="CardBtn">
                                <Link to="/">
                                    <button className='MoreBtn'>
                                        Ətraflı
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default VacanciesCard