import React from 'react'
import "./Login.css"
import "./ResLogin.css"
import questionsImg from "../../Assest/questionsImg.png"
import question from "../../Assest/question.png"
import Important from "../../Assest/Important.png"
import CloseIcon from "../../Assest/icons8-close-24.png";
import hidePassword from "../../Assest/hidePassword.png"
import showPassword from "../../Assest/showPassword.png"
import { RiFacebookCircleLine } from 'react-icons/ri';
import { AiFillGooglePlusCircle, AiFillInstagram } from 'react-icons/ai';
import { AiOutlineLeft } from "react-icons/ai";
import { useState, useEffect } from 'react'
function Login() {
    const [password, setPassword] = useState();
    const [Rotate, setRotate] = useState(false);
    const [date, setDate] = useState(false);
    const [selectDate, setSelectDate] = useState({
        day: "",
        month: "",
        year: "",
    })
    const RotateCard = (e) => {
        e.preventDefault()
        setRotate(!Rotate)
    }
    const handlerPassword = () => {
        setPassword(!password)
    }
    const [month, setMonth] = useState(["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyun", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"
    ])
    const [day, setDay] = useState([" 1", " 2", " 3", " 4", " 5", " 6", " 7", " 8", " 9", "10", "11", "12", "13", "14",
        "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"])
    const [year, setYear] = useState([
        "1905",
        "1906", "1907", "1908", "1909", "1910", "1911", "1912", "1913", "1914", "1915", "1916", "1917", "1918", "1919", "1920", "1921", "1922", "1923", "1924", "1925", "1926", "1927", "1928", "1929", "1930", "1931", "1932", "1933", "1934", "1935", "1936", "1937", "1938", "1939", "1940", "1941", "1942", "1943", "1944", "1945", "1946", "1947", "1948", "1949", "1950", "1951", "1952", "1953", "1954", "1955", "1956", "1957", "1958", "1959", "1960", "1961", "1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969", "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"
    ])
    const OpenDate = (e) => {
        [...e.target.closest("ul").querySelectorAll("li ul")].map((ul) => {
            ul.classList.remove("Active")
        })
        e.target.closest("li").querySelector("ul").classList.add("Active");
    }

    const CLoseDate = (e) => {
        setSelectDate({ ...selectDate, [e.target.getAttribute("data-type")]: e.target.textContent });
        let x = e.target.closest("ul")
        x.classList.remove("Active")
    }


    const submitForm = (e) => {
        e.preventDefault()
    }
    useEffect(() => {
        const handleClickOut = (event) => {
            const ul = document.querySelector('.dateDetails');
            // console.log(ul.contains(event.target));???? 1 true 2,3 false 
            if (ul && !ul.contains(event.target)) {
                ul.classList.remove('Active');
            }
        };
        document.addEventListener('mousedown', handleClickOut);
        return () => {
            document.removeEventListener('mousedown', handleClickOut);
        };
    }, []);
    return (
        <>
            <div className="Login">
                <div className={`card ${Rotate ? "Active" : ""}`}>
                    <div className="LoginInner">
                        <form action="">
                            <div className='SingUp'>
                                <p >LOG IN</p>
                            </div>
                            <div className='Email'>
                                <p>Email</p>
                                <input type="text" />
                            </div>
                            <div className='Password'>
                                <p>Password</p>
                                <input type={`${password ? "text" : "password"}`} />
                                <div className='showPasswordImg' onClick={handlerPassword}>
                                    <img src={password ? hidePassword : showPassword} alt="" />
                                </div>
                            </div>
                            <div className='btnLogin'>
                                <button>LOG IN</button>
                            </div>
                            <div className='forgotPassword'>
                                <button>Forgot password?</button>
                            </div>
                            <div className='Or'>
                                <span></span>
                            </div>
                            <div className='SosialMediaRegisterBox'>
                                <div><RiFacebookCircleLine /></div>
                                <div><AiFillGooglePlusCircle /></div>
                                <div><AiFillInstagram /></div>
                            </div>
                            <div className='newAccount'>
                                <button className='CreateAccountBtn' onClick={(e) => { RotateCard(e) }}>Create new account</button>
                            </div>
                        </form>
                    </div>

                    <div className="Register">
                        <form action="" onSubmit={submitForm}>

                            <div className='SingUp'>
                                <button className='LeftBtnLoginMenu' onClick={(e) => { RotateCard(e) }}>
                                    <AiOutlineLeft className='LeftIconLoginMenu' />
                                </button>
                                <p >SIGN UP</p>
                            </div>
                            <div className='Email'>
                                <p>Your Full Name</p>
                                <input type="text" />
                            </div>
                            <div className='Email'>
                                <p>Your Email</p>
                                <input type="text" />
                            </div>
                            <div className='Password'>
                                <p>Password</p>
                                <input type={`${password ? "text" : "password"}`} />
                                <div className='showPasswordImg' onClick={handlerPassword}>
                                    <img src={password ? hidePassword : showPassword} alt="" />
                                </div>
                            </div>
                            <div className='Date'>
                                <div className="DateInner">
                                    <ul>
                                        <li>
                                            <p onClick={(e) => { OpenDate(e) }} id="p">
                                                {selectDate.day ? selectDate.day : "Gün"}
                                                <AiOutlineLeft className='DateRightIcon' />
                                            </p>
                                            <ul className="dateDetails">
                                                {day.map((li, index) => (
                                                    <li key={index} onClick={(e) => CLoseDate(e)}
                                                        data-type="day"
                                                    >
                                                        {li}
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                        <li>
                                            <p onClick={(e) => { OpenDate(e) }} id="p">
                                                {selectDate.month ? selectDate.month : "Ay"}
                                                <AiOutlineLeft className='DateRightIcon' />
                                            </p>
                                            <ul className="dateDetails">
                                                {month.map((li, index) => (
                                                    <li key={index} data-type="month" onClick={(e) => CLoseDate(e)}>
                                                        {li}
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                        <li>
                                            <p onClick={(e) => { OpenDate(e) }} id="p">
                                                {selectDate.year ? selectDate.year : "il"}
                                                <AiOutlineLeft className='DateRightIcon' />
                                            </p>
                                            <ul className="dateDetails">
                                                {year.map((li, index) => (
                                                    <li key={index} data-type="year" onClick={(e) => CLoseDate(e)}>
                                                        {li}
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='btnSingUp'>
                                <button>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Login