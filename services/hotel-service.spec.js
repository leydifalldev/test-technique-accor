const hotelService = require('./hotel-service');
const priceService = require('./price-service');

const hotels = hotelService.getHotels();
const prices = priceService.getPrices();

const result = new hotelService.Filter(hotels, prices).getHotelWithOffersByDate("12/01/2021").getResult();

const add = (a, b) => a + b;

const cases = [[2, 2, 4], [-2, -2, -4], [2, -2, 0]];

describe("'add' utility", () => {
  test.each(result)("given %p and %p as arguments, returns %p", (firstArg, secondArg, expectedResult) => { console.log("date", firstArg) });
});
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

// describe('HotelService', () => {
//   test('getHotels() returns all hotels', () => {
//     expect(hotelService.getHotels()).toBeDefined();
//     expect(hotelService.getHotels().length).toBe(248);
//   })

//   // test('filterHotelByDistance returns all hotels', () => {
//   //   expect(hotelService.getHotels()).toBeDefined();
//   //   expect(hotelService.getHotels().length).toBe(248);
//   // })

//   // test('sortOfferByPrice returns all hotels', () => {
//   //   expect(hotelService.getHotels()).toBeDefined();
//   //   expect(hotelService.getHotels().length).toBe(248);
//   // })
// });