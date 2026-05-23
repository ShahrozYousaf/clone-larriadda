import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

type LangCode = 'no' | 'en';

interface LanguageInfo {
  htmlTag: string;
  localeTag: string;
  supportedTags: string[];
  home: string;
  about: string;
  menu: string;
  takeaway: string;
  partyroom: string;
  catering: string;
  booktable: string;
  cart: string;
  open: string;
  discount1: string;
  discount2: string;
  herodescription: string;
  ordernow: string;
  aboutitle: string;
  abouttitle: string;
  aboutdescription: string;
  partyroomtitle: string;
  partyroomdescription: string;
  card1title: string;
  card1description: string;
  card2title: string;
  card2description: string;
  card3title: string;
  card3description: string;
  callus: string;
  cateringtitle: string;
  cateringdescription: string;
  cateringcard1title: string;
  cateringcard1description: string;
  cateringcard2title: string;
  cateringcard2description: string;
  cateringcard3title: string;
  cateringcard3description: string;
  openhours: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
  contactus: string;
  location: string;
  phone: string;
  email: string;
  quickinfo: string;
  information: string;
  app: string;
  allrightrevserved: string;
  poweredby: string;
  ourmenu: string;
  menutagline: string;
  explore: string;
  getmenu: string;
  getmenudescription: string;
  getmenubutton1: string;
  getmenubutton2: string;
  copied: string;
  closed: string;
  quantity: string;
  specialinstructions: string;
  optional: string;
  addtocart: string;
  cartnote: string;
  carttagline: string;
  checkout: string;
  allergens: string;
  yourcart: string;
  orderitems: string;
  ordersummary: string;
  emptycart: string;
  noitem: string;
  noteordersummary: string;
  placeorder: string;
  gotomenu: string;
  name: string;
  number: string;
  emailadress: string;
  addcomment: string;
  payment: string;
  payoncounter: string;
  picktime: string;
  apply: string;
  promodiscount: string;
  discount: string;
  applied: string;
  minutes: string;
  ordertitle: string;
  ordertagline: string;
  payunsuccess: string;
  payunsuccessmsg: string;
  selectmethod: string;
  tryagain: string;
  paysuccess: string;
  paysuccessmsg: string;
  ordernumber: string;
  customer: string;
  ordertype: string;
  orderstatus: string;
  orderitemcap: string;
  items: string;
  discountsm: string;
  servicefee: string;
  deliveryfee: string;
  gobacktomenu: string;
  required:string;
  sildetitle:string;
  sectiontag:string;
  sectiontitle1:string;
  sectiontitle2:string;
  sectionsubtitle:string;

}
const DEFAULT_LANG: LangCode = 'no';
const LANGUAGE_INFO: Record<LangCode, LanguageInfo> = {
  no: {
    htmlTag: 'no',
    localeTag: 'nb-NO',
    supportedTags: ['no', 'nb', 'nb-NO'],
    home: 'Hjem',
    about: 'Om',
    menu: 'Meny',
    takeaway: 'Takeaway',
    partyroom: 'Delikatesser',
    catering: 'Catering',
    booktable: 'Reserver Bord',
    cart: 'Vogn',
    open: 'Åpent Nå',
    discount1: '10% rabatt er aktiv! Bruk kode:',
    discount2: 'Dine in- Gratis Dessert',
    herodescription: 'Laari Adda Pakistani Street Food bringer den livlige smaken av pakistansk gatemat til Norge, og serverer dristige smaker, autentiske krydder og uforglemmelige kulinariske opplevelser i hver bit.',
    ordernow: 'Bestill Nå',
    aboutitle: 'Om Restauranten',
    abouttitle: 'Velkommen til Laari Adda Pakistani Street Food ',
    aboutdescription: 'Laari er den nettbaserte tilstedeværelsen av Laari Adda Pakistani Street Food, en restaurantopplevelse som hyller dristige og autentiske pakistanske gatematsmaker. Nettstedet introduserer besøkende for en levende meny med tradisjonelle retter og drikke inspirert av Pakistans rike kulinariske arv, servert i et livlig miljø som blander uformell bespisning med kulturelle smaker. Kunder kan utforske forskjellige mat- og drikkealternativer, sjekke ut drikkelisten og finne kontaktinformasjon eller reservasjonsinformasjon for å planlegge et besøk. Restauranten har fått oppmerksomhet som et populært valg for å oppleve ekte pakistansk gatemat utenfor Pakistan, spesielt kjent på steder som Lillestrøm i Norge. Gjennom nettstedet får gjestene en følelse av matkulturen, hvordan de bestiller eller tar kontakt, og hva som gjør Laari til et smakfullt stoppested for elskere av sørasiatisk mat.',
    partyroomtitle: 'Våre spesialiteter',
    partyroomdescription: 'Merket Spis-oh kommer fra Spiser (spising på norsk) og Khaoh (spising på hindi). Spis-oh-menyen er utformet rundt tre sørindiske basisretter og roterende hovedretter med karriretter. Disse rettene er ikke bare deilige, men representerer også den rike kulturen og arven i Sør-India.',
    card1title: 'Dosa',
    card1description: 'Dosa er en sprø, smakfull crêpe laget av fermentert ris og linserøre, og serveres vanligvis med chutney og sambar. Det er en rett i Sør-India, og den nytes også som en snacks eller et lett måltid.',
    card2title: 'Biriyani',
    card2description: 'Biriyani er en smakfull risrett laget med krydder, grønnsaker eller kjøtt og ris. Det er en populær rett over hele India og er kjent for sin unike aroma og smak.',
    card3title: 'Kerala Parotta',
    card3description: 'Det er et lagvis flatbrød laget av mel, olje og vann. Prosessen med å lage Kerala Parotta innebærer dyktig elting og strekking av deigen, noe som resulterer i en myk og luftig tekstur. Serveres vanligvis med karri.',
    callus: 'Bestill Nå',
    cateringtitle: 'Laget for ethvert arrangement med Spisoh',
    cateringdescription: 'Opplev den ekte smaken av Sør-India med Spisoh, hvor autentiske smaker møter kvalitetsingredienser og lidenskapelig matlaging. Enten det er en fest, familiesammenkomst, firmaarrangement eller feiring med venner, bringer vi dristige krydder, rike tradisjoner og uforglemmelige måltider rett til bordet eller arrangementslokalet ditt. Våre cateringtjenester gjør anledningene dine stressfrie mens vi serverer deilig mat inspirert av sørindiske klassikere.',
    cateringcard1title: 'Sørindisk catering med autentisk smak',
    cateringcard1description: 'Nyt de dristige, rike smakene på Spisohs meny – fra dosa og biryani til karriretter i Kerala-stil – brakt til live med ferske ingredienser og tradisjonelle teknikker, perfekt for store eller små sammenkomster.',
    cateringcard2title: 'Tilpassede menyalternativer for arrangementet ditt',
    cateringcard2description: 'Velg mellom faste cateringmenyer eller skreddersy ditt eget utvalg slik at det matcher arrangementsstilen, gjestenes preferanser og kostholdsbehov – enten du arrangerer en koselig middag eller en stor feiring.',
    cateringcard3title: 'Perfekt for enhver feiring',
    cateringcard3description: 'Fra bursdager og private fester til firmaarrangementer eller høytidsfester, sørger cateringfirmaet vårt for sømløs service og minneverdige måltider, slik at du kan nyte hvert øyeblikk med gjestene dine.',
    openhours: 'Åpningstider',
    monday: 'Mandag',
    tuesday: 'Tirsdag',
    wednesday: 'Onsdag',
    thursday: 'Torsdag',
    friday: 'Fredag',
    saturday: 'Lørdag',
    sunday: 'Søndag',
    contactus: 'Kontakt oss',
    location: 'Adresse',
    phone: 'Telefon',
    email: 'E-post',
    quickinfo: 'Snarveier',
    information: 'Informasjon',
    app: 'Last ned FOODSTED App',
    allrightrevserved: '© 2026 Laari Adda Pakistani Street Food. Alle rettigheter reservert.',
    poweredby: 'Drevet av FOODSTED',
    ourmenu: 'Vår meny',
    explore: 'UTFORSKE',
    menutagline: 'Utforsk våre kulinariske herligheter',
    getmenu: 'Få menyen vår',
    getmenudescription: 'Last ned vår fullstendige meny på ditt foretrukne språk.',
    getmenubutton1: 'Last ned engelsk meny',
    getmenubutton2: 'Last ned norsk meny',
    copied: 'Kopiert',
    closed: 'Lukket',
    quantity: 'Antall',
    specialinstructions: ' Spesiell Instruksjon',
    optional: 'Valgfri',
    addtocart: 'Legg i handlekurven',
    cartnote: 'Klar til å legge i handlekurv',
    carttagline: 'Nyt ganen din med vår autentiske meny',
    checkout: 'kassen',
    allergens: 'Allergener',
    yourcart: 'Din Handlekurv',
    orderitems: 'Bestillings Varer',
    ordersummary: 'Bestillings Sammendrag ',
    emptycart: 'Handlekurven din er tom.',
    noitem: 'Ingen varer til kassen.',
    noteordersummary: 'Sjekk bestillingen din før du legger den inn.',
    placeorder: 'Legg inn bestilling',
    gotomenu: 'Gå til Meny',
    name: 'Navn',
    number: 'Mobil Nummer',
    emailadress: 'E-post Adresse',
    addcomment: 'Legg til Kommentar',
    payment: 'Betalingsmåte',
    payoncounter: "brukBetal på skranke",
    picktime: 'Estimert hentetid',
    apply: 'Søke',
    promodiscount: 'Kampanje rabatt',
    discount: 'RABATTER',
    applied: 'Påført',
    minutes: 'minutter',
    ordertitle: 'Bestillings detaljer',
    ordertagline: 'Takk for bestillingen din. Her er bestillingsdetaljene dine.',
    payunsuccess: 'Betalingen mislyktes',
    payunsuccessmsg: 'Transaksjonen din kunne ikke behandles.',
    selectmethod: 'Velg betalingsmetode',
    tryagain: 'Prøv igjen',
    paysuccess: 'Betaling vellykket',
    paysuccessmsg: 'Transaksjonen din er fullført.',
    ordernumber: 'Bestillings Nummer',
    customer: 'Kunde',
    ordertype: 'Bestille Type',
    orderstatus: 'Bestillee status',
    orderitemcap: 'BESTILTE VARER',
    items: 'Varer',
    discountsm: 'Rabatt',
    servicefee: 'Service avgift',
    deliveryfee: 'Leveranse avgift',
    gobacktomenu: 'Gå tilbake til meny',
    required: 'Obligatorisk',
    sildetitle:' Galleriet vårt',
    sectiontag: 'Hva folk sier',
    sectiontitle1: 'Kunde ',
    sectiontitle2: 'Anmeldelser',
    sectionsubtitle: 'Ekte erfaringer fra våre verdsatte kunder',

  },
  en: {
    htmlTag: 'en',
    localeTag: 'en-US',
    supportedTags: ['en', 'en-US'],
    home: 'Home',
    about: 'About',
    menu: 'Menu',
    takeaway: 'Takeaway',
    partyroom: 'Delicacies',
    catering: 'Catering',
    booktable: 'Book Table',
    cart: 'Cart',
    open: 'Open Now',
    discount1: '10% Discount is Live! Use Code:',
    discount2: 'Dine in- free dessert',
    herodescription: 'Laari Adda Pakistani Street Food brings the vibrant taste of Pakistani street food to Norway, serving bold flavors, authentic spices, and unforgettable culinary experiences in every bite.',
    ordernow: 'Order Now',
    aboutitle: 'About  Restaurant',
    abouttitle: 'Welcome to Laari Adda Pakistani Street Food',
    aboutdescription: 'Laari  is the online presence of Laari Adda Pakistani Street Food, a restaurant experience that celebrates bold and authentic Pakistani street-food flavors. The site introduces visitors to a vibrant menu featuring traditional dishes and drinks inspired by the rich culinary heritage of Pakistan, served in a lively setting that blends casual dining with cultural tastes. Customers can explore different food and beverage options, check out the drink list, and find contact details or reservation information to plan a visit. The restaurant has gained attention as a popular choice for experiencing real Pakistani street food outside of Pakistan, especially noted in places like Lillestrøm, Norway. Through the website, guests get a sense of the food culture, how to order or reach out, and what makes Laari a flavorful stop for lovers of South Asian cuisine.',
    partyroomtitle: 'Our Specialities',
    partyroomdescription: 'The brand Spis-oh comes from Spiser (eating in Norsk) and Khaoh (eating in Hindi). Spis-oh menu is designed around 3 staple South Indian Foods and revolving main curry choices. These dishes are not only delicious but also represent the rich culture and heritage of South India.',
    card1title: 'Dosa',
    card1description: 'Dosa is a crispy, savory crepe made from fermented rice and lentil batter and is usually served with chutney and sambar. It is a dish in South India and is also enjoyed as a snack or light meal.',
    card2title: 'Biriyani',
    card2description: 'Biriyani is a flavorful rice dish made with spices, vegetables or meat, and rice. It is a popular dish across India and is known for its unique aroma and flavor.',
    card3title: 'Kerala Parotta',
    card3description: 'It is a layered flatbread made from flour, oil, water. Process of making Kerala Parotta involves skillful kneading and stretching of the dough, resulting in a soft and fluffy texture. Typically served with curry.',
    callus: 'order Now',
    cateringtitle: 'Crafted for Every Event with Spisoh',
    cateringdescription: 'Experience the true taste of South India with Spisoh, where authentic flavours meet quality ingredients and passionate cooking. Whether it’s a party, family gathering, corporate event, or celebration with friends, we bring bold spice, rich traditions, and unforgettable meals straight to your table or event space. Our catering services make your occasions stress-free while serving delicious food inspired by South Indian classics.',
    cateringcard1title: 'South Indian Catering with Authentic Taste',
    cateringcard1description: 'Delight in the bold, rich flavours of Spisoh’s menu — from dosa and biryani to Kerala-style curries — brought to life with fresh ingredients and traditional techniques, perfect for gatherings big or small.',
    cateringcard2title: 'Custom Menu Options for Your Event',
    cateringcard2description: 'Choose from set catering menus or tailor your own selection to match your event style, guest preferences, and dietary needs — whether you’re hosting a cozy dinner or a large celebration.',
    cateringcard3title: 'Perfect for Every Celebration',
    cateringcard3description: 'From birthdays and private parties to corporate functions or holiday feasts, our catering ensures seamless service and memorable meals, so you can enjoy every moment with your guests.',
    openhours: 'Opening Hours',
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
    contactus: 'Get in Touch',
    location: 'Location',
    phone: 'Phone',
    email: 'Email',
    quickinfo: 'Quick Links',
    information: 'Information',
    app: 'Download FOODSTED App',
    allrightrevserved: '© 2026 Laari Adda Pakistani Street Food. All rights reserved.',
    poweredby: 'Powered by FOODSTED',
    ourmenu: 'Our Menu',
    menutagline: 'Explore Our Culinary Delights',
    explore: 'EXPLORE',
    getmenu: 'Get Our Menu',
    getmenudescription: 'Download our full menu in your preferred language.',
    getmenubutton1: 'Download English Menu',
    getmenubutton2: 'Download Norwegian Menu',
    copied: 'Copied',
    closed: 'Closed',
    quantity: 'Quantity',
    specialinstructions: ' Special Instruction',
    optional: 'Optional',
    addtocart: ' Add To Cart ',
    cartnote: 'Ready to add to cart ',
    carttagline: 'Delight your palate with our authentic menu',
    checkout: 'Checkout',
    allergens: 'Allergens',
    yourcart: 'Your Cart',
    orderitems: 'Order Items',
    ordersummary: 'Order Summary',
    emptycart: 'Your cart is empty.',
    noitem: 'No items to checkout.',
    noteordersummary: 'Review your order before placing it.',
    placeorder: 'Place Order',
    gotomenu: 'Go to Menu',
    name: 'Name',
    number: 'Moblie Number',
    emailadress: 'Email Address',
    addcomment: 'Add Comment',
    payment: 'Payment Method',
    payoncounter: "Pay on Counter",
    picktime: 'Estimated Pickup Time',
    apply: 'Apply',
    promodiscount: 'Promo Discount',
    discount: 'DISCOUNTS',
    applied: 'Applied',
    minutes: 'minutes',
    ordertitle: 'Order Details',
    ordertagline: 'Thank you for your order. Here are your order details.',
    payunsuccess: 'Payment Unsuccessful',
    payunsuccessmsg: 'Your transaction could not be processed',
    selectmethod: 'Select payment method',
    tryagain: 'Try Again',
    paysuccess: 'Payment Successful',
    paysuccessmsg: 'Your transaction has been completed.',
    ordernumber: 'Order Number',
    customer: 'Customer',
    ordertype: 'Order Type',
    orderstatus: 'Order Status',
    orderitemcap: 'ORDERED ITEMS',
    items: 'Items',
    discountsm: 'Discount',
    servicefee: 'Service fee',
    deliveryfee: 'Delivery fee',
    gobacktomenu: 'Go Back to Menu',
    required: 'Required',
    sildetitle:'Our Gallery',
    sectiontag: 'What People Say',
    sectiontitle1: 'Customer ',
    sectiontitle2: 'Reviews',
    sectionsubtitle: 'Real experiences from our valued customers',

  }
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  getLangFromRoute(route: ActivatedRoute): LangCode {
    let current: ActivatedRoute | null = route;

    while (current) {
      const lang = current.snapshot.paramMap.get('lang');
      if (lang && this.isAllowedLang(lang)) {
        return lang;
      }
      current = current.parent;
    }

    return this.getBrowserLang();
  }

  getBrowserLang(): LangCode {
    if (typeof navigator === 'undefined') {
      return DEFAULT_LANG;
    }

    const browserValue = navigator.language || navigator['language'] || '';
    const candidate = browserValue.split('-')[0].toLowerCase();
    return this.isAllowedLang(candidate) ? candidate : DEFAULT_LANG;
  }

  getHtmlLangTag(lang: LangCode): string {
    return LANGUAGE_INFO[lang].htmlTag;
  }

  getLocaleTag(lang: LangCode): string {
    return LANGUAGE_INFO[lang].localeTag;
  }

  getLanguageTags(lang: LangCode): string[] {
    return LANGUAGE_INFO[lang].supportedTags;
  }

  getHomeText(lang: LangCode): string {
    return LANGUAGE_INFO[lang].home;
  }

  getAboutText(lang: LangCode): string {
    return LANGUAGE_INFO[lang].about;
  }

  t(lang: LangCode, key: string): any {
    return LANGUAGE_INFO[lang][key as keyof LanguageInfo] || '';
  }

  isAllowedLang(value: string | null | undefined): value is LangCode {
    return value === 'no' || value === 'en';
  }
}
