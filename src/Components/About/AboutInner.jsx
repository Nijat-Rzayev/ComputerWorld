import React from 'react'
import basketCar from "../../Assest/basketCar.png"
function AboutInner() {
    return (
        <>
            <div className='AboutInformationInner'>
                <div className='RowOne'>
                    <div>
                        <p><span>TEKNOTIK.AZ -</span> SİZİN <br />
                            YENİ TEXNİKANIZ
                        </p>
                        <p>
                            Vasitəçilər və təchizatçılar olmadan birbaşa səbətinizə
                        </p>
                    </div>
                    <div>
                        <img src={basketCar} alt="" />
                    </div>
                </div>
                <div className='RowTwo'>
                    <div>
                        <p>10 000 + <br /> <h2 className='span'>SEÇİM</h2></p>
                    </div>

                    <div>
                        <div>
                            <h2>HƏMİŞƏ MÖVCUDDUR</h2>
                            <p>
                                Smartfon və noutbuklardan tutmuş paltaryuyan maşınlara və ev kinoteatrlarına qədər.
                                Komandamız artıq əsas istehsalçılar və distribyutorlarla əməkdaşlıq əlaqələri qurub. Biz Samsung, Apple, Lenovo, Philips, LG, Xiaomi və digər brendlərin orijinal məhsullarını satırıq.
                            </p>
                        </div>
                        <div>
                            <h2>ƏLÇATAN QİYMƏTLƏR</h2>
                            <p>
                                Rəsmi malları birbaşa tədarükçülərdən, vasitəçisiz aldığımız üçün Maxi.az mağazası sərfəli qiymətə mallar təklif edir. Əmin olmaq üçün mağazamıza gəlmək kifayətdir. Bundan əlavə, Maxi.az-da çevik Bonus Plus sistemi keçərlidir
                            </p>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </>
    )
}

export default AboutInner