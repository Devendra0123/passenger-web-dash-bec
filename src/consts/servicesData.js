export const currentRideData = {
  dateAndTime: "02/12/2024 Sun 12:55",
  bookingType: "one-way",
  bookingStatus: "pending",
  price: "£71.46",
  paymentStatus: "paid",
  duration: "1hrs 45mins",
  bkid: "10003",
  distance: "4 miles",
  vehicle: {
    name: "Saloon",
    brand: "",
    number: "1023",
  },
  driver: {
    name: "Ben Stokes",
    image: "/asset/person1.webp",
    rating: {
      numberofRating: 20,
      value: 5,
    },
    email: "benstokes22@gmail.com",
    phoneNumber: "+012435456",
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
    via: {
      lat: "",
      long: "",
      place: "Kent",
      viaPointLocation: "Leeds Castle",
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
  dropOffTime: "02/09/2024 Tue 17:55"
};

export const scheduledBookingData = [
  {
    dateAndTime: "02/12/2024 Tue 12:55",
    bookingType: "return",
    price: "£71.46",
    paymentStatus: "paid",
    bookingStatus: "confirmed",
    duration: "11 hr 40 min ",
    bkid: "20203",
    distance: "1,053.8 miles",
    vehicle: {
      name: "Saloon",
      brand: "",
      number: "1111",
    },
    driver: {
      fName: "Ben",
      lName: "Stokes",
      image: "/asset/person1.webp",
      rating: {
        numberofRating: 20,
        value: 5,
      },
      email: "benstokes22@gmail.com",
      phoneNumber: "+012435456",
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
      via: {
        lat: "",
        long: "",
        place: "Kent",
        viaPointLocation: "Leeds Castle",
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
    dropOffTime: "02/09/2024 Tue 17:55"
  },

  {
    dateAndTime: "02/12/2024 Mon 12:55",
    bookingType: "one-way",
    price: "£71.46",
    paymentStatus: "not paid",
    bookingStatus: "pending",
    duration: "1hrs 45mins",
    bkid: "10003",
    distance: "20 miles",
    vehicle: {
      name: "Saloon",
      brand: "",
      number: "2232",
    },
    driver: {
      fName: "Ben",
      lName: "Stokes",
      image: "/asset/person1.webp",
      rating: {
        numberofRating: 20,
        value: 3,
      },
      email: "benstokes22@gmail.com",
      phoneNumber: "+012435456",
    },
    location: {
      origin: {
        lat: "",
        long: "",
        place: "Cambridge",
        pickupLocation: "Cambridge University Botanic Garden",
        country: {
          id: "",
          name: "UK",
        },
      },
      via: {
        lat: "",
        long: "",
        place: "Manchester",
        viaPointLocation: "The John Rylands Library",
        country: {
          id: "",
          name: "UK",
        },
      },
      destination: {
        lat: "",
        long: "",
        place: "Liverpool",
        dropoffLocation: "Anfield",
        country: {
          id: "",
          name: "UK",
        },
      },
    },
    dropOffTime: "02/09/2024 Tue 17:55"
  },

  {
    dateAndTime: "02/12/2024 Wed 12:55",
    bookingType: "return",
    price: "£71.46",
    paymentStatus: "paid",
    duration: "1hrs 45mins",
    bookingStatus: "confirmed",
    bkid: "10003",
    distance: "20 miles",
    vehicle: {
      name: "Saloon",
      brand: "",
      number: "1204",
    },
    driver: {
      fName: "Ben",
      lName: "Stokes",
      image: "/asset/person1.webp",
      rating: {
        numberofRating: 20,
        value: 4,
      },
      email: "benstokes22@gmail.com",
      phoneNumber: "+012435456",
    },
    location: {
      origin: {
        lat: "",
        long: "",
        place: "Edinburgh",
        pickupLocation: "Edinburgh Castle",
        country: {
          id: "",
          name: "UK",
        },
      },
      via: {
        lat: "",
        long: "",
        place: "Irish Sea ",
        viaPointLocation: "Blackpool",
        country: {
          id: "",
          name: "UK",
        },
      },
      destination: {
        lat: "",
        long: "",
        place: "Manchester",
        dropoffLocation: "Anfield",
        country: {
          id: "",
          name: "UK",
        },
      },
    },
    dropOffTime: "02/09/2024 Tue 17:55"
  },
];


export const bookingHistoryData = [
  {
    dateAndTime: "02/12/2024 Tue 12:55",
    bookingType: "return",
    price: "£71.46",
    paymentStatus: "paid",
    bookingStatus: "confirmed",
    duration: "11 hr 40 min ",
    bkid: "20203",
    distance: "1,053.8 miles",
    vehicle: {
      name: "Saloon",
      brand: "",
      number: "1111",
    },
    driver: {
      name: "Ben Stokes",
      image: "/asset/person1.webp",
      rating: {
        numberofRating: 20,
        value: 5,
      },
      email: "benstokes22@gmail.com",
      phoneNumber: "+012435456",
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
      via: {
        lat: "",
        long: "",
        place: "Kent",
        viaPointLocation: "Leeds Castle",
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
    dateAndTime: "02/12/2024 Mon 12:55",
    bookingType: "one-way",
    price: "£71.46",
    paymentStatus: "not paid",
    bookingStatus: "pending",
    duration: "1hrs 45mins",
    bkid: "10003",
    distance: "20 miles",
    vehicle: {
      name: "Saloon",
      brand: "",
      number: "2232",
    },
    driver: {
      name: "Ben Stokes",
      image: "/asset/person1.webp",
      rating: {
        numberofRating: 20,
        value: 3,
      },
      email: "benstokes22@gmail.com",
      phoneNumber: "+012435456",
    },
    location: {
      origin: {
        lat: "",
        long: "",
        place: "Cambridge",
        pickupLocation: "Cambridge University Botanic Garden",
        country: {
          id: "",
          name: "UK",
        },
      },
      via: {
        lat: "",
        long: "",
        place: "Manchester",
        viaPointLocation: "The John Rylands Library",
        country: {
          id: "",
          name: "UK",
        },
      },
      destination: {
        lat: "",
        long: "",
        place: "Liverpool",
        dropoffLocation: "Anfield",
        country: {
          id: "",
          name: "UK",
        },
      },
    },
  },

  {
    dateAndTime: "02/12/2024 Wed 12:55pm",
    bookingType: "return",
    price: "£71.46",
    paymentStatus: "paid",
    duration: "1hrs 45mins",
    bookingStatus: "confirmed",
    bkid: "10003",
    distance: "20 miles",
    vehicle: {
      name: "Saloon",
      brand: "",
      number: "1204",
    },
    driver: {
      name: "Ben Stokes",
      image: "/asset/person1.webp",
      rating: {
        numberofRating: 20,
        value: 4,
      },
      email: "benstokes22@gmail.com",
      phoneNumber: "+012435456",
    },
    location: {
      origin: {
        lat: "",
        long: "",
        place: "Edinburgh",
        pickupLocation: "Edinburgh Castle",
        country: {
          id: "",
          name: "UK",
        },
      },
      via: {
        lat: "",
        long: "",
        place: "Irish Sea ",
        viaPointLocation: "Blackpool",
        country: {
          id: "",
          name: "UK",
        },
      },
      destination: {
        lat: "",
        long: "",
        place: "Manchester",
        dropoffLocation: "Anfield",
        country: {
          id: "",
          name: "UK",
        },
      },
    },
  },
];
