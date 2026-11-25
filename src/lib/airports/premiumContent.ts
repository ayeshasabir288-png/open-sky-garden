import pickupCar from "@/assets/hero-slide-sedan-airport.jpg";
import privateCar from "@/assets/fleet-business-sedan.jpg";
import taxiIllustration from "@/assets/frankfurt/fra-taxi-munich.jpg";
import busIllustration from "@/assets/frankfurt/fra-bus-airliner.jpg";

import amsHero from "@/assets/airports/ams/ams-hero-aerial.jpg";
import amsOverview from "@/assets/airports/ams/ams-overview-dawn.jpg";
import amsTerminal from "@/assets/airports/ams/ams-terminal-plaza.jpg";
import amsRail from "@/assets/airports/ams/ams-rail-station.jpg";
import amsBus from "@/assets/airports/ams/ams-bus-shuttle.jpg";
import amsDestCentraal from "@/assets/airports/destinations/ams-amsterdam-centraal.jpg";
import amsDestLeiden from "@/assets/airports/destinations/ams-dest-leiden.jpg";
import amsDestHague from "@/assets/airports/destinations/ams-dest-hague.jpg";
import amsDestRotterdam from "@/assets/airports/destinations/ams-dest-rotterdam.jpg";

import cdgHero from "@/assets/airports/cdg/cdg-hero-aerial.jpg";
import cdgOverview from "@/assets/airports/cdg/cdg-overview-aerial.jpg";
import cdgTerminal from "@/assets/airports/cdg/cdg-terminal-interior.jpg";
import cdgRail from "@/assets/airports/cdg/cdg-rail-rer.jpg";
import cdgBus from "@/assets/airports/cdg/cdg-bus-roissypole.jpg";
import cdgCdgval from "@/assets/airports/cdg/cdg-cdgval.jpg";
import cdgTaxi from "@/assets/airports/cdg/cdg-taxi-holding.jpg";
import cdgDestParis from "@/assets/airports/destinations/cdg-dest-paris.jpg";
import cdgDestSaintDenis from "@/assets/airports/destinations/cdg-dest-saint-denis.jpg";
import cdgDestArgenteuil from "@/assets/airports/destinations/cdg-dest-argenteuil.jpg";

import bcnHero from "@/assets/airports/bcn/bcn-hero-aerial.jpg";
import bcnOverview from "@/assets/airports/bcn/bcn-overview-t1.jpg";
import bcnTerminal from "@/assets/airports/bcn/bcn-terminal-t1.jpg";
import bcnTerminalDetail from "@/assets/airports/bcn/bcn-terminal-detail.jpg";
import bcnRail from "@/assets/airports/bcn/bcn-rail-t2.jpg";
import bcnBus from "@/assets/airports/bcn/bcn-bus-aerobus.jpg";
import bcnDestCatalunya from "@/assets/airports/destinations/bcn-dest-catalunya.jpg";
import bcnDestEspanya from "@/assets/airports/destinations/bcn-dest-espanya.jpg";
import bcnDestFira from "@/assets/airports/destinations/bcn-dest-fira.jpg";
import bcnDestSants from "@/assets/airports/destinations/bcn-dest-sants.jpg";

import fcoHero from "@/assets/airports/fco/fco-hero-aerial.jpg";
import fcoOverview from "@/assets/airports/fco/fco-overview-terminal.jpg";
import fcoRail from "@/assets/airports/fco/fco-rail-station.jpg";
import fcoRailLeonardo from "@/assets/airports/fco/fco-rail-leonardo.jpg";
import fcoDestTermini from "@/assets/airports/destinations/fco-dest-termini.jpg";
import fcoDestTiburtina from "@/assets/airports/destinations/fco-dest-tiburtina.jpg";
import fcoDestVatican from "@/assets/airports/destinations/fco-dest-vatican.jpg";
import fcoDestCoast from "@/assets/airports/destinations/fco-dest-coast.jpg";

import lhrHero from "@/assets/airports/lhr/lhr-hero-aerial.jpg";
import lhrOverview from "@/assets/airports/lhr/lhr-overview-aerial.jpg";
import lhrTerminal from "@/assets/airports/lhr/lhr-terminal-t5.jpg";
import lhrTerminalExterior from "@/assets/airports/lhr/lhr-terminal-exterior.jpg";
import lhrRail from "@/assets/airports/lhr/lhr-rail-t5.jpg";
import lhrBus from "@/assets/airports/lhr/lhr-bus-coach.jpg";
import lhrDestPaddington from "@/assets/airports/destinations/lhr-dest-paddington.jpg";
import lhrDestFarringdon from "@/assets/airports/destinations/lhr-dest-farringdon.jpg";
import lhrDestLiverpool from "@/assets/airports/destinations/lhr-dest-liverpool.jpg";
import lhrDestVictoria from "@/assets/airports/destinations/lhr-dest-victoria.jpg";
import lhrDestKingston from "@/assets/airports/destinations/lhr-dest-kingston.jpg";
import lhrDestRichmond from "@/assets/airports/destinations/lhr-dest-richmond.jpg";

import type { LicensedPhoto, PremiumAirportContent, PremiumTransportCard } from "./premium";

const DEFAULT_CHANGES = "Resized and converted to JPEG from the Commons original";

type PhotoInput = Omit<LicensedPhoto, "changes"> & { changes?: string };

function photo(input: PhotoInput): LicensedPhoto {
  const { changes = DEFAULT_CHANGES, ...rest } = input;
  return { ...rest, changes };
}

const CC0 = "https://creativecommons.org/publicdomain/zero/1.0/";
const CC_BY_4 = "https://creativecommons.org/licenses/by/4.0/";
const CC_BY_2_5 = "https://creativecommons.org/licenses/by/2.5/";
const CC_BY_2 = "https://creativecommons.org/licenses/by/2.0/";
const CC_BY_SA_4 = "https://creativecommons.org/licenses/by-sa/4.0/";
const CC_BY_SA_3 = "https://creativecommons.org/licenses/by-sa/3.0/";
const CC_BY_SA_3_DE = "https://creativecommons.org/licenses/by-sa/3.0/de/deed.en";
const CC_BY_SA_2 = "https://creativecommons.org/licenses/by-sa/2.0/";

/* Shared illustrative photography: existing project assets, explicitly labelled at point of use. */
const taxiRankIllustration = photo({
  src: taxiIllustration,
  alt: "Mercedes taxis waiting at a rank outside Munich Airport Terminal 1",
  credit: "Bene16",
  license: "CC BY-SA 3.0",
  source: "https://commons.wikimedia.org/wiki/File:Almost_Mercedes-Taxis_at_Raetia-Secunda12.jpg",
  licenseUrl: CC_BY_SA_3,
  changes: "Resized from the original",
});

const coachIllustration = photo({
  src: busIllustration,
  alt: "Airliner coach used for the Darmstadt to Frankfurt Airport service",
  credit: "Erkaha",
  license: "CC BY-SA 4.0",
  source: "https://commons.wikimedia.org/wiki/File:Airliner-Bus-Darmstadt.jpg",
  licenseUrl: CC_BY_SA_4,
  changes: "Resized from the original",
});

const pickupPhoto = {
  image: pickupCar,
  alt: "Black luxury sedan driving past a modern European airport terminal at sunset",
};

function privateCard(): PremiumTransportCard {
  return {
    title: "Private transfer",
    label: "Pre-booked car",
    text: "A direct journey to a specified address, arranged in advance with the destination and pickup agreed first.",
    image: privateCar,
    alt: "Black executive sedan ready for an airport transfer",
    note: "Illustrative vehicle — existing project asset, not photographed at this airport",
    href: "#book",
    cta: "Open the enquiry preview",
    icon: "private",
  };
}

/* Amsterdam Schiphol photographs. */
const amsHeroPhoto = photo({
  src: amsHero,
  alt: "Aerial view of Amsterdam Airport Schiphol and its runways",
  credit: "Ad Meskens",
  license: "CC BY-SA 4.0",
  source: "https://commons.wikimedia.org/wiki/File:Schiphol_airport_01.jpg",
  licenseUrl: CC_BY_SA_4,
});
const amsOverviewPhoto = photo({
  src: amsOverview,
  alt: "All six Schiphol runways visible at dawn from a departing aircraft",
  credit: "Adenosine Triphosphate",
  license: "CC BY-SA 4.0",
  source: "https://commons.wikimedia.org/wiki/File:Schiphol_airport_at_dawn.jpg",
  licenseUrl: CC_BY_SA_4,
});
const amsTerminalPhoto = photo({
  src: amsTerminal,
  alt: "Schiphol Plaza, the public hall connecting the airport with rail, bus and taxi access",
  credit: "Rob Koster",
  license: "CC BY-SA 4.0",
  source: "https://commons.wikimedia.org/wiki/File:Schiphol_Plaza_Hal.jpg",
  licenseUrl: CC_BY_SA_4,
});
const amsRailPhoto = photo({
  src: amsRail,
  alt: "Main hall of Schiphol Airport railway station",
  credit: "Yintan",
  license: "CC BY 4.0",
  source: "https://commons.wikimedia.org/wiki/File:Schiphol_railway_station.jpg",
  licenseUrl: CC_BY_4,
});
const amsBusPhoto = photo({
  src: amsBus,
  alt: "BusiNext shuttle bus at Schiphol Airport",
  credit: "Lijn 45",
  license: "CC BY-SA 4.0",
  source: "https://commons.wikimedia.org/wiki/File:BusiNext_801_te_Schiphol.jpg",
  licenseUrl: CC_BY_SA_4,
});
const amsCentraalPhoto = photo({
  src: amsDestCentraal,
  alt: "Amsterdam Centraal railway station",
  credit: "Christian Alexander Tietgen",
  license: "CC BY 4.0",
  source: "https://commons.wikimedia.org/wiki/File:Amsterdam_Centraal_am_19.1.2019_12.jpg",
  licenseUrl: CC_BY_4,
});
const amsLeidenPhoto = photo({
  src: amsDestLeiden,
  alt: "Exterior of Leiden Centraal railway station",
  credit: "Donald Trung Quoc Don",
  license: "CC BY-SA 4.0",
  source:
    "https://commons.wikimedia.org/wiki/File:Exterior_of_Leiden_Centraal,_Leiden_(2018)_02.jpg",
  licenseUrl: CC_BY_SA_4,
});
const amsHaguePhoto = photo({
  src: amsDestHague,
  alt: "Babylon complex beside Den Haag Centraal railway station",
  credit: "Hubertl",
  license: "CC BY-SA 4.0",
  source:
    "https://commons.wikimedia.org/wiki/File:Babylon_Complex_-_Den_Haag_Centraal_Station-1419.jpg",
  licenseUrl: CC_BY_SA_4,
});
const amsRotterdamPhoto = photo({
  src: amsDestRotterdam,
  alt: "Rotterdam Centraal railway station",
  credit: "Eddy BERTHIER",
  license: "CC0",
  source: "https://commons.wikimedia.org/wiki/File:Rotterdam_Centraal_Station_(8707002672).jpg",
  licenseUrl: CC0,
});

/* Paris Charles de Gaulle photographs. */
const cdgHeroPhoto = photo({
  src: cdgHero,
  alt: "Aerial view of Paris-Charles de Gaulle Airport",
  credit: "Sdkb",
  license: "CC BY-SA 4.0",
  source: "https://commons.wikimedia.org/wiki/File:CDG_from_the_air.jpg",
  licenseUrl: CC_BY_SA_4,
});
const cdgOverviewPhoto = photo({
  src: cdgOverview,
  alt: "Aerial view of Paris-Charles de Gaulle Airport and its terminals",
  credit: "Citizen59",
  license: "CC BY-SA 2.0",
  source: "https://commons.wikimedia.org/wiki/File:Vue_a%C3%A9rienne_de_CDG,_Paris.jpg",
  licenseUrl: CC_BY_SA_2,
});
const cdgTerminalPhoto = photo({
  src: cdgTerminal,
  alt: "Interior of Paris-Charles de Gaulle Airport, photographed circa 2010",
  credit: "Briancrowley12",
  license: "CC0",
  source: "https://commons.wikimedia.org/wiki/File:Charles_de_Gaulle_Airport_Terminal_Interior.jpg",
  licenseUrl: CC0,
});
const cdgRailPhoto = photo({
  src: cdgRail,
  alt: "RER station at Paris-Charles de Gaulle Airport",
  credit: "oswaldo bautista",
  license: "CC BY-SA 3.0",
  source: "https://commons.wikimedia.org/wiki/File:CDG_RER_Station_-_panoramio.jpg",
  licenseUrl: CC_BY_SA_3,
});
const cdgCdgvalPhoto = photo({
  src: cdgCdgval,
  alt: "Portes L station on the CDGVAL automated people-mover network",
  credit: "Eole99",
  license: "CC BY-SA 3.0",
  source: "https://commons.wikimedia.org/wiki/File:CDGVAL-Ligne2_Station_Portes_L.JPG",
  licenseUrl: CC_BY_SA_3,
});
const cdgTaxiPhoto = photo({
  src: cdgTaxi,
  alt: "Paris taxi holding area at Charles de Gaulle Airport",
  credit: "Enmix",
  license: "CC BY-SA 3.0",
  source:
    "https://commons.wikimedia.org/wiki/File:Taxis_parisiens_%C3%A0_l%27a%C3%A9roport_Paris-Charles-de-Gaulle.jpg",
  licenseUrl: CC_BY_SA_3,
});
const cdgBusPhoto = photo({
  src: cdgBus,
  alt: "Roissypôle bus station at Paris-Charles de Gaulle Airport",
  credit: "Chabe01",
  license: "CC BY-SA 4.0",
  source:
    "https://commons.wikimedia.org/wiki/File:Gare_Routi%C3%A8re_Roissypole_-_Tremblay-en-France_(FR93)_-_2024-09-08_-_1.jpg",
  licenseUrl: CC_BY_SA_4,
});
const cdgParisPhoto = photo({
  src: cdgDestParis,
  alt: "Eiffel Tower in Paris at night",
  credit: "Pierre Blaché",
  license: "CC0",
  source: "https://commons.wikimedia.org/wiki/File:Eiffel_Tower,_Paris_12_June_2023.jpg",
  licenseUrl: CC0,
});
const cdgSaintDenisPhoto = photo({
  src: cdgDestSaintDenis,
  alt: "Saint-Denis Pleyel metro station in Paris",
  credit: "Chabe01",
  license: "CC BY-SA 4.0",
  source:
    "https://commons.wikimedia.org/wiki/File:Station_Saint_Denis_Pleyel_M%C3%A9tro_Paris_Ligne_14_-_Saint-Denis_(FR93)_-_2024-06-26_-_2.jpg",
  licenseUrl: CC_BY_SA_4,
});
const cdgArgenteuilPhoto = photo({
  src: cdgDestArgenteuil,
  alt: "Rail line at Argenteuil near Paris",
  credit: "Chabe01",
  license: "CC BY-SA 4.0",
  source:
    "https://commons.wikimedia.org/wiki/File:Ligne_Ferroviaire_Paris_Saint_Lazare_Mantes_via_Conflans_-_Argenteuil_(FR95)_-_2024-04-13_-_2.jpg",
  licenseUrl: CC_BY_SA_4,
});

/* Barcelona El Prat photographs. */
const bcnHeroPhoto = photo({
  src: bcnHero,
  alt: "Barcelona–El Prat airport seen from the air",
  credit: "ERIC SALARD",
  license: "CC BY-SA 2.0",
  source:
    "https://commons.wikimedia.org/wiki/File:BCN_AIRPORT_FROM_FLIGHT_BCN-ORY_A320_EC-MLE_(43952944862).jpg",
  licenseUrl: CC_BY_SA_2,
});
const bcnOverviewPhoto = photo({
  src: bcnOverview,
  alt: "Terminal 1 at Barcelona–El Prat Airport",
  credit: "Aitor Agirregabiria",
  license: "CC BY-SA 2.0",
  source: "https://commons.wikimedia.org/wiki/File:T1_Prat_Aitor_Agirregabiria.jpg",
  licenseUrl: CC_BY_SA_2,
});
const bcnTerminalPhoto = photo({
  src: bcnTerminal,
  alt: "Barcelona–El Prat Terminal 1",
  credit: "Nasobema lyricum",
  license: "CC0",
  source: "https://commons.wikimedia.org/wiki/File:Airport_Barcelona_Terminal_1_002.jpg",
  licenseUrl: CC0,
});
const bcnTerminalDetailPhoto = photo({
  src: bcnTerminalDetail,
  alt: "Catholic chapel inside Terminal 1 at Barcelona–El Prat",
  credit: "Rei Momo",
  license: "CC0",
  source: "https://commons.wikimedia.org/wiki/File:El_Prat_Airport_Catholic_Chapel.jpg",
  licenseUrl: CC0,
});
const bcnRailPhoto = photo({
  src: bcnRail,
  alt: "Aeroport T2 station at Barcelona–El Prat",
  credit: "ItsAstrid",
  license: "CC BY-SA 4.0",
  source: "https://commons.wikimedia.org/wiki/File:Estaci%C3%B3_d%27Aeroport_T2_per_R-Aeroport.jpg",
  licenseUrl: CC_BY_SA_4,
});
const bcnBusPhoto = photo({
  src: bcnBus,
  alt: "Aerobús coach photographed in Barcelona",
  credit: "Alf van Beem",
  license: "CC0",
  source: "https://commons.wikimedia.org/wiki/File:Setra_Aerobus_pic1.JPG",
  licenseUrl: CC0,
});
const bcnCatalunyaPhoto = photo({
  src: bcnDestCatalunya,
  alt: "Plaça de Catalunya in central Barcelona",
  credit: "Rauenstein",
  license: "CC BY-SA 3.0",
  source: "https://commons.wikimedia.org/wiki/File:Barcelona-Pla%C3%A7a_de_Catalunya.jpg",
  licenseUrl: CC_BY_SA_3,
});
const bcnEspanyaPhoto = photo({
  src: bcnDestEspanya,
  alt: "Plaça d’Espanya and Museu Nacional d’Art de Catalunya",
  credit: "Mgimelfarb",
  license: "CC BY-SA 4.0",
  source:
    "https://commons.wikimedia.org/wiki/File:Museu_Nacional_d%27Art_de_Catalunya_and_Main_Square.jpg",
  licenseUrl: CC_BY_SA_4,
});
const bcnFiraPhoto = photo({
  src: bcnDestFira,
  alt: "Fira de Barcelona Gran Via venue",
  credit: "Kent Wang",
  license: "CC BY 4.0",
  source: "https://commons.wikimedia.org/wiki/File:Fira_de_Barcelona_(Gran_Via).jpg",
  licenseUrl: CC_BY_4,
});
const bcnSantsPhoto = photo({
  src: bcnDestSants,
  alt: "Barcelona Sants railway station",
  credit: "JT Curses",
  license: "CC BY-SA 4.0",
  source:
    "https://commons.wikimedia.org/wiki/File:Estacio_Barcelona_Sants_-_2_-_2010-10-18_-_JTCurses.jpg",
  licenseUrl: CC_BY_SA_4,
});

/* Rome Fiumicino photographs. */
const fcoHeroPhoto = photo({
  src: fcoHero,
  alt: "Aerial view of Rome Fiumicino Airport",
  credit: "Ra Boe / Wikipedia",
  license: "CC BY-SA 3.0 DE",
  source: "https://commons.wikimedia.org/wiki/File:Fiumicino_Airport_2011-by-RaBo-08.jpg",
  licenseUrl: CC_BY_SA_3_DE,
  creditLine: "Ra Boe / Wikipedia · CC BY-SA 3.0 DE",
});
const fcoOverviewPhoto = photo({
  src: fcoOverview,
  alt: "Leonardo da Vinci–Rome Fiumicino Airport terminal area",
  credit: "Darafsh",
  license: "CC BY-SA 3.0",
  source:
    "https://commons.wikimedia.org/wiki/File:Leonardo_da_Vinci%E2%80%93Fiumicino_Airport_(04).jpg",
  licenseUrl: CC_BY_SA_3,
});
const fcoRailPhoto = photo({
  src: fcoRail,
  alt: "Fiumicino Aeroporto railway station",
  credit: "Nenea hartia",
  license: "CC BY-SA 4.0",
  source: "https://commons.wikimedia.org/wiki/File:Fiumicino_Aeroporto_train_station.02.jpg",
  licenseUrl: CC_BY_SA_4,
});
const fcoRailLeonardoPhoto = photo({
  src: fcoRailLeonardo,
  alt: "Leonardo Express and regional train at Fiumicino Aeroporto",
  credit: "Cyril Yoshi",
  license: "CC BY-SA 4.0",
  source: "https://commons.wikimedia.org/wiki/File:Fiumicino_Aeroporto_railway_station.jpg",
  licenseUrl: CC_BY_SA_4,
});
const fcoTerminiPhoto = photo({
  src: fcoDestTermini,
  alt: "Train at Roma Termini railway station",
  credit: "Rsa",
  license: "CC BY-SA 3.0",
  source:
    "https://commons.wikimedia.org/wiki/File:NTV_ETR_675_Roma_Termini_train_station_1_20181227.jpg",
  licenseUrl: CC_BY_SA_3,
});
const fcoTiburtinaPhoto = photo({
  src: fcoDestTiburtina,
  alt: "Roma Tiburtina railway station",
  credit: "CAPTAIN RAJU",
  license: "CC BY-SA 4.0",
  source: "https://commons.wikimedia.org/wiki/File:Roma_Tiburtina_railway_station.01.jpg",
  licenseUrl: CC_BY_SA_4,
});
const fcoVaticanPhoto = photo({
  src: fcoDestVatican,
  alt: "St Peter’s Basilica in Rome",
  credit: "Mattana",
  license: "Public domain",
  source: "https://commons.wikimedia.org/wiki/File:Rome_basilica_st_peter_011.JPG",
  licenseUrl: "https://commons.wikimedia.org/wiki/File:Rome_basilica_st_peter_011.JPG",
});
const fcoCoastPhoto = photo({
  src: fcoDestCoast,
  alt: "Satellite view of the Tiber mouth and coast near Fiumicino",
  credit: "NASA / Lyndon B. Johnson Space Center",
  license: "Public domain",
  source:
    "https://commons.wikimedia.org/wiki/File:ISS064-E-51254_-_View_of_Italy_-_Tiber_(Tevere)_-_Lido_di_Ostia_-_Port_of_Rome_(Porto_di_Roma)_-_Fiumicino_-_Isola_di_Tor_Boacciana_-_Dragoncello_-_Ostia_Antica_-_Tyrrhenian_Sea_(cropped).jpg",
  licenseUrl: "https://www.nasa.gov/nasa-brand-center/images-and-media/",
});

/* London Heathrow photographs. */
const lhrHeroPhoto = photo({
  src: lhrHero,
  alt: "Terminal 3 at London Heathrow Airport seen from the air",
  credit: "Panhard",
  license: "CC BY 2.5",
  source: "https://commons.wikimedia.org/wiki/File:Heathrow_Airport_010.jpg",
  licenseUrl: CC_BY_2_5,
});
const lhrOverviewPhoto = photo({
  src: lhrOverview,
  alt: "Heathrow Airport seen from the air",
  credit: "Thomas Nugent",
  license: "CC BY-SA 2.0",
  source:
    "https://commons.wikimedia.org/wiki/File:Heathrow_Airport_from_the_air_-_geograph.org.uk_-_4652802.jpg",
  licenseUrl: CC_BY_SA_2,
});
const lhrTerminalPhoto = photo({
  src: lhrTerminal,
  alt: "Inside Heathrow Terminal 5",
  credit: "CedarGlen86",
  license: "CC0",
  source: "https://commons.wikimedia.org/wiki/File:Heathrow_Airport_Terminal_5.jpg",
  licenseUrl: CC0,
});
const lhrTerminalExteriorPhoto = photo({
  src: lhrTerminalExterior,
  alt: "Heathrow Terminal 5 exterior",
  credit: "Rebecca A Wills",
  license: "CC BY-SA 2.0",
  source:
    "https://commons.wikimedia.org/wiki/File:Heathrow_Terminal_5_-_geograph.org.uk_-_7205649.jpg",
  licenseUrl: CC_BY_SA_2,
});
const lhrRailPhoto = photo({
  src: lhrRail,
  alt: "Piccadilly line platform at Heathrow Terminal 5 station",
  credit: "Sunil060902",
  license: "CC BY-SA 3.0",
  source:
    "https://commons.wikimedia.org/wiki/File:Heathrow_Terminal_5_platform_6_look_west_1973_stock.JPG",
  licenseUrl: CC_BY_SA_3,
});
const lhrBusPhoto = photo({
  src: lhrBus,
  alt: "Bus and coach station at Heathrow Airport",
  credit: "Lewis Clarke",
  license: "CC BY-SA 2.0",
  source:
    "https://commons.wikimedia.org/wiki/File:London_,_Heathrow_Airport_-_Coach_Station_-_geograph.org.uk_-_4699016.jpg",
  licenseUrl: CC_BY_SA_2,
});
const lhrPaddingtonPhoto = photo({
  src: lhrDestPaddington,
  alt: "London Paddington railway station",
  credit: "Nigel Thompson",
  license: "CC BY-SA 2.0",
  source:
    "https://commons.wikimedia.org/wiki/File:London_Paddington_railway_station_-_geograph.org.uk_-_5155502.jpg",
  licenseUrl: CC_BY_SA_2,
});
const lhrFarringdonPhoto = photo({
  src: lhrDestFarringdon,
  alt: "Farringdon station in London",
  credit: "Bastian Greshake Tzovaras",
  license: "CC BY-SA 2.0",
  source: "https://commons.wikimedia.org/wiki/File:London_-_Farringdon_station,_July_2023.jpg",
  licenseUrl: CC_BY_SA_2,
});
const lhrLiverpoolPhoto = photo({
  src: lhrDestLiverpool,
  alt: "Liverpool Street station in London",
  credit: "Amakuru",
  license: "CC BY-SA 4.0",
  source: "https://commons.wikimedia.org/wiki/File:Liverpool_Street_station_exterior.jpg",
  licenseUrl: CC_BY_SA_4,
});
const lhrVictoriaPhoto = photo({
  src: lhrDestVictoria,
  alt: "Victoria Coach Station in London",
  credit: "Ruth Sharville",
  license: "CC BY-SA 2.0",
  source:
    "https://commons.wikimedia.org/wiki/File:Victoria_Coach_Station,_London_-_geograph.org.uk_-_7112375.jpg",
  licenseUrl: CC_BY_SA_2,
});
const lhrKingstonPhoto = photo({
  src: lhrDestKingston,
  alt: "Kingston railway station in Greater London",
  credit: "Nigel Thompson",
  license: "CC BY-SA 2.0",
  source:
    "https://commons.wikimedia.org/wiki/File:Kingston_railway_station,_Greater_London_-_geograph.org.uk_-_3758377.jpg",
  licenseUrl: CC_BY_SA_2,
});
const lhrRichmondPhoto = photo({
  src: lhrDestRichmond,
  alt: "Richmond railway station in London",
  credit: "Stacey Harris",
  license: "CC BY-SA 2.0",
  source:
    "https://commons.wikimedia.org/wiki/File:Richmond_Railway_Station_-_geograph.org.uk_-_1616356.jpg",
  licenseUrl: CC_BY_SA_2,
});

const amsterdam: PremiumAirportContent = {
  heroPhoto: amsHeroPhoto,
  insetPhoto: amsOverviewPhoto,
  terminalPhoto: amsTerminalPhoto,
  railPhoto: amsRailPhoto,
  pickupPhoto,
  transportCards: [
    privateCard(),
    {
      title: "Official local taxi",
      label: "Licensed taxi",
      text: "Follow the signs from Schiphol Plaza to the official rank. App pickups are signed separately.",
      image: taxiRankIllustration.src,
      alt: taxiRankIllustration.alt,
      note: "Taxi rank at Munich Airport — illustrative only",
      href: "https://www.schiphol.nl/en/from-to-schiphol/taxi/",
      cta: "Official taxi guidance",
      icon: "taxi",
      photo: taxiRankIllustration,
    },
    {
      title: "NS train",
      label: "Rail",
      text: "The station sits directly below the terminal. Choose the service that matches your Dutch destination.",
      image: amsRailPhoto.src,
      alt: amsRailPhoto.alt,
      note: "Schiphol Airport railway station",
      href: "https://www.ns.nl/en/travel/destinations/schiphol",
      cta: "Official rail guidance",
      icon: "train",
      photo: amsRailPhoto,
    },
    {
      title: "Airport-area bus",
      label: "Bus / coach",
      text: "Buses leave Schiphol Plaza for local towns and hotels, but stop locations can change during renovation.",
      image: amsBusPhoto.src,
      alt: amsBusPhoto.alt,
      note: "Hotel shuttle bus photographed at Schiphol",
      href: "https://www.schiphol.nl/en/from-to-schiphol/by-public-transport/",
      cta: "Official bus guidance",
      icon: "bus",
      photo: amsBusPhoto,
    },
  ],
  destinationPhotos: {
    "Amsterdam Centraal": amsCentraalPhoto,
    Leiden: amsLeidenPhoto,
    "The Hague": amsHaguePhoto,
    Rotterdam: amsRotterdamPhoto,
  },
  destinationLabels: {
    "Amsterdam Centraal": "Rail arrival in the city",
    Leiden: "Direct rail destination",
    "The Hague": "Compare station choices",
    Rotterdam: "Intercity direct supplement",
  },
  galleryPhotos: [
    { photo: amsOverviewPhoto, caption: "Schiphol’s six runways at dawn", wide: true },
    { photo: amsTerminalPhoto, caption: "Schiphol Plaza transport hub" },
    { photo: amsRailPhoto, caption: "The station below the terminal" },
    { photo: amsBusPhoto, caption: "Airport-area shuttle bus" },
  ],
  officialLinks: {
    terminal: "https://www.schiphol.nl/en/airport-maps/",
    bus: "https://www.schiphol.nl/en/from-to-schiphol/by-public-transport/",
  },
  captions: {
    inset: "All six Schiphol runways at dawn",
    terminal: "Schiphol Plaza — the public transport heart of the airport",
    rail: "NS station directly beneath Schiphol Plaza",
  },
  copy: {
    factsHeading: "Schiphol transfers: the essentials at a glance.",
    factsDescription:
      "One terminal, several arrival halls and a station directly underneath the airport — start with the details that affect your meeting point.",
    terminalsHeading: "Find your arrival hall, then choose your route.",
    arrivalsTitle: "From the gate to Schiphol Plaza",
    pickupHeading: "Where to meet your driver or taxi.",
    pickupDescription:
      "The official taxi rank and app pickup point are different locations. Agree the terminal, hall and meeting point before you land.",
    taxiRankTitle: "At the official taxi rank",
    privatePickupTitle: "At a prearranged pickup",
    compareHeading: "Compare Amsterdam Schiphol transfer options.",
    compareDescription:
      "Rail, bus, rank taxis and prearranged cars each suit a different journey. Compare the full trip from terminal to final address.",
    comparisonTableHeading: "Private transfer vs taxi vs train vs bus",
    trainFeatureTitle: "Choose the Dutch train that matches your destination",
    taxiHeading: "How licensed taxis work at Schiphol.",
    taxiDescription:
      "A taxi is direct to an address, but road time and fare depend on traffic, destination and vehicle requirements.",
    routesHeading: "Where travellers go after landing at AMS.",
    routesDescription:
      "Planning references only. Times and fares come from official sources and must be rechecked for your travel date.",
    decisionsHeading: "Match the transfer to your journey.",
    galleryHeading: "Schiphol in focus.",
    galleryDescription: "Licensed photographs used in this guide, with attribution retained.",
    tipsHeading: "Three checks that make the arrival smoother.",
    faqHeading: "Amsterdam Schiphol transfer questions, answered.",
    faqDescription: "Clear answers grounded in the official references listed below.",
    sourcesHeading: "Where this Amsterdam guide was checked.",
    ctaHeading: "Ready to plan your Schiphol transfer?",
    ctaText:
      "Summarise your journey in the booking form above. Nothing is sent, reserved or charged.",
    relatedHeading: "More European airport guides.",
    relatedDescription:
      "Each guide is researched separately, with its own official sources and verified facts.",
  },
};

const paris: PremiumAirportContent = {
  heroPhoto: cdgHeroPhoto,
  insetPhoto: cdgCdgvalPhoto,
  terminalPhoto: cdgTerminalPhoto,
  railPhoto: cdgRailPhoto,
  pickupPhoto,
  transportCards: [
    privateCard(),
    {
      title: "Licensed Paris taxi",
      label: "Licensed taxi",
      text: "Use the signed taxi queue and a metered vehicle. Regulated direct fares apply to qualifying Paris journeys.",
      image: cdgTaxiPhoto.src,
      alt: cdgTaxiPhoto.alt,
      note: "Taxi holding area — not the terminal pickup exit",
      href: "https://www.service-public.gouv.fr/particuliers/actualites/A15396",
      cta: "Official taxi guidance",
      icon: "taxi",
      photo: cdgTaxiPhoto,
    },
    {
      title: "RER B",
      label: "Rail",
      text: "Two airport stations serve different terminal groups. Check the full RER and metro itinerary with luggage.",
      image: cdgRailPhoto.src,
      alt: cdgRailPhoto.alt,
      note: "RER station at CDG Airport",
      href: "https://www.iledefrance-mobilites.fr/actualites/fin-roissy-bus",
      cta: "Official rail guidance",
      icon: "train",
      photo: cdgRailPhoto,
    },
    {
      title: "Express 9517",
      label: "Bus / coach",
      text: "RoissyBus ended in March 2026. Express 9517 now links Roissypôle with Saint-Denis Pleyel and Argenteuil.",
      image: cdgBusPhoto.src,
      alt: cdgBusPhoto.alt,
      note: "Roissypôle bus station",
      href: "https://www.iledefrance-mobilites.fr/actualites/locales/detail/lancement9517",
      cta: "Official bus guidance",
      icon: "bus",
      photo: cdgBusPhoto,
    },
  ],
  destinationPhotos: {
    "Central Paris": cdgParisPhoto,
    "Saint-Denis Pleyel": cdgSaintDenisPhoto,
    Argenteuil: cdgArgenteuilPhoto,
  },
  destinationLabels: {
    "Central Paris": "RER B and onward connection",
    "Saint-Denis Pleyel": "Express 9517 hub",
    Argenteuil: "Express 9517 terminus",
  },
  galleryPhotos: [
    {
      photo: cdgOverviewPhoto,
      caption: "Aerial view of the Paris-Charles de Gaulle terminal area",
      wide: true,
    },
    { photo: cdgTerminalPhoto, caption: "Terminal interior (photographed circa 2010)" },
    { photo: cdgRailPhoto, caption: "RER station at the airport" },
    { photo: cdgCdgvalPhoto, caption: "CDGVAL automated terminal connection" },
    { photo: cdgBusPhoto, caption: "Roissypôle bus station" },
  ],
  officialLinks: {
    terminal: "https://www.parisaeroport.fr/en/passengers/at-the-airport/terminals-map/cdg",
    bus: "https://www.iledefrance-mobilites.fr/actualites/locales/detail/lancement9517",
  },
  captions: {
    inset: "Free CDGVAL connection between terminals",
    terminal: "Terminal interior (photographed circa 2010)",
    rail: "RER B station at the airport",
  },
  copy: {
    factsHeading: "Paris CDG transfers: the essentials at a glance.",
    factsDescription:
      "Terminal letters matter here, and CDGVAL connects the terminal areas. Check the full station-to-hotel journey before choosing.",
    terminalsHeading: "Find your terminal letter, then choose your route.",
    arrivalsTitle: "From the gate to ground transport",
    pickupHeading: "Where to meet your driver or taxi.",
    pickupDescription:
      "Old door numbers are not reliable private pickup instructions. Follow current signs and the provider’s confirmed instructions.",
    taxiRankTitle: "At the official taxi queue",
    privatePickupTitle: "At a prearranged pickup",
    compareHeading: "Compare Paris CDG transfer options.",
    compareDescription:
      "RER B, licensed taxis, the replacement express bus and prearranged cars each suit a different Paris itinerary.",
    comparisonTableHeading: "Private transfer vs taxi vs RER vs bus",
    trainFeatureTitle: "Choose the RER B station for your terminal",
    taxiHeading: "How licensed taxis work at CDG.",
    taxiDescription:
      "Regulated direct fares apply to qualifying Paris journeys. Traffic, destination and supplements still affect the total.",
    routesHeading: "Where travellers go after landing at CDG.",
    routesDescription:
      "RoissyBus no longer runs to Opéra. These alternatives reflect the official information checked for this guide.",
    decisionsHeading: "Match the transfer to your journey.",
    galleryHeading: "Paris CDG in focus.",
    galleryDescription: "Licensed photographs used in this guide, with attribution retained.",
    tipsHeading: "Three checks that make the arrival smoother.",
    faqHeading: "Paris CDG transfer questions, answered.",
    faqDescription: "Clear answers grounded in the official references listed below.",
    sourcesHeading: "Where this Paris guide was checked.",
    ctaHeading: "Ready to plan your CDG transfer?",
    ctaText:
      "Summarise your journey in the booking form above. Nothing is sent, reserved or charged.",
    relatedHeading: "More European airport guides.",
    relatedDescription:
      "Each guide is researched separately, with its own official sources and verified facts.",
  },
};

const barcelona: PremiumAirportContent = {
  heroPhoto: bcnHeroPhoto,
  insetPhoto: bcnTerminalDetailPhoto,
  terminalPhoto: bcnTerminalPhoto,
  railPhoto: bcnRailPhoto,
  pickupPhoto,
  transportCards: [
    privateCard(),
    {
      title: "Black-and-yellow taxi",
      label: "Licensed taxi",
      text: "Aena lists official ranks at T1 and the T2 areas. Use the signed rank rather than an unsolicited approach.",
      image: taxiRankIllustration.src,
      alt: taxiRankIllustration.alt,
      note: "Taxi rank at Munich Airport — illustrative only",
      href: "https://www.aena.es/en/josep-tarradellas-barcelona-el-prat/getting-there/taxi.html",
      cta: "Official taxi guidance",
      icon: "taxi",
      photo: taxiRankIllustration,
    },
    {
      title: "R2 Nord / L9 Sud",
      label: "Rail & metro",
      text: "R2 Nord serves Aeroport T2; L9 Sud serves both terminals but needs an interchange for many central addresses.",
      image: bcnRailPhoto.src,
      alt: bcnRailPhoto.alt,
      note: "Aeroport T2 station",
      href: "https://www.tmb.cat/en/visit-barcelona/public-transport/metro-airport",
      cta: "Official metro guidance",
      icon: "train",
      photo: bcnRailPhoto,
    },
    {
      title: "Aerobús",
      label: "Bus / coach",
      text: "A1 leaves T1 and A2 leaves T2 for central Barcelona. Check the stop and timetable for your terminal.",
      image: bcnBusPhoto.src,
      alt: bcnBusPhoto.alt,
      note: "Aerobús coach — airport service illustration",
      href: "https://aerobusbarcelona.es/en/guia-de-viaje/all-the-information-about-lines-schedules-and-stops-of-the-aerobus-service/",
      cta: "Official bus guidance",
      icon: "bus",
      photo: bcnBusPhoto,
    },
  ],
  destinationPhotos: {
    "Plaça Catalunya": bcnCatalunyaPhoto,
    "Plaça Espanya": bcnEspanyaPhoto,
    "Fira de Barcelona": bcnFiraPhoto,
    "Barcelona Sants": bcnSantsPhoto,
  },
  destinationLabels: {
    "Plaça Catalunya": "Aerobús city-centre stop",
    "Plaça Espanya": "Aerobús and metro interchange",
    "Fira de Barcelona": "L9 Sud Fira station",
    "Barcelona Sants": "Rodalies and long-distance rail",
  },
  galleryPhotos: [
    { photo: bcnOverviewPhoto, caption: "Terminal 1 at Barcelona–El Prat", wide: true },
    { photo: bcnTerminalPhoto, caption: "Terminal 1 terminal building" },
    { photo: bcnRailPhoto, caption: "Aeroport T2 rail station" },
    { photo: bcnTerminalDetailPhoto, caption: "Terminal 1 interior detail" },
    { photo: bcnBusPhoto, caption: "Aerobús coach" },
  ],
  officialLinks: {
    terminal: "https://www.aena.es/en/josep-tarradellas-barcelona-el-prat.html",
    bus: "https://aerobusbarcelona.es/en/guia-de-viaje/all-the-information-about-lines-schedules-and-stops-of-the-aerobus-service/",
  },
  captions: {
    inset: "A quiet terminal detail inside Terminal 1",
    terminal: "Terminal 1 at Barcelona–El Prat",
    rail: "Aeroport T2 rail station",
  },
  copy: {
    factsHeading: "Barcelona–El Prat transfers: the essentials at a glance.",
    factsDescription:
      "T1 and T2 have different transport access points. Confirm the terminal before choosing a train, metro or bus.",
    terminalsHeading: "Find your terminal, then choose your route.",
    arrivalsTitle: "From the gate to ground transport",
    pickupHeading: "Where to meet your driver or taxi.",
    pickupDescription:
      "A public taxi rank, Aerobús stop and private meeting point are not interchangeable. Agree the exact terminal first.",
    taxiRankTitle: "At the official taxi rank",
    privatePickupTitle: "At a prearranged pickup",
    compareHeading: "Compare Barcelona airport transfer options.",
    compareDescription:
      "Taxi, R2 Nord, L9 Sud and Aerobús each suit a different destination. Check the terminal and the last leg to your address.",
    comparisonTableHeading: "Private transfer vs taxi vs train vs metro vs bus",
    trainFeatureTitle: "Start with your terminal: R2 Nord or L9 Sud",
    taxiHeading: "How official taxis work at Barcelona–El Prat.",
    taxiDescription:
      "Black-and-yellow taxis use signed ranks at T1 and T2. Airport supplements and road conditions affect the final fare and time.",
    routesHeading: "Where travellers go after landing at BCN.",
    routesDescription:
      "Planning references only. Stop patterns, fares and journey times must be rechecked for your travel date.",
    decisionsHeading: "Match the transfer to your journey.",
    galleryHeading: "Barcelona–El Prat in focus.",
    galleryDescription: "Licensed photographs used in this guide, with attribution retained.",
    tipsHeading: "Three checks that make the arrival smoother.",
    faqHeading: "Barcelona airport transfer questions, answered.",
    faqDescription: "Clear answers grounded in the official references listed below.",
    sourcesHeading: "Where this Barcelona guide was checked.",
    ctaHeading: "Ready to plan your Barcelona transfer?",
    ctaText:
      "Summarise your journey in the booking form above. Nothing is sent, reserved or charged.",
    relatedHeading: "More European airport guides.",
    relatedDescription:
      "Each guide is researched separately, with its own official sources and verified facts.",
  },
};

const rome: PremiumAirportContent = {
  heroPhoto: fcoHeroPhoto,
  insetPhoto: fcoOverviewPhoto,
  terminalPhoto: fcoOverviewPhoto,
  railPhoto: fcoRailPhoto,
  pickupPhoto,
  transportCards: [
    privateCard(),
    {
      title: "Licensed local taxi",
      label: "Licensed taxi",
      text: "Official white taxis wait at Arrivals in T1 and T3. Check the fixed city-centre boundary before departure.",
      image: taxiRankIllustration.src,
      alt: taxiRankIllustration.alt,
      note: "Taxi rank at Munich Airport — illustrative only",
      href: "https://www.adr.it/web/aeroporti-di-roma-en/taxi",
      cta: "Official taxi guidance",
      icon: "taxi",
      photo: taxiRankIllustration,
    },
    {
      title: "Leonardo Express / FL1",
      label: "Rail",
      text: "Leonardo Express is non-stop to Termini. FL1 serves other Rome and regional stations.",
      image: fcoRailLeonardoPhoto.src,
      alt: fcoRailLeonardoPhoto.alt,
      note: "Leonardo Express and regional train at Fiumicino Aeroporto",
      href: "https://www.trenitalia.com/en/services/leonardo-express.html",
      cta: "Official rail guidance",
      icon: "train",
      photo: fcoRailLeonardoPhoto,
    },
    {
      title: "Airport coach / bus",
      label: "Bus / coach",
      text: "Several carriers serve different Rome districts. Check the current stand number and timetable before boarding.",
      image: coachIllustration.src,
      alt: coachIllustration.alt,
      note: "Airliner coach used on the Darmstadt–Frankfurt Airport service — illustrative only",
      href: "https://www.adr.it/web/aeroporti-di-roma-en/pax-fco-bus",
      cta: "Official bus guidance",
      icon: "bus",
      photo: coachIllustration,
    },
  ],
  destinationPhotos: {
    "Roma Termini": fcoTerminiPhoto,
    "Other Rome railway stations": fcoTiburtinaPhoto,
    "Vatican / Aurelia area": fcoVaticanPhoto,
    "Fiumicino town": fcoCoastPhoto,
  },
  destinationLabels: {
    "Roma Termini": "Leonardo Express destination",
    "Other Rome railway stations": "FL1 regional alternative",
    "Vatican / Aurelia area": "Bus connection area",
    "Fiumicino town": "Tiber mouth and coast",
  },
  galleryPhotos: [
    { photo: fcoOverviewPhoto, caption: "Rome Fiumicino terminal area", wide: true },
    { photo: fcoRailPhoto, caption: "Fiumicino Aeroporto station" },
    { photo: fcoRailLeonardoPhoto, caption: "Leonardo Express and regional train" },
    { photo: fcoCoastPhoto, caption: "Tiber mouth and coast near Fiumicino — satellite view" },
  ],
  officialLinks: {
    terminal: "https://www.adr.it/web/aeroporti-di-roma-en/which-terminal",
    bus: "https://www.adr.it/web/aeroporti-di-roma-en/pax-fco-bus",
  },
  captions: {
    inset: "Rome Fiumicino terminal area",
    terminal: "Leonardo da Vinci–Rome Fiumicino Airport",
    rail: "Fiumicino Aeroporto railway station",
  },
  copy: {
    factsHeading: "Rome Fiumicino transfers: the essentials at a glance.",
    factsDescription:
      "T1 and T3 are the main passenger terminals. Check the train destination and the taxi fare boundary before choosing.",
    terminalsHeading: "Find your terminal, then choose your route.",
    arrivalsTitle: "From the gate to ground transport",
    pickupHeading: "Where to meet your driver or taxi.",
    pickupDescription:
      "Official taxis use the T1 and T3 Arrivals ranks. An NCC car needs separately confirmed instructions.",
    taxiRankTitle: "At the official taxi rank",
    privatePickupTitle: "At a prearranged pickup",
    compareHeading: "Compare Rome Fiumicino transfer options.",
    compareDescription:
      "Leonardo Express, FL1, coaches, licensed taxis and prearranged cars each suit a different Roman address.",
    comparisonTableHeading: "Private transfer vs taxi vs train vs bus",
    trainFeatureTitle: "Leonardo Express or FL1? Read the destination",
    taxiHeading: "How licensed taxis work at Fiumicino.",
    taxiDescription:
      "White taxis with roof signs use official ranks. The fixed city-centre fare applies only within the qualifying boundary.",
    routesHeading: "Where travellers go after landing at FCO.",
    routesDescription:
      "Planning references only. Fares, stand numbers and journey times must be rechecked for your travel date.",
    decisionsHeading: "Match the transfer to your journey.",
    galleryHeading: "Rome Fiumicino in focus.",
    galleryDescription: "Licensed photographs used in this guide, with attribution retained.",
    tipsHeading: "Three checks that make the arrival smoother.",
    faqHeading: "Rome Fiumicino transfer questions, answered.",
    faqDescription: "Clear answers grounded in the official references listed below.",
    sourcesHeading: "Where this Rome guide was checked.",
    ctaHeading: "Ready to plan your Fiumicino transfer?",
    ctaText:
      "Summarise your journey in the booking form above. Nothing is sent, reserved or charged.",
    relatedHeading: "More European airport guides.",
    relatedDescription:
      "Each guide is researched separately, with its own official sources and verified facts.",
  },
};

const heathrow: PremiumAirportContent = {
  heroPhoto: lhrHeroPhoto,
  insetPhoto: lhrOverviewPhoto,
  terminalPhoto: lhrTerminalPhoto,
  railPhoto: lhrRailPhoto,
  pickupPhoto,
  transportCards: [
    privateCard(),
    {
      title: "Licensed black cab",
      label: "Licensed taxi",
      text: "Black cabs use ranks outside each terminal. Pre-booked minicabs need separate meeting instructions.",
      image: taxiRankIllustration.src,
      alt: taxiRankIllustration.alt,
      note: "Taxi rank at Munich Airport — illustrative only",
      href: "https://www.heathrow.com/transport-and-directions/by-taxi-or-mini-cab",
      cta: "Official taxi guidance",
      icon: "taxi",
      photo: taxiRankIllustration,
    },
    {
      title: "Heathrow Express / Elizabeth line",
      label: "Rail",
      text: "Different airport stations and London destinations. Match the service to your terminal and final station.",
      image: lhrRailPhoto.src,
      alt: lhrRailPhoto.alt,
      note: "Heathrow Terminal 5 Underground platform",
      href: "https://www.heathrow.com/transport-and-directions/by-rail-or-train",
      cta: "Official rail guidance",
      icon: "train",
      photo: lhrRailPhoto,
    },
    {
      title: "Coach / local bus",
      label: "Bus / coach",
      text: "Coaches serve Victoria and other UK destinations; local buses use the Central Bus Station near T2/3.",
      image: lhrBusPhoto.src,
      alt: lhrBusPhoto.alt,
      note: "Heathrow bus and coach station",
      href: "https://www.heathrow.com/transport-and-directions/by-coach-or-bus",
      cta: "Official bus guidance",
      icon: "bus",
      photo: lhrBusPhoto,
    },
  ],
  destinationPhotos: {
    "London Paddington": lhrPaddingtonPhoto,
    "Farringdon / Liverpool Street": lhrFarringdonPhoto,
    "Victoria Coach Station": lhrVictoriaPhoto,
    "Kingston / Richmond": lhrKingstonPhoto,
  },
  destinationLabels: {
    "London Paddington": "Heathrow Express destination",
    "Farringdon / Liverpool Street": "Elizabeth line stations",
    "Victoria Coach Station": "Coach connection",
    "Kingston / Richmond": "Local bus destinations",
  },
  galleryPhotos: [
    { photo: lhrOverviewPhoto, caption: "Heathrow Airport from the air", wide: true },
    { photo: lhrTerminalPhoto, caption: "Inside Heathrow Terminal 5" },
    { photo: lhrTerminalExteriorPhoto, caption: "Heathrow Terminal 5 exterior" },
    { photo: lhrRailPhoto, caption: "Piccadilly line station at Terminal 5" },
    { photo: lhrBusPhoto, caption: "Heathrow bus and coach station" },
    { photo: lhrLiverpoolPhoto, caption: "Liverpool Street — Elizabeth line destination" },
    { photo: lhrRichmondPhoto, caption: "Richmond — local bus destination" },
  ],
  officialLinks: {
    terminal: "https://www.heathrow.com/at-the-airport/airport-maps/travel-between-terminals",
    bus: "https://www.heathrow.com/transport-and-directions/by-coach-or-bus",
  },
  captions: {
    inset: "Heathrow terminals and runways from the air",
    terminal: "Inside Heathrow Terminal 5",
    rail: "Piccadilly line platform at Terminal 5",
  },
  copy: {
    factsHeading: "London Heathrow transfers: the essentials at a glance.",
    factsDescription:
      "Four operating terminals and several rail stations. Choose by the final London address, not only by the fastest airport train.",
    terminalsHeading: "Find your terminal, then choose your route.",
    arrivalsTitle: "From the gate to ground transport",
    pickupHeading: "Where to meet your driver or taxi.",
    pickupDescription:
      "Black cabs use terminal ranks. Pre-booked minicabs need their own instructions, and rail stations vary by terminal.",
    taxiRankTitle: "At the official taxi rank",
    privatePickupTitle: "At a prearranged pickup",
    compareHeading: "Compare London Heathrow transfer options.",
    compareDescription:
      "Heathrow Express, Elizabeth line, Piccadilly line, coach, black cab and prearranged cars suit different journeys.",
    comparisonTableHeading: "Private transfer vs taxi vs train vs bus",
    trainFeatureTitle: "Match the rail service to your London destination",
    taxiHeading: "How licensed taxis work at Heathrow.",
    taxiDescription:
      "Black cabs wait outside every terminal. Traffic, destination charges and luggage needs affect the total journey.",
    routesHeading: "Where travellers go after landing at LHR.",
    routesDescription:
      "Planning references only. Check TfL engineering work, step-free access and operator timetables for your travel date.",
    decisionsHeading: "Match the transfer to your journey.",
    galleryHeading: "London Heathrow in focus.",
    galleryDescription: "Licensed photographs used in this guide, with attribution retained.",
    tipsHeading: "Three checks that make the arrival smoother.",
    faqHeading: "London Heathrow transfer questions, answered.",
    faqDescription: "Clear answers grounded in the official references listed below.",
    sourcesHeading: "Where this London guide was checked.",
    ctaHeading: "Ready to plan your Heathrow transfer?",
    ctaText:
      "Summarise your journey in the booking form above. Nothing is sent, reserved or charged.",
    relatedHeading: "More European airport guides.",
    relatedDescription:
      "Each guide is researched separately, with its own official sources and verified facts.",
  },
};

const CONTENT: Record<string, PremiumAirportContent> = {
  AMS: amsterdam,
  CDG: paris,
  BCN: barcelona,
  FCO: rome,
  LHR: heathrow,
};

export function getPremiumContent(code: string): PremiumAirportContent {
  const content = CONTENT[code];
  if (!content) {
    throw new Error(`No premium airport content for ${code}`);
  }
  return content;
}
