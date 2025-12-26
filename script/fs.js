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
   4) ISIM (1–99) - Türkce
========================= */

const timeIsimler = [
  { time: 1, text: "1- Allah" },
  { time: 9, text: "2- Er-Rahman" },
  { time: 20, text: "3- Er-Rahim" },
  { time: 32, text: "4- El-Melik" },
  { time: 44, text: "5- El-Kuddus" },
  { time: 55, text: "6- Es-Selam" },
  { time: 67, text: "7- El-Mumin" },
  { time: 78, text: "8- El-Muheymin" },
  { time: 90, text: "9- El-Aziz" },
  { time: 102, text: "10- El-Cebbar" },
  { time: 113, text: "11- El-Mutekebbir" },
  { time: 125, text: "12- El-Halik" },
  { time: 136, text: "13- El-Bari" },
  { time: 148, text: "14- El-Musavvir" },
  { time: 160, text: "15- El-Gaffar" },
  { time: 171, text: "16- El-Kahhar" },
  { time: 183, text: "17- El-Vehhab" },
  { time: 195, text: "18- Er-Rezzak" },
  { time: 207, text: "19- El-Fettah" },
  { time: 218, text: "20- El-Alim" },
  { time: 230, text: "21- El-Kabid" },
  { time: 241, text: "22- El-Basit" },
  { time: 253, text: "23- El-Hafid" },
  { time: 265, text: "24- Er-Rafi" },
  { time: 276, text: "25- El-Muizz" },
  { time: 289, text: "26- El-Muzill" },
  { time: 300, text: "27- Es-Semi" },
  { time: 311, text: "28- El-Basir" },
  { time: 323, text: "29- El-Hakem" },
  { time: 335, text: "30- El-Adl" },
  { time: 346, text: "31- El-Latif" },
  { time: 358, text: "32- El-Habir" },
  { time: 369, text: "33- El-Halim" },
  { time: 381, text: "34- El-Azim" },
  { time: 392, text: "35- El-Gafur" },
  { time: 404, text: "36- Es-Sekur" },
  { time: 415, text: "37- El-Aliyy" },
  { time: 426, text: "38- El-Kebir" },
  { time: 438, text: "39- El-Hafiz" },
  { time: 450, text: "40- El-Mukit" },
  { time: 461, text: "41- El-Hasib" },
  { time: 473, text: "42- El-Celil" },
  { time: 485, text: "43- El-Kerim" },
  { time: 497, text: "44- Er-Rakib" },
  { time: 508, text: "45- El-Mucib" },
  { time: 520, text: "46- El-Vasi" },
  { time: 532, text: "47- El-Hakim" },
  { time: 543, text: "48- El-Vedud" },
  { time: 555, text: "49- El-Mecid" },
  { time: 566, text: "50- El-Bais" },
  { time: 581, text: "51- Es-Sehid" },
  { time: 592, text: "52- El-Hakk" },
  { time: 604, text: "53- El-Vekil" },
  { time: 616, text: "54- El-Kaviyy" },
  { time: 627, text: "55- El-Metin" },
  { time: 639, text: "56- El-Veliyy" },
  { time: 651, text: "57- El-Hamid" },
  { time: 662, text: "58- El-Muhsi" },
  { time: 674, text: "59- El-Mubdi" },
  { time: 685, text: "60- El-Muid" },
  { time: 697, text: "61- El-Muhyi" },
  { time: 709, text: "62- El-Mumit" },
  { time: 720, text: "63- El-Hayy" },
  { time: 732, text: "64- El-Kayyum" },
  { time: 743, text: "65- El-Vacid" },
  { time: 755, text: "66- El-Macid" },
  { time: 767, text: "67- El-Vahid" },
  { time: 778, text: "68- Es-Samed" },
  { time: 790, text: "69- El-Kadir" },
  { time: 801, text: "70- El-Muktedir" },
  { time: 813, text: "71- El-Mukaddim" },
  { time: 825, text: "72- El-Muahhir" },
  { time: 836, text: "73- El-Evvel" },
  { time: 848, text: "74- El-Ahir" },
  { time: 858, text: "75- Ez-Zahir" },
  { time: 870, text: "76- El-Batin" },
  { time: 881, text: "77- El-Vali" },
  { time: 893, text: "78- El-Muteali" },
  { time: 905, text: "79- El-Berr" },
  { time: 916, text: "80- Et-Tevvab" },
  { time: 927, text: "81- El-Muntekim" },
  { time: 939, text: "82- El-Afuvv" },
  { time: 951, text: "83- Er-Rauf" },
  { time: 962, text: "84- Malikul-Mulk" },
  { time: 974, text: "85- Zul-Celali-vel-Ikram" },
  { time: 985, text: "86- El-Muksit" },
  { time: 997, text: "87- El-Cami" },
  { time: 1009, text: "88- El-Ganiyy" },
  { time: 1020, text: "89- El-Mugni" },
  { time: 1032, text: "90- El-Mani" },
  { time: 1043, text: "91- Ed-Darr" },
  { time: 1055, text: "92- En-Nafi" },
  { time: 1067, text: "93- En-Nur" },
  { time: 1078, text: "94- El-Hadi" },
  { time: 1090, text: "95- El-Bedi" },
  { time: 1102, text: "96- El-Baki" },
  { time: 1113, text: "97- El-Varis" },
  { time: 1125, text: "98- Er-Resid" },
  { time: 1137, text: "99- Es-Sabur" },
];

/* =========================
   5) timestamps
========================= */
const timestamps_NAME = {
  "00:01": { track: "Allah الله" },
  "00:09": { track: "Ar Rahman الرَّحْمَنُ" },
  "00:20": { track: "Ar Rahim الرَّحِيمُ" },
  "00:32": { track: "Al Malik الْمَلِكُ" },
  "00:44": { track: "Al Quddus الْقُدُّوسُ" },
  "00:55": { track: "As Salam السَّلاَمُ" },
  "01:07": { track: "Al Mumin الْمُؤْمِنُ" },
  "01:18": { track: "Al Muhaymin الْمُهَيْمِنُ" },
  "01:30": { track: "Al Aziz الْعَزِيزُ" },
  "01:42": { track: "Al Jabbar الْجَبَّارُ" },
  "01:53": { track: "Al Mutakabbir الْمُتَكَبِّرُ" },
  "02:05": { track: "Al Khaliq الْخَالِقُ" },
  "02:16": { track: "Al Bari الْبَارِئُ" },
  "02:28": { track: "Al Musawwir الْمُصَوِّرُ" },
  "02:40": { track: "Al Gaffar الْغَفَّارُ" },
  "02:51": { track: "Al Qahhar الْقَهَّارُ" },
  "03:03": { track: "Al Wahhab الْوَهَّابُ" },
  "03:15": { track: "Ar Razzaq الرَّزَّاقُ" },
  "03:27": { track: "Al Fattah الْفَتَّاحُ" },
  "03:38": { track: "Al Alim الْعَلِيمُ" },
  "03:50": { track: "Al Qabid الْقَابِضُ" },
  "04:01": { track: "Al Basit الْبَاسِطُ" },
  "04:13": { track: "Al Khafid الْخَافِضُ" },
  "04:25": { track: "Ar Rafi الرَّافِعُ" },
  "04:36": { track: "Al Muizz المُعِزُّ" },
  "04:49": { track: "Al Mudhill المُذِلُّ" },
  "05:00": { track: "As Sami السَّمِيعُ" },
  "05:11": { track: "Al Basir الْبَصِيرُ" },
  "05:23": { track: "Al Hakam الْحَكَمُ" },
  "05:35": { track: "Al Adl الْعَدْلُ" },
  "05:46": { track: "Al Latif اللَّطِيفُ" },
  "05:58": { track: "Al Habir الْخَبِيرُ" },
  "06:09": { track: "Al Halim الْحَلِيمُ" },
  "06:21": { track: "Al Azim الْعَظِيمُ" },
  "06:32": { track: "Al Gafur الْغَفُورُ" },
  "06:44": { track: "Ash Shakur الشَّكُورُ" },
  "06:55": { track: "Al Aliyy الْعَلِيُّ" },
  "07:06": { track: "Al Kabir الْكَبِيرُ" },
  "07:18": { track: "Al Hafiz الْحَفِيظُ" },
  "07:30": { track: "Al Muqit المُقِيتُ" },
  "07:41": { track: "Al Hasib الْحَسِيبُ" },
  "07:53": { track: "Al Jalil الْجَلِيلُ" },
  "08:05": { track: "Al Karim الْكَرِيمُ" },
  "08:17": { track: "Ar Raqib الرَّقِيبُ" },
  "08:28": { track: "Al Mujib الْمُجِيبُ" },
  "08:40": { track: "Al Wasi الْوَاسِعُ" },
  "08:52": { track: "Al Hakim الْحَكِيمُ" },
  "09:03": { track: "Al Wadud الْوَدُودُ" },
  "09:15": { track: "Al Majid الْمَجِيدُ" },
  "09:26": { track: "Al Baith الْبَاعِثُ" },
  "09:41": { track: "Ash Shahid الشَّهِيدُ" },
  "09:52": { track: "Al Haqq الْحَقُّ" },
  "10:04": { track: "Al Wakil الْوَكِيلُ" },
  "10:16": { track: "Al Qawiyy الْقَوِىُّ" },
  "10:27": { track: "Al Matin الْمَتِينُ" },
  "10:39": { track: "Al Waliyy الْوَلِىُّ" },
  "10:51": { track: "Al Hamid الْحَمِيدُ" },
  "11:02": { track: "Al Muhsi الْمُحْصِى" },
  "11:14": { track: "Al Mubdi الْمُبْدِئُ" },
  "11:25": { track: "Al Mu’id الْمُعِيدُ" },
  "11:37": { track: "Al Muhyi الْمُحْيِى" },
  "11:49": { track: "Al Mumit المُمِيتُ" },
  "12:00": { track: "Al Hayy الْحَىُّ" },
  "12:12": { track: "Al Qayyum الْقَيُّومُ" },
  "12:23": { track: "Al Wajid الْوَاجِدُ" },
  "12:35": { track: "Al Majid الْمَاجِدُ" },
  "12:47": { track: "Al Wahid الْوَاحِدُ" },
  "12:58": { track: "As Samad الصَّمَدُ" },
  "13:10": { track: "Al Qadir الْقَادِرُ" },
  "13:21": { track: "Al Muqtadir الْمُقْتَدِرُ" },
  "13:33": { track: "Al Muqaddim الْمُقَدِّمُ" },
  "13:45": { track: "Al Mu’akhkhir الْمُؤَخِّرُ" },
  "13:56": { track: "Al Awwal الأوَّلُ" },
  "14:08": { track: "Al Akhir الآخِرُ" },
  "14:18": { track: "Az Zaher الظَّاهِرُ" },
  "14:30": { track: "Al Batin الْبَاطِنُ" },
  "14:41": { track: "Al Wali الْوَالِى" },
  "14:53": { track: "Al Muta’ali الْمُتَعَالِى" },
  "15:05": { track: "Al Barr الْبَرُّ" },
  "15:16": { track: "At Tawwab التَّوَابُ" },
  "15:27": { track: "Al Munteqim الْمُنْتَقِمُ" },
  "15:39": { track: "Al Afuw العفوُّ" },
  "15:51": { track: "Ar Rauf الرَّؤُوفُ" },
  "16:02": { track: "Malikul Mulk مَالِكُ الْمُلْكِ" },
  "16:14": { track: "Zuljalal ve-l İkram ذُوالْجَلاَلِ وَ الإكْرَام" },
  "16:25": { track: "Al Muqsit الْمُقْسِطُ" },
  "16:37": { track: "Al Jami الْجَامِعُ" },
  "16:49": { track: "Al Ganiyy الْغَنِىُّ" },
  "17:00": { track: "Al Mughni الْمُغْنِى" },
  "17:12": { track: "Al Mani الْمَانِعُ" },
  "17:23": { track: "Ad Darr الضَّارَّ" },
  "17:35": { track: "An Nafi النَّافِعُ" },
  "17:47": { track: "An Nur النُّورُ" },
  "17:58": { track: "Al Hadi الْهَادِى" },
  "18:10": { track: "Al Badi الْبَدِيعُ" },
  "18:22": { track: "Al Baqi الْبَاقِى" },
  "18:33": { track: "Al Varis الْوَارِثُ" },
  "18:45": { track: "Ar Rashid الرَّشِيدُ" },
  "18:57": { track: "As Sabur الصَّبُورُ" },
  "19:12": { track: "Allah الله" }
};

const timestamps = {
  "00:01": { index: 1 },
  "00:09": { index: 2 },
  "00:20": { index: 3 },
  "00:32": { index: 4 },
  "00:44": { index: 5 },
  "00:55": { index: 6 },
  "01:07": { index: 7 },
  "01:18": { index: 8 },
  "01:30": { index: 9 },
  "01:42": { index: 10 },
  "01:53": { index: 11 },
  "02:05": { index: 12 },
  "02:16": { index: 13 },
  "02:28": { index: 14 },
  "02:40": { index: 15 },
  "02:51": { index: 16 },
  "03:03": { index: 17 },
  "03:15": { index: 18 },
  "03:27": { index: 19 },
  "03:38": { index: 20 },
  "03:50": { index: 21 },
  "04:01": { index: 22 },
  "04:13": { index: 23 },
  "04:25": { index: 24 },
  "04:36": { index: 25 },
  "04:49": { index: 26 },
  "05:00": { index: 27 },
  "05:11": { index: 28 },
  "05:23": { index: 29 },
  "05:35": { index: 30 },
  "05:46": { index: 31 },
  "05:58": { index: 32 },
  "06:09": { index: 33 },
  "06:21": { index: 34 },
  "06:32": { index: 35 },
  "06:44": { index: 36 },
  "06:55": { index: 37 },
  "07:06": { index: 38 },
  "07:18": { index: 39 },
  "07:30": { index: 40 },
  "07:41": { index: 41 },
  "07:53": { index: 42 },
  "08:05": { index: 43 },
  "08:17": { index: 44 },
  "08:28": { index: 45 },
  "08:40": { index: 46 },
  "08:52": { index: 47 },
  "09:03": { index: 48 },
  "09:15": { index: 49 },
  "09:26": { index: 50 },
  "09:41": { index: 51 },
  "09:52": { index: 52 },
  "10:04": { index: 53 },
  "10:16": { index: 54 },
  "10:27": { index: 55 },
  "10:39": { index: 56 },
  "10:51": { index: 57 },
  "11:02": { index: 58 },
  "11:14": { index: 59 },
  "11:25": { index: 60 },
  "11:37": { index: 61 },
  "11:49": { index: 62 },
  "12:00": { index: 63 },
  "12:12": { index: 64 },
  "12:23": { index: 65 },
  "12:35": { index: 66 },
  "12:47": { index: 67 },
  "12:58": { index: 68 },
  "13:10": { index: 69 },
  "13:21": { index: 70 },
  "13:33": { index: 71 },
  "13:45": { index: 72 },
  "13:56": { index: 73 },
  "14:08": { index: 74 },
  "14:18": { index: 75 },
  "14:30": { index: 76 },
  "14:41": { index: 77 },
  "14:53": { index: 78 },
  "15:05": { index: 79 },
  "15:16": { index: 80 },
  "15:27": { index: 81 },
  "15:39": { index: 82 },
  "15:51": { index: 83 },
  "16:02": { index: 84 },
  "16:14": { index: 85 },
  "16:25": { index: 86 },
  "16:37": { index: 87 },
  "16:49": { index: 88 },
  "17:00": { index: 89 },
  "17:12": { index: 90 },
  "17:23": { index: 91 },
  "17:35": { index: 92 },
  "17:47": { index: 93 },
  "17:58": { index: 94 },
  "18:10": { index: 95 },
  "18:22": { index: 96 },
  "18:33": { index: 97 },
  "18:45": { index: 98 },
  "18:57": { index: 99 },
  "19:12": { index: 100 }
};


/* =========================
   6) ANA SİSTEM
========================= */

document.addEventListener("DOMContentLoaded", function () {

  const audio = document.getElementById("audioPlayer");
  const imageEl = document.getElementById("dynamicImage");
  const nameBox = document.getElementById("NameOfAllah");
  const anlamBox = document.getElementById("Anlamlari");
  const sureBox = document.getElementById("Sure");
  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");
  const namesBody = document.getElementById("namesBody");
  const listPanel = document.getElementById("listPanel");
  const playFavBtn = document.getElementById("playFavs");
  const favOnlyBtn = document.getElementById("favOnlyBtn") || document.getElementById("showFavOnly");
  const favCounter = document.getElementById("favCounter");
  const searchInput = document.getElementById("search");
  const progressContainer = document.getElementById("progressContainer");
  const progressTooltip = document.getElementById("progressTooltip");
  const currentTimeDisplay = document.getElementById("currentTime");

  /* Design Wechsel */
    const themeBtn = document.getElementById("themeToggle");
    const themeLink = document.getElementById("theme-style");

    function applyTheme(theme) {
      themeLink.href = theme === "dark"
        ? "css/style_dark_blue.css"
        : "css/style_blue.css";

      themeBtn.textContent = theme === "dark" ? "🌙 Dark-Mod" : "☀️ Standart-Mod";
      localStorage.setItem("theme", theme);
    }

    // Klick
    themeBtn.addEventListener("click", () => {
      const current = localStorage.getItem("theme") || "dark";
      applyTheme(current === "dark" ? "normal" : "dark");
    });

    // Beim Start laden
    applyTheme(localStorage.getItem("theme") || "dark");

    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(localStorage.getItem("theme") || (systemDark ? "dark" : "normal"));


/* ANIMATION ANFANG */
/* =========================
   TYPEWRITER (für #Anlamlari)
   - schreibt Buchstabe für Buchstabe
   - API: fs.typewriter.startOnce(text, speed)
========================= */
let _twTimers = [];
let _twCurrentText = "";
let _twIsTyping = false;

function _twClearTimers() {
  while (_twTimers.length) {
    clearTimeout(_twTimers.pop());
  }
}

function _twTypeText(text, speed = 45, onComplete) {
  if (!anlamBox) return;
  _twClearTimers();
  _twCurrentText = String(text || "");
  _twIsTyping = true;
  anlamBox.textContent = "";
  let i = 0;
  function step() {
    if (i < _twCurrentText.length) {
      anlamBox.textContent += _twCurrentText.charAt(i);
      i++;
      _twTimers.push(setTimeout(step, speed));
    } else {
      _twIsTyping = false;
      if (typeof onComplete === "function") onComplete();
    }
  }
  _twTimers.push(setTimeout(step, 20));
}

function _twSkipCurrent() {
  _twClearTimers();
  if (anlamBox && _twCurrentText) {
    anlamBox.textContent = _twCurrentText;
  }
  _twIsTyping = false;
}

window.fs = window.fs || {};
window.fs.typewriter = {
  startOnce: function (text, speed) { _twTypeText(String(text || ""), typeof speed === "number" ? speed : 45); },
  skip: _twSkipCurrent,
  isTyping: function () { return _twIsTyping; }
};

function getMeaningByTime(timeValue) {
  if (!Array.isArray(timeAnlamı)) return "";
  const found = timeAnlamı.find(item => Number(item.time) === Number(timeValue));
  return found ? String(found.text || "") : "";
}
/* ANIMATION ENDE  */

// =========================
// Storage / Favorites / Player Reset (kompletter, bereinigter Block)
// =========================

const clearStorageBtn = document.getElementById("clearStorageBtn");
const storageStatus = document.getElementById("storageStatus");
// mögliche IDs für den Favoriten-Button (falls er anders benannt ist)
const clearFavBtn = document.getElementById("ClearFav") || document.getElementById("clearFavBtn") || document.getElementById("clearFav");

// Liste der app-spezifischen Keys, die gelöscht werden sollen
const APP_KEYS_TO_CLEAR = [
  "favorites",
  "userSettings",
  "lastPlayedIndex",
  "lastIndex",
  "playPos",
  "fs_state"
];

// true = komplettes localStorage/sessionStorage leeren (Vorsicht)
const CLEAR_EVERYTHING_ON_BTN = false;

/* -------------------------
   Hilfsfunktionen für Storage
   ------------------------- */
function _clearSpecificKeys(keys = []) {
  try {
    keys.forEach(k => {
      try { localStorage.removeItem(k); } catch (e) { /* ignore */ }
      try { sessionStorage.removeItem(k); } catch (e) { /* ignore */ }
    });
    return { ok: true, message: "Seçilen kaldırıldı." };
  } catch (err) {
    return { ok: false, message: "Belirli anahtarları silerken hata oluştu.: " + (err && err.message) };
  }
}

function _clearAllStorage() {
  try {
    localStorage.clear();
    sessionStorage.clear();
    return { ok: true, message: "Yerel depolama ve oturum depolaması tamamen boşaltıldı.." };
  } catch (err) {
    return { ok: false, message: "Depolama alanı temizlenirken hata oluştu: " + (err && err.message) };
  }
}

//Auto‑Close + Progress‑Animation
function showWarning(result) {
  const box = document.getElementById("warningBox");
  const title = box.querySelector(".warning-title");
  const text = box.querySelector(".warning-text");
  const progress = box.querySelector(".warning-progress");

  // Status setzen
  box.classList.toggle("error", !result.ok);
  box.classList.toggle("success", result.ok);

  title.textContent = result.ok ? "Başarılı" : "Hata";
  text.textContent = result.message;

  // Reset Progressbar
  progress.style.transition = "none";
  progress.style.width = "0%";

  // Box anzeigen
  box.hidden = false;
  box.classList.remove("hidden");

  // Progressbar starten (kleiner Delay für CSS-Transition)
  setTimeout(() => {
    progress.style.transition = "width 3s linear";
    progress.style.width = "100%";
  }, 50);

  // Nach 5 Sekunden ausblenden
  setTimeout(() => {
    box.classList.add("hidden");

    // Nach Fade-Out komplett verstecken
    setTimeout(() => {
      box.hidden = true;
      progress.style.width = "0%"; // Reset für nächsten Aufruf
    }, 600);
  }, 3000);
}


function _showStorageStatus(msg, ok = true) {
  if (!storageStatus) {
    console[ok ? "log" : "error"](msg);
    return;
  }
  storageStatus.textContent = msg;
  storageStatus.style.color = ok ? "#0a0" : "#c00";
  setTimeout(() => { if (storageStatus) storageStatus.textContent = ""; }, 4000);
}

/* -------------------------
   Favoriten-Funktion (gemeinsam)
   ------------------------- */
function clearFavorites() {
  try {
    // Laufzeit-Array zurücksetzen (falls vorhanden)
    try { favorites = []; } catch (e) { /* ignore if not in scope */ }

    // localStorage / sessionStorage Eintrag entfernen
    try { localStorage.removeItem("favorites"); } catch (e) { /* ignore */ }
    try { sessionStorage.removeItem("favorites"); } catch (e) { /* ignore */ }

    // UI-Aktualisierungen (falls vorhanden)
    if (typeof updateFavoriteCounter === "function") {
      try { updateFavoriteCounter(); } catch (e) { /* ignore */ }
    }
    if (typeof renderNamesList === "function") {
      try { renderNamesList(); } catch (e) { /* ignore */ }
    }

    _showStorageStatus("✅ Favoriler silindi", true);
    console.info("Favoriler silindi.");
    return { ok: true, message: "Favoriler silindi" };
  } catch (err) {
    console.error("Favorileri silerken hata oluştu.:", err);
    _showStorageStatus("❌ Favorileri silerken hata oluştu.", false);
    return { ok: false, message: "Favorileri silerken hata oluştu.: " + (err && err.message) };
  }
}

/* -------------------------
   Player Reset
   ------------------------- */
function resetPlayer() {
  try {
    const audioEl = document.getElementById("audioPlayer");
    const playBtn = document.getElementById("playBtn") || document.querySelector(".btn.playing");
    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");
    const progressContainer = document.getElementById("progressContainer");

    if (audioEl) {
      try { audioEl.pause(); } catch (e) { /* ignore */ }
      try { audioEl.currentTime = 0; } catch (e) { /* ignore */ }
    }

    if (progressBar) {
      if (progressBar.tagName && progressBar.tagName.toLowerCase() === "progress") {
        progressBar.value = 0;
      } else {
        progressBar.style.width = "0%";
      }
    }
    if (progressText) progressText.textContent = "00:00";
    if (progressContainer) {
      const tooltip = progressContainer.querySelector(".progress-tooltip");
      if (tooltip) tooltip.classList.remove("visible");
    }

    if (playBtn) {
      playBtn.classList.remove("playing");
    }

    try { isPlaying = false; } catch (e) { /* ignore */ }
    try { audioCurrentIndex = 0; } catch (e) { /* ignore */ }

    console.info("Ses oynatıcısını sıfırlama.");
  } catch (err) {
    console.warn("Oynatıcıyı sıfırlama hatası:", err);
  }
}

/* -------------------------
   Runtime Reset (inkl. Player)
   ------------------------- */
function _resetRuntimeState() {
  try {
    try { favorites = []; } catch (e) { /* ignore */ }
    try { favPlayPos = 0; } catch (e) { /* ignore */ }
    try { favPlayMode = false; } catch (e) { /* ignore */ }
    try { showOnlyFavorites = false; } catch (e) { /* ignore */ }
    try { currentIndex = 0; } catch (e) { /* ignore */ }
    try { idxAnlam = 0; } catch (e) { /* ignore */ }
    try { idxSure = 0; } catch (e) { /* ignore */ }
    try { idxISIM = 0; } catch (e) { /* ignore */ }

    const nameBox = document.getElementById("NameOfAllah");
    const imageEl = document.getElementById("dynamicImage");
    const anlamBox = document.getElementById("Anlamlari");
    const progressBar = document.getElementById("progressBar");

    if (nameBox) nameBox.textContent = "";
    if (imageEl && imageChanges && imageChanges[0]) imageEl.src = imageChanges[0].imageSrc;
    if (anlamBox) {
      if (window.fs && window.fs.typewriter && typeof window.fs.typewriter.stop === "function") {
        try { window.fs.typewriter.stop(); } catch (e) { /* ignore */ }
      }
      anlamBox.textContent = "";
    }
    if (progressBar) {
      if (progressBar.tagName && progressBar.tagName.toLowerCase() === "progress") {
        progressBar.value = 0;
      } else {
        progressBar.style.width = "0%";
      }
    }

    // Player zurücksetzen
    resetPlayer();

    if (typeof updateFavoriteCounter === "function") updateFavoriteCounter();
    if (typeof renderNamesList === "function") renderNamesList();
  } catch (e) {
    console.warn("Çalışma zamanı değişkenlerini sıfırlama hatası:", e);
  }
}

/* -------------------------
   Sichtbarkeit des clearStorageBtn (mit Klasse 'hidden')
   ------------------------- */
function storageHasAnyKeys() {
  try {
    if (Array.isArray(APP_KEYS_TO_CLEAR) && APP_KEYS_TO_CLEAR.length) {
      for (const k of APP_KEYS_TO_CLEAR) {
        if (localStorage.getItem(k) !== null || sessionStorage.getItem(k) !== null) return true;
      }
      return false;
    }
    return localStorage.length > 0 || sessionStorage.length > 0;
  } catch (e) {
    return false;
  }
}

function showClearStorageBtn(show) {
  if (!clearStorageBtn) return;
  if (show) {
    clearStorageBtn.classList.remove("hidden");
  } else {
    clearStorageBtn.classList.add("hidden");
  }
}

// initiale Sichtbarkeit (leicht verzögert, damit CSS-Transition greift)
try {
  setTimeout(() => showClearStorageBtn(storageHasAnyKeys()), 50);
} catch (e) { /* ignore */ }

/* -------------------------
   Robusterer Watcher + clearStorageBtn-Handler
   ------------------------- */

// Polling-Watcher (aktiviert nur nach manuellem Ausblenden)
let _clearStorageWatcher = null;

// robuster Polling-Watcher: benötigt 2 aufeinanderfolgende positive Checks
function startClearStorageWatcher() {
  if (_clearStorageWatcher) {
    clearInterval(_clearStorageWatcher);
    _clearStorageWatcher = null;
  }

  let consecutive = 0;
  _clearStorageWatcher = setInterval(() => {
    try {
      if (storageHasAnyKeys()) {
        consecutive += 1;
      } else {
        consecutive = 0;
      }

      // erst nach 2 aufeinanderfolgenden positiven Checks zeigen
      if (consecutive >= 2) {
        showClearStorageBtn(true);
        clearInterval(_clearStorageWatcher);
        _clearStorageWatcher = null;
      }
    } catch (e) {
      // im Fehlerfall stoppen
      clearInterval(_clearStorageWatcher);
      _clearStorageWatcher = null;
    }
  }, 500); // 500ms Intervall: schnell genug, aber entprellt
}

// storage-Event: sofort prüfen, aber entprellt durch kurze Verzögerung
let _storageEventTimer = null;
window.addEventListener("storage", (ev) => {
  try {
    if (_storageEventTimer) clearTimeout(_storageEventTimer);
    _storageEventTimer = setTimeout(() => {
      try {
        // nur reagieren, wenn geänderter Key relevant ist oder wir beobachten alle
        if (!APP_KEYS_TO_CLEAR || APP_KEYS_TO_CLEAR.length === 0) {
          showClearStorageBtn(storageHasAnyKeys());
          return;
        }
        if (ev && ev.key === null) {
          showClearStorageBtn(storageHasAnyKeys());
          return;
        }
        if (ev && APP_KEYS_TO_CLEAR.includes(ev.key)) {
          showClearStorageBtn(storageHasAnyKeys());
        }
      } catch (e) { /* ignore */ }
    }, 150); // kleine Entprellung für mehrere schnellen Änderungen
  } catch (e) { /* ignore */ }
});

// Reagiere auf Storage-Events aus anderen Tabs
window.addEventListener("storage", (ev) => {
  try {
    if (!ev) return;
    if (!APP_KEYS_TO_CLEAR || APP_KEYS_TO_CLEAR.length === 0) {
      showClearStorageBtn(storageHasAnyKeys());
      return;
    }
    if (ev.key === null) {
      // clear() aufgerufen — prüfe komplett
      showClearStorageBtn(storageHasAnyKeys());
      return;
    }
    if (APP_KEYS_TO_CLEAR.includes(ev.key)) {
      showClearStorageBtn(storageHasAnyKeys());
    }
  } catch (e) { /* ignore */ }
});

/* -------------------------
   Button-Handler: clearFavBtn -> clearFavorites()
   ------------------------- */
if (clearFavBtn) {
  clearFavBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    clearFavorites();
      const results = clearFavorites(); 
      showWarning(results);
  });
} else {
  console.info("clearFavBtn bulunamadı (Kontrol edilen kimlikler: ClearFav, clearFavBtn, clearFav)).");
}

/* -------------------------
   Button-Handler: clearStorageBtn -> Storage löschen, Favoriten & Player reset, Button ausblenden
   ------------------------- */
// Neuer clearStorageBtn-Handler: nur ausblenden, wenn danach wirklich leer ist
if (clearStorageBtn) {
  clearStorageBtn.addEventListener("click", () => {
    let result;
    if (CLEAR_EVERYTHING_ON_BTN) {
      result = _clearAllStorage();
    } else {
      result = _clearSpecificKeys(APP_KEYS_TO_CLEAR);
    }
    resetPlayed();
    if (result.ok) {
      // Favoriten löschen / UI aktualisieren
      try { clearFavorites(); } catch (e) { /* ignore */ }

      // Laufzeit/UI/Player zurücksetzen
      _resetRuntimeState();

      // Prüfe sofort, ob wirklich leer ist
      if (!storageHasAnyKeys()) {
        // Button sanft ausblenden und Watcher starten
        showClearStorageBtn(false);
        startClearStorageWatcher();
      } else {
        // Falls noch etwas vorhanden ist: Button sichtbar lassen und Hinweis
        showClearStorageBtn(true);
        _showStorageStatus("⚠️ Bazı girişler kaldı; düğme görünür durumda..", true);
      }

      _showStorageStatus("✅ " + result.message, true);
    } else {
      _showStorageStatus("❌ " + result.message, false);
    }

          if (listPanel.classList.contains("open")) {
            // Liste ist geöffnet
            // Liste Schließen
            toggleList.click();
          }else {
            //console.info("Liste Kapali");
             // Liste Öffnen
            //toggleList.click();
          }
      const results = _clearAllStorage(); 
      showWarning(results);

  });
} else {
  console.info("clearStorageBtn bulunamadı — DOM öğesi eksik.");
}

  let currentIndex = 0;
  let idxAnlam = 0;
  let idxSure = 0;
  let idxISIM = 0;

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  let favPlayMode = false;
  let favPlayPos = 0;
  let showOnlyFavorites = false;
  let LstOpen = false;

    const el = document.getElementById("lastUpdate");
  if (el) {
    // Hole das letzte Änderungsdatum der Seite
    const lastModified = document.lastModified;

/* =========================
   6) LAST UPDATE
    ========================= */

    // Optional: formatiere Datum/Zeit für Türkisch
    const formatted = new Date(lastModified).toLocaleString("tr-TR", {
      dateStyle: "short",
      timeStyle: "short"
    });

    // Setze den Text in das div
    el.textContent = "Güncelleme: " + formatted;
  }

/* =========================
   7) ToggleList – Fokus + Auto-Scroll zum aktuellen Eintrag
========================= */
const toggleBtn = document.getElementById("toggleList");

if (toggleBtn && listPanel) {
  toggleBtn.addEventListener("click", () => {
    const isOpen = listPanel.classList.toggle("open");

    if (isOpen) {
      LstOpen = true;
      // aria korrekt setzen
      listPanel.removeAttribute("aria-hidden");
      listPanel.style.display = "block";

      // Panel fokussierbar machen
      listPanel.setAttribute("tabindex", "-1");

      // kleines Delay, damit Layout steht
      requestAnimationFrame(() => {
        // 👉 aktuelles Element suchen
        const currentItem = listPanel.querySelector(
          "#ALLAHIN_ISIMLERI td.current"
        );

        if (currentItem) {
          // zum aktuellen Eintrag scrollen
          currentItem.scrollIntoView({
            block: "center",
            behavior: "smooth"
          });

          // Fokus setzen ohne erneutes Scrollen
          try {
            currentItem.focus({ preventScroll: true });
          } catch {
            currentItem.focus();
          }
        } else {
          // Fallback: Panel selbst
          try {
            listPanel.focus({ preventScroll: true });
          } catch {
            listPanel.focus();
          }
        }
      });
    } else {
      // schließen
      listPanel.setAttribute("aria-hidden", "true");
      listPanel.style.display = "none";
      LstOpen = false;
    }
    updateFavButtonsVisibility();
  });
}

function setListFocus() {
  // bewusst leer – Fokus wird über .current gesteuert
}


// Fallback: erzwinge block: 'start' für alle scrollIntoView-Aufrufe
(function() {
  const origScrollIntoView = Element.prototype.scrollIntoView;
  Element.prototype.scrollIntoView = function(arg) {
    try {
      // Wenn ein Options-Objekt übergeben wurde, setze block:'start'
      if (arg && typeof arg === "object") {
        const opts = Object.assign({}, arg, { block: "start" });
        return origScrollIntoView.call(this, opts);
      }
      // Wenn ein string oder nichts übergeben wurde, nutze default mit block:start
      return origScrollIntoView.call(this, { behavior: "smooth", block: "start", inline: "nearest" });
    } catch (e) {
      // Fallback auf Original, falls etwas schiefgeht
      return origScrollIntoView.call(this, arg);
    }
  };
})();


  // Buttons Sichtbarkeit
  function updateFavButtonsVisibility() {
    const hasFavorites = favorites.length > 0;
    const listOpen = listPanel.style.display === "block";
    const displayVal = hasFavorites && listOpen ? "inline-block" : "none";
    playFavBtn.style.display = displayVal;
    favOnlyBtn.style.display = displayVal;
    if (clearFavBtn) clearFavBtn.style.display = displayVal;
  }

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  }

  function seekToTime(time) {
    if (audio.readyState >= 2) {
      audio.currentTime = time;
    } else {
      const once = () => {
        audio.currentTime = time;
        audio.removeEventListener("loadedmetadata", once);
      };
      audio.addEventListener("loadedmetadata", once);
    }
  }
    
  /* Sichtbar Favcounter:*/
      function updateFavoriteCounter() {
        if (!favCounter) return;

        const count = favorites.length;

        if (count > 0) {
          favCounter.style.display = "block";   // anzeigen
          favCounter.textContent = `Seçilen: ${count} / ${imageChanges.length}`;
        } else {
          favCounter.style.display = "none";    // verstecken
        }
      }

  function isFavorite(id) {
    return favorites.includes(id);
  }

  // 👉 Favoriten setzen/entfernen + sofort sortieren
function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(f => f !== id);
  } else {
    favorites.push(id);
  }
  // sortiert nach Zeit
  favorites.sort((a, b) => imageChanges[a].time - imageChanges[b].time);

  // speichern
  localStorage.setItem("favorites", JSON.stringify(favorites));

  // ⬇️ WICHTIG: wenn keine Favoriten mehr → normale Liste erzwingen
  if (favorites.length === 0) {
    showOnlyFavorites = false;
  }

  updateFavoriteCounter();
  buildNameList();
  updateFavButtonsVisibility();
}


function setListFocus(realIndex) {
  document.querySelectorAll("#namesBody td").forEach(td => {
    const idx = Number(td.dataset.realIndex);
    const isActive = idx === realIndex;
    td.classList.toggle("active", isActive);

    if (isActive) {
      // automatisch ins Sichtfeld scrollen
      td.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  });
}


// Typewriter: schreibt einen Text buchstabe für buchstabe in #anlamText
function typeWriterSingle(elementIdText, elementIdCursor, text, speed = 40, callback) {
  const textEl = document.getElementById(elementIdText);
  const cursorEl = document.getElementById(elementIdCursor);
  if (!textEl) return console.warn("Element not found:", elementIdText);

  textEl.textContent = "";
  textEl.classList.remove("visible");
  let i = 0;

  function step() {
    if (i < text.length) {
      textEl.textContent += text.charAt(i);
      i++;
      // optional: Cursor bleibt sichtbar; kein extra Handling nötig
      setTimeout(step, speed);
    } else {
      // Schreibvorgang beendet
      textEl.classList.add("visible");
      if (typeof callback === "function") callback();
    }
  }

  // Kleiner Start-Delay, damit CSS-Transition sichtbar wird
  setTimeout(step, 50);
}


  function buildNameList() {
  namesBody.innerHTML = "";
  const list = showOnlyFavorites
    ? favorites.map(i => ({ item: imageChanges[i], realIndex: i }))
    : imageChanges.map((x, i) => ({ item: x, realIndex: i }));

  list.forEach(row => {
    const tr = document.createElement("tr");
    const td = document.createElement("td");

    // 🔑 notwendig für Zeit- & Farbsteuerung
    td.dataset.realIndex = row.realIndex;

    // 🔑 notwendig für timestamps → document.getElementById(...)
    td.id = `name-${row.realIndex + 1}`;

      const playedIndices = JSON.parse(
        localStorage.getItem("playedIndices") || "[]"
      );

      if (playedIndices.includes(row.realIndex + 1)) {
        td.classList.add("played");
      }


    td.innerHTML = `
      <div style="display:flex; flex-direction:column; align-items:center;">
        <span>${row.realIndex + 1}. ${row.item.text}</span>
        <span class="favStar" style="cursor:pointer; margin-top:4px;">
          ${isFavorite(row.realIndex) ? "⭐" : "☆"}
        </span>
          <div class="mini-progress">
            <div class="mini-progress-fill"></div>
          </div>
      </div>`;


let isScrubbing = false;

td.addEventListener("pointerdown", (e) => {
  if (!td.classList.contains("current")) return;

  const rect = td.getBoundingClientRect();
  if (e.clientY < rect.bottom - 16) return;

  isScrubbing = true;
  td.setPointerCapture(e.pointerId);
});

        td.addEventListener("pointermove", (e) => {
          if (!isScrubbing || !td.classList.contains("current")) return;

          const rect = td.getBoundingClientRect();
          const start = imageChanges[row.realIndex]?.time ?? 0;
          const next = imageChanges[row.realIndex + 1]?.time ?? audio.duration;
          const duration = Math.max(0.01, next - start);

          const x = Math.min(Math.max(e.clientX - rect.left - 10, 0), rect.width - 20);
          const ratio = x / (rect.width - 20);

          audio.currentTime = start + ratio * duration;
        });

        td.addEventListener("pointerup", () => {
          isScrubbing = false;
        });

        td.addEventListener("pointercancel", () => {
          isScrubbing = false;
        });

        /* 👉 NORMALER KLICK (nur wenn nicht scrubben) */
        td.addEventListener("click", () => {
          if (isScrubbing) return;

          favPlayMode = false;
          currentIndex = row.realIndex;
          seekToTime(row.item.time);
          updateContent(row.realIndex);
          audio.play();
          setListFocus(row.realIndex);
        });


      //TOUCH-SCRUB ZUSÄTZLICH EINBAUEN
      td.addEventListener("pointerdown", function (e) {
          if (!td.classList.contains("current")) return;

          const rect = td.getBoundingClientRect();
          const y = e.clientY - rect.top;

          // nur unterer Bereich = Mini-Progress
          if (y < rect.height - 18) return;

          e.stopPropagation(); // ⛔ verhindert click
          e.preventDefault();

          audio.pause();

          const start = imageChanges[row.realIndex]?.time ?? 0;
          const next =
            imageChanges[row.realIndex + 1]?.time ?? audio.duration;
          const duration = Math.max(0.01, next - start);

          const usableWidth = rect.width - 20;

          function seekAt(clientX) {
            const x = Math.min(
              Math.max(clientX - rect.left - 10, 0),
              usableWidth
            );
            const ratio = x / usableWidth;
            audio.currentTime = start + ratio * duration;
          }

          seekAt(e.clientX);

          td.setPointerCapture(e.pointerId);

          function onMove(ev) {
            seekAt(ev.clientX);
          }

          function onEnd(ev) {
            audio.play();
            td.releasePointerCapture(ev.pointerId);
            td.removeEventListener("pointermove", onMove);
            td.removeEventListener("pointerup", onEnd);
            td.removeEventListener("pointercancel", onEnd);
          }

          td.addEventListener("pointermove", onMove);
          td.addEventListener("pointerup", onEnd);
          td.addEventListener("pointercancel", onEnd);
        });


    td.querySelector(".favStar").addEventListener("click", function (e) {
      e.stopPropagation();
      toggleFavorite(row.realIndex);
    });

    tr.appendChild(td);
    namesBody.appendChild(tr);
  });

  setListFocus(currentIndex);
  applySearchFilter();
}


//RESET-FUNKTION
function resetPlayed() {
  localStorage.removeItem("playedIndices");
  buildNameList();
}
  // Favoriten abspielen
  function startFavoritesPlayback() {
    if (favorites.length === 0) {
      alert("Seçilen yok!");
      return;
    }
    favPlayMode = true;
    favPlayPos = 0;
    playFavoriteAtPos(favPlayPos);
    playFavBtn.classList.add("playing");
  }

  function playFavoriteAtPos(pos) {
    favPlayPos = pos % favorites.length;
    const idx = favorites[favPlayPos];
    const startTime = imageChanges[idx].time;
    currentIndex = idx;
    updateContent(idx);
    audio.pause();
    seekToTime(startTime);
    setTimeout(() => {
      audio.play();
      setListFocus(idx);
    }, 100);
  }

  function getSegmentEndForIndex(idx) {
    if (idx + 1 < imageChanges.length) {
      return imageChanges[idx + 1].time;
    }
    return audio.duration;
  }

  function maybeAdvanceFavoriteByTime(t) {
    if (!favPlayMode || favorites.length === 0) return;
    const idx = favorites[favPlayPos];
    const endTime = getSegmentEndForIndex(idx);
    if (t >= endTime - 0.2) {
      favPlayPos = (favPlayPos + 1) % favorites.length;
      playFavoriteAtPos(favPlayPos);
    }
  }

  playFavBtn.addEventListener("click", startFavoritesPlayback);

  favOnlyBtn.addEventListener("click", function () {
    if (favorites.length === 0) {
      showOnlyFavorites = false;
      favOnlyBtn.textContent = "Sade ⭐ göster";
      buildNameList();
      return;
    }
    showOnlyFavorites = !showOnlyFavorites;
    favOnlyBtn.textContent = showOnlyFavorites
      ? "Tümünü Göster"
      : "Sade ⭐ göster";
    buildNameList();
  });

  if (clearFavBtn) {
    clearFavBtn.addEventListener("click", function () {
      favorites = [];
      localStorage.removeItem("favorites");
      updateFavoriteCounter();
      showOnlyFavorites = false;
      favOnlyBtn.textContent = "Sade ⭐ göster";
      favPlayMode = false;
      buildNameList();
      setListFocus(currentIndex);
      updateContent(currentIndex);
      updateFavButtonsVisibility();
      /* alert("Tüm favoriler temizlendi!"); */
    });
  }

  // Suche
  function applySearchFilter() {
    const query = (searchInput?.value || "").toLowerCase();
    document.querySelectorAll("#namesBody tr").forEach(tr => {
      const text = tr.textContent.toLowerCase();
      tr.style.display = text.includes(query) ? "" : "none";
    });
  }
  if (searchInput) {
    searchInput.addEventListener("input", applySearchFilter);
  }

    /* ====================================================
   AUDIO TIMEUPDATE – KOMPLETT KORRIGIERT (FINAL)
   – kein mehrfaches Rot
   – current überschreibt played
   – Mini-Progress NUR bei .current
==================================================== */

  // Audio Events mit Progressbar + Tooltip
  audio.addEventListener("timeupdate", function () {
    const t = audio.currentTime;
    const currentTime = audioPlayer.currentTime;


      // wenn gerade gesprungen wird → nichts durchlaufen
  /* =========================
     1) PROGRESS / TOOLTIP
     (nur wenn nicht seeking)
  ========================= */
  if (!audio.seeking) {
    const percent = audio.duration ? (t / audio.duration) * 100 : 0;
   
    progressBar.style.width = percent + "%";

    const d = audio.duration || 0;
    const current = formatTime(t);
    const remaining = formatTime(Math.max(0, d - t));
    const total = formatTime(d);

    progressText.textContent = `${current} / ${remaining}`;
    GesamtZeit.textContent = total;

    const formattedTime = formatTime(t);

    /* =========================
      TIMESTAMP-MAPPING (SICHER)
    ========================= */
      const entry = timestamps[formattedTime];
      if (entry) {
        const trackElement = document.getElementById(`name-${entry.index}`);
        if (trackElement) {

          // 1️⃣ alte current-Markierung entfernen
          document
            .querySelectorAll('#ALLAHIN_ISIMLERI td.current')
            .forEach(td => td.classList.remove('current'));

          // 2️⃣ neue Stelle: erst played setzen (historisch)
          trackElement.classList.add('played');

          // 3️⃣ dann current setzen (überschreibt visuell)
          trackElement.classList.add('current');
            const playedSet = new Set(
              JSON.parse(localStorage.getItem("playedIndices") || "[]")
          );

              playedSet.add(entry.index);

          localStorage.setItem("playedIndices",JSON.stringify([...playedSet]));
          //NameOfAllah.textContent = trackElement.textContent;
        }
      }
  }
  
  /* =========================
     2) ZEITSTATUS – LISTE
     Regel:
     - current: genau EIN Eintrag
     - played: alle deren Zeit vorbei ist
  ========================= */

  const cells = namesBody.querySelectorAll("td");

cells.forEach(td => {
  const idx = Number(td.dataset.realIndex);
  if (Number.isNaN(idx)) return;

  const start = imageChanges[idx]?.time ?? Infinity;
  const next  = imageChanges[idx + 1]?.time ?? Infinity;

        /* =========================
          STATUS-LOGIK (KLICK / AUTO)
          Ziel:
          - current → aktuell spielend (grün + Progress)
          - played  → bewusst abgespielt (rot, KEIN Progress)
          - sonst   → neutral (weiß)
        ========================= */

        /* NUR transienten Status zurücksetzen */
        td.classList.remove("current");

        /* -------------------------
          STATUS SETZEN
        ------------------------- */
        if (t >= start && t < next) {
          // 🎧 aktuell spielend
          td.classList.add("current");
        } else if (td.classList.contains("played")) {
          // 🔴 bewusst abgespielt (bleibt rot)
          // nichts ändern
        } else {
          // ⚪ neutral
          td.classList.remove("current");
        }

        /* =========================
          📊 MINI-PROGRESS
          - nur bei .current sichtbar
          - played & neutral = 0%
        ========================= */
          const bar = td.querySelector(".mini-progress-fill");

          if (td.classList.contains("current")) {
            const duration = Math.max(0.01, next - start);
            const p = Math.min(100, Math.max(0, ((t - start) / duration) * 100));
            bar.style.width = `${p}%`;
          } else {
            bar.style.width = "0%";
          }




/* ================================
     3) CONTENT / AUTO-FORTSCHRITT
  ============================== */
      if (!favPlayMode) {
        let found = false;
      for (let i = imageChanges.length - 1; i >= 0; i--) {
        if (t >= imageChanges[i].time) {
          found = true;

          if (currentIndex !== i) {
            currentIndex = i;
            updateContent(i);
            setListFocus(i);
          }
          break;
        }
      }
          // 🔁 Wenn letzter Eintrag komplett abgespielt → zurück zu Position 1
          // 🔁 Ende erreicht → zurück zu Position 0
          const lastIndex = imageChanges.length - 1;
          if (
            found &&
            currentIndex === lastIndex &&
            audio.duration &&
            t >= audio.duration - 0.05
          ) {
            audio.pause();
            audio.currentTime = 0;

            currentIndex = 0;
            updateContent(0);
            setListFocus(0);

            document
              .querySelectorAll("#ALLAHIN_ISIMLERI td")
              .forEach(td => td.classList.remove("current", "played"));

            const first = document.getElementById("name-0");
            if (first) first.classList.add("current");
             audio.play(); // ▶️ automatisch neu starten
          }

        } else {
          maybeAdvanceFavoriteByTime(t);
        }

  /* ==================================
     4) TEXTE (ANLAM / SURE / ISIMLER)
  ================================= */
    if (timeAnlamı[idxAnlam] && t >= timeAnlamı[idxAnlam].time) {
      //anlamBox.textContent = timeAnlamı[idxAnlam].text;
        const timeValue = imageChanges[currentIndex] && imageChanges[currentIndex].time;
        const meaningText = getMeaningByTime(timeValue) || "Anlam bulunamadı.";
      fs.typewriter.startOnce(meaningText, 25); // 45 ms pro Zeichen, anpassbar
      idxAnlam++;
    }
    if (timeSureler[idxSure] && t >= timeSureler[idxSure].time) {
      sureBox.textContent = timeSureler[idxSure].text;
      idxSure++;
    }

    if (timeIsimler[idxISIM] && t >= timeIsimler[idxISIM].time) {
      document.getElementById("Isimler").textContent = timeIsimler[idxISIM].text;
      idxISIM++;
    }
    localStorage.setItem("lastIndex", currentIndex);
    localStorage.setItem("lastTime", t);
  });
});



  // Wenn der Benutzer im Player springt → sofort Inhalte setzen
audio.addEventListener("seeked", function () {
  const t = audio.currentTime;

  // Index für Namen finden
  for (let i = imageChanges.length - 1; i >= 0; i--) {
    if (t >= imageChanges[i].time) {
      currentIndex = i;
      updateContent(i);
      setListFocus(i);
      break;
    }
  }

  // Direkt den passenden Anlam setzen
  let newIdxAnlam = timeAnlamı.findIndex(a => t < a.time);
  idxAnlam = newIdxAnlam === -1 ? timeAnlamı.length : newIdxAnlam;
  if (idxAnlam > 0) {
    //anlamBox.textContent = timeAnlamı[idxAnlam - 1].text;
      const timeValue = imageChanges[currentIndex] && imageChanges[currentIndex].time;
      const meaningText = getMeaningByTime(timeValue) || "Anlam bulunamadı.";
    fs.typewriter.startOnce(meaningText, 25); // 45 ms pro Zeichen, anpassbar

  }

  // Direkt den passenden Sure setzen
  let newIdxSure = timeSureler.findIndex(s => t < s.time);
  idxSure = newIdxSure === -1 ? timeSureler.length : newIdxSure;
  if (idxSure > 0) {
    sureBox.textContent = timeSureler[idxSure - 1].text;
  }

 // Direkt den passenden Isim setzen
    let newIdxISIM = timeIsimler.findIndex(i => t < i.time);
    idxISIM = newIdxISIM === -1 ? timeIsimler.length : newIdxISIM;
    if (idxISIM > 0) {
      document.getElementById("Isimler").textContent = timeIsimler[idxISIM - 1].text;
    }
});

  // Inhalt aktualisieren
  function updateContent(index) {
    const item = imageChanges[index];
    //const itemName = timeIsimler[index];
    
    if (!item) return;
    imageEl.src = item.imageSrc;
    nameBox.textContent = item.text;



      const timeValue = imageChanges[currentIndex] && imageChanges[currentIndex].time;
      const meaningText = getMeaningByTime(timeValue) || "Anlam bulunamadı.";

    if (timeAnlamı[index]) fs.typewriter.startOnce(meaningText, 25); // 45 ms pro Zeichen, anpassbar //anlamBox.textContent = timeAnlamı[index].text;
    if (timeSureler[index]) sureBox.textContent = timeSureler[index].text;
    if (timeIsimler[index]) timeIsimler.textContent = timeIsimler[index].text;


  }

  // ===============================
  // Progressbar Tooltip + Jump
  // ===============================
  progressContainer.addEventListener("mousemove", (e) => {
    const rect = progressContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = x / rect.width;
    const hoverTime = percent * audio.duration;

    if (!isNaN(hoverTime)) {
      progressTooltip.textContent = formatTime(hoverTime);
      progressTooltip.style.left = `${x}px`;
      progressTooltip.classList.add("visible");
    }
  });

  progressContainer.addEventListener("mouseleave", () => {
    progressTooltip.classList.remove("visible");
  });

  progressContainer.addEventListener("click", (e) => {
    const rect = progressContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = x / rect.width;
    const newTime = percent * audio.duration;

    if (!isNaN(newTime)) {
      audio.currentTime = newTime;
    }
  });

  // ===============================
  // Initialisierung
  // ===============================
  updateFavoriteCounter();
  buildNameList();
  updateFavButtonsVisibility();

  // Letzten Stand wiederherstellen (optional)
  const lastIndex = Number(localStorage.getItem("lastIndex"));
  const lastTime = Number(localStorage.getItem("lastTime"));
  if (!isNaN(lastIndex)) {
    currentIndex = lastIndex;
    updateContent(currentIndex);
    setListFocus(currentIndex);
  }
  if (!isNaN(lastTime)) {
    seekToTime(lastTime);
  }
});