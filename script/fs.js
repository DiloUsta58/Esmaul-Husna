// fs.js — TEMİZ, SENKRON, HATASIZ SÜRÜM
"use strict";

/* =========================
   1) GÖRSEL + İSİM (1–99)
========================= */
const imageChanges = [
    { time: 1, imageSrc: "img_w/01_Allah.gif", text: "Allah الله" },
    { time: 9, imageSrc: "img_w/02_Er-Rahman.gif", text: "Ar Rahman الرَّحْمَنُ" },
    { time: 20, imageSrc: "img_w/03_Er-Rahim.gif", text: "Ar Rahim الرَّحِيمُ" },
    { time: 32, imageSrc: "img_w/04_El-Melik.gif", text: "Al Malik الْمَلِكُ" },
    { time: 44, imageSrc: "img_w/05_El-Kuddüs.gif", text: "Al Quddus الْقُدُّوسُ" },
    { time: 55, imageSrc: "img_w/06_El-Selam.gif", text: "As Salam السَّلاَمُ" },
    { time: 67, imageSrc: "img_w/07_El-Mü'min.gif", text: "Al Mumin الْمُؤْمِنُ" },
    { time: 78, imageSrc: "img_w/08_El-Müheymin.gif", text: "Al Muhaymin الْمُهَيْمِنُ" },
    { time: 90, imageSrc: "img_w/09_El-Aziz.gif", text: "Al Aziz الْعَزِيزُ" },
    { time: 102, imageSrc: "img_w/10_El-Cabbar.gif", text: "Al Jabbar الْجَبَّارُ" },
    { time: 113, imageSrc: "img_w/11_El-Mütekebbir.gif", text: "Al Mutakabbir الْمُتَكَبِّرُ" },
    { time: 125, imageSrc: "img_w/12_El-Halik.gif", text: "Al Khaliq الْخَالِقُ" },
    { time: 136, imageSrc: "img_w/13_El-Bari.gif", text: "Al Bari الْبَارِئُ" },
    { time: 148, imageSrc: "img_w/14_El-Muvassir.gif", text: "Al Musawwir الْمُصَوِّرُ" },
    { time: 160, imageSrc: "img_w/15_El-Gaffar.gif", text: "Al Gaffar الْغَفَّارُ" },
    { time: 171, imageSrc: "img_w/16_El-Kahhar.gif", text: "Al Qahhar الْقَهَّارُ" },
    { time: 183, imageSrc: "img_w/17_El-Vahhab.gif", text: "Al Wahhab الْوَهَّابُ" },
    { time: 195, imageSrc: "img_w/18_El-Rezzak.gif", text: "Ar Razzaq الرَّزَّاقُ" },
    { time: 207, imageSrc: "img_w/19_El-Fettah.gif", text: "Al Fattah الْفَتَّاحُ" },
    { time: 218, imageSrc: "img_w/20_El-Alim.gif", text: "Al Alim الْعَلِيمُ" },
    { time: 230, imageSrc: "img_w/21_El-Kabit.gif", text: "Al Qabid الْقَابِضُ" },
    { time: 241, imageSrc: "img_w/22_El-Basit.gif", text: "Al Basit الْبَاسِطُ" },
    { time: 253, imageSrc: "img_w/23_El-Hafid.gif", text: "Al Khafid الْخَافِضُ" },
    { time: 265, imageSrc: "img_w/24_El-Rafi.gif", text: "Ar Rafi الرَّافِعُ" },
    { time: 276, imageSrc: "img_w/25_El-Muiz.gif", text: "Al Muizz المُعِزُّ" },
    { time: 289, imageSrc: "img_w/26_El-Müzil.gif", text: "Al Mudhill المُذِلُّ" },
    { time: 300, imageSrc: "img_w/27_Es-Semi.gif", text: "As Sami السَّمِيعُ" },
    { time: 311, imageSrc: "img_w/28_El-Basir.gif", text: "Al Basir الْبَصِيرُ" },
    { time: 323, imageSrc: "img_w/29_El-Hakem.gif", text: "Al Hakam الْحَكَمُ" },
    { time: 335, imageSrc: "img_w/30_El-Adl.gif", text: "Al Adl الْعَدْلُ" },
    { time: 346, imageSrc: "img_w/31_El-Latif.gif", text: "Al Latif اللَّطِيفُ" },
    { time: 358, imageSrc: "img_w/32_El-Habir.gif", text: "Al Habir الْخَبِيرُ" },
    { time: 369, imageSrc: "img_w/33_El-Halim.gif", text: "Al Halim الْحَلِيمُ" },
    { time: 381, imageSrc: "img_w/34_El-Azim.gif", text: "Al Azim الْعَظِيمُ" },
    { time: 392, imageSrc: "img_w/35_El-Gafur.gif", text: "Al Gafur الْغَفُورُ" },
    { time: 404, imageSrc: "img_w/36_El-Sekur.gif", text: "Ash Shakur الشَّكُورُ" },
    { time: 415, imageSrc: "img_w/37_El-Ali.gif", text: "Al Aliyy الْعَلِيُّ" },
    { time: 426, imageSrc: "img_w/38_El-Kebir.gif", text: "Al Kabir الْكَبِيرُ" },
    { time: 438, imageSrc: "img_w/39_El-Hafiz.gif", text: "Al Hafiz الْحَفِيظُ" },
    { time: 450, imageSrc: "img_w/40_El-Mukit.gif", text: "Al Muqit المُقِيتُ" },
    { time: 461, imageSrc: "img_w/41_El-Hasib.gif", text: "Al Hasib الْحَسِيبُ" },
    { time: 473, imageSrc: "img_w/42_El-Celil.gif", text: "Al Jalil الْجَلِيلُ" },
    { time: 485, imageSrc: "img_w/43_El-Kerim.gif", text: "Al Karim الْكَرِيمُ" },
    { time: 497, imageSrc: "img_w/44_Er-Rakib.gif", text: "Ar Raqib الرَّقِيبُ" },
    { time: 508, imageSrc: "img_w/45_El-Mucib.gif", text: "Al Mujib الْمُجِيبُ" },
    { time: 520, imageSrc: "img_w/46_El-Vasi.gif", text: "Al Wasi الْوَاسِعُ" },
    { time: 532, imageSrc: "img_w/47_El-Hakim.gif", text: "Al Hakim الْحَكِيمُ" },
    { time: 543, imageSrc: "img_w/48_El-Vedud.gif", text: "Al Wadud الْوَدُودُ" },
    { time: 555, imageSrc: "img_w/49_El-Mecid.gif", text: "Al Majid الْمَجِيدُ" },
    { time: 566, imageSrc: "img_w/50_El-Ba'is.gif", text: "Al Baith الْبَاعِثُ" },
    { time: 581, imageSrc: "img_w/51_Es-Sehid.gif", text: "Ash Shahid الشَّهِيدُ" },
    { time: 592, imageSrc: "img_w/52_El-Hak.gif", text: "Al Haqq الْحَقُّ" },
    { time: 604, imageSrc: "img_w/53_El-Vekil.gif", text: "Al Wakil الْوَكِيلُ" },
    { time: 616, imageSrc: "img_w/54_El-Kavi.gif", text: "Al Qawiyy الْقَوِىُّ" },
    { time: 627, imageSrc: "img_w/55_El-Metin.gif", text: "Al Matin الْمَتِينُ" },
    { time: 639, imageSrc: "img_w/56_El-Veli.gif", text: "Al Waliyy الْوَلِىُّ" },
    { time: 651, imageSrc: "img_w/57_El-Hamid.gif", text: "Al Hamid الْحَمِيدُ" },
    { time: 662, imageSrc: "img_w/58_El-Muhsi.gif", text: "Al Muhsi الْمُحْصِى" },
    { time: 674, imageSrc: "img_w/59_El-Mubdi.gif", text: "Al Mubdi الْمُبْدِئُ" },
    { time: 685, imageSrc: "img_w/60_El-Mu'id.gif", text: "Al Mu’id الْمُعِيدُ" },
    { time: 697, imageSrc: "img_w/61_El-Muhyi.gif", text: "Al Muhyi الْمُحْيِى" },
    { time: 709, imageSrc: "img_w/62_El-Mümit.gif", text: "Al Mumit المُمِيتُ" },
    { time: 720, imageSrc: "img_w/63_El-Hayy.gif", text: "Al Hayy الْحَىُّ" },
    { time: 732, imageSrc: "img_w/64_El-Kayyum.gif", text: "Al Qayyum الْقَيُّومُ" },
    { time: 743, imageSrc: "img_w/65_El-Vacid.gif", text: "Al Wajid الْوَاجِدُ" },
    { time: 755, imageSrc: "img_w/66_El-Macid.gif", text: "Al Majid الْمَاجِدُ" },
    { time: 767, imageSrc: "img_w/67_El-Vahid.gif", text: "Al Wahid الْوَاحِدُ" },
    { time: 778, imageSrc: "img_w/68_El-Samed.gif", text: "As Samad الصَّمَدُ" },
    { time: 790, imageSrc: "img_w/69_El-Kadir.gif", text: "Al Qadir الْقَادِرُ" },
    { time: 801, imageSrc: "img_w/70_El-Muktedir.gif", text: "Al Muqtadir الْمُقْتَدِرُ" },
    { time: 813, imageSrc: "img_w/71_El-Mukaddim.gif", text: "Al Muqaddim الْمُقَدِّمُ" },
    { time: 825, imageSrc: "img_w/72_El-Muahhir.gif", text: "Al Mu’akhkhir الْمُؤَخِّرُ" },
    { time: 836, imageSrc: "img_w/73_El-Evvel.gif", text: "Al Awwal الأوَّلُ" },
    { time: 848, imageSrc: "img_w/74_El-Ahir.gif", text: "Al Akhir الآخِرُ" },
    { time: 858, imageSrc: "img_w/75_El-Zahir.gif", text: "Az Zaher الظَّاهِرُ" },
    { time: 870, imageSrc: "img_w/76_El-Batin.gif", text: "Al Batin الْبَاطِنُ" },
    { time: 881, imageSrc: "img_w/77_El-Vali.gif", text: "Al Wali الْوَالِى" },
    { time: 893, imageSrc: "img_w/78_El-Müteali.gif", text: "Al Muta’ali الْمُتَعَالِى" },
    { time: 905, imageSrc: "img_w/79_El-Ber.gif", text: "Al Barr الْبَرُّ" },
    { time: 916, imageSrc: "img_w/80_El-Tevvab.gif", text: "At Tawwab التَّوَابُ" },
    { time: 927, imageSrc: "img_w/81_El-Müntekim.gif", text: "Al Munteqim الْمُنْتَقِمُ" },
    { time: 939, imageSrc: "img_w/82_El-Afüvv.gif", text: "Al Afuw العفوُّ" },
    { time: 951, imageSrc: "img_w/83_El-Rauf.gif", text: "Ar Rauf الرَّؤُوفُ" },
    { time: 962, imageSrc: "img_w/84_Malik-ül Mülk.gif", text: "Malikul Mulk مَالِكُ الْمُلْكِ" },
    { time: 974, imageSrc: "img_w/85_Zül-celali vel Ikram.gif", text: "Zuljalal ve-l İkram ذُوالْجَلاَلِ وَ الإكْرَام" },
    { time: 985, imageSrc: "img_w/86_El-Muksit.gif", text: "Al Muqsit الْمُقْسِطُ" },
    { time: 997, imageSrc: "img_w/87_El-Cami.gif", text: "Al Jami الْجَامِعُ" },
    { time: 1009, imageSrc: "img_w/88_El-Gani.gif", text: "Al Ganiyy الْغَنِىُّ" },
    { time: 1020, imageSrc: "img_w/89_El-Mugni.gif", text: "Al Mughni الْمُغْنِى" },
    { time: 1032, imageSrc: "img_w/90_El-Mani.gif", text: "Al Mani الْمَانِعُ" },
    { time: 1043, imageSrc: "img_w/91_Ed-Dar.gif", text: "Ad Darr الضَّارَّ" },
    { time: 1055, imageSrc: "img_w/92_En-Nafi.gif", text: "An Nafi النَّافِعُ" },
    { time: 1067, imageSrc: "img_w/93_En-Nur.gif", text: "An Nur النُّورُ" },
    { time: 1078, imageSrc: "img_w/94_El-Hadi.gif", text: "Al Hadi الْهَادِى" },
    { time: 1090, imageSrc: "img_w/95_El-Bedi.gif", text: "Al Badi الْبَدِيعُ" },
    { time: 1102, imageSrc: "img_w/96_El-Baki.gif", text: "Al Baqi الْبَاقِى" },
    { time: 1113, imageSrc: "img_w/97_El-Varis.gif", text: "Al Varis الْوَارِثُ" },
    { time: 1125, imageSrc: "img_w/98_Er-Resid.gif", text: "Ar Rashid الرَّشِيدُ" },
    { time: 1137, imageSrc: "img_w/99_Es-Sabur.gif", text: "As Sabur. الصَّبُورُ" },
  ];


/* =========================
   2) ANLAMLAR (1–99)
========================= */
const timeAnlamı = [
 { time: 1, text: "[ Her ismin vasfını ihtiva eden öz adı. Kendinden başka ilah bulunmayan tek Allah. Bu ism-i şerif, Cenâb-ı Hakk'ın has ismidir. Diğer isimlerin ifade ettiği bütün güzel vasıfları ve İlâhî sıfatları içine alır. Diğer isimler ise, yalnız kendi mânalarına delâlet ederler. Bu bakımdan Allah isminin yerini hiçbir isim tutamaz. Bu isim, Allah'tan başkasına mecazen de verilemez. Diğer isimlerinden bazılarının, Allah'tan başkasına isim olarak verilmesi caizdir.İsimlerin sultanı. ]" },
 { time: 9, text: "[ Dünyada bütün mahlûkata merhamet eden, şefkat gösteren, ihsan eden. ]" },
 { time: 20, text: "[ Ahirette, sadece müminlere acıyan, merhamet eden. ]" },
 { time: 32, text: "[ Mülkün, kâinatın sahibi, mülk ve saltanatı devamlı olan. ]" },
 { time: 44, text: "[ Her noksanlıktan uzak ve her türlü takdîse lâyık olan. ]" },
 { time: 55, text: "[ Her türlü tehlikelerden selamete çıkaran. Cennetteki bahtiyar kullarına selâm eden. ]" },
 { time: 67, text: "[ Güven veren, emin kılan, koruyan, iman nurunu veren. ]" },
 { time: 78, text: "[ Her şeyi görüp gözeten, her varlığın yaptıklarından haberdar olan. ]" },
 { time: 90, text: "[ İzzet sahibi, her şeye galip olan, karşı gelinemeyen. ]" },
 { time: 102, text: "[ Azamet ve kudret sahibi. Dilediğini yapan ve yaptıran. Hükmüne karşı gelinemeyen. ]" },
 { time: 113, text: "[ Büyüklükte eşi, benzeri yok. ]" },
 { time: 125, text: "[ Yaratan, yoktan var eden. Varlıkların geçireceği halleri takdir eden. ]" },
 { time: 136, text: "[ Her şeyi kusursuz ve mütenasip yaratan. ]" },
 { time: 148, text: "[ Varlıklara şekil veren ve onları birbirinden farklı özellikte yaratan. ]" },
 { time: 160, text: "[ Günahları örten ve çok mağfiret eden. Dilediğini günah işlemekten koruyan. ]" },
 { time: 171, text: "[ Her istediğini yapacak güçte olan, galip ve hâkim. ]" },
 { time: 183, text: "[ Karşılıksız nimetler veren, çok fazla ihsan eden. ]" },
 { time: 195, text: "[ Her varlığın rızkını veren ve ihtiyacını karşılayan. ]" },
 { time: 207, text: "[ Her türlü sıkıntıları gideren. ]" },
 { time: 218, text: "[ Gizli açık, geçmiş, gelecek, her şeyi, ezeli ve ebedi ilmi ile en mükemmel bilen. ]" },
 { time: 230, text: "[ Dilediğinin rızkını daraltan, ruhları alan. ]" },
 { time: 241, text: "[ Dilediğinin rızkını genişleten, ruhları veren. ]" },
 { time: 253, text: "[ Kâfir ve facirleri alçaltan. ]" },
 { time: 265, text: "[ Şeref verip yükselten. ]" },
 { time: 276, text: "[ Dilediğini aziz eden. ]" },
 { time: 289, text: "[ Dilediğini zillete düşüren, hor ve hakir eden. ]" },
 { time: 300, text: "[ Her şeyi en iyi işiten, duaları kabul eden. ]" },
 { time: 311, text: "[ Gizli açık, her şeyi en iyi gören. ]" },
 { time: 323, text: "[ Mutlak hakim, hakkı bâtıldan ayıran. Hikmet sahibi. ]" },
 { time: 335, text: "[ Mutlak adil, yerli yerinde yapan. ]" },
 { time: 346, text: "[ Her şeye vakıf, lütuf ve ihsan sahibi olan. ]" },
 { time: 358, text: "[ Her şeyden haberdar. Her şeyin gizli taraflarından haberi olan. ]" },
 { time: 369, text: "[ Cezada, acele etmeyen, yumuşak davranan, hilm sahibi. ]" },
 { time: 381, text: "[ Büyüklükte benzeri yok. Pek yüce. ]" },
 { time: 392, text: "[ Affı, mağfireti bol. ]" },
 { time: 404, text: "[ Az amele, çok sevap veren. ]" },
 { time: 415, text: "[ Yüceler yücesi, çok yüce. ]" },
 { time: 426, text: "[ Büyüklükte benzeri yok, pek büyük. ]" },
 { time: 438, text: "[ Her şeyi koruyucu olan. ]" },
 { time: 450, text: "[ Rızıkları yaratan. ]" },
 { time: 461, text: "[ Kulların hesabını en iyi gören. ]" },
 { time: 473, text: "[ Celal ve azamet sahibi olan. ]" },
 { time: 485, text: "[ Keremi, lütuf ve ihsânı bol, karşılıksız veren, çok ikram eden. ]" },
 { time: 497, text: "[ Her varlığı, her işi her an gözeten. ]" },
 { time: 508, text: "[ Duaları, istekleri kabul eden. ]" },
 { time: 520, text: "[ Rahmet ve kudret sahibi, ilmi ile her şeyi ihata eden. ]" },
 { time: 532, text: "[ Her işi hikmetli, her şeyi hikmetle yaratan. ]" },
 { time: 543, text: "[ İyiliği seven, iyilik edene ihsan eden. ]" },
 { time: 555, text: "[ Nimeti, ihsanı sonsuz, şerefi çok üstün. ]" },
 { time: 566, text: "[ Mahşerde ölüleri dirilten. ]" },
 { time: 581, text: "[ Zamansız, mekansız her yerde hazır ve nazır olan. ]" },
 { time: 592, text: "[ Varlığı hiç değişmeden duran. ]" },
 { time: 604, text: "[ Kulların işlerini bitiren. ]" },
 { time: 616, text: "[ Kudreti en üstün. ]" },
 { time: 627, text: "[ Kuvvet ve kudret menbaı. ]" },
 { time: 639, text: "[ Müslümanların dostu. ]" },
 { time: 651, text: "[ Her türlü hamd ve senaya layık. ]" },
 { time: 662, text: "[ Bütün varlıkların sayısını bilen. ]" },
 { time: 674, text: "[ Maddesiz yaratan. ]" },
 { time: 685, text: "[ Yarattıklarını yok edip tekrar dirilten. ]" },
 { time: 697, text: "[ Can veren. ]" },
 { time: 709, text: "[ Ölümü yaratan. ]" },
 { time: 720, text: "[ Ebedî diri olan. ]" },
 { time: 732, text: "[ Zatı ile kaim olan. ]" },
 { time: 743, text: "[ Hiçbir şeye muhtaç olmayan. ]" },
 { time: 755, text: "[ Şânı yüce olan. ]" },
 { time: 767, text: "[ Tek olan. ]" },
 { time: 778, text: "[ Herkesin kendisine muhtaç olduğu. ]" },
 { time: 790, text: "[ Her şeye gücü yeten. ]" },
 { time: 801, text: "[ Dilediği gibi tasarruf eden. ]" },
 { time: 813, text: "[ Öne alan. ]" },
 { time: 825, text: "[ Geri bırakan. ]" },
 { time: 836, text: "[ Başlangıcı olmayan. ]" },
 { time: 848, text: "[ Sonu olmayan. ]" },
 { time: 858, text: "[ Varlığı açık olan. ]" },
 { time: 870, text: "[ Aklın tasavvurundan gizli olan. ]" },
 { time: 881, text: "[ Bütün kâinatı idare eden. ]" },
 { time: 893, text: "[ Son derece yüce olan. ]" },
 { time: 905, text: "[ İyilik ve ihsanı bol. ]" },
 { time: 916, text: "[ Tevbeleri kabul eden. ]" },
 { time: 927, text: "[ Zalimleri cezalandıran. ]" },
 { time: 939, text: "[ Affı çok olan. ]" },
 { time: 951, text: "[ Çok merhametli. ]" },
 { time: 962, text: "[ Mülkün sahibi. ]" },
 { time: 974, text: "[ Celal ve ikram sahibi. ]" },
 { time: 985, text: "[ Adaletle hükmeden. ]" },
 { time: 997, text: "[ Kıyamette herkesi toplayan. ]" },
 { time: 1009, text: "[ Kimseye muhtaç olmayan. ]" },
 { time: 1020, text: "[ Herkesi zengin eden. ]" },
 { time: 1032, text: "[ Engelleyen. ]" },
 { time: 1043, text: "[ Zararı da yaratan. ]" },
 { time: 1055, text: "[ Faydayı yaratan. ]" },
 { time: 1067, text: "[ Nur veren. ]" },
 { time: 1078, text: "[ Hidayet eden. ]" },
 { time: 1090, text: "[ Misalsiz yaratan. ]" },
 { time: 1102, text: "[ Ebedî olan. ]" },
 { time: 1113, text: "[ Her şeyin sahibi. ]" },
 { time: 1125, text: "[ Doğru yolu gösteren. ]" },
 { time: 1137, text: "[ Sabredenlerle beraber olan. ]" },
];

/* =========================
   3) SURELER (1–99)
========================= */
const timeSureler = [
    { time: 1, text: "[ 1:1, 3:18, 5:109, 6:124, 7:180, 8:40, 16:91, 20:8, 57:5, 65:3, 74:56, 85:20 ]" },
    { time: 9, text: "[ 1:3, 17:110, 19:58, 21:112, 27:30, 36:52, 50:33, 55:1, 59:22, 78:38 ]" },
    { time: 20, text: "[ 2:163, 3:31, 4:100, 5:3, 5:98, 11:41, 12:53, 12:64, 26:9, 30:5, 36:58 ]" },
    { time: 32, text: "[ 20:114, 23:116, 59:23, 62:1, 114:2 ]" },
    { time: 44, text: "[ 59:23, 62:1 ]" },
    { time: 55, text: "[ 59:23 ]" },
    { time: 67, text: "[ 59:23 ]" },
    { time: 78, text: "[ 59:23 ]" },
    { time: 90, text: "[ 3:6, 4:158, 9:40, 9:71, 48:7, 59:23, 61:1 ]" },
    { time: 102, text: "[ 59:23 ]" }, 
    { time: 113, text: "[ 59:23 ]" },
    { time: 125, text: "[ 6:102, 13:16, 39:62, 40:62, 59:24 ]" },
    { time: 136, text: "[ 59:24 ]" },
    { time: 148, text: "[ 59:24 ]" },
    { time: 160, text: "[ 20:82, 38:66, 39:5, 40:42, 71:10 ]" },
    { time: 171, text: "[ 13:16, 14:48, 38:65, 39:4, 40:16 ]" },
    { time: 183, text: "[ 3:8, 38:9, 38:35 ]" },
    { time: 195, text: "[ 51:58)" },
    { time: 207, text: "[ 34:26)" },
    { time: 218, text: "[ 2:158, 3:92, 4:35, 24:41, 33:40, 35:38, 57:6 ]" },
    { time: 230, text: "[ 2:245 ]" },
    { time: 241, text: "[ 2:245 ]" },
    { time: 253, text: "[ 57:3 ]" },
    { time: 265, text: "[ 3:55, 4:15 ]" },
    { time: 276, text: "[ 3:26 ]" },
    { time: 289, text: "[ 3:26 ]" },
    { time: 300, text: "[ 2:127, 2:137, 2:256, 8:17, 49:1 ]" },
    { time: 311, text: "[ 4:58, 17:1, 42:11, 42:27, 57:4, 67:19 ]" },
    { time: 323, text: "[ 22:69 ]" },
    { time: 335, text: "[ 4:58 ]" },
    { time: 346, text: "[ 6:103, 22:63, 31:16, 33:34, 67:14 ]" },
    { time: 358, text: "[ 6:18, 17:30, 49:13, 59:18, 63:11 ]" },
    { time: 369, text: "[ 2:225, 2:235, 17:44, 22:59, 35:41 ]" },
    { time: 381, text: "[ 2:255, 42:4, 56:96 ]" },
    { time: 392, text: "[ 2:173, 8:69, 16:110, 41:32, 60:7 ]" },
    { time: 404, text: "[ 35:30, 35:34, 42:23, 64:17 ]" },
    { time: 415, text: "[ 2:255, 4:34, 31:30, 42:4, 42:51 ]" },
    { time: 426, text: "[ 13:9, 22:62, 31:30, 34:23, 40:12 ]" },
    { time: 438, text: "[ 11:57, 34:21, 42:6 ]" },
    { time: 450, text: "[ 4:85 ]" },
    { time: 461, text: "[ 4:6, 4:86, 33:39 ]" },
    { time: 473, text: "[ 55:27; 55:78 ]" },
    { time: 485, text: "[ 27:40, 82:6 ]" },
    { time: 497, text: "[ 4:1, 5:117 ]" },
    { time: 508, text: "[ 11:61)" },
    { time: 520, text: "[ 2:115, 2:261, 2:268, 3:73, 5:54):" },
    { time: 532, text: "[ 2:129, 2:260, 31:27, 46:2, 57:1, 66:2 ]" },
    { time: 543, text: "[ 11:90, 85:14 ]" },
    { time: 555, text: "[ 11:73 ]" },
    { time: 566, text: "[ 22:7 ]" },
    { time: 581, text: "[ 4:79, 4:166, 22:17, 41:53, 48:28 ]" },
    { time: 592, text: "[ 6:62, 22:6, 23:116, 31:30 ]" },
    { time: 604, text: "[ 3:173, 4:171, 28:28, 33:3, 73:9 ]" },
    { time: 616, text: "[ 22:40, 22:74, 42:19, 57:25, 58:21 ]" },
    { time: 627, text: "[ 51:58 ]" },
    { time: 639, text: "[ 3:68, 4:45, 7:196, 42:28, 45:19 ]" },
    { time: 651, text: "[ 14:1, 14:8, 31:12, 31:26, 41:42 ]" },
    { time: 662, text: "[ Kehf, 18:49 ]" },
    { time: 674, text: "[ 10:4, 10:34, 27:64, 29:19, 85:13 ]" },
    { time: 685, text: "[ 10:4, 10:34, 27:64, 29:19, 85:13 ]" },
    { time: 697, text: "[ 3:156, 7:158, 15:23, 30:50, 57:2 ]" },
    { time: 709, text: "[ 3:156, 7:158, 15:23, 57:2 ]" },
    { time: 720, text: "[ 2:255, 3:2, 20:111, 25:58, 40:65 ]" },
    { time: 732, text: "[ 2:255, 3:2, 20:111 ]" },
    { time: 743, text: "[ 34:2, 10:61 ]" },
    { time: 755, text: "[ 11:73, 85:15 ]" },
    { time: 767, text: "[ 2:163, 5:73, 9:31, 18:110, 37:4 ]" },
    { time: 778, text: "[ 112:2 ]" },
    { time: 790, text: "[ 6:65, 36:81, 46:33, 75:40, 86:8 ]" },
    { time: 801, text: "[ 18:45, 54:42, 54:55 ]" },
    { time: 813, text: "[ 14:42, 55:27 ]" },
    { time: 825, text: "[ 71:4)" },
    { time: 836, text: "[ 57:3 ]" },
    { time: 848, text: "[ 57:3 ]" },
    { time: 858, text: "[ 57:3 ]" },
    { time: 870, text: "[ 57:3 ]" },
    { time: 881, text: "[ 13:11 ]" },
    { time: 893, text: "[ 13:9 ]" },
    { time: 905, text: "[ 52:28 ]" },
    { time: 916, text: "[ 2:37, 2:128, 4:64, 49:12, 110:3 ]" },
    { time: 927, text: "[ 32:22, 43:41, 44:16 ]" },
    { time: 939, text: "[ 4:99, 4:149, 22:60 ]" },
    { time: 951, text: "[ 3:30, 9:117, 57:9, 59:10 ]" },
    { time: 962, text: "[ 3:26 ]" },
    { time: 974, text: "[ 55:27, 55:78 ]" },
    { time: 985, text: "[ 3:18 ]" },
    { time: 997, text: "[ 3:9 ]" },
    { time: 1009, text: "[ 2:263, 3:97, 39:7, 47:38, 57:24 ]" },
    { time: 1020, text: "[ 9:28 ]" },
    { time: 1032, text: "[ Mâni' ismi hem İbn Mâce hem de Tirmizî'nin esma-i hüsna rivayetinde yer almış (İbn Mâce, Dua, 10; Tirmizî, Daavat, 82.), ayrıca men' çeşitli hadislerde isim ve fiil sîgalarıyla Allah'a nisbet edilmiştir. ]" },
    { time: 1043, text: "[ 2:214, 36:23, 39:38, 6:17, 16:53 ]" },
    { time: 1055, text: "[ En-Nafi esmasının zikri pek kıymetlidir. En Nafi esmasının zikir günü cuma olup, zikir saati ise zühredir. En-Nafi zikrinin sayısı da 201 dir. ]" },
    { time: 1067, text: "[ 24:35)" },
    { time: 1078, text: "[ 25:31 ]" },
    { time: 1090, text: "[ 2:117, 6:101 ]" },
    { time: 1102, text: "[ 55:27 ]" },
    { time: 1113, text: "[ 15:23 ]" },
    { time: 1125, text: "[ 21:51 ]" },
    { time: 1137, text: "[ 2:153 -> İşte bunu yaptığı takdirde o, Sabûr ismini alır. “Ey iman edenler, sabırla ve namazla (Allah'tan) yardım isteyin. Şüphesiz ki Allah'(ın yardımı) sabredenlerle beraberdir. ]" },
]; 
/* =========================
   2) ANA SİSTEM
========================= */

document.addEventListener("DOMContentLoaded", function () {

  const audio = document.getElementById("audioPlayer");
  const imageEl = document.getElementById("dynamicImage");
  const nameBox = document.getElementById("NameOfAllah");
  const anlamBox = document.getElementById("Anlamlari");
  const sureBox = document.getElementById("Sure");
  const timeNow = document.getElementById("currentTime");
  const durationBox = document.getElementById("Duration");
  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");
  const namesBody = document.getElementById("namesBody");
  const toggleBtn = document.getElementById("toggleList");
  const listPanel = document.getElementById("listPanel");

  let currentIndex = 0;
  let idxAnlam = 0;
  let idxSure = 0;

  if (!audio || !imageEl || !nameBox || !anlamBox || !sureBox) {
    console.error("ZORUNLU HTML ELEMANI EKSİK!");
    return;

    // ✅ SON KALINAN YERDEN DEVAM
    const savedIndex = localStorage.getItem("lastIndex");
    const savedTime = localStorage.getItem("lastTime");

    if (savedIndex !== null && imageChanges[savedIndex]) {
      currentIndex = Number(savedIndex);
      audio.currentTime = Number(savedTime || imageChanges[currentIndex].time);
      updateContent(currentIndex);
    }

  }

  /* =========================
     3) LİSTEYİ DOLDUR (1–99)
  ========================= */

  namesBody.innerHTML = "";

  imageChanges.forEach((item, index) => {
    const tr = document.createElement("tr");
    const td = document.createElement("td");

    td.textContent = (index + 1) + ". " + item.text;

    td.addEventListener("click", function () {
      currentIndex = index;
      audio.currentTime = item.time;
      updateContent(index);
      audio.play();

      // ✅ TIKLAYINCA LİSTE KAPANSIN
      listPanel.style.display = "none";
      toggleBtn.textContent = "İsimleri göster!";
    });


    tr.appendChild(td);
    namesBody.appendChild(tr);
  });

  /* =========================
     4) TOGGLE BUTONU (KESİN ÇALIŞAN)
  ========================= */
  /* =========================
    ✅ İSİM ARAMA SİSTEMİ (DÜZELTİLDİ)
  ========================= */
  const searchInput = document.getElementById("search");

  searchInput.addEventListener("input", function () {
    const value = this.value.toLowerCase();

    document.querySelectorAll("#namesBody td").forEach(td => {
      if (td.textContent.toLowerCase().includes(value)) {
        td.style.display = "block";
      } else {
        td.style.display = "none";
      }
    });
  });
  
  listPanel.style.display = "none";
  toggleBtn.textContent = "İsimleri göster!";

  toggleBtn.addEventListener("click", function () {
    const acikMi = listPanel.style.display === "block";

    if (acikMi) {
      listPanel.style.display = "none";
      toggleBtn.textContent = "İsimleri göster!";
    } else {
      listPanel.style.display = "block";
      toggleBtn.textContent = "İsimleri gizle";
    }
  });

  /* =========================
     5) SES SENKRON TAKİP
  ========================= */

  audio.addEventListener("timeupdate", function () {
    const t = Math.floor(audio.currentTime);
    timeNow.textContent = formatTime(audio.currentTime);
    localStorage.setItem("lastIndex", currentIndex);
    localStorage.setItem("lastTime", audio.currentTime);
    // ✅ PROGRESS BAR + 1–99 SAYACI
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = percent + "%";
    progressText.textContent = (currentIndex + 1) + " / 99";


    // ✅ İSİM + RESİM
    const foundIndex = imageChanges.findIndex(x => x.time <= t && t < x.time + 2);
    if (foundIndex !== -1 && foundIndex !== currentIndex) {
      currentIndex = foundIndex;
      updateContent(currentIndex);
    }

    // ✅ ANLAM
    if (timeAnlamı[idxAnlam] && t >= timeAnlamı[idxAnlam].time) {
      anlamBox.textContent = timeAnlamı[idxAnlam].text;
      idxAnlam++;
    }

    // ✅ SURE
    if (timeSureler[idxSure] && t >= timeSureler[idxSure].time) {
      sureBox.textContent = timeSureler[idxSure].text;
      idxSure++;
    }

    // ✅ AKTİF RENK + OTOMATİK SCROLL
    document.querySelectorAll("#namesBody td").forEach((td, i) => {
      if (i === currentIndex) {
        td.classList.add("active");
        td.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        td.classList.remove("active");
      }
    });
  });

  audio.addEventListener("loadedmetadata", function () {
    durationBox.textContent = formatTime(audio.duration);
  });

  /* =========================
     6) GÖRÜNTÜ + METİN GÜNCELLE
  ========================= */

  function updateContent(index) {
    const item = imageChanges[index];
    if (!item) return;

    imageEl.src = item.imageSrc;
    nameBox.textContent = item.text;

    if (timeAnlamı[index]) {
      anlamBox.textContent = timeAnlamı[index].text;
    }

    if (timeSureler[index]) {
      sureBox.textContent = timeSureler[index].text;
    }
  }

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  }

});

// ✅ GERÇEK DOSYA KAYIT SAATİNİ SUNUCUDAN AL
const lastUpdateBox = document.getElementById("lastUpdate");

if (lastUpdateBox) {
    fetch("script/last-modified.php")
        .then(res => res.json())
        .then(data => {
            lastUpdateBox.textContent = "Son güncelleme: " + data.timestamp;
        })
        .catch(err => {
            lastUpdateBox.textContent = "Son güncelleme: alınamadı";
            console.error("Tarih alınamadı:", err);
        });
}




