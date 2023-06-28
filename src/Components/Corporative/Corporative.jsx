import React from 'react'
import "./corporative.css"
import "./ResCorporative.css"
function corporative() {
    return (
        <>
            <div className="Corporative">
                <div className="CorporativeInner">
                    <div className="CorporativeText">
                        <h1>Korporativ</h1>
                        <p><strong>
                            <span className='IrşadSpan'>İrşad</span> Korporativ şöbəsi ölkənin bir çox tanınmış şirkətləri ilə əməkdaşlıq edir. Ümumilikdə 2500-dən çox şirkət, publik hüquqi şəxslər, dövlət qurumlarını əhatə edən əməkdaşlıq çərçivəsində Korporativ şöbə müştərilərinə xüsusi həssaslıqla yanaşır.</strong></p>
                        <p className='CorporativePlus'><strong>Korporativ üstünlüklərimiz</strong></p>
                        <p>
                            <strong>Qiymət strategiyası:</strong> Korporativ müştərilər daim Korporativ seqmentə xas olan xüsusi endirimlərdən yararlana bilirlər.
                        </p>
                        <p><strong>Xidmət:</strong> Korporativ müştərilər servis xidmətlərindən növbəsiz yararlana bilirlər.</p>
                        <p><strong>Ödəmə şərtləri:</strong> Uzun müddət birgə çalışdığımız partnyorlara sonradan ödəmə imkanı yaradaraq xüsusi limitin ayrılması mümkündür.</p>
                        <p>
                            <strong>Şəxsi menecer:</strong> Korporativ Müştərilər fəaliyyət göstərdikləri sektorlara uyğun olaraq bütün sorğu və müraciətləri onlara təhkim olunmuş menecer üzərindən həyata keçirə bilərlər.
                        </p>
                        <p><strong>Çatdırılma:</strong> Korporativ Müştərilər üçün çatdırılma müştəriyə uyğun qrafikdə həyata keçirilir.</p>
                        <p><strong className='Offer'>Sizə təkliflərimiz:</strong></p>
                        <p>Köçürmə yolu ilə ödəniş edə bilmək imkanı</p>
                        <p>Korporativ müştərilərə xüsusi endirimlər</p>
                        <p>Seçilmiş müştərilərə hissəli ödəniş imkanı</p>
                        <p>Zəng,elektron poçt üzərindən sifariş vermə imkanı</p>
                        <p>Öncədən sifariş etməklə saytımızda əks olunmayan malların əldə edə bilmə imkanı</p>
                        <p>Bizimlə əməkdaşlıq etmək üçün aşağıdakı əlaqə vasitələrindən sizə uyğun olanını seçə bilərsiniz:</p>
                        <p><strong className='ContactStr'>Əlaqə:</strong></p>
                        <p>  +994553008784</p>
                        <p> +994552052686</p>
                        <p> <strong>Poçt ünvanımız:</strong>  corp@irshad.az    </p>
                    </div>
                    <div className="CorporativeTalbe">
                        <form action="">
                            <div className='FormTableHeader'>
                                <h1>Bizə yazın</h1>
                            </div>
                            <div className='formLogin'>
                                <div>
                                    <p>Ad soyad</p>
                                    <input type="text" name="" id="" />
                                </div>
                                <div>
                                    <p>Əlaqə nömrəsi</p>
                                    <input type="text" name="" id="" />
                                </div>
                            </div>
                            <div className='formEmail'>
                                <p>E-mail</p>
                                <input type="text" name="" id="" />
                            </div>
                            <div className='formComplaint'>
                                <div>
                                    <p>Şirkət</p>
                                    <input type="text" name="" id="" />
                                </div>
                                <div>
                                    <p>Sizə nə zaman zəng edək</p>
                                    <select name="" id="">
                                        <option value="10">10:00-11:00</option>
                                        <option value="11">11:00-12:00</option>
                                        <option value="12">12:00-13:00</option>
                                        <option value="13">13:00-14:00</option>
                                        <option value="14">14:00-15:00</option>
                                        <option value="15">15:00-16:00</option>
                                        <option value="16">16:00-17:00</option>
                                        <option value="17">17:00-18:00</option>
                                    </select>
                                </div>
                            </div>
                            <div className='formMessage'>
                                <p>İsmarıc</p>
                                <input type="text" name="" id="" />
                                <div>
                                    <button className='ConfirmBtnIT'>Təsdiq et</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default corporative