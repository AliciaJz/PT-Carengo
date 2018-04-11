const mongoose = require('mongoose');
const Dish = require('../models/dish');

const dbName = 'PTcarengo';
mongoose.connect(`mongodb://localhost/${dbName}`);

const foods = [
  {
    name: "Pizza",
    image: "https://i.imgur.com/eTmWoAN.png",
    description: "Content",
    price: "$735"
  },
  {
    name: "Salad",
    image: "https://i.imgur.com/DupGBz5.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Sweet Potato",
    image: "https://i.imgur.com/hGraGyR.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Gnocchi",
    image: "https://i.imgur.com/",
    description: "Content",
    price: "$735"
  },
  {
    name: "Pot Roast",
    image: "https://i.imgur.com/WCzJDWz.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Lasagna",
    image: "https://i.imgur.com/ClxOafl.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Hamburger",
    image: "https://i.imgur.com/LoG39wK.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Pad Thai",
    image: "https://i.imgur.com/5ktcSzF.jpg",
    description: "Content.",
    price: "$735"
  },
  {
    name: "Almonds",
    image: "https://i.imgur.com/JRp4Ksx.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Bacon",
    image: "https://i.imgur.com/7GlqDsG.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Hot Dog",
    image: "https://i.imgur.com/QqVHdRu.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Chocolate Cake",
    image: "https://i.imgur.com/yrgzA9x.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Wheat Bread",
    image: "https://i.imgur.com/TsWzMfM.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Orange",
    image: "https://i.imgur.com/abKGOcv.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Banana",
    image: "https://i.imgur.com/BMdJhu5.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Yogurt",
    image: "https://i.imgur.com/URhdrAm.png",
    description: "Content",
    price: "$735"
  },
  {
    name: "Salad",
    image: "https://i.imgur.com/DupGBz5.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Sweet Potato",
    image: "https://i.imgur.com/hGraGyR.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Gnocchi",
    image: "https://i.imgur.com/",
    description: "Content",
    price: "$735"
  },
  {
    name: "Pot Roast",
    image: "https://i.imgur.com/WCzJDWz.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Lasagna",
    image: "https://i.imgur.com/ClxOafl.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Hamburger",
    image: "https://i.imgur.com/LoG39wK.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Pad Thai",
    image: "https://i.imgur.com/5ktcSzF.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Almonds",
    image: "https://i.imgur.com/JRp4Ksx.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Bacon",
    image: "https://i.imgur.com/7GlqDsG.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Hot Dog",
    image: "https://i.imgur.com/QqVHdRu.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Chocolate Cake",
    image: "https://i.imgur.com/yrgzA9x.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Wheat Bread",
    image: "https://i.imgur.com/TsWzMfM.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Orange",
    image: "https://i.imgur.com/abKGOcv.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Banana",
    image: "https://i.imgur.com/BMdJhu5.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Yogurt",
    image: "https://i.imgur.com/URhdrAm.png",
    description: "Content",
    price: "$735"
  },
  {
    name: "Salad",
    image: "https://i.imgur.com/DupGBz5.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Sweet Potato",
    image: "https://i.imgur.com/hGraGyR.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Gnocchi",
    image: "https://i.imgur.com/",
    description: "Content",
    price: "$735"
  },
  {
    name: "Pot Roast",
    image: "https://i.imgur.com/WCzJDWz.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Lasagna",
    image: "https://i.imgur.com/ClxOafl.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Hamburger",
    image: "https://i.imgur.com/LoG39wK.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Pad Thai",
    image: "https://i.imgur.com/5ktcSzF.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Almonds",
    image: "https://i.imgur.com/JRp4Ksx.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Bacon",
    image: "https://i.imgur.com/7GlqDsG.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Hot Dog",
    image: "https://i.imgur.com/QqVHdRu.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Chocolate Cake",
    image: "https://i.imgur.com/yrgzA9x.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Wheat Bread",
    image: "https://i.imgur.com/TsWzMfM.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Orange",
    image: "https://i.imgur.com/abKGOcv.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Banana",
    image: "https://i.imgur.com/BMdJhu5.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Yogurt",
    image: "https://i.imgur.com/URhdrAm.png",
    description: "Content",
    price: "$735"
  },
  {
    name: "Salad",
    image: "https://i.imgur.com/DupGBz5.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Sweet Potato",
    image: "https://i.imgur.com/hGraGyR.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Gnocchi",
    image: "https://i.imgur.com/",
    description: "Content",
    price: "$735"
  },
  {
    name: "Pot Roast",
    image: "https://i.imgur.com/WCzJDWz.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Lasagna",
    image: "https://i.imgur.com/ClxOafl.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Hamburger",
    image: "https://i.imgur.com/LoG39wK.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Pad Thai",
    image: "https://i.imgur.com/5ktcSzF.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Almonds",
    image: "https://i.imgur.com/JRp4Ksx.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Bacon",
    image: "https://i.imgur.com/7GlqDsG.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Hot Dog",
    image: "https://i.imgur.com/QqVHdRu.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Chocolate Cake",
    image: "https://i.imgur.com/yrgzA9x.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Wheat Bread",
    image: "https://i.imgur.com/TsWzMfM.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Orange",
    image: "https://i.imgur.com/abKGOcv.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Banana",
    image: "https://i.imgur.com/BMdJhu5.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Yogurt",
    image: "https://i.imgur.com/URhdrAm.png",
    description: "Content",
    price: "$735"
  },
  {
    name: "Salad",
    image: "https://i.imgur.com/DupGBz5.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Sweet Potato",
    image: "https://i.imgur.com/hGraGyR.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Gnocchi",
    image: "https://i.imgur.com/",
    description: "Content",
    price: "$735"
  },
  {
    name: "Pot Roast",
    image: "https://i.imgur.com/WCzJDWz.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Lasagna",
    image: "https://i.imgur.com/ClxOafl.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Hamburger",
    image: "https://i.imgur.com/LoG39wK.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Pad Thai",
    image: "https://i.imgur.com/5ktcSzF.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Almonds",
    image: "https://i.imgur.com/JRp4Ksx.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Bacon",
    image: "https://i.imgur.com/7GlqDsG.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Hot Dog",
    image: "https://i.imgur.com/QqVHdRu.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Chocolate Cake",
    image: "https://i.imgur.com/yrgzA9x.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Wheat Bread",
    image: "https://i.imgur.com/TsWzMfM.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Orange",
    image: "https://i.imgur.com/abKGOcv.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Banana",
    image: "https://i.imgur.com/BMdJhu5.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Yogurt",
    image: "https://i.imgur.com/URhdrAm.png",
    description: "Content",
    price: "$735"
  },
  {
    name: "Salad",
    image: "https://i.imgur.com/DupGBz5.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Sweet Potato",
    image: "https://i.imgur.com/hGraGyR.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Gnocchi",
    image: "https://i.imgur.com/",
    description: "Content",
    price: "$735"
  },
  {
    name: "Pot Roast",
    image: "https://i.imgur.com/WCzJDWz.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Lasagna",
    image: "https://i.imgur.com/ClxOafl.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Hamburger",
    image: "https://i.imgur.com/LoG39wK.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Pad Thai",
    image: "https://i.imgur.com/5ktcSzF.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Almonds",
    image: "https://i.imgur.com/JRp4Ksx.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Bacon",
    image: "https://i.imgur.com/7GlqDsG.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Hot Dog",
    image: "https://i.imgur.com/QqVHdRu.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Chocolate Cake",
    image: "https://i.imgur.com/yrgzA9x.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Wheat Bread",
    image: "https://i.imgur.com/TsWzMfM.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Orange",
    image: "https://i.imgur.com/abKGOcv.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Banana",
    image: "https://i.imgur.com/BMdJhu5.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Yogurt",
    image: "https://i.imgur.com/URhdrAm.png",
    description: "Content",
    price: "$735"
  },
  {
    name: "Salad",
    image: "https://i.imgur.com/DupGBz5.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Sweet Potato",
    image: "https://i.imgur.com/hGraGyR.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Gnocchi",
    image: "https://i.imgur.com/",
    description: "Content",
    price: "$735"
  },
  {
    name: "Pot Roast",
    image: "https://i.imgur.com/WCzJDWz.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Lasagna",
    image: "https://i.imgur.com/ClxOafl.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Hamburger",
    image: "https://i.imgur.com/LoG39wK.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Pad Thai",
    image: "https://i.imgur.com/5ktcSzF.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Almonds",
    image: "https://i.imgur.com/JRp4Ksx.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Bacon",
    image: "https://i.imgur.com/7GlqDsG.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Hot Dog",
    image: "https://i.imgur.com/QqVHdRu.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Chocolate Cake",
    image: "https://i.imgur.com/yrgzA9x.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Wheat Bread",
    image: "https://i.imgur.com/TsWzMfM.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Orange",
    image: "https://i.imgur.com/abKGOcv.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Banana",
    image: "https://i.imgur.com/BMdJhu5.jpg",
    description: "Content",
    price: "$735"
  },
  {
    name: "Yogurt",
    image: "https://i.imgur.com/URhdrAm.png",
    description: "Content",
    price: "$735"
  }
]

Dish.create(foods, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${foods.length} dishes`)
});
