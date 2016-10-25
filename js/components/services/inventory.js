(function() {
  'use strict';

  angular
    .module('inventory', [])
    .service('inventory', [Inventory]);

  function Inventory() {
    var vm = this;

    vm.items = [
      {
        "_id": "55c8ee82152165d244b98300",
        "name": "Captain Crunch",
        "ingredients": "concentrated rice granules, sugar bits, brown sugar, butter",
        "murderRating": 244,
        "price": 1540,
        "inStock": true,
        "rating": 1,
        "imageUrl": "https://secure.footprint.net/cupages/capncrunch/capncrunchbowl.png",
        "__v": 0,
        "categories": ["crunchy", "dry", "awesome"]
      },

      {
        "_id": "55c8ee82152165d244b98301",
        "name": "Life Cereal",
        "ingredients": "fennel, nutmeg leaves, parsley, cream of 'cream of cream', blarney",
        "murderRating": 49,
        "price": 7348,
        "inStock": false,
        "rating": 2,
        "imageUrl": "https://www.parkandwillow.com/media/catalog/product/q/u/quaker_life_cereal_original.jpg",
        "__v": 0,
        "categories": ["awesome", "great"]
      },
      {
        "_id": "55c8ee82152165d244b98302",
        "name": "Fruity Pebbles",
        "ingredients": "hot sauce, iron, flintstone mold, fresco, blarney, raw mashed potato",
        "murderRating": 38,
        "price": 4991,
        "inStock": true,
        "rating": 4,
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51WTQKUcACL.jpg",
        "__v": 0,
        "categories": ["awesome", "fruit", "colorful"]
      },
      {
        "_id": "55c8ee82152165d244b98303",
        "name": "Cookie Crisp",
        "ingredients": "purina chow, flavorings, pepper, acorns, quality tallow, old sock, bay leaf",
        "murderRating": 153,
        "price": 5496,
        "inStock": true,
        "rating": 1,
        "imageUrl": "https://www.nestlecereals.com/sites/default/files/styles/product/public/images/products/cookie_crisp_4.jpg?itok=odYjBXeU",
        "__v": 0,
        "categories": ["awesome", "chocolate", "great"]
      },
      {
        "_id": "55c8ee82152165d244b98304",
        "name": "Banana Nut Cheerios",
        "ingredients": "cream of tartar, eggplant, cake, deer antler, contcentrated gluten",
        "murderRating": 181,
        "price": 2445,
        "inStock": true,
        "rating": 1,
        "imageUrl": "https://images.heb.com/is/image/HEBGrocery/001235491-1?id=-pzRB0&fmt=jpg&fit=constrain,1&wid=296&hei=296",
        "__v": 0,
        "categories": ["dry", "fruit", "terrible"]
      },
      {
        "_id": "55c8ee82152165d244b98305",
        "name": "Grape Nuts",
        "ingredients": "botox, toast, Grandpa's hatred, kitchen scraps, aligator tongue, lawn clippings",
        "murderRating": 241,
        "price": 4486,
        "inStock": true,
        "rating": 3,
        "imageUrl": "http://2.bp.blogspot.com/-NLBrXTwVGgs/UDVRhJ-OjXI/AAAAAAAAAFo/W6G-O3rY9h4/s1600/post_grape_nuts.jpg",
        "__v": 0,
        "categories": ["terrible","warm","crunchy"]
      },
      {
        "_id": "55c8ee82152165d244b98306",
        "name": "Live It Up",
        "ingredients": "natural and artificial flavorings, roasted mushrooms, toast, tumeric",
        "murderRating": 230,
        "price": 6973,
        "inStock": true,
        "rating": 3,
        "imageUrl": "http://media.shopwell.com/gladson/00021130282869_full.jpg",
        "__v": 0,
        "categories": ["warm", "knockoff", "tumeric"]
      },
      {
        "_id": "55c8ee82152165d244b98307",
        "name": "Reese's Puffs",
        "ingredients": "diabetes, chocolate, peanut butter, nostalgia, candy bits",
        "murderRating": 122,
        "price": 6003,
        "inStock": false,
        "rating": 2,
        "imageUrl": "http://printablecouponsanddeals.com/wp-content/uploads/2015/05/Reese%E2%80%99s-Puffs-Cereal.jpg",
        "__v": 0,
        "categories": ["awesome","chocolate"]
      },
      {
        "_id": "55c8ee82152165d244b98308",
        "name": "Crispy Hexagons",
        "ingredients": "cream of tartar, cream of cream, kitchen scraps, flavorings",
        "murderRating": 196,
        "price": 1374,
        "inStock": true,
        "rating": 3,
        "imageUrl": "https://s3.amazonaws.com/static.caloriecount.about.com/images/medium/family-cereal-crispy-hexagons-75285.jpg",
        "__v": 0,
        "categories": ["knockoff","rice"]
      },
      {
        "_id": "55c8ee82152165d244b98309",
        "name": "Rice Krispies",
        "ingredients": "rice puffs, ground snap, chopped crackle, minced pop, quinine",
        "murderRating": 196,
        "price": 4158,
        "inStock": true,
        "rating": 2,
        "imageUrl": "https://images.kglobalservices.com/www.ricekrispies.com/en_us/product/product_4508660/kicproductimage-127505_rk-c_original_3d.png",
        "__v": 0,
        "categories": ["awesome","rice"]
      }
    ];

    vm.categories = [];

    (function getCategories() {
      var master = [];
      vm.items.forEach((item) => {
        master = master.concat(item.categories);
      });
      master = master.filter(function (value, index, array) {
        return array.indexOf(value) === index;
      });
      vm.categories = master;
    })();

  }

}());
