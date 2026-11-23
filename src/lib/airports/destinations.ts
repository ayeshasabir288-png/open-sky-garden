import fra from "@/assets/photos/dest-frankfurt.webp.asset.json";
import mainz from "@/assets/photos/dest-mainz.webp.asset.json";
import wiesbaden from "@/assets/photos/dest-wiesbaden.webp.asset.json";
import darmstadt from "@/assets/photos/dest-darmstadt.webp.asset.json";
import type { Photo } from "@/components/home/photos";
/** Licensed Wikimedia Commons photos of destinations, keyed by airport code then route name. */
export const DESTINATION_PHOTOS: Record<string, Record<string, Photo>> = {
  FRA: {
    "Frankfurt city centre": {
      src: fra.url,
      alt: "Frankfurt skyline above the river Main",
      credit: "Norbert Nagel",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Frankfurt_Skyline_with_river_Main_2014.jpg",
    },
    Mainz: {
      src: mainz.url,
      alt: "Mainz Cathedral towers in the old town",
      credit: "Berthold Werner",
      license: "CC BY-SA 3.0",
      source: "https://commons.wikimedia.org/wiki/File:Mainz_Dom_BW_2012-08-18_16-18-12.JPG",
    },
    Wiesbaden: {
      src: wiesbaden.url,
      alt: "The Kurhaus in Wiesbaden with its columned portico",
      credit: "Berthold Werner",
      license: "CC BY-SA 3.0",
      source:
        "https://commons.wikimedia.org/wiki/File:Wiesbaden_Kurhaus_BW_2017-04-24_18-03-23.jpg",
    },
    Darmstadt: {
      src: darmstadt.url,
      alt: "Mathildenhöhe in Darmstadt with the Wedding Tower",
      credit: "Thomas Wolf, www.foto-tw.de",
      license: "CC BY-SA 3.0 DE",
      source: "https://commons.wikimedia.org/wiki/File:Darmstadt_Mathildenh%C3%B6he.jpg",
    },
  },
};
