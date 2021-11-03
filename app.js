const userService = require('./services/user-service');
const hotelService = require('./services/hotel-service');
const priceService = require('./services/price-service');
const helper = require('./services/helper');

function getHotelsByDistance(hotels, lat, lng, radius) {
    return hotels.map((hotel) => ({
        ...hotel,
        distance: helper.distance(lat, lng, hotel.latitude, hotel.longitude)/1000,
    })).filter((hotel) => hotel.distance <= radius)
}

function findHotelsNearby(lat, lng, radius) {
    // TODO implement me
    return getHotelsByDistance(hotelService.getHotels(), lat, lng, radius);
}

function findHotelNearbyWithBestOffer(lat, lng, radius, date) {
    // TODO implement me
    let hotels = priceService.getPrices()
    .map((hotelOffers) => {
        // fusion each hotel and his own offers hotel + offers
        return { 
            ...hotelService.getHotels().find((hotel) => hotel.ridCode === hotelOffers.ridCode),
            // filter offers by date and fare for each hotel
            offer: hotelOffers.offers
                .filter((offer) => (offer.fare === "STANDARD" && offer.date === date))
                .sort((a, b) => (a.price - b.price))[0],
        }
    });
    // filter hotel by distance
    hotels = getHotelsByDistance(hotels, lat, lng, radius)
    .filter((hotel) => (hotel.distance <= radius && hotel.offer))
    .sort((a, b) => {
        if (a.offer.price < b.offer.price) {
            return -1;
        }
        if (a.offer.price > b.offer.price) {
            return 1;
        }
        if (a.offer.price === b.offer.price) {
            return (a.distance > b.distance) ? 1 : -1;
        }
        return 0;
    })

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

document.writeln("I am in grade " + hotels);