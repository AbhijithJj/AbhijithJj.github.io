// Each place: name, slug (used for "<slug>.html" + gallery link), x/y position on the
// 270x450 map viewBox, and hasGallery. Not limited to counties -- islands and regions
// (e.g. Aran Islands) are placed the same way. Flip hasGallery to true and set a thumb
// image once that place gets its own "<slug>-gallery.js" + "<slug>.html" page (same
// pattern as sligo.html / aran-islands.html).
const irelandPlaces = [
  { name: "Donegal", slug: "donegal", x: 60, y: 60, hasGallery: false },
  { name: "Cavan", slug: "cavan", x: 140, y: 170, hasGallery: false },
  { name: "Monaghan", slug: "monaghan", x: 172, y: 145, hasGallery: false },

  { name: "Sligo", slug: "sligo", x: 100, y: 175, hasGallery: true, thumb: "sligo-IMG_0796.jpeg" },
  { name: "Leitrim", slug: "leitrim", x: 130, y: 185, hasGallery: false },
  { name: "Mayo", slug: "mayo", x: 45, y: 222, hasGallery: true, thumb: "mayo-IMG_5201.jpeg" },
  { name: "Roscommon", slug: "roscommon", x: 140, y: 225, hasGallery: false },
  { name: "Galway", slug: "galway", x: 90, y: 265, hasGallery: true, thumb: "galway-IMG_2930.jpeg" },
  { name: "Aran Islands", slug: "aran-islands", x: 28, y: 278, hasGallery: true, thumb: "aran-IMG_4594.jpeg" },

  { name: "Longford", slug: "longford", x: 150, y: 245, hasGallery: false },
  { name: "Westmeath", slug: "westmeath", x: 160, y: 240, hasGallery: true, thumb: "westmeath-IMG_3406.jpeg" },
  { name: "Meath", slug: "meath", x: 200, y: 235, hasGallery: false },
  { name: "Louth", slug: "louth", x: 220, y: 195, hasGallery: false },
  { name: "Dublin", slug: "dublin", x: 235, y: 255, hasGallery: true, thumb: "dublin-1000064871.JPG" },
  { name: "Offaly", slug: "offaly", x: 170, y: 295, hasGallery: false },
  { name: "Kildare", slug: "kildare", x: 182, y: 302, hasGallery: true, thumb: "kildare-1000002726.JPG" },
  { name: "Laois", slug: "laois", x: 180, y: 315, hasGallery: false },
  { name: "Carlow", slug: "carlow", x: 200, y: 335, hasGallery: false },
  { name: "Kilkenny", slug: "kilkenny", x: 180, y: 345, hasGallery: false },
  { name: "Wicklow", slug: "wicklow", x: 238, y: 335, hasGallery: true, thumb: "wicklow-IMG_5126.jpeg" },
  { name: "Wexford", slug: "wexford", x: 215, y: 375, hasGallery: false },

  { name: "Clare", slug: "clare", x: 110, y: 305, hasGallery: false },
  { name: "Limerick", slug: "limerick", x: 140, y: 335, hasGallery: false },
  { name: "Tipperary", slug: "tipperary", x: 170, y: 335, hasGallery: false },
  { name: "Waterford", slug: "waterford", x: 180, y: 375, hasGallery: false },
  { name: "Kerry", slug: "kerry", x: 85, y: 375, hasGallery: true, thumb: "kerry-IMG_3261.jpeg" },
  { name: "Cork", slug: "cork", x: 130, y: 395, hasGallery: true, thumb: "cork-IMG_3346.jpeg" },
];
window.irelandPlaces = irelandPlaces;
