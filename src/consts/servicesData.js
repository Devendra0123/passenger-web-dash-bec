export const currentRideData = {
  dateAndTime: "02/12/2024 12:55pm",
  bookingStatus: "pending",
  price: "$71.46",
  paymentStatus: "paid",
  duration: "1hrs 45mins",
  bkid: "10003",
  distance: "4km",
  vehicle: {
    name: "Saloon",
    brand: "",
    number: "1023",
  },
  driver: {
    name: "Ben Stokes",
    image: "/asset/person1.webp",
  },
  location: {
    origin: {
      lat: "",
      long: "",
      place: "Big Ben, London",
      country: {
        id: "",
        name: "UK",
      },
    },

    destination: {
      lat: "",
      long: "",
      place: "UK Tower of London",
      country: {
        id: "",
        name: "UK",
      },
    },
  },
};

export const scheduledBookingData = [
  {
    dateAndTime: "02/12/2024 12:55pm",
    price: "$71.46",
    paymentStatus: "paid",
    bookingStatus: "confirmed",
    duration: "11 hr 40 min ",
    bkid: "20203",
    distance: "1,053.8 km",
    vehicle: {
      name: "Saloon",
      brand: "",
      number: "1111",
    },
    driver: {
      name: "Ben Stokes",
      image: "/asset/person1.webp",
    },
    location: {
      origin: {
        lat: "",
        long: "",
        place: "London",
        pickupLocation: "Tower of london",
        country: {
          id: "",
          name: "UK",
        },
      },

      destination: {
        lat: "",
        long: "",
        place: "Stonehenge",
        dropoffLocation: "Amesbury",
        country: {
          id: "",
          name: "UK",
        },
      },
    },
  },

  {
    dateAndTime: "02/12/2024 12:55pm",
    price: "$71.46",
    paymentStatus: "not paid",
    bookingStatus: "pending",
    duration: "1hrs 45mins",
    bkid: "10003",
    distance: "20km",
    vehicle: {
      name: "Saloon",
      brand: "",
      number: "2232",
    },
    driver: {
      name: "Ben Stokes",
      image: "/asset/person1.webp",
    },
    location: {
      origin: {
        lat: "",
        long: "",
        place: "Cambridge",
        pickupLocation: "",
        country: {
          id: "",
          name: "UK",
        },
      },

      destination: {
        lat: "",
        long: "",
        place: "Liverpool",
        dropoffLocation: "",
        country: {
          id: "",
          name: "UK",
        },
      },
    },
  },

  {
    dateAndTime: "02/12/2024 12:55pm",
    price: "$71.46",
    paymentStatus: "paid",
    duration: "1hrs 45mins",
    bookingStatus: "confirmed",
    bkid: "10003",
    distance: "20km",
    vehicle: {
      name: "Saloon",
      brand: "",
      number: "1204",
    },
    driver: {
      name: "Ben Stokes",
      image: "/asset/person1.webp",
    },
    location: {
      origin: {
        lat: "",
        long: "",
        place: "Edinburgh",
        pickupLocation: "",
        country: {
          id: "",
          name: "UK",
        },
      },

      destination: {
        lat: "",
        long: "",
        place: "Manchester",
        dropoffLocation: "",
        country: {
          id: "",
          name: "UK",
        },
      },
    },
  },
];
