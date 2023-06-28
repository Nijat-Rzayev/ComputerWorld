import "./Shop.css";
import "./ResShop.css";
import { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { BsChevronDown } from "react-icons/bs"
function AboutUs() {
    const [show, setshow] = useState(true)
    const [selecteMap, setselectedMap] = useState(true)
    const [regionText, setregionText] = useState("Bakı Üzrə")
    const [saveRegion, setSaveRegion] = useState([])
    const containerStyle = {
        width: '100%',
        height: '100%'
    };
    const center = {
        lat: -3.745,
        lng: -38.523
    };
    const [Baku] = useState([
        {
            Region: "Baş Ofis",
            Adres: "Bakı, Əhməd Rəcəbli 1/9",
            WorkTIme: "B.ertəsi-Cümə 09:00-18:00",
        },
        {
            Region: "Yasamal",
            Adres: "Bakı, Şərifzadə küç. 162",
            WorkTIme: "B.ertəsi-Cümə 09:00-18:00",
        },
        {
            Region: "28 Mall",
            Adres: "28 MALL Ticarət Mərkəz9",
            WorkTIme: ">Hər gün 10:00 –21:00",
        }
    ]
    )
    const [Region] = useState([
        {
            Region: "Sumqayıt",
            Adres: "Sülh küçəsi 5004",
            WorkTIme: "Hər gün 10:00 –21:00",
        },
        {
            Region: " Sumqayıt - 2",
            Adres: "18 mkr, M. Əsədov küç., 10B ",
            WorkTIme: "Hər gün 10:00 –21:00",
        },
        {
            Region: " Sumqayıt - 3",
            Adres: "10 mkr, Babek k. Ev22",
            WorkTIme: ">Hər gün 10:00 –21:00",
        }
    ]
    )
    const [Services] = useState([
        {
            Region: " Bakı, Texniki Servis mərkəzi, Xətai",
            Adres: "Süleyman Vəzirov 11B (Xətai estetik klinikası yaxınlığı)",
            WorkTIme: "Hər gün 10:00-19:00",
        },
        {
            Region: " Sumqayıt, Texniki Servis mərkəzi",
            Adres: "3-cü mkr. Sülh küç 3/24",
            WorkTIme: "Bazar ertəsi-Şənbə günü 10:00-19:00",
        },
        {
            Region: "Gəncə, Texniki Servis Mərkəzi",
            Adres: "Heydər Əliyev küçəsi 103",
            WorkTIme: "Bazar ertəsi-Şənbə günü 10:00-19:00",
        }
    ]
    )
    const [showRegion, setShowRegion] = useState([...Baku])
    const ChangeRegion = (e) => {
        setShowRegion(Region)
        setregionText(e.target.innerText)
    }
    const ChangeBaku = (e) => {
        setShowRegion(Baku)
        setregionText(e.target.innerText)


    }
    const ChangeServices = (e) => {
        setShowRegion(Services)
        setregionText(e.target.innerText)

    }
    const DropdownInnerChange = () => {
        setshow(!show)

    }

    const ShowMap = (details) => {
        setselectedMap(!selecteMap)
    }
    const addClassName = (e) => {
        let ul = [...e.target.closest("ul").querySelectorAll("li")];
        ul.map((li) => (
            li.classList.remove("OrangeSelected")
        ))
        e.target.classList.add("OrangeSelected")

    }
    return (
        <>
            <div className="Shop">
                <div className="CorrectMap">
                    <h3>Magazalar</h3>
                    <div className="SelectedRegion">
                        <ul>
                            <li className="OrangeSelected" onClick={(e) => { ChangeBaku(e); addClassName(e) }} >Bakı Üzrə</li>
                            <li onClick={(e) => { ChangeRegion(e); addClassName(e) }}>Bölgələr Üzrə</li>
                            <li onClick={(e) => { ChangeServices(e); addClassName(e) }} >Servis Mərkəzi</li>
                        </ul>
                    </div>
                    <div className="SelectedAdress">
                        <div className="BakuRegion">
                            {
                                showRegion.map((item, index) => (
                                    <div key={index}>
                                        <p>{item.Region}</p>
                                        <p>{item.Adres}</p>
                                        <p>{item.WorkTIme}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className={`ResShop ${selecteMap ? "" : "ResShopActive"}`}>
                    <div className="selectedRegion">
                        <div className="selected" onClick={DropdownInnerChange}>
                            <p >{regionText}</p>
                            <BsChevronDown className="OpenSelectedRegion" />
                        </div>
                        <ul className={`RegionDropdown ${show ? "" : "RegionDropdownActive"}`}>
                            <li data="Bakı Üzrə" onClick={(e) => { ChangeBaku(e); DropdownInnerChange(e) }} >Bakı Üzrə</li>
                            <li data="Bölgələr Üzrə" onClick={(e) => { ChangeRegion(e); DropdownInnerChange() }}>Bölgələr Üzrə</li>
                            <li data="Servis Mərkəzi" onClick={(e) => { ChangeServices(e); DropdownInnerChange() }}>Servis Mərkəzi</li>
                        </ul>
                        <div className="Region">
                            {
                                showRegion.map((item, index) => (
                                    <div onClick={(() => { setSaveRegion(item); setshow(true) })} key={index}>
                                        <p onClick={ShowMap}>{item.Region}</p>
                                        <p onClick={ShowMap}>{item.Adres}</p>
                                        <p onClick={ShowMap}>{item.WorkTIme}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className={`resultDropDown ${selecteMap ? "" : "resultDropDownActive"}`}>
                    <span onClick={ShowMap} className="OpenRegion"></span>
                    <div  >
                        <p>{saveRegion.Region}</p>
                        <p> {saveRegion.Adres}</p>
                        <button className="ShareShopBtn">
                            Mağazanı paylaş
                        </button>
                    </div>
                </div>
                <LoadScript googleMapsApiKey="AIzaSyCxs7-y0LWz-ab_TPb0hGOx9PZf_tHEA-A">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                    >
                    </GoogleMap>
                </LoadScript>

            </div>
        </>
    )
}

export default AboutUs