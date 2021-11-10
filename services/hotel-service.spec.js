const hotelService = require('./hotel-service');
const priceService = require('./price-service');

// const hotels = hotelService.getHotels();
// const prices = priceService.getPrices();

// const result = new hotelService.Filter(hotels, prices).getHotelWithOffersByDate("12/01/2021").getResult();
const prices = [
  {
    "ridCode": "A3C7",
    "offers": [
      {
        "date": "11/01/2021",
        "fare": "SPECIAL_OFFER",
        "price": 80
      },
      {
        "date": "11/01/2021",
        "fare": "STANDARD",
        "price": 90
      },
    ]
  },
  {
    "ridCode": "6786",
    "offers": [
      {
        "date": "11/01/2021",
        "fare": "SPECIAL_OFFER",
        "price": 97
      },
      {
        "date": "11/01/2021",
        "fare": "STANDARD",
        "price": 124
      },
    ]
  },
  {
    "ridCode": "A3C7",
    "offers": [
      {
        "date": "11/01/2021",
        "fare": "SPECIAL_OFFER",
        "price": 80
      },
      {
        "date": "12/01/2021",
        "fare": "STANDARD",
        "price": 90
      },
    ]
  },
  {
    "ridCode": "6786",
    "offers": [
      {
        "date": "11/01/2021",
        "fare": "SPECIAL_OFFER",
        "price": 97
      },
      {
        "date": "11/01/2021",
        "fare": "STANDARD",
        "price": 124
      },
    ]
  }
]

const hotels = [
  {
    "ridCode": "A3C7",
    "countryCode": "FR",
    "localRating": 3.0,
    "longitude": 2.3052585,
    "brandCode": "IBS",
    "zoomLevel": 15,
    "streetViewInfo": "",
    "address": "14 Rue Dagobert, 92110 CLICHY",
    "latitude": 48.9030484,
    "commercialName": "ibis Styles Paris Mairie de Clichy",
  },
  {
    "ridCode": "6786",
    "countryCode": "FR",
    "localRating": 3.0,
    "longitude": 2.282365,
    "brandCode": "ADG",
    "zoomLevel": 15,
    "streetViewInfo": "",
    "address": "20 rue d'Oradour sur Glane, 75015 PARIS",
    "latitude": 48.831318,
    "commercialName": "Aparthotel Adagio Paris XV",
  },
  {
    "ridCode": "A3C7",
    "countryCode": "FR",
    "localRating": 3.0,
    "longitude": 2.3052585,
    "brandCode": "IBS",
    "zoomLevel": 15,
    "streetViewInfo": "",
    "address": "14 Rue Dagobert, 92110 CLICHY",
    "latitude": 48.9030484,
    "commercialName": "ibis Styles Paris Mairie de Clichy",
  },
  {
    "ridCode": "6786",
    "countryCode": "FR",
    "localRating": 3.0,
    "longitude": 2.282365,
    "brandCode": "ADG",
    "zoomLevel": 15,
    "streetViewInfo": "",
    "address": "20 rue d'Oradour sur Glane, 75015 PARIS",
    "latitude": 48.831318,
    "commercialName": "Aparthotel Adagio Paris XV",
  }
]

const add = (a, b) => a + b;

const cases = [[2, 2, 4], [-2, -2, -4], [2, -2, 0]];

// describe("'add' utility", () => {
//   test.each(result)("given %p and %p as arguments, returns %p", (firstArg, secondArg, expectedResult) => {
//     console.log("date", firstArg.offer)
//     expect(firstArg.offer.date).toEqual('11/01/2021');
//   });
// });
// describe('getHotelWithOffersByDate returns all hotels', () => {
//   const hotels = hotelService.getHotels();
//   const prices = priceService.getPrices();

//   test.each(new hotelService.Filter(hotels, prices).getHotelWithOffersByDate("12/01/2021").getResult())("%s %s %s", (a, b, c) => {
//     // console.log("hotel", a)
//     // console.log("date LOG", date)
//     // const date = c?.offer
//     // expect(date).toBe("12/01/2021");
//   });
// });

describe('HotelService', () => {
  test('getHotels() returns all hotels', () => {
    expect(hotelService.getHotels()).toBeDefined();
    expect(hotelService.getHotels().length).toBe(248);
  })

  test('filterHotelByDistance returns all hotels', () => {
    const result = new hotelService.Filter(hotels, prices).getHotelWithOffersByDate("13/01/2021").getResult()
    console.log("reshvfdv", result)
    expect(result.length).toEqual(1);
  })

  // test('sortOfferByPrice returns all hotels', () => {
  //   expect(hotelService.getHotels()).toBeDefined();
  //   expect(hotelService.getHotels().length).toBe(248);
  // })
});