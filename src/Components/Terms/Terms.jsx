import React from 'react'
import "./Terms.css"
import "./ResTerms.css"
function Terms() {
    return (
        <>
            <div className="Terms">
                <div className="TermsInner">
                    <h1>Şərtlərimiz</h1>
                    <div className="TermsText">
                        <p><strong>Sifariş, çatdırılma, qaytarma və dəyişmə razılaşması</strong></p>
                        <p><strong> Əsas anlayışlar:</strong></p>
                        <p>Alıcı razılaşması - bu sənəddə onlayn alış ilə bağlı aşağıda əks olunan bütün şərtlər;</p>
                        <p>ALICI – irshad.az onlayn platformasının verdiyi texniki imkanlar vasitəsi ilə və elektron ödəniş edərək portalda qeyd olunmuş mal və xidmətləri sifariş edən/alan, həmçinin bu “Qaytarma və dəyişdirmə razılaşması”nın şərtləri ilə razılaşan fiziki və ya hüquqi şəxs;</p>
                        <p>SATICI – özünə məxsus irshad.az portalında öz mallarını/xidmətlərini onlayn qaydada satan və satış və çatdırılma şərtlərini özü müəyyən edən fiziki və ya hüquqi şəxs;</p>
                        <p>PORTAL – mal və xidmətlərin onlayın alış-veriş məkanı olan, İrşad Electronics MMC-yə məxsus “www.irshad.az” internet səhifəsi;</p>
                        <p>MAL(LAR)/XİDMƏT(LƏR) – PORTALDA yerləşdirilmiş hər hansı mallar, xidmətlər, təchizatlar, materiallar, əşyalar və digər material və əmtəələr (o cümlədən onların quraşdırılması və ya istənilən hissəsi);</p>
                        <p>SİFARİŞ – Alıcının müəyyən etdiyi ünvana çatdırılması məqsədilə Portaldan mal/xidmət alınması məqsədilə Portalda mövcud olan müvafiq formanın doldurularaq SATICIya elektron formada göndərilməsi.</p>
                        <p>QAYTARMA – ALICININ PORTALDAN əldə etdiyi MALI(LAR)/XİDMƏTİ(LƏR)  SATICIYA təqdim edərək ödənilmiş məbləği geri alması.</p>
                        <p>DƏYİŞMƏ - ALICININ PORTALDAN əldə etdiyi MALI(LAR)/XİDMƏTİ(LƏR)  SATICIYA təqdim edərək əvəzində başqa MALI(LAR)/XİDMƏTİ(LƏR) alması.</p>
                        <p className="SpecialText"><strong>Xüsusi şərtlər</strong></p>
                        <p>1.Razılaşmanın predmetini ALICI tərəfindən şəxsi və digər məqsədər üçün PORTALDA əks olunan malların/xidmətlərin alınması, qaytarması, dəyişməsi və digər formada istifadəsində imkan yaradılması təşkil edir. Bu Razılaşma şərtləri PORTALDA cari vaxtda satışda olan bütün mal və xidmətlərə şamil olunur.</p>
                        <p>2.PORTALDA satılan mallar/xidmətlər üzrə qaytarma və dəyişmə şərtləri qüvvədə olan İstehlakçı Hüquqlarının Müdafiəsi haqqında Azərbaycan Respublikasının qanununun 15-ci maddəsi ilə tənzimlənir.</p>
                        <p>3.PORTALDAN mal sifariş edən ALICI bu RAZILAŞMAnın şərtləri ilə tam razılaşdığını bəyan edir.</p>
                        <p>4.SATICI alış həyata keçirilənədək alış şərtlərini heç kimə xəbərdarlıq etmədən dəyişdirə bilər.</p>
                        <p>5.Alış o vaxt baş tutmuş sayılır ki, ALICI malın/xidmətin dəyərini kassa çeki və ya alqı-satqını təsdiq edən digər sənəd qarşılığında hər hansı formada (onlayn/nağd) ödəmiş olsun.</p>
                        <p>6.PORTALDA olan sifariş formasını doldurmaqla ALICI özünə aid əlaqə vasitələri barədə məlumatların SATICI tərəfindən istifadəsinə etiraz etmir. Bura gələcəkdə ALICIya müxtəlif endirim kompaniyaları, digər əlaqəli məlumatların göndərilməsi aiddir.</p>
                        <p>7.ALICI sifariş etməklə SATICInın öz öhdəliklərinin icrasını 3-cü şəxslərə tapşırmasına etiraz etmir və SATICI sifariş ilə bağlı 3-cü şəxslərin bu RAZILAŞMAdan kənara çıxan hərəkətlərinə görə məsuliyyət daşıyır.</p>
                        <p>8.“www.irshad.az” səhifəsində texniki-profilaktik işlərin aparıldığı günlərdən, fors-major hallardan başqa, ALICI günün, ayın, ilin instənilən vaxtı PORTALın xidmətlərindən istifadə edə bilər. PORTALın iradəsindən kənar səbəblərdən dolayı PORTALın fəaliyyətinin istənilən müddətdə dayanması, habelə SATICInın bu Razılaşmadan irəli gələn öhdəliklərinin icrasının qeyri-mümkünlüyü səbəbindən ALICIya zərər dəyərsə, bu halda SATICI hər hansı məsuliyyət daşımır.</p>
                        <p>9.PORTALDA satış üçün nəzərdə tutulmuş malların şəkilləri illüstrativ təyinatlı olmaqla alınmış malla 100% eyni olmaya bilər. Məlumatlarda əhəmiyyətli çatışmamazlıq olduğu təqdirdə, ALICI PORTALA yazılı müraciət ünvanlaya bilər.</p>
                        <p>10.PORTALDA görsənməsinə baxmayaraq əgər sifariş verilmiş mal SATICInın anbarında yoxdursa, SATICI bu barədə ən qısa vaxt ərzində ALICIya xəbər verməklə sifarişi ləğv edir. Sifarişin ləğvi nəticəsində ALICIya hər hansı real zərər dəyərsə, buna görə SATICI məsuliyyət daşımır.</p>
                        <p>11.Sifariş verildikdən sonra ALICInın ünvanının məsafəsindən asılı olaraq SATICI sifarişin çatıdırılma tarixi, vaxtı və digər şərtləri barədə ALICIya məlumat verir.</p>
                        <p>12.Dəyişmə və qaytarılma yalnız sənədlərdə qeyd olunan şəxsin iştirakı ilə və yalnız İrşad Electronics mağaza şəbəkələrində aparılır. Dəyişmə və qaytarılma kuryerlərin xidmətinə daxil deyil.</p>
                        <p>13.Sifariş, qaytarma, dəyişmə, çatdırılma və ya digər problemlər ilə bağlı ALICI SATICIYA məxsus info@irshad.az elektron ünvanına şikayətlərini elektron qaydada təqdim edə bilər.</p>
                        <p>14.Bu Razılaşmadan irəli gələn və ya onunla, o cümlədən onun təfsiri, icrası, xitamı və etibarsızlığı ilə bağlı yaranan bütün mübahisələr və ya iddialar, ilk növbədə tərəflər arasında vicdanla və dostcasına danışıqlar yolu ilə həll edilir. Əgər bu cür mübahisə 5 iş günü ərzində Tərəflər arasında həll edilməzsə, bu halda həmin mübahisə Azərbaycan Respublikasının müvafiq məhkəmələri tərəfindən həll edilir.</p>
                        <p className='DeliveryRules'><strong>Çatdırılma qaydaları</strong></p>
                        <p>Mağazalarımızın olduğu bölgələrdə dəyəri 50 AZN-dən yuxarı olan məhsulların istər kredit, istərsə də nağd, taksit kartları ilə alışı zamanı çatdırılma xidməti mövcuddur və pulsuzdur.</p>
                        <p>Böyük məişət əşyaları ilk 3 iş günü ərzində çatdırılır və növbəti ilk 3 iş günü ərzində quraşdırılır. Digər məhsullar 24 saat ərzində çatdırılır.</p>
                        <p>Yalnız online sifariş kateqoriyasında olan məhsullər ilk 3 iş günü ərzində çatdılır.</p>
                        <p>Çatdırılan məhsul yalnız onlayn alış edən müştərinin özünə verilə bilər. Heç bir halda digər şəxsə verilmir.</p>
                        <p>Onlayn qaydada kreditlə məhsul sifariş verildikdə məhsulun çatdırılması zamanı şəxsiyyət vəsiqəsi sahibinin identifikasiyasının təsdiqi üçün çəkiliş aparıla bilər</p>
                        <p>Sifariş çatdırılan zaman müştəri müqaviləyə imza çəkməli, şəxsiyyət vəsiqəsinin əslini kuryerə təqdim etməli və həmin vəsiqənin surətini ona verməlidir.</p>
                        <p>Çatdırılma xidməti Koordinasiya şöbəsi tərəfindən həyata keçirilir və ümumi qaydalar əsasında işləyir.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Terms