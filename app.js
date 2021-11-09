const hotelService = require('./services/hotel-service');
const priceService = require('./services/price-service');

function findHotelsNearby(lat, lng, radius) {
    // TODO implement me
    const hotels = hotelService.getHotels();
    const prices = priceService.getPrices();
    
    return new hotelService.Filter(hotels, prices)
        .filterHotelWithoutOfferByDistance(lat, lng, radius)
        .getResult();
}

function findHotelNearbyWithBestOffer(lat, lng, radius, date) {
    if (!lat | !lng | !radius | !date) {
        return null
    }
    // TODO implement me
    const hotels = hotelService.getHotels();
    const prices = priceService.getPrices();

    return new hotelService.Filter(hotels, prices)
        .getHotelWithOffersByDate(date)
        .filterHotelByDistance(lat, lng, radius)
        .sortOfferByPrice()
        .getFirtsHotel();

    // const chainableInstance = new hotelService.Chainable()
    
    // chainableInstance
    // .firstMethod()
    // .secondMethod()
    // .thirdMethod();

    
}

module.exports = {
	findHotelsNearby: findHotelsNearby,
	findHotelNearbyWithBestOffer: findHotelNearbyWithBestOffer
}

// const hotels = findHotelsNearby(48.838385, 2.290459, 2)
const hotels = findHotelNearbyWithBestOffer(48.856564, 2.351711, 2000, '11/01/2021')
console.log("hotels", hotels)
// console.log("hotels.length", hotels.length)
// new hotelService.Search().display();


// document.writeln("I am in grade " + hotels);