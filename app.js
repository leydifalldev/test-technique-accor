const userService = require('./services/user-service');
const hotelService = require('./services/hotel-service');
const helper = require('./services/helper');

function findHotelsNearby(lat, lng, radius) {
    // TODO implement me
    return hotelService.findHotelsByDistance(hotelService.getHotels(), lat, lng, radius);
}

function findHotelNearbyWithBestOffer(lat, lng, radius, date) {
    // TODO implement me
    let hotels = [];
    // merge each hotel with his the cheapest offer with the filter by date
    hotels = hotelService.getHotelWithOffersByDate(date)
    // filter hotel by distance
    hotels = hotelService.filterHotelByDistance(hotels, lat, lng, radius)
    // sort offer by price
    hotels = hotelService.sortOfferByPrice(hotels)
    
    return hotels;
}

module.exports = {
	findHotelsNearby: findHotelsNearby,
	findHotelNearbyWithBestOffer: findHotelNearbyWithBestOffer
}

// const hotels = findHotelsNearby(48.838385, 2.290459, 2)
const hotels = findHotelNearbyWithBestOffer(48.838385, 2.290459, 2, "12/01/2021")
console.log("hotels", hotels)
console.log("hotels.length", hotels.length)

// document.writeln("I am in grade " + hotels);