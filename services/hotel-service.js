const priceService = require('./price-service');
const HOTELS = require('./data/hotels.json').hotels;
const helper = require('./helper');

const getHotels = () => {
	return HOTELS;
}

function findHotelsByDistance(hotels=[], lat, lng, radius) {
    return hotels.map((hotel) => ({
        ...hotel,
        distance: helper.distance(lat, lng, hotel.latitude, hotel.longitude)/1000,
    })).filter((hotel) => hotel.distance <= radius)
}

function getHotelWithOffersByDate(date) {
	return priceService.getPrices()
    .map((hotelOffers) => {
        // merge each hotel with his cheapest offer
        return {
            ...getHotels().find((hotel) => hotel.ridCode === hotelOffers.ridCode),
            // filter offers by date and fare for each hotel
            offer: hotelOffers.offers
                .filter((offer) => (offer.fare === "STANDARD" && offer.date === date))
                .sort((a, b) => (a.price - b.price))[0],
        }
    });
}

function filterHotelByDistance(hotels, lat, lng, radius) {
	return findHotelsByDistance(hotels, lat, lng, radius)
    .filter((hotel) => (hotel.offer && hotel.distance <= radius))
}

function sortOfferByPrice(hotels=[]) {
	return hotels.sort((a, b) => {
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
}

module.exports = {
	getHotels: getHotels,
	findHotelsByDistance: findHotelsByDistance,
	getHotelWithOffersByDate: getHotelWithOffersByDate,
	filterHotelByDistance: filterHotelByDistance,
	sortOfferByPrice: sortOfferByPrice,
}