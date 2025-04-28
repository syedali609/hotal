const hotels = [
    {
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60",
      name: "The Royal Palace Hotel",
      reviewScore: 8.7,
      reviewCount: 512,
      pricePerNight: 129,
      offer: "Save 10% today",
      location: "New Delhi, India",
      tagline: "Fully refundable • No prepayment needed",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661929519129-7a76946c1d38?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsfGVufDB8fDB8fHww",
      name: "Sunset Resort",
      reviewScore: 9.2,
      reviewCount: 874,
      pricePerNight: 189,
      offer: "Free breakfast included",
      location: "Goa, India",
      tagline: "Beachfront • Excellent location",
    },
    {
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
      name: "Mountain View Inn",
      reviewScore: 8.5,
      reviewCount: 310,
      pricePerNight: 95,
      offer: "Limited time offer",
      location: "Manali, India",
      tagline: "Great for hiking • Family friendly",
    },
    {
      image:
        "https://images.unsplash.com/photo-1549294413-26f195200c16?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsfGVufDB8fDB8fHww",
      name: "City Lights Hotel",
      reviewScore: 7.9,
      reviewCount: 450,
      pricePerNight: 110,
      offer: "Earn double rewards",
      location: "Mumbai, India",
      tagline: "Near shopping district • Free Wi-Fi",
    },
    {
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=60",
      name: "Paradise Bay",
      reviewScore: 9.5,
      reviewCount: 678,
      pricePerNight: 210,
      offer: "Free cancellation",
      location: "Maldives",
      tagline: "Overwater villas • Luxury stay",
    },
    {
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsfGVufDB8fDB8fHww",
      name: "Hilltop Retreat",
      reviewScore: 8.0,
      reviewCount: 230,
      pricePerNight: 80,
      offer: "Breakfast included",
      location: "Shimla, India",
      tagline: "Cozy rooms • Great view",
    },
    {
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsfGVufDB8fDB8fHww",
      name: "Desert Dunes Resort",
      reviewScore: 8.9,
      reviewCount: 400,
      pricePerNight: 150,
      offer: "Book early and save 15%",
      location: "Jaisalmer, India",
      tagline: "Desert camp • Jeep safari available",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
      name: "Ocean Breeze Hotel",
      reviewScore: 8.3,
      reviewCount: 500,
      pricePerNight: 140,
      offer: "Stay 3 nights, pay for 2",
      location: "Kochi, India",
      tagline: "Sea facing rooms • Pool access",
    },
    {
      image:
        "https://images.unsplash.com/photo-1543364195-bfe6e4932397?auto=format&fit=crop&w=800&q=60",
      name: "Luxury Suites Downtown",
      reviewScore: 9.0,
      reviewCount: 720,
      pricePerNight: 199,
      offer: "VIP Access property",
      location: "Bangalore, India",
      tagline: "Business amenities • Central location",
    },
    {
      image:
        "https://media.istockphoto.com/id/1302442919/photo/luxury-beach-villa-at-night.webp?a=1&b=1&s=612x612&w=0&k=20&c=b0GO1cEmtHSuwmdlmkJGZVhiBoAtn-gNp6LYcPg12AQ=",
      name: "The Green Leaf",
      reviewScore: 7.5,
      reviewCount: 320,
      pricePerNight: 75,
      offer: "Special weekend discount",
      location: "Ooty, India",
      tagline: "Nature stay • Mountain views",
    },
    {
      image:
        "https://media.istockphoto.com/id/514102692/photo/udaipur-city-palace-in-rajasthan-state-of-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=vrI8mr6Plncbv77t_y2ejmc7snDlFR9hE-UefEDjn24=",
      name: "Cityscape Residency",
      reviewScore: 8.1,
      reviewCount: 410,
      pricePerNight: 125,
      offer: "Free room upgrade",
      location: "Chennai, India",
      tagline: "Modern rooms • Easy airport access",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661964326936-831e134bef7d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGhvdGVsfGVufDB8fDB8fHww",
      name: "Golden Sands Hotel",
      reviewScore: 9.4,
      reviewCount: 800,
      pricePerNight: 220,
      offer: "Early check-in available",
      location: "Dubai, UAE",
      tagline: "Luxury beachfront resort",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGhvdGVsfGVufDB8fDB8fHww",
      name: "Peaceful Pines Resort",
      reviewScore: 8.2,
      reviewCount: 270,
      pricePerNight: 98,
      offer: "Kids stay free",
      location: "Munnar, India",
      tagline: "Surrounded by tea gardens",
    },
    {
      image:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdGVsfGVufDB8fDB8fHww",
      name: "Palm Grove Villas",
      reviewScore: 8.8,
      reviewCount: 650,
      pricePerNight: 165,
      offer: "20% off last-minute bookings",
      location: "Kerala, India",
      tagline: "Private pools • Spa services",
    },
    {
      image:
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvdGVsfGVufDB8fDB8fHww",
      name: "Harbor View Hotel",
      reviewScore: 7.8,
      reviewCount: 370,
      pricePerNight: 115,
      offer: "Best price guarantee",
      location: "Pondicherry, India",
      tagline: "Walk to beach • French colony vibes",
    },
  ];
  
  sum = "";
  hotels.forEach(function (elem, idx) {
    sum =
      sum +
      `<div class="hotel-card">
          <img
            src="${elem.image}"
            alt="Hotel Image"
          />
          <div class="hotel-info">
            <h2>${elem.name}</h2>
            <p class="location">${elem.location}</p>
            <p class="review">⭐ ${elem.reviewScore} (${elem.reviewCount})</p>
            <p class="tagline">Fully refundable • No prepayment needed</p>
            <div class="bottom-info">
              <span class="price">₹${elem.pricePerNight}</span>
              <span class="offer">${elem.offer}</span>
            </div>
          </div>
          </div>`;
  });
  document.querySelector(".hotel-cards").innerHTML = sum;
  