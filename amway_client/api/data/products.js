let products = [
  {
      id: 1,
      name: "All Fabric Bleach AMWAY HOME™ SA8™",
      GuestPrice: "TL103.40",
      OrderingNumber: "124485",
      Url: "https://media.amway.eu/sys-master/images/h16/h3f/11216717447198/EIA.w180.h180.124485_new.png"
    },
    {
      id: 2,
      name: "Automatic Dishwasher Tablets Amway Home™ DISH DROPS™",
      GuestPrice: "TL133.10",
      OrderingNumber: "109867",
      Url: "https://media.amway.eu/sys-master/images/h6f/hea/11216707256350/EIA.w180.h180.109867.jpg"
    },
    {
      id: 3,
      name: "Bathroom Cleaner Amway Home™ L.O.C.™",
      GuestPrice: "TL39.30",
      OrderingNumber: "117078",
      Url: "https://media.amway.eu/sys-master/images/h30/h8d/11216680910878/EIA.w180.h180.117078.jpg"
    },
    {
      id: 4,
      name: "Concentrated Dishwashing Liquid Amway Home™ DISH DROPS™",
      GuestPrice: "TL54.30",
      OrderingNumber: "110488",
      Url: "https://media.amway.eu/sys-master/images/h4b/h9a/11216672423966/EIA.w180.h180.110488.jpg"
    },
    {
      id: 5,
      name: "Concentrated Fabric Softener Alpine Amway Home™ SA8™",
      GuestPrice: "TL65.10",
      OrderingNumber: "109852",
      Url: "https://media.amway.eu/sys-master/images/h63/h3b/11216704929822/EIA.w180.h180.109852.jpg"
    },
    {
      id: 6,
      name: "Concentrated Fabric Softener Garden Blooms Amway Home™ SA8™",
      GuestPrice: "TL65.10",
      OrderingNumber: "110480",
      Url: "https://media.amway.eu/sys-master/images/h40/hef/11216668426270/EIA.w180.h180.110480.jpg"
    },
    {
      id: 7,
      name: "Dispenser Ball - AMWAY",
      GuestPrice: "TL8.10",
      OrderingNumber: "5101",
      Url: "https://media.amway.eu/sys-master/images/hb7/h3f/11216733667358/EIA.w180.h180.5101.jpg"
    },
    {
      id: 8,
      name: "Gel Oven Cleaner AMWAY™",
      GuestPrice: "TL54.90",
      OrderingNumber: "0014",
      Url: "https://media.amway.eu/sys-master/images/h51/hef/11216427286558/EIA.w180.h180.0014.jpg"
    },
    {
      id: 9,
      name: "Glass Cleaner Amway Home™ L.O.C.™",
      GuestPrice: "TL27.80",
      OrderingNumber: "117080",
      Url: "https://media.amway.eu/sys-master/images/h49/hf3/11216684548126/EIA.w180.h180.117080.jpg"
    },
    {
      id: 10,
      name: "Kitchen Cleaner Amway Home™ L.O.C.™",
      GuestPrice: "TL39.30",
      OrderingNumber: "117079",
      Url: "https://media.amway.eu/sys-master/images/ha8/h29/11216681762846/EIA.w180.h180.117079.jpg"
    },
    {
      id: 11,
      name: "Liquid Concentrated Laundry Detergent Amway Home™ SA8™",
      GuestPrice: "TL123.80",
      OrderingNumber: "112532",
      Url: "https://media.amway.eu/sys-master/images/ha8/h29/11216681762846/EIA.w180.h180.117079.jpg"
    },
    {
      id: 12,
      name: "Pistol Grip Sprayer Amway Home™",
      GuestPrice: "TL15.50",
      OrderingNumber: "110483",
      Url: "https://media.amway.eu/sys-master/images/hde/h7a/11216677896222/EIA.w180.h180.112532_new.jpg"
    }
];

const addProduct = (name, description) => {
  const id = products[products.length - 1].id + 1;
  const newProduct = { id, name, description };
  products = [...products, newProduct];
  return { ...newProduct };
};

const getProducts = () => {
  return products;
};

module.exports = {
  getProducts,
  addProduct
};