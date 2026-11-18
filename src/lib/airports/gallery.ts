/* Extra Wikimedia Commons photos for airport guides. Credits must stay visible (licence requirement). */
import type { Photo } from "@/components/home/photos";
import fra_rail from "@/assets/photos/guide-fra-rail.webp.asset.json";
import fra_hall from "@/assets/photos/guide-fra-hall.webp.asset.json";
import ams_rail from "@/assets/photos/guide-ams-rail.webp.asset.json";
import ams_hall from "@/assets/photos/guide-ams-hall.webp.asset.json";
import cdg_rail from "@/assets/photos/guide-cdg-rail.webp.asset.json";
import cdg_hall from "@/assets/photos/guide-cdg-hall.webp.asset.json";
import bcn_rail from "@/assets/photos/guide-bcn-rail.webp.asset.json";
import bcn_hall from "@/assets/photos/guide-bcn-hall.webp.asset.json";
import fco_rail from "@/assets/photos/guide-fco-rail.webp.asset.json";
import fco_hall from "@/assets/photos/guide-fco-hall.webp.asset.json";
import lhr_rail from "@/assets/photos/guide-lhr-rail.webp.asset.json";
import lhr_hall from "@/assets/photos/guide-lhr-hall.webp.asset.json";
export type GalleryPhoto = Photo & { caption: string };
export const GALLERY: Record<string, GalleryPhoto[]> = {
  FRA: [
    {
      src: fra_hall.url,
      alt: "Terminal 1 departures hall at Frankfurt Airport with check-in desks and flight boards",
      caption: "Terminal 1 departures hall",
      credit: "Wikisaar",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Flughafen_Frankfurt,_Terminal_1,_Abflug.jpg",
    },
    {
      src: fra_rail.url,
      alt: "Frankfurt Airport long-distance railway station hall",
      caption: "Long-distance train station (Fernbahnhof)",
      credit: "kallerna",
      license: "CC BY-SA 4.0",
      source:
        "https://commons.wikimedia.org/wiki/File:The_Squaire_Frankfurt_Flughafen_Fernbahnhof_2.jpg",
    },
  ],
  AMS: [
    {
      src: ams_hall.url,
      alt: "Schiphol Plaza hall, the arrivals and station concourse at Amsterdam Schiphol",
      caption: "Schiphol Plaza concourse",
      credit: "Rob Koster",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Schiphol_Plaza_Hal.jpg",
    },
    {
      src: ams_rail.url,
      alt: "Platform at Schiphol Airport railway station beneath the terminal",
      caption: "Schiphol Airport railway station",
      credit: "Sneeuwvlakte",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Station_Schiphol_Airport_(2025)-4.jpg",
    },
  ],
  CDG: [
    {
      src: cdg_hall.url,
      alt: "Interior of Terminal 2E at Paris Charles de Gaulle Airport",
      caption: "Terminal 2E interior",
      credit: "Syced",
      license: "CC0",
      source: "https://commons.wikimedia.org/wiki/File:Charles_de_Gaulle_Airport_terminal_2E.jpg",
    },
    {
      src: cdg_rail.url,
      alt: "Steel and glass roof above Aéroport Charles de Gaulle 2 TGV station",
      caption: "Charles de Gaulle 2 TGV station",
      credit: "Gunnar Klack",
      license: "CC BY-SA 4.0",
      source:
        "https://commons.wikimedia.org/wiki/File:Gare-Aeroport-Paris-Charles-de-Gaulle-2-TGV-Roissy-en-France-02-2018.jpg",
    },
  ],
  BCN: [
    {
      src: bcn_hall.url,
      alt: "Main hall inside Terminal 1 at Barcelona–El Prat Airport",
      caption: "Terminal 1 main hall",
      credit: "Sunnya343",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:BCN_Terminal_1_interior,_July_2015.jpg",
    },
    {
      src: bcn_rail.url,
      alt: "Check-in area inside Terminal 1 at Barcelona–El Prat Airport",
      caption: "Terminal 1 check-in area",
      credit: "Eric Salard",
      license: "CC BY-SA 2.0",
      source: "https://commons.wikimedia.org/wiki/File:BCN_New_terminal_1_(6972342726).jpg",
    },
  ],
  FCO: [
    {
      src: fco_hall.url,
      alt: "Train waiting at a platform of Fiumicino Aeroporto station",
      caption: "Train at the airport station",
      credit: "Nenea hartia",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Fiumicino_Aeroporto_train_station.01.jpg",
    },
    {
      src: fco_rail.url,
      alt: "Platforms at Fiumicino Aeroporto railway station",
      caption: "Fiumicino Aeroporto station platforms",
      credit: "Cyril Yoshi",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Fiumicino_Aeroporto_railway_station.jpg",
    },
  ],
  LHR: [
    {
      src: lhr_hall.url,
      alt: "Departures hall inside Heathrow Terminal 2, The Queen's Terminal",
      caption: "Terminal 2 departures hall",
      credit: "Diliff",
      license: "CC BY-SA 3.0",
      source:
        "https://commons.wikimedia.org/wiki/File:Heathrow_Airport_Terminal_2,_London,_England_-_Diliff.jpg",
    },
    {
      src: lhr_rail.url,
      alt: "Piccadilly line train at the Heathrow Terminal 5 Underground platform",
      caption: "Terminal 5 Underground platform",
      credit: "Sunil060902",
      license: "CC BY-SA 3.0",
      source:
        "https://commons.wikimedia.org/wiki/File:Heathrow_Terminal_5_platform_6_look_west_1973_stock.JPG",
    },
  ],
};
