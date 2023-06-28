import React, { useState } from 'react'
import "./AboutUs.css"
function HistoryCard() {
    const [history, setHistory] = useState({
        history: [
            {
                id: 1,
                date: 2003,
                earnedSuccess: "Elektronika mağazalar şəbəkəsinin yaradılmasında əldə olunan nailiyyətlərə görə “Uğur” mükafatı ilə təltif edilib"
            },
            {
                id: 2,
                date: "2008 - 2009",
                earnedSuccess: " “İlin ən yaxşı dileri” nominasiyasında “Uğur” mükafatı ilə təltif edilib "
            },
            {
                id: 3,
                date: 2009,
                earnedSuccess: "Teknotik müştərilərinin rahatlığını düşünərək ölkədə ilk dəfə olaraq Onlayn Kredit lahiyəsini həyata keçirib"
            },
            {
                id: 4,
                date: "2010 - 2012",
                earnedSuccess: "Uğur mükafatı və 2011-ci ildə ilin mükafatı ilə təltif olunub"
            },
            {
                id: 5,
                date: 2016,
                earnedSuccess: "Samsung brendinin rəsmi satış tərəfdaşı oldu"
            },
            {
                id: 6,
                date: 2017,
                earnedSuccess: "Azercell eksklüziv dilleri kimi fəaliyyət göstərib"
            },
            {
                id: 7,
                date: 2018,
                earnedSuccess: "Xiaomi brendinin rəsmi satış tərəfdaşı seçilib"
            },
            {
                id: 8,
                date: 2019,
                earnedSuccess: "Honor brendinin Azərbaycanda rəsmi tərəfdaşı oldu"
            },
            {
                id: 9,
                date: 2020,
                earnedSuccess: "“BirKart ilə Satış” nominasiyasında qalib olub"
            },
            {
                id: 10,
                date: 2021,
                earnedSuccess: "Apple rəsmi satış tərəfdaşı oldu. Kapital Bankın BirKart üzrə elektronika sahəsində say olaraq ən çox taksit dövriyyəsi etmiş partnyoru olduq"
            },
            {
                id: 11,
                date: 2022,
                earnedSuccess: "Kapital Bankın BirBank üzrə elektronika sahəsində say olaraq ən çox taksit dövriyyəsi etmiş partnyoru olduq!"
            },
        ]
    })
    return (
        <>
            {
                history.history.map((item) => (
                    <div className='HistoryCard'>
                        <div className="HCardInner">
                            <h1>{item.date}</h1>
                            <p>{item.earnedSuccess}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default HistoryCard