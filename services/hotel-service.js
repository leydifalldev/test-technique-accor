const HOTELS = require('./data/hotels.json').hotels;
const helper = require('./helper');

const getHotels = () => {
	return HOTELS;
}

class Filter {
    hotels = [];
    prices = [];

    constructor(hotels=[], prices=[]) {
        this.hotels = hotels;
        this.prices = prices;
    }

    getResult() {
        return this.hotels;
    }

    getFirtsHotel() {
        return this.hotels[0]
    }

    getHotelWithOffersByDate = (date) => {
        this.hotels = this.prices.map((hotelOffers) => {
            // merge each hotel with his cheapest offer
            return {
                ...getHotels().find((hotel) => hotel.ridCode === hotelOffers.ridCode),
                // filter offers by date and fare for each hotel
                offer: hotelOffers.offers
                    .filter((offer) => (offer.fare === "STANDARD" && offer.date === date))
                    .sort((a, b) => (a.price - b.price))[0],
            }
        });

        return this;
    }

    filterHotelByDistance = (lat, lng, radius) => {
        this.hotels = this.findHotelsByDistance(this.hotels, lat, lng, radius)
        .filter((hotel) => (hotel.offer && hotel.distance <= radius));
        return this;
    }

    filterHotelWithoutOfferByDistance = (lat, lng, radius) => {
        this.hotels = this.findHotelsByDistance(this.hotels, lat, lng, radius)
        .filter((hotel) => hotel.distance <= radius);
        return this;
    }

    sortOfferByPrice = () => {
        this.hotels = this.hotels.sort((a, b) => {
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
        return this;
    }

    findHotelsByDistance = (hotels=[], lat, lng, radius) => {
        return hotels.map((hotel) => ({
            ...hotel,
            distance: helper.distance(lat, lng, hotel.latitude, hotel.longitude)/1000,
        })).filter((hotel) => hotel.distance <= radius)
    }

}

module.exports = {
	getHotels: getHotels,
    Filter: Filter,
}