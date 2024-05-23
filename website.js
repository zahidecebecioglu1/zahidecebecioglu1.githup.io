$(document).ready(function() {
    let currentTopic = ''; 
    $(".topic-button").hover(
        function() { $(this).css("background-color", "#e0e0e0"); },
        function() { $(this).css("background-color", "#4CAF50"); }
    );


    
    $(".topic-button").click(function() {
        const topic = $(this).data("topic"); 
        currentTopic = topic;
        $("#sub-buttons").removeClass("hidden").slideDown(300); 
    });
    $(".topic-button").click(function() {
        $("#sub-buttons").removeClass("hidden").slideDown(300); 
    });

    
    
    $(".sub-button").click(function() {
        const contentType = $(this).data("content"); 
        let contentText = '';

         
         if (contentType === 'konu-anlatimi') {
            switch (currentTopic) {
                case 'dogal-sayilar':
                    contentText = 'Doğal sayılar, pozitif tam sayıları ve sıfırı içeren bir sayı kümesidir. Genellikle 0dan başlayarak 1, 2, 3, 4, 5... şeklinde devam ederler ve sonsuza kadar giderler. Matematikte doğal sayılar, temel aritmetik işlemlerinin üzerinde gerçekleştirildiği temel sayı grubu olarak kabul edilir. Toplama, çıkarma, çarpma gibi işlemler doğal sayılarla sorunsuz şekilde yapılabilir, ancak çıkarma işlemi sonucu negatif bir sayı ortaya çıkabileceğinden doğal sayılar arasında bu durum söz konusu değildir. Doğal sayılar, aynı zamanda sayma işlemleri ve sıralama için de kullanılır ve genellikle "ℕ" sembolüyle gösterilirler.';
                    break;
                case 'kesirler':
                    contentText = 'Kesirler, bir bütünün parçalarını ifade etmek için kullanılan matematiksel ifadelerdir. Bu ifadeler, sayıları kesirli veya rasyonel biçimde gösterirler. Bir kesir, bir "pay" ve bir "payda" olmak üzere iki kısımdan oluşur. Pay (Üst Kısım): Kesirin üst kısmıdır ve bölünmüş parçanın kaç tanesini ifade ettiğini gösterir.Payda (Alt Kısım): Kesirin alt kısmıdır ve bütünün kaç eşit parçaya bölündüğünü gösterir. Kesir Türleri Basit Kesirler: Payın, paydadan küçük olduğu kesirlerdir.  Bileşik Kesirler: Payın, paydadan büyük veya eşit olduğu kesirlerdir. Tam Sayılı Kesirler: Bir bileşik kesiri tam sayı ve bir basit kesir olarak ifade eder.'; 
                   
                    break;
                 case 'dogal-sayilarla-islemler':
                    contentText = 'Doğal sayılarda işlemler, temel aritmetik operasyonları içerir: toplama, çıkarma, çarpma ve bölme. Toplama işlemi, iki doğal sayıyı bir araya getirerek toplamlarını verir; sonuç daima bir doğal sayıdır. Çarpma işlemi, bir sayının diğer bir sayıyla tekrarlanan toplama yoluyla elde edilir ve bu da doğal bir sayıyla sonuçlanır. Çıkarma işlemi, bir doğal sayıdan diğerini çıkarmaktır, ancak sonuç negatif olabileceği için doğal sayı kümesinde her zaman uygulanamaz. Bölme ise bir doğal sayıyı diğerine böler; fakat sonuç her zaman bir doğal sayı değildir, çünkü tam bölünme olmadığında kesirler ortaya çıkabilir. Sonuç olarak, doğal sayılarla toplama ve çarpma sorunsuz çalışırken, çıkarma ve bölme daha dikkat gerektirir, çünkü sonuç her zaman doğal sayı olmayabilir.';
                    break;
                    case 'kesirlerde-islemler':
                    contentText = 'Kesirlerle çeşitli matematiksel işlemler yapılabilir: Toplama ve Çıkarma: Aynı paydaya sahip kesirler doğrudan toplanıp çıkarılabilir. Farklı paydaya sahip kesirler için, paydayı eşitleyip öyle işlem yapılır. Çarpma: İki kesir çarpılırken paylar ve paydalar ayrı ayrı çarpılır. Bölme: Bir kesiri başka bir kesire bölerken, bölen kesirin tersini alıp çarparız.';
                    break;
                    case 'ondalik-gosterim':
                    contentText = 'Ondalık gösterimi, bir sayıyı virgülle (veya noktayla) tam ve kesirli kısımlara ayırarak ifade etme yöntemidir. Bu gösterim, tam sayı ve ondalık kesirleri bir arada kullanarak sayıları daha hassas ve detaylı şekilde göstermeyi sağlar. Virgülün sol tarafında tam sayı kısmı, sağ tarafında ise kesirli kısmı bulunur. Örneğin, 3.14 sayısında 3 tam kısım, 14 ise kesirli kısmı temsil eder ve bu, pi sayısının yaygın bir gösterimidir. Ondalık gösterimi, matematiksel hesaplamaları kolaylaştırmak ve sayıları daha hassas bir şekilde ifade etmek için kullanılır. Özellikle bilim ve mühendislik alanlarında, sayısal verileri doğru bir şekilde iletmek ve hesaplamak için yaygın olarak tercih edilir.';
                    break;
                    case 'yuzdeler':
                    contentText = 'Yüzdeler, bir sayının başka bir sayıya oranını yüzlük bir ölçek üzerinden ifade etmek için kullanılır. Yüzde kelimesi, Latincede "yüzde" anlamına gelen "per centum" ifadesinden gelir ve genellikle "%" sembolü ile gösterilir. Örneğin, 50%, bir bütünün yarısı anlamına gelir; yani 100 birimden 50si. Yüzdeler, oranları kolayca anlamak ve karşılaştırmak için pratik bir yol sağlar. Matematikte, yüzdeler genellikle verilerin analizinde, istatistiklerde ve finansal hesaplamalarda kullanılır. Yüzdeyi hesaplamak için, orantılı bir çeviri yaparak, payın paydaya oranını 100 ile çarparsınız. Bu, oranları ve paylaşımları anlaşılır ve karşılaştırılabilir hale getirir, bu yüzden yüzdeler günlük yaşamda ve birçok bilimsel disiplinde önemli bir rol oynar.';
                    break;
                    case 'temel-geometrik-kavramlar':
                    contentText = ' Temel geometrik kavramlar, düzlem ve uzayda şekillerin ve nesnelerin özelliklerini anlamak için kullanılan temel bileşenlerdir. Birçok geometri çalışması, noktalar, doğru parçaları, doğrular, açılar, düzlemler ve şekiller gibi kavramlara dayanır. Nokta, herhangi bir boyutu olmayan en temel geometrik birimdir. Doğru, iki noktayı birbirine bağlayan sonsuz uzunluktaki düz bir çizgidir. Doğru parçası, belirli iki nokta arasında kalan kısmı temsil eder. Açılar, iki doğru parçasının birleştiği noktada oluşan eğimi ifade eder ve derece cinsinden ölçülür. Düzlem, düz bir yüzeyi temsil eder ve sonsuz genişliğe sahiptir. Geometrik şekiller, iki boyutlu veya üç boyutlu olabilir ve daire, kare, dikdörtgen, üçgen, küp ve küre gibi farklı biçimlerde gelirler. Bu temel kavramlar, geometri alanında karmaşık problemleri çözmek ve gerçek dünyadaki yapıları anlamak için bir çerçeve sağlar.';
                    break;
                    case 'ucgen-ve-dortgenler':
                    contentText = 'Üçgenler ve dörtgenler, temel geometrik şekillerdir. Üçgen, üç kenarı ve üç açısı olan bir şekildir; iç açılarının toplamı 180 derecedir. Üçgenler, kenar uzunluklarına veya açı ölçülerine göre sınıflandırılabilir: eşkenar üçgen, ikizkenar üçgen, çeşitkenar üçgen, dik üçgen gibi. Dörtgenler ise dört kenarı ve dört açısı olan şekillerdir ve iç açılarının toplamı 360 derecedir. Dörtgenler de farklı türlerde olabilir: kare, tüm kenarları eşit ve tüm açıları 90 derece olan bir dörtgendir; dikdörtgen, karşılıklı kenarları eşit olan ve tüm açıları 90 derece olan bir şekildir; paralelkenar, karşılıklı kenarları paralel olan bir dörtgendir. Ayrıca eşkenar dörtgen, yamuk ve deltoid gibi diğer dörtgen türleri de vardır. Bu şekiller, geometri ve matematikte temel rol oynar ve farklı alanlarda uygulama bulur.';
                    break;
                    case 'veri-toplama-ve-degerlendirme':
                    contentText = 'Veri toplama ve değerlendirme, bilgi edinmek ve analiz yapmak için kullanılan temel süreçlerdir. Veri toplama, belirli bir konuyla ilgili ham verileri elde etme aşamasıdır ve çeşitli yöntemlerle yapılabilir; anketler, deneyler, gözlemler, ölçümler veya çevrimiçi veri toplama araçları gibi. Toplanan veriler, sayısal (nicel) veya sözel (nitel) olabilir ve farklı formatlarda gelebilir. Verilerin doğruluğunu sağlamak için, güvenilir ve geçerli kaynaklardan toplandıklarından emin olmak gerekir.';
                    break;
                    case 'uzunluk-ve-zaman-olcme':
                    contentText = 'Uzunluk ve zaman ölçme, fiziksel dünyayı anlamak ve etkileşimde bulunmak için kullanılan temel kavramlardır. Uzunluk ölçme, bir nesnenin veya mesafenin boyutunu belirler ve çeşitli birimlerle ifade edilir. Metre, uluslararası ölçüm sistemi olan SIda temel uzunluk birimidir ve daha küçük ya da daha büyük ölçümler için santimetre, kilometre gibi alt ve üst birimlere bölünmüştür. Uzunluk ölçümleri, inşaat, mühendislik, bilimsel araştırma ve günlük yaşam gibi birçok alanda kullanılır.';
                    break;
                    case 'alan-olcme':
                    contentText = 'Alan ölçme, iki boyutlu bir yüzeyin büyüklüğünü belirlemek için kullanılan bir kavramdır. Geometri ve matematikte alan, bir yüzeyin kapladığı toplam miktarı ifade eder ve farklı şekiller için farklı formüllerle hesaplanır. Kare veya dikdörtgen gibi dörtgenler için alan, uzunluk ve genişliğin çarpımıyla hesaplanırken, üçgenlerde taban ile yüksekliğin çarpımının yarısı olarak bulunur. Daire alanı, yarıçapın karesinin pi sayısıyla çarpılmasıyla elde edilir. Alan ölçümleri, metrekare (m²), santimetrekare (cm²) veya kilometrekare (km²) gibi birimlerle ifade edilir. Alan ölçme, mimarlık, mühendislik, tarım ve gayrimenkul gibi alanlarda kritik öneme sahiptir, çünkü yapıların boyutlarını, arazi büyüklüklerini ve diğer iki boyutlu yüzeyleri anlamak için kullanılır. Ayrıca, alan ölçme, daha karmaşık geometrik şekiller ve grafiksel analizler için de temel bir bileşendir.';
                    break;
                    case 'geometrik-cisimler':
                    contentText = 'Geometrik cisimler, üç boyutlu uzayda var olan ve belirli yüzeylere, kenarlara ve köşelere sahip olan nesnelerdir. Bu cisimler, günlük yaşamda ve matematikte karşımıza çıkan pek çok farklı yapıyı temsil eder. Küp ve prizma, düz yüzeylere sahip geometrik cisimlerin örnekleridir; küpün her yüzeyi bir kare, prizmanın ise genellikle dikdörtgendir. Küre, tamamen yuvarlak bir yüzeye sahiptir ve uzayda her yönde simetrik bir yapıya sahiptir. Silindir, dairesel tabanları olan ve bir yan yüzeyi olan bir cisimdir. Koniler, dairesel bir tabana sahip olup, bir nokta üzerinde sivrilerek daralır. Piramitler ise çokgen bir taban ile, bu tabandan bir tepe noktasına uzanan üçgen yüzeylerden oluşur. Geometrik cisimler, mühendislik, mimarlık, fizik ve sanatta geniş uygulama alanlarına sahiptir ve uzayda hacim, yüzey alanı ve simetri gibi kavramların incelenmesinde temel rol oynar.';
                    break;
                // Diğer ana butonlar için de içerikler ekleyin
            }
        } else if (contentType === 'soru-cozumu') {
            switch (currentTopic) {
                case 'dogal-sayilar':
                    contentText = `Soru: Ali'nin 25 elması var. Bunların 12'sini Burcu'ya veriyor. Kaç elması kalır?

                    Çözüm:
                    
                    Başlangıç durumu: Ali'nin 25 elması var.
                    Verilen durum: Ali, 12 elmayı Burcu'ya veriyor.
                    Çözüm adımları:
                    Ali'nin elmalarını nasıl azaltırız? Çıkarma işlemi yaparak.
                    Başlangıçtaki elma sayısından verilen elmaları çıkarırız.
                    Çıkarma işlemi yapalım: 25 - 12.
                    Sonuç: Çıkartma işlemini yapınca 13 kalır.
                    Yani 25'ten 12'yi çıkarınca 13 elma kalır.
                    Sonuç: Ali, 12 elmayı Burcu'ya verdikten sonra 13 elması kalır.`;
                    break;
                case 'kesirler':
                    contentText = `Soru:
                    1/2 ve 2/3 kesirlerini toplayınız.
                    
                    Çözüm:
                    
                    Kesirlerde Toplama:
                    Kesirleri toplarken, paydaları eşitlememiz gerekir.
                    1/2 ve 2/3 kesirlerinin paydaları farklıdır.
                    Payda Eşitleme:
                    İki kesirin paydasını eşitlemek için ortak bir payda bulmalıyız.
                    2 ve 3'ün en küçük ortak katı (EKOK) 6'dır.
                    Dolayısıyla, iki kesirin paydasını 6 yapmak için çarpan kullanırız.
                    Kesirleri Dönüştürme:
                    1/2 kesirini 6 yapacak şekilde genişletiriz.
                    2'yi 3 ile çarparız: (1/2) x (3/3) = 3/6
                    2/3 kesirini de 6 yapacak şekilde genişletiriz.
                    3'ü 2 ile çarparız: (2/3) x (2/2) = 4/6
                    Kesirleri Toplama:
                    Artık her iki kesir de aynı paydaya sahip olduğundan, payları toplayabiliriz:
                    3/6 + 4/6 = 7/6
                    Sonuç:
                    Toplama işleminin sonucu 7/6, bu da bileşik kesirdir.
                    İsterseniz, tam sayılı kesire dönüştürebilirsiniz: 7/6 = 1 tam ve 1/6
                    Sonuç: 1/2 ve 2/3 kesirlerinin toplamı 7/6 veya 1 tam 1/6'dir.`;
                    break;
                case 'dogal-sayilarla-islemler':
                    contentText = `Soru:
                    Bir futbol takımı geçen sezon 18 maç kazandı, 5 maç kaybetti ve 3 maç berabere kaldı. Bu sezon şimdiye kadar 20 maç kazandı. Toplam kaç maç kazandılar? Toplam kaç maç oynadılar?
                    
                    Çözüm:
                    
                    Toplam Kazanılan Maçlar:
                    Geçen sezon 18 maç kazanıldı.
                    Bu sezon şimdiye kadar 20 maç kazanıldı.
                    Toplam kazançları bulmak için toplama işlemi yaparız: 18 + 20 = 38
                    Sonuç: Takım toplamda 38 maç kazandı.
                    Toplam Oynanan Maçlar:
                    Geçen sezon toplamda kaç maç oynandığını bulmamız gerekir.
                    Geçen sezon 18 kazanç, 5 kayıp, 3 beraberlik: 18 + 5 + 3 = 26
                    Bu sezon 20 kazanç: 20
                    İki sezonun toplam oynanan maç sayısını bulmak için toplama yaparız: 26 + 20 = 46
                    Sonuç: Toplamda 46 maç oynandı.
                    Sonuç:
                    
                    Toplamda futbol takımı 38 maç kazandı.
                    Toplamda 46 maç oynandı.`;
                    break;
                case 'kesirlerde-islemler':
                        contentText = `Soru:
                        1/3 ve 3/4 kesirlerini çarpınız.
                        
                        Çözüm:
                        
                        Kesirlerde Çarpma:
                        Kesirleri çarparken paylar birbirleriyle, paydalar da birbirleriyle çarpılır.
                        Yani, çarpma işlemini gerçekleştirmek için payları ve paydaları ayrı ayrı çarparız.
                        Çarpma İşlemini Gerçekleştirin:
                        Payları çarparız: 1 x 3 = 3
                        Paydaları çarparız: 3 x 4 = 12
                        Sonuç:
                        Çarpma işleminin sonucu 3/12'dir.
                        Bu kesir sadeleştirilebilir mi? Evet, 3 hem payın hem de paydanın ortak bölenidir.
                        3/12'yi sadeleştiririz: Payı ve paydayı 3'e böleriz.
                        3/12 ÷ 3/3 = 1/4
                        Sonuç:
                        
                        1/3 ve 3/4 kesirlerinin çarpımı 1/4'tür.
                        Bu örnek, kesirlerle çarpma işlemini ve sadeleştirme yöntemini gösterir. Çarpma işlemi oldukça basittir, ancak sadeleştirme aşamasında kesirleri daha basit hale getirmek için ortak bölenleri kullanırız.
                       
                        `;
                    break;
                case 'ondalik-gosterim':
                    contentText = `Soru:
                    4.75 ve 3.2 ondalık sayılarını toplayınız.
                    
                    Çözüm:
                    
                    Ondalık Sayılarda Toplama:
                    Ondalık sayıları toplarken, ondalık noktalarını hizalamak önemlidir.
                    Ardından toplama işlemini gerçekleştirirsiniz.
                    Ondalık Noktalarını Hizalama:
                    4.75
                    3.20
                    Ondalık noktalarını hizalayarak toplama işlemini kolaylaştırırız.
                    Toplama İşlemini Gerçekleştirme:
                    Son hanelerden başlayarak toplama yaparız.
                    Son haneden: 5 + 0 = 5
                    Bir sonraki haneden: 7 + 2 = 9
                    Ondalık noktası sabit kalır.
                    En son haneden: 4 + 3 = 7
                    Sonuç:
                    Toplam: 4.75 + 3.20 = 7.95
                    Sonuç:
                    
                    4.75 ve 3.2 ondalık sayılarını topladığınızda sonuç 7.95 olur.`;
                    break;
                case 'yuzdeler':
                    contentText = `Soru:
                    Bir mağaza tüm ürünlerinde yüzde 15 indirim yapmaktadır. İndirimsiz fiyatı 200 TL olan bir üründe, indirim sonrası fiyat kaç TL olur?
                    
                    Çözüm:
                    
                    İndirim Miktarını Hesaplama:
                    Bir ürünün yüzde 15'i, ürün fiyatının 0.15 ile çarpılması ile bulunur.
                    İndirimsiz fiyat 200 TL olduğu için, indirimin miktarını bulmak için 200'ü 0.15 ile çarparız.
                    200 * 0.15 = 30 TL
                    İndirim Sonrası Fiyatı Hesaplama:
                    İndirim miktarını indirimsiz fiyattan çıkararak, indirim sonrası fiyatı bulabiliriz.
                    200 - 30 = 170 TL
                    Sonuç:
                    İndirim sonrası ürünün fiyatı 170 TL olur.
                    Sonuç:
                    200 TL'lik bir ürün yüzde 15 indirim sonrası 170 TL'ye satılır.`;
                    break;
                case 'temel-geometrik-kavramlar':
                    contentText = `Soru:
                    Bir üçgenin kenar uzunlukları 5 cm, 7 cm ve 10 cm'dir. Üçgenin çevresi kaç cm'dir?
                    
                    Çözüm:
                    
                    Üçgenin Çevresi:
                    Üçgenin çevresi, üç kenar uzunluğunun toplamıdır.
                    Çevreyi bulmak için kenar uzunluklarını toplarız.
                    Kenar Uzunluklarını Toplama:
                    Kenar uzunlukları 5 cm, 7 cm ve 10 cm'dir.
                    Çevreyi bulmak için bu uzunlukları toplarız.
                    5 + 7 + 10 = 22 cm
                    Sonuç:
                    Üçgenin çevresi 22 cm'dir.`;
                    break;
                case 'ucgen-ve-dortgenler':
                    contentText = `Soru 1: Dörtgen Çevresi
                    Bir dikdörtgenin uzun kenarı 8 cm ve kısa kenarı 5 cm'dir. Bu dikdörtgenin çevresi kaç cm'dir?
                    
                    Çözüm:
                    
                    Dikdörtgen Çevresi:
                    Dikdörtgenin çevresi, iki uzun kenarın ve iki kısa kenarın toplamıdır.
                    Uzun ve kısa kenarların toplamı:
                    2 * (uzun kenar + kısa kenar)
                    Uzun kenar 8 cm, kısa kenar 5 cm.
                    Çevreyi hesaplamak için:
                    2 * (8 + 5) = 2 * 13 = 26 cm
                    Sonuç:
                    Dikdörtgenin çevresi 26 cm'dir.
                    Soru 2: Üçgen Alanı
                    Bir üçgenin tabanı 10 cm ve yüksekliği 6 cm'dir. Bu üçgenin alanı kaç cm²'dir?
                    
                    Çözüm:
                    
                    Üçgen Alanı:
                    Üçgenin alanı, taban ile yüksekliğin çarpımının yarısıdır.
                    Alan formülü:
                    (taban * yüksekliği) / 2
                    Taban 10 cm, yüksekliği 6 cm.
                    Alanı hesaplamak için:
                    (10 * 6) / 2 = 60 / 2 = 30 cm²
                    Sonuç:
                    Üçgenin alanı 30 cm²'dir.`;
                    break;
                case 'veri-toplama-ve-degerlendirme':
                    contentText = `Soru:
                    Bir sınıftaki 5 öğrencinin yaşları sırasıyla 10, 12, 11, 9 ve 13'tür. Bu öğrencilerin yaş ortalaması kaçtır?
                    
                    Çözüm:
                    
                    Ortalama Hesaplama:
                    Ortalama, toplam değerlerin toplam öğe sayısına bölünmesiyle bulunur.
                    5 öğrencinin yaşlarını toplarız:
                    10 + 12 + 11 + 9 + 13
                    Toplam 55 eder.
                    Öğrenci Sayısını Belirleme:
                    Sınıfta 5 öğrenci var.
                    Ortalama hesaplamak için toplamı öğrenci sayısına böleriz:
                    55 / 5 = 11
                    Sonuç:
                    Sınıftaki öğrencilerin yaş ortalaması 11'dir.`;
                    break;
                case 'uzunluk-ve-zaman-olcme':
                    contentText =`Soru 1: Uzunluk Ölçme
                    Bir yürüyüş parkurunun uzunluğu 5 kilometredir. Bu uzunluk kaç metre eder?
                    
                    Çözüm:
                    
                    Kilometreden Metreye Dönüşüm:
                    1 kilometre 1000 metreye eşittir.
                    5 kilometreyi metreye dönüştürmek için 1000 ile çarparız.
                    5 * 1000 = 5000 metre
                    Sonuç:
                    Yürüyüş parkurunun uzunluğu 5000 metredir.
                    Soru 2: Zaman Ölçme
                    Bir etkinlikte aşağıdaki aşamalar yer almaktadır:
                    
                    Hazırlık süresi: 30 dakika
                    Sunum süresi: 1 saat 15 dakika
                    Tartışma süresi: 45 dakika
                    Etkinliğin toplam süresi kaç dakikadır?
                    
                    Çözüm:
                    
                    Tüm Süreleri Dakikaya Dönüştürme:
                    1 saat 60 dakikadır.
                    Sunum süresi 1 saat 15 dakika, bu 75 dakikadır (60 + 15).
                    Tartışma süresi 45 dakika.
                    Hazırlık süresi 30 dakika.
                    Toplam Zamanı Hesaplama:
                    Tüm süreleri toplarız:
                    30 + 75 + 45 = 150 dakika
                    Sonuç:
                    Etkinliğin toplam süresi 150 dakikadır.`;
                    break;
                case 'alan-olcme':
                    contentText = `Soru 1: Dikdörtgen Alanı
                    Bir dikdörtgenin uzun kenarı 12 metre ve kısa kenarı 8 metredir. Dikdörtgenin alanı kaç metrekaredir?
                    
                    Çözüm:
                    
                    Dikdörtgenin Alan Formülü:
                    Dikdörtgenin alanı, uzun kenar ile kısa kenarın çarpımıdır.
                    Alan = uzun kenar × kısa kenar
                    Alan Hesaplama:
                    12 metre × 8 metre = 96 metrekare
                    Sonuç:
                    Dikdörtgenin alanı 96 metrekaredir.`;
                    break;
                case 'geometrik-cisimler':
                    contentText = `Soru:
                    Bir silindirin taban yarıçapı 5 cm ve yüksekliği 10 cm'dir. Bu silindirin hacmi kaç santimetreküptür? (π ≈ 3.14)
                    
                    Çözüm:
                    
                    Silindirin Hacim Formülü:
                    Silindirin hacmi, taban alanı ile yüksekliğin çarpımıdır.
                    Dairenin taban alanı, π (pi) ile yarıçapın karesinin çarpımıdır.
                    Silindirin hacmi = taban alanı × yükseklik
                    Taban alanı = π × (yarıçap^2)
                    Taban Alanını Hesaplama:
                    Yarıçap 5 cm olduğundan, yarıçapın karesini alırız:
                    5 × 5 = 25
                    Taban alanı:
                    π × 25 ≈ 3.14 × 25 ≈ 78.5 cm²
                    Hacmi Hesaplama:
                    Silindirin yüksekliği 10 cm'dir.
                    Silindirin hacmi = taban alanı × yükseklik
                    78.5 cm² × 10 cm ≈ 785 cm³
                    Sonuç:
                    Silindirin hacmi yaklaşık 785 santimetreküptür.`;
                    break;
                
                default:
                    contentText = 'SORU ÇÖZÜMÜ';
                    break;
            }
        }

       
        $("#content-area").text(contentText);
        $("#content-area").html(contentText.trim().replace(/\n\s*/g, '<br>'));

        
    });
    
    $(".container").dblclick(function() {
        $(this).css("background-color", "#80D8FF");
    });

    
    $(".topic-button").hover(
        function() { $(this).css("background-color", "#e0e0e0"); },
        function() { $(this).css("background-color", "#4CAF50"); }
    );

    $(".info-box").hover(
        function() { $(this).css("color", "blue"); },
        function() { $(this).css("color", ""); }
    );
i

    
    $(".topic-button").click(function() {
        const topic = $(this).data("topic");
        alert("Seçilen konu: " + topic);
    });

    
    $(".iframe-container").click(function() {
        alert("İframe'e tıklandı!");
    });
    
    $(document).on("mousewheel", function(event) {
        if (event.originalEvent.wheelDelta > 0) {
            console.log("Fare tekerleği yukarıya dönüyor.");
        } else {
            console.log("Fare tekerleği aşağıya dönüyor.");
        }
    });
    
     $("#back-button").click(function() {
        $("#sub-buttons").slideUp(300, function() {
            $(this).addClass("hidden");
        });
        $("#back-button").slideUp(300, function() {
            $(this).addClass("hidden");
        });
        $("#content-area").html('Bu bölüme içerik gelecek');
    });

    
     
      const adviceBoxes = $(".additional-divs .info-box");
      $("#random-advice-button").click(function() {
          const randomIndex = Math.floor(Math.random() * adviceBoxes.length);
          const randomAdvice = $(adviceBoxes[randomIndex]).text();
          $("#content-area").html(`<h4>Rastgele Tavsiye</h4><p>${randomAdvice}</p>`);
      });

    
    $(document).on("mousedown", function(event) {
        console.log("Fare düğmesi basılı: " + event.which);
    });

    
    $(".footer").hover(
        function() { $(this).css("background-color", "#333333"); },
        function() { $(this).css("background-color", "#fafafa"); }
    );

    $("#content-area").dblclick(function() {
        $(this).css("background-color", "#ffcccc");
    });

    
    $("span").hover(
        function() { $(this).css("color", "red"); },
        function() { $(this).css("color", ""); }
    );
     
     $(".header").click(function() {
        $(this).css("background-color", "#f0e68c"); 
        });


$(".topic-button").dblclick(function() {
    alert("Butona çift tıklandı!");
});


$(".sub-button").dblclick(function() {
    alert("Alt düğmeye çift tıklama algılandı!");
});


$(".header").click(function() {
    $(this).css("background-color", "#f0e68c");
});


$(document).mousemove(function(event) {
    console.log("Fare konumu: (" + event.pageX + ", " + event.pageY + ")");
});


$(".topic-button").click(function() {
    console.log("Butona tıklandı.");
});

$(document).on("mousewheel", function(event) {
    if (event.originalEvent.wheelDelta > 0) {
        console.log("Fare tekerleği yukarı.");
    } else {
        console.log("Fare tekerleği aşağı.");
    }
});

$(document).on("mousedown", function(event) {
    console.log("Fare düğmesi basılı: " + event.which);
});


$(".footer").dblclick(function() {
    $(this).css("background-color", "#d3d3d3");
});


$("p").hover(
    function() { $(this).css("color", "green"); },
    function() { $(this).css("color", ""); }
);

$(document).click(function(event) {
    console.log("Fare tıklaması algılandı: " + event.pageX + ", " + event.pageY);
});


});  