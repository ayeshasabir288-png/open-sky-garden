/* Freely licensed photos from Wikimedia Commons. Credits must stay visible (licence requirement). */
import airport_fra from "@/assets/photos/airport-fra.webp.asset.json";
import airport_ams from "@/assets/photos/airport-ams.webp.asset.json";
import airport_cdg from "@/assets/photos/airport-cdg.webp.asset.json";
import airport_bcn from "@/assets/photos/airport-bcn.webp.asset.json";
import airport_fco from "@/assets/photos/airport-fco.webp.asset.json";
import airport_lhr from "@/assets/photos/airport-lhr.webp.asset.json";
import dest_germany from "@/assets/photos/dest-germany.webp.asset.json";
import dest_france from "@/assets/photos/dest-france.webp.asset.json";
import dest_spain from "@/assets/photos/dest-spain.webp.asset.json";
import dest_italy from "@/assets/photos/dest-italy.webp.asset.json";
import dest_netherlands from "@/assets/photos/dest-netherlands.webp.asset.json";
import dest_switzerland from "@/assets/photos/dest-switzerland.webp.asset.json";
import dest_austria from "@/assets/photos/dest-austria.webp.asset.json";
import dest_portugal from "@/assets/photos/dest-portugal.webp.asset.json";

export type Photo = { src: string; alt: string; credit: string; license: string; source: string };

export const PHOTOS = {
  "airport-fra": {
    src: airport_fra.url,
    alt: "Departures entrance of Frankfurt Airport Terminal 1 with taxis at the kerb",
    credit: "Quintinsoloviev",
    license: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Frankfurt_Airport_Terminal_1_departures_entrance_(Quintin_Soloviev).png",
  },
  "airport-ams": {
    src: airport_ams.url,
    alt: "Main entrance of Amsterdam Schiphol Airport with the Schiphol sign",
    credit: "Amin",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Amsterdam_Schiphol_Airport_entry.jpg",
  },
  "airport-cdg": {
    src: airport_cdg.url,
    alt: "The circular Terminal 1 building at Paris Charles de Gaulle Airport",
    credit: "Gunnar Klack",
    license: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Terminal-1-Paris-Charles-de-Gaulle-Roissy-en-France-02-2018a.jpg",
  },
  "airport-bcn": {
    src: airport_bcn.url,
    alt: "Glass front and entrance of Terminal 1 at Barcelona\u2013El Prat Airport",
    credit: "ktanaka",
    license: "CC BY 3.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Barcelona_El_Prat_International_Airport_-_panoramio.jpg",
  },
  "airport-fco": {
    src: airport_fco.url,
    alt: "Covered kerbside outside the terminal at Rome Fiumicino Airport",
    credit: "Darafsh",
    license: "CC BY-SA 3.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Leonardo_da_Vinci%E2%80%93Fiumicino_Airport_(04).jpg",
  },
  "airport-lhr": {
    src: airport_lhr.url,
    alt: "Glass entrance of Terminal 5 at London Heathrow Airport",
    credit: "KTo288",
    license: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Heathrow_T5_exterior.JPG",
  },
  "dest-germany": {
    src: dest_germany.url,
    alt: "Brandenburg Gate in Berlin lit up at dusk",
    credit: "Thomas Wolf",
    license: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Brandenburger_Tor_abends.jpg",
  },
  "dest-france": {
    src: dest_france.url,
    alt: "Eiffel Tower at sunrise seen from the Trocad\u00e9ro",
    credit: "Tristan Nitot",
    license: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Tour_eiffel_at_sunrise_from_the_trocadero.jpg",
  },
  "dest-spain": {
    src: dest_spain.url,
    alt: "Towers of the Sagrada Fam\u00edlia in Barcelona",
    credit: "TxllxT",
    license: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Barcelona_-_Pla%C3%A7a_de_Gaud%C3%AD_-_View_SW_on_La_Sagrada_Fam%C3%ADlia_II.jpg",
  },
  "dest-italy": {
    src: dest_italy.url,
    alt: "The Colosseum in Rome under a blue sky",
    credit: "Acediscovery",
    license: "CC BY 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Colosseum-Rome-May-2009.jpg",
  },
  "dest-netherlands": {
    src: dest_netherlands.url,
    alt: "Canal houses and houseboats on an Amsterdam canal",
    credit: "Kaci Baum",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:Amsterdam_Canal_Houses_(Unsplash).jpg",
  },
  "dest-switzerland": {
    src: dest_switzerland.url,
    alt: "The Matterhorn above the valley near Zermatt",
    credit: "Roy Egloff",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:CH.VS.Zermatt_2021-10-17_Matterhorn_8726.jpg",
  },
  "dest-austria": {
    src: dest_austria.url,
    alt: "Hallstatt village on the lake below the mountains",
    credit: "Kevin Poh",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Hallstatt_-_8856135370.jpg",
  },
  "dest-portugal": {
    src: dest_portugal.url,
    alt: "Yellow tram 28 on a street in Lisbon's Alfama",
    credit: "Paul Arps",
    license: "CC BY 2.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Tram_28_in_Alfama_(Lissabon_2016)_(26029557541).jpg",
  },
} satisfies Record<string, Photo>;
