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
  cartbody: string;
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
  getmenu: string;
  getmenudescription: string;
  getmenubutton1: string;
  getmenubutton2: string;
  copied: string;
  closed: string;
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
    partyroom: 'Selskapslokale',
    catering: 'Catering',
    booktable: 'Reserver Bord',
    cart: 'Vogn',
    cartbody: 'Din bestilling er tom',
    open: 'Lukket',
    discount1: '10% rabatt er aktiv! Bruk kode:',
    discount2: 'Dine in- Gratis Dessert',
    herodescription: 'Opplev en arv av smak - autentiske kongelige delikatesser laget for den moderne maharajaen.',
    ordernow: 'Bestill Nå',
    aboutitle: 'Om Restauranten',
    abouttitle: 'Velkommen til Shaahi Mahall Indisk Restaurant & Bar',
    aboutdescription: 'På Shaahi Mahall forteller hver rett en historie om kongelig arv og tidløs smak. Inspirert av Indias storslåtte kjøkken, blander vår matopplevelse eldgamle tradisjoner med et raffinert moderne preg, og skaper en smaksopplevelse som er ment å nytes av alle.Fra våre nøye balanserte krydder til våre signaturkarriretter, er hver oppskrift laget med lidenskap og autentisitet.Ferske urter, kvalitetsingredienser og tidshevnte teknikker forenes for å levere rike aromaer og uforglemmelige smaker i hver bit. Gjør opplevelsen komplett med vårt kuraterte utvalg av forfriskende lassi, håndverksøl og fine viner – nøye utvalgt for å utfylle kjøkkenet vårt og løfte hvert måltid.Enten du blir med oss for en uformell sammenkomst eller en spesiell feiring, inviterer Shaahi Mahall deg til å spise som en konge og nyte noe virkelig eksepsjonelt.',
    partyroomtitle: 'Feir med stil',
    partyroomdescription:'Arranger dine spesielle øyeblikk i det elegante selskapslokalet hos Shaahi Mahall. Enten det er en bursdag, en familiesammenkomst eller en bedriftsmiddag, skaper vår innbydende atmosfære og oppmerksomme service den perfekte rammen for minneverdige feiringer.',
    card1title: 'Bursdagsfeiringer',
    card1description: 'Feir din spesielle dag i et livlig og komfortabelt selskapslokale med god mat og en glad atmosfære.',
    card2title: 'Jubileumsfeiringer',
    card2description: 'Gjør jubileet ditt minneverdig med en intim setting, deilig mat og elegant service.',
    card3title: 'Private & Bedriftsarrangementer',
    card3description: 'Perfekt for team-sammenkomster, bedriftsmiddager og private feiringer med familie og venner.',
    callus: 'Ring oss',
    cateringtitle: 'Tilpasset enhver anledning',
    cateringdescription: 'Opplev førsteklasses catering med Shaahi Mahall, hvor tradisjon møter moderne eleganse. Vi tilbereder hver rett med nøye utvalgte krydder og ferske ingredienser for å skape uforglemmelige smaker. Fra bryllup til bedriftsarrangementer sørger vi for en smidig og profesjonell service som lar deg nyte dine spesielle øyeblikk uten stress.',
    cateringcard1title: 'Kokkens Spesialiteter',
    cateringcard1description: 'Kuratert meny med nordisk kjøkken og premiumgrillerte valg tilberedt av våre prisbelønte kokker.',
    cateringcard2title: 'Perfekt Atmosfære',
    cateringcard2description: 'Elegant omgivelse med nøye tilpasset belysning, bakgrunnsmusikk og gjennomtenkt service.',
    cateringcard3title: 'Minneverdige Øyeblikk',
    cateringcard3description: 'Lag varige minner med kjære i vårt sofistikerte og imøtekommende miljø.',
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
    allrightrevserved: '© 2026 Shaahi Mahall Indisk Restaurant & Bar. Alle rettigheter reservert.',
    poweredby: 'Drevet av FoodSted',
    ourmenu: 'Vår meny',
    menutagline: 'Utforsk våre kulinariske herligheter',
    getmenu: 'Få menyen vår',
    getmenudescription: 'Last ned vår fullstendige meny på ditt foretrukne språk.',
    getmenubutton1: 'Last ned engelsk meny',
    getmenubutton2: 'Last ned norsk meny',
    copied: 'Kopiert',
    closed: 'Stengt',
  },
  en: {
    htmlTag: 'en',
    localeTag: 'en-US',
    supportedTags: ['en', 'en-US'],
    home: 'Home',
    about: 'About',
    menu: 'Menu',
    takeaway: 'Takeaway',
    partyroom: 'Party Room',
    catering: 'Catering',
    booktable: 'Book Table',
    cart: 'Cart',
    cartbody: 'Your cart is empty',
    open: 'Open Now',
    discount1: '10% Discount is Live! Use Code:',
    discount2: 'Dine in- free dessert',
    herodescription: 'Experience a legacy of taste — authentic royal delicacies crafted for the modern Maharaja',
    ordernow: 'Order Now',
    aboutitle: 'About the Restaurant',
    abouttitle: 'Welcome to Shaahi Mahall Indisk Restaurant & Bar',
    aboutdescription: 'At Shaahi Mahall every dish tells a story of royal heritage and timeless flavour. Inspired by the grand kitchens of India, our dining experience blends age-old traditions with a refined modern touch, creating a journey of taste meant to be enjoyed by all. From our carefully balanced spices to our signature curries, each recipe is crafted with passion and authenticity. Fresh herbs, quality ingredients, and time-honoured techniques come together to deliver rich aromas and unforgettable flavours in every bite. Complete your experience with our curated selection of refreshing lassis, craft beers, and fine wines - thoughtfully chosen to complement our cuisine and elevate every meal. Whether you are joining us for a casual gathering or a special celebration, Shaahi Mahall invites you to dine like royalty and savour something truly exceptional.',
    partyroomtitle: 'Celebrate in Style',
    partyroomdescription: 'Host your special moments in the elegant party space at Shaahi Mahall. Whether it’s a birthday, family gathering, or corporate dinner, our welcoming atmosphere and attentive service create the perfect setting for memorable celebrations.',
    card1title: 'Birthday Celebrations',
    card1description: 'Celebrate your special day in a vibrant and comfortable party space with great food and a joyful atmosphere.', 
    card2title: 'Anniversary Celebrations',
    card2description: 'Make your anniversary memorable with an intimate setting, delicious cuisine, and elegant service.',
    card3title: 'Private & Corporate Events',
    card3description: 'Perfect for team gatherings, corporate dinners, and private celebrations with family and friends.',
    callus: 'Call Us',
    cateringtitle: 'Crafted For Every Occasion',
    cateringdescription: 'Experience premium catering with Shaahi Mahall, where tradition meets modern elegance. We prepare every dish with carefully selected spices and fresh ingredients to create unforgettable flavours. From weddings to corporate events, we ensure a smooth, professional service that lets you enjoy your special moments stress-free.',
    cateringcard1title: 'Royal Catering Experience',
    cateringcard1description: 'Savor the richness of Shaahi Mahall cuisine, elegantly presented for every special occasion.',
    cateringcard2title: 'Authentic Modern Flavours',
    cateringcard2description: 'Traditional Indian recipes crafted with fresh ingredients and perfectly balanced spices.',
    cateringcard3title: 'Perfect for Every Occasion',
    cateringcard3description: 'Catering tailored for weddings, corporate events, birthdays, and all celebrations.',
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
    allrightrevserved: '© 2026 Shaahi Mahall Indisk Restaurant & Bar. All rights reserved.',
    poweredby: 'Powered by FoodSted',
    ourmenu: 'Our Menu',
    menutagline: 'Explore Our Culinary Delights',
    getmenu: 'Get Our Menu',
    getmenudescription: 'Download our full menu in your preferred language.',
    getmenubutton1: 'Download English Menu',
    getmenubutton2: 'Download Norwegian Menu',
    copied: 'Copied',
    closed: 'Closed',
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
