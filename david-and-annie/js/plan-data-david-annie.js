// ═══════════════════════════════════════════════════
// DateFlo | David & Annie | San Diego (Convoy)
// Real venues, real data, real everything
// Supports Plan A (Cliffside Seoul) and Plan B (Bay Views & Broth)
// Full swap options with complete venue objects
// ═══════════════════════════════════════════════════

window.PLAN_ALL = [
  // ════════════════════════════════════
  // PLAN A: CLIFFSIDE SEOUL
  // ════════════════════════════════════
  {
    id: "cliffside-seoul",
    couple: "David & Annie",
    coupleId: "david-2026",
    partner1: "David",
    partner2: "Annie",
    planName: "Cliffside Seoul",
    planEmoji: "🌅",
    planVibe: "Ocean cliffs at golden hour, all you can eat Korean BBQ that's going to blow your minds, and the most Instagram worthy desserts on Convoy",
    greeting: "Okay so we put together something really special for you two. You're starting with a sunset walk along the most dramatic coastline in San Diego, then heading straight to Convoy for some seriously incredible Korean BBQ where you grill your own premium cuts right at the table, and finishing the night with puffles and boba from a spot that has over a thousand five star reviews. This is going to be a night you remember.",
    occasion: "Date Night",
    date: "Saturday, March 28, 2026",
    dateShort: "Sat, March 28",
    startTime: "5:15 PM",
    endTime: "8:15 PM",
    city: "San Diego, CA",
    area: "Point Loma + Convoy",
    coverImage: "images/david-annie/sunset-cliffs-1.jpg",
    route: "Home → Sunset Cliffs → Olleh Korean BBQ → Boba Bar → Home",

    preferences: {
      david: {
        dietary: "No restrictions, open to anything",
        flavors: "Korean BBQ, bold flavors, spicy, savory, Asian and American",
        drinks: "Open to anything",
        avoid: "Nothing specific, adventurous eater"
      },
      annie: {
        dietary: "No allergies, small appetite",
        flavors: "Vietnamese and Korean food, mainly Asian flavors",
        drinks: "Open to anything",
        avoid: "Anything too greasy"
      }
    },

    weather: {
      high: "68°F",
      low: "56°F",
      conditions: "Mostly sunny, upper 60s cooling to mid 50s by sunset",
      sunset: "7:10 PM",
      rainChance: "10%",
      note: "Bring a light layer for the cliffs after sunset. It gets breezy."
    },

    stops: [
      {
        order: 1,
        time: "5:15 PM",
        endTime: "6:00 PM",
        name: "Sunset Cliffs Natural Park",
        type: "Walk",
        location: "Point Loma, San Diego",
        tagline: "The kind of coastal walk where you stop every two minutes because the view keeps getting better",
        description: "We timed this so you get that perfect golden hour light along the most dramatic stretch of coastline in San Diego. Start at the <a href=\"https://www.google.com/maps/search/?api=1&query=Sunset+Cliffs+Natural+Park+Ladera+Street+San+Diego\" target=\"_blank\">Ladera Street parking area</a> and walk south along the bluffs. You'll pass incredible carved sea caves, natural arches, and panoramic ocean views that are genuinely unreal. David and Annie, this is exactly the kind of scenery you love for photos and the background here is going to be absolutely perfect. The <a href=\"https://www.google.com/maps/search/?api=1&query=Sunset+Cliffs+Blvd+San+Diego+CA\" target=\"_blank\">Sunset Cliffs Trail</a> runs right along the edge and the light at this hour makes everything glow. Just stay back from the cliff edges and enjoy the view.",
        image: "images/david-annie/sunset-cliffs-1.jpg",
        images: [
          "images/david-annie/sunset-cliffs-1.jpg",
          "images/david-annie/sunset-cliffs-2.jpg",
          "images/david-annie/sunset-cliffs-3.jpg",
          "images/david-annie/sunset-cliffs-4.jpg",
          "images/david-annie/sunset-cliffs-5.jpg",
          "images/david-annie/sunset-cliffs-6.jpg",
          "images/david-annie/sunset-cliffs-7.jpg",
          "images/david-annie/sunset-cliffs-8.jpg"
        ],
        address: "Ladera St, San Diego, CA 92107",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7197,-117.2555",
        appleMapsUrl: "https://maps.apple.com/?daddr=32.7197,-117.2555&dirflg=d",
        parkingOptions: [
          {
            type: "free",
            recommended: true,
            name: "Ladera Street Lot",
            address: "Ladera St, San Diego, CA 92107",
            cost: "Free",
            tip: "Two free dirt lots right at the park entrance. Park at the lower lot for the closest cliff access. Arrive by 5:00 PM to grab a spot before sunset crowds.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7197,-117.2555",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7197,-117.2555&dirflg=d"
          },
          {
            type: "free",
            recommended: false,
            name: "Sunset Cliffs Blvd Street Parking",
            address: "Sunset Cliffs Blvd, San Diego",
            cost: "Free",
            tip: "Street parking along Sunset Cliffs Boulevard. More spots available but a short walk to the viewpoints.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7210,-117.2558",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7210,-117.2558&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7197&dropoff[longitude]=-117.2555&dropoff[nickname]=Sunset%20Cliffs",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.7197&destination[longitude]=-117.2555"
        },
        cost: "Free",
        dressCode: "Comfy walking shoes, some paths are uneven near the cliff edges",
        reservation: null,
        reviews: {
          google: { stars: 4.8, count: 15000 },
          yelp: { stars: 4.5, count: 1142 }
        },
        happyHour: null,
        menuUrl: null,
        reservationUrl: null,
        phone: null,
        foodRecs: null,
        tips: [
          "Arrive by 5:00 PM to grab parking before sunset crowds",
          "The cliffs face west so you get direct sunset views the entire walk",
          "Stay back from the edges, some areas have erosion",
          "The 0.9 mile trail from the parking lot is easy and flat with incredible views the whole way"
        ],
        swapOptions: [
          // ── Alt 1: Cabrillo National Monument (shared with Plan B) ──
          {
            name: "Cabrillo National Monument",
            type: "Walk",
            location: "Point Loma, San Diego",
            tagline: "The tip of Point Loma with 360 degree views of the ocean, the bay, and the entire San Diego skyline",
            description: "This is the kind of spot that makes you fall in love with San Diego all over again. <a href=\"https://www.google.com/maps/search/?api=1&query=Cabrillo+National+Monument+1800+Cabrillo+Memorial+Dr+San+Diego\" target=\"_blank\">Cabrillo National Monument</a> sits at the very tip of the Point Loma peninsula and the views are a full 360 degrees of ocean, bay, downtown skyline, and Coronado. David and Annie, you can walk the Bayside Trail through coastal sage scrub habitat, check out the historic 1854 lighthouse, and if the tide is low you can explore the tidepools. The golden hour light from up here is absolutely stunning and you'll have panoramic photo opportunities in every direction.",
            image: "images/david-annie/cabrillo-1.jpg",
            images: [
              "images/david-annie/cabrillo-1.jpg",
              "images/david-annie/cabrillo-2.jpg",
              "images/david-annie/cabrillo-3.jpg",
              "images/david-annie/cabrillo-4.jpg",
              "images/david-annie/cabrillo-5.jpg",
              "images/david-annie/cabrillo-6.jpg"
            ],
            address: "1800 Cabrillo Memorial Dr, San Diego, CA 92106",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.6735,-117.2425",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.6735,-117.2425&dirflg=d",
            parkingOptions: [
              {
                type: "paid",
                recommended: true,
                name: "Cabrillo Monument Parking Lot",
                address: "1800 Cabrillo Memorial Dr, San Diego, CA 92106",
                cost: "$20 per vehicle (includes park entry)",
                tip: "The $20 covers both parking and entry to the monument. The lot is right next to the main viewpoints and visitor center. Your pass is good for 7 days.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.6735,-117.2425",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.6735,-117.2425&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.6735&dropoff[longitude]=-117.2425&dropoff[nickname]=Cabrillo%20National%20Monument",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.6735&destination[longitude]=-117.2425"
            },
            cost: "$20 per vehicle entry",
            dressCode: "Comfy walking shoes, bring a light layer since it gets breezy at the tip of Point Loma",
            reservation: null,
            reviews: {
              google: { stars: 4.7, count: 18000 },
              yelp: { stars: 4.5, count: 818 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "+16195234285",
            foodRecs: null,
            tips: [
              "The park closes at 5:00 PM so plan to arrive with enough time to enjoy the views and trails",
              "The Bayside Trail is about 2 miles round trip with gorgeous views of the San Diego Bay",
              "Check the tide charts if you want to explore the tidepools, low tide of 0.7 feet or below is ideal"
            ],
            swapOptions: []
          },
          // ── Alt 2: Kate Sessions Memorial Park (Plan A only) ──
          {
            name: "Kate Sessions Memorial Park",
            type: "Walk",
            location: "Pacific Beach, San Diego",
            tagline: "Sweeping hilltop park in Pacific Beach with panoramic views of Mission Bay, downtown, and the ocean",
            description: "This is hands down one of the best viewpoints in San Diego and most people don't even know about it. <a href=\"https://www.google.com/maps/search/?api=1&query=Kate+Sessions+Memorial+Park+San+Diego\" target=\"_blank\">Kate Sessions Park</a> sits on a hill in Pacific Beach with sweeping views of Mission Bay, downtown San Diego, Point Loma, and the Pacific Ocean. The grassy hillside is perfect for a casual stroll and the photo opportunities here are genuinely incredible. David and Annie, you said you love great views and scenery for pictures and this is exactly that. The golden hour light at this time makes everything look absolutely stunning. Walk along the upper path for the best angles and take your time soaking it all in.",
            image: "images/david-annie/kate-sessions-1.jpg",
            images: [
              "images/david-annie/kate-sessions-1.jpg",
              "images/david-annie/kate-sessions-2.jpg",
              "images/david-annie/kate-sessions-3.jpg",
              "images/david-annie/kate-sessions-4.jpg",
              "images/david-annie/kate-sessions-5.jpg",
              "images/david-annie/kate-sessions-6.jpg"
            ],
            address: "5115 Soledad Rd, San Diego, CA 92109",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8062,-117.2352",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8062,-117.2352&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Kate Sessions Lot",
                address: "5115 Soledad Rd, San Diego",
                cost: "Free",
                tip: "Free lot right at the park entrance. Arrive by 4:45 PM on weekends for the best spots.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8062,-117.2352",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.8062,-117.2352&dirflg=d"
              },
              {
                type: "free",
                recommended: false,
                name: "Soledad Rd Street Parking",
                address: "Soledad Rd near the park",
                cost: "Free",
                tip: "Street parking along Soledad Rd if the lot is full. Short walk to the viewpoint.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8068,-117.2348",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.8068,-117.2348&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.8062&dropoff[longitude]=-117.2352&dropoff[nickname]=Kate%20Sessions%20Park",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.8062&destination[longitude]=-117.2352"
            },
            cost: "Free",
            dressCode: "Comfy shoes, the hillside is grassy and easy to walk",
            reservation: null,
            reviews: {
              google: { stars: 4.7, count: 8500 },
              yelp: { stars: 4.5, count: 650 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: null,
            foodRecs: null,
            tips: [
              "Walk to the upper path for the best panoramic views of the bay and skyline",
              "Golden hour light makes this the perfect photo spot",
              "The park is spacious and never feels crowded even on weekends"
            ],
            swapOptions: []
          },
          // ── Alt 3: Harbor Island Park (shared with Plan B) ──
          {
            name: "Harbor Island Park",
            type: "Walk",
            location: "Harbor Island, San Diego",
            tagline: "A chill bayfront stroll with postcard perfect views of the downtown skyline and Coronado Bridge",
            description: "If you want a totally relaxed, flat, and scenic walk with some of the best skyline views in San Diego, <a href=\"https://www.google.com/maps/search/?api=1&query=Harbor+Island+Park+1875+Harbor+Island+Dr+San+Diego\" target=\"_blank\">Harbor Island Park</a> is perfect. David and Annie, the bayfront path stretches about 1.5 miles along the water with views of the downtown skyline, Coronado Bridge, Point Loma, and all the boats and sailboats cruising by. It never feels crowded and the vibe is calm and relaxed. The grassy lawns are great for just sitting and watching the sunset together. It's easy, beautiful, and the kind of place where you can just breathe and enjoy each other's company.",
            image: "images/david-annie/harbor-island-1.jpg",
            images: [
              "images/david-annie/harbor-island-1.jpg",
              "images/david-annie/harbor-island-2.jpg",
              "images/david-annie/harbor-island-3.jpg",
              "images/david-annie/harbor-island-4.jpg",
              "images/david-annie/harbor-island-5.jpg",
              "images/david-annie/harbor-island-6.jpg"
            ],
            address: "1875 Harbor Island Dr, San Diego, CA 92101",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7253,-117.2064",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7253,-117.2064&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Harbor Island Park Lot",
                address: "1875 Harbor Island Dr, San Diego, CA 92101",
                cost: "Free",
                tip: "Free parking lot right across from the park. Plenty of spaces and easy access to the bayfront path.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7253,-117.2064",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.7253,-117.2064&dirflg=d"
              },
              {
                type: "free",
                recommended: false,
                name: "Harbor Island Dr Street Parking",
                address: "Harbor Island Dr, San Diego, CA 92101",
                cost: "Free",
                tip: "Additional free street parking along Harbor Island Drive if the main lot is full.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7258,-117.2070",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.7258,-117.2070&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7253&dropoff[longitude]=-117.2064&dropoff[nickname]=Harbor%20Island%20Park",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.7253&destination[longitude]=-117.2064"
            },
            cost: "Free",
            dressCode: "Whatever you're comfortable in, the path is flat and paved",
            reservation: null,
            reviews: {
              google: { stars: 4.7, count: 2051 },
              yelp: { stars: 4.5, count: 78 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "+16196866200",
            foodRecs: null,
            tips: [
              "The park is open 6:30 AM to 10:00 PM so you have plenty of time for an evening stroll",
              "The 1.5 mile bayfront path is completely flat and paved, perfect for a relaxed walk",
              "One of the best spots in San Diego for sunset with unobstructed views across the bay"
            ],
            swapOptions: []
          }
        ]
      },
      {
        order: 2,
        time: "6:15 PM",
        endTime: "7:30 PM",
        name: "Olleh Convoy Korean BBQ",
        type: "Dinner",
        location: "Convoy St, San Diego",
        tagline: "All you can eat premium Korean BBQ where you grill your own cuts right at the table",
        description: "This is the main event and you two are going to love it. <a href=\"https://www.google.com/maps/search/?api=1&query=Olleh+Convoy+Korean+BBQ+4344+Convoy+St+San+Diego\" target=\"_blank\">Olleh</a> is one of the best Korean BBQ spots in San Diego and it sits right in the heart of <a href=\"https://www.google.com/maps/search/?api=1&query=Convoy+Street+San+Diego\" target=\"_blank\">Convoy</a>, which is basically the best food neighborhood in the city. You get a tabletop grill and premium meats like rib eye, galbi, and pork belly that you cook together. The interactive experience makes it genuinely fun as a date. David, this is right in your lane with the bold Korean flavors you love. Annie, they have lighter options like chicken and seafood plus all the side dishes are unlimited so you can try a little bit of everything without feeling overwhelmed. The premium menu is $30 per person which is an incredible value for the quality you're getting.",
        image: "images/david-annie/olleh-1.jpg",
        images: [
          "images/david-annie/olleh-1.jpg",
          "images/david-annie/olleh-2.jpg",
          "images/david-annie/olleh-3.jpg",
          "images/david-annie/olleh-4.jpg",
          "images/david-annie/olleh-5.jpg",
          "images/david-annie/olleh-6.jpg",
          "images/david-annie/olleh-7.jpg",
          "images/david-annie/olleh-8.jpg"
        ],
        address: "4344 Convoy St, Ste I, San Diego, CA 92111",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8177,-117.1539",
        appleMapsUrl: "https://maps.apple.com/?daddr=32.8177,-117.1539&dirflg=d",
        parkingOptions: [
          {
            type: "free",
            recommended: true,
            name: "Strip Mall Lot (Convoy)",
            address: "4344 Convoy St lot",
            cost: "Free",
            tip: "The strip mall lot right in front of Olleh is free. If it's full, park by the residential area 2 minutes away on foot.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8177,-117.1539",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8177,-117.1539&dirflg=d"
          },
          {
            type: "free",
            recommended: false,
            name: "Residential Side Streets",
            address: "Side streets off Convoy",
            cost: "Free",
            tip: "2 to 3 minute walk from the restaurant. Always available.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8185,-117.1545",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8185,-117.1545&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.8177&dropoff[longitude]=-117.1539&dropoff[nickname]=Olleh%20Korean%20BBQ",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.8177&destination[longitude]=-117.1539"
        },
        cost: "$60–70 for two",
        dressCode: "Casual, you'll be grilling at your table so keep it comfortable",
        reservation: {
          status: "suggested",
          name: "David",
          partySize: 2,
          time: "6:15 PM",
          notes: "Call ahead to reserve, especially for weekend evenings. (858) 673-6350"
        },
        reviews: {
          google: { stars: 4.4, count: 903 },
          yelp: { stars: 4.3, count: 570 }
        },
        happyHour: null,
        menuUrl: "https://olleh-convoy-korean-bbq.res-menu.net/menu",
        reservationUrl: null,
        phone: "+18586736350",
        foodRecs: {
          david: [
            { name: "Galbi (Short Rib)", desc: "David, this is the star of the menu. Marinated beef short rib that's tender and packed with flavor. One of the most ordered items and for very good reason." },
            { name: "Spicy Pork Belly", desc: "Bold, savory, and perfectly spiced. This is going to hit all the flavors you love. Grill it until it gets a little crispy on the edges." },
            { name: "Rib Eye", desc: "Premium cut that melts on the grill. Pair it with their sesame oil and salt dipping sauce for the full experience." }
          ],
          annie: [
            { name: "Garlic Chicken", desc: "Annie, this one is light, flavorful, and not greasy at all. The garlic marinade gives it just the right amount of punch without being heavy." },
            { name: "Shrimp", desc: "Fresh and clean flavors. Perfect for a smaller appetite because you can grill just a few at a time and enjoy them with the banchan." },
            { name: "Volcano Pork Belly", desc: "A little spicy, a lot delicious. The portions you grill yourself are small so you can try it without committing to a full plate." }
          ],
          shared: [
            { name: "Kimchi Fried Rice ($5)", desc: "Ask them to make this on your grill at the end of the meal with the leftover meat juices. It's the perfect way to close out dinner and it's only five bucks." }
          ]
        },
        tips: [
          "The premium menu at $30 per person is the best value, it includes galbi, rib eye, and all banchan",
          "Call ahead for a reservation on weekend evenings to avoid the 40+ minute wait",
          "Ask for the kimchi fried rice to be made on your grill at the end, it's a hidden move"
        ],
        swapOptions: [
          // ── Alt 1: Manna Heaven BBQ (Plan A only) ──
          {
            name: "Manna Heaven BBQ",
            type: "Dinner",
            location: "Convoy St, San Diego",
            tagline: "Beloved all you can eat Korean BBQ on Convoy since 2010 with quality marinated meats and fresh banchan",
            description: "This is one of the OG Korean BBQ spots on Convoy and it's been a local favorite since 2010 for a reason. <a href=\"https://www.google.com/maps/search/?api=1&query=Manna+Heaven+BBQ+4428+Convoy+St+San+Diego\" target=\"_blank\">Manna Heaven BBQ</a> does all you can eat Korean BBQ with quality marinated meats that you grill right at your table. David, their marinated bulgogi and spicy pork are right up your alley with bold, savory Korean flavors. Annie, they have lighter options like chicken and seafood plus all the banchan (side dishes) are unlimited so you can pick and choose what you like without committing to heavy portions. The value is incredible for what you get and the atmosphere is lively and fun.",
            image: "images/david-annie/manna-heaven-1.jpg",
            images: [
              "images/david-annie/manna-heaven-1.jpg",
              "images/david-annie/manna-heaven-2.jpg",
              "images/david-annie/manna-heaven-3.jpg",
              "images/david-annie/manna-heaven-4.jpg",
              "images/david-annie/manna-heaven-5.jpg",
              "images/david-annie/manna-heaven-6.jpg"
            ],
            address: "4428 Convoy St, San Diego, CA 92111",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8190,-117.1545",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8190,-117.1545&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Convoy St Strip Mall Lot",
                address: "4428 Convoy St, San Diego, CA 92111",
                cost: "Free",
                tip: "Free strip mall parking lot shared with neighboring businesses. Gets busy on weekend evenings so arrive right at your reservation time.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8190,-117.1545",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.8190,-117.1545&dirflg=d"
              },
              {
                type: "free",
                recommended: false,
                name: "Residential Side Streets",
                address: "Side streets off Convoy St",
                cost: "Free",
                tip: "Plenty of free street parking on residential streets just off Convoy. A 2 minute walk to the restaurant.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8195,-117.1550",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.8195,-117.1550&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.8190&dropoff[longitude]=-117.1545&dropoff[nickname]=Manna%20Heaven%20BBQ",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.8190&destination[longitude]=-117.1545"
            },
            cost: "$55–65 for two",
            dressCode: "Casual, you'll be grilling at your table so keep it comfortable",
            reservation: {
              status: "suggested",
              name: "David",
              partySize: 2,
              time: "6:15 PM",
              notes: "Walk ins welcome but weekend evenings can get busy. Call ahead to be safe."
            },
            reviews: {
              google: { stars: 4.3, count: 1100 },
              yelp: { stars: 4.0, count: 750 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "+18585600085",
            foodRecs: {
              david: [
                { name: "Bulgogi (Marinated Beef)", desc: "David, the bulgogi here is sweet, savory, and perfectly marinated. It caramelizes beautifully on the grill and it's one of the most popular items on the menu." },
                { name: "Spicy Pork (Jeyuk)", desc: "Bold gochujang marinade with serious kick. Grill it until the edges get a little crispy and wrap it in lettuce with some garlic and ssamjang." },
                { name: "Beef Short Rib (Galbi)", desc: "Tender, marinated, and packed with that classic Korean BBQ flavor. This is a must order every time." }
              ],
              annie: [
                { name: "Garlic Chicken", desc: "Annie, this one is lighter and the garlic marinade gives it great flavor without being heavy or greasy. Perfect with rice and banchan." },
                { name: "Shrimp", desc: "Fresh and clean on the grill. You can cook just a few at a time so it's perfect for pacing yourself and enjoying the meal." },
                { name: "Tofu and Veggie Combo", desc: "If you want to balance out the heavier meats, the grilled tofu and vegetables are fresh and light." }
              ],
              shared: [
                { name: "Kimchi Jjigae (Stew)", desc: "Ask for the kimchi stew to share. It's warm, tangy, and the perfect complement to the grilled meats. Great for dipping rice into." }
              ]
            },
            tips: [
              "They've been on Convoy since 2010 and the quality has stayed consistent the entire time",
              "The all you can eat menu includes unlimited banchan which is always fresh and well stocked",
              "Weekend evenings can have a wait so calling ahead is a good idea"
            ],
            swapOptions: []
          },
          // ── Alt 2: Song Hak Korean BBQ (Plan A only) ──
          {
            name: "Song Hak Korean BBQ",
            type: "Dinner",
            location: "Convoy St, San Diego",
            tagline: "Upscale Korean BBQ where staff cook premium prime grade meats for you at the table",
            description: "If you want the Korean BBQ experience kicked up a notch, <a href=\"https://www.google.com/maps/search/?api=1&query=Song+Hak+Korean+BBQ+4681+Convoy+St+San+Diego\" target=\"_blank\">Song Hak</a> is where you go. This is a step above typical AYCE spots because their staff actually cook the premium prime grade meats for you at your table, so everything comes out perfectly every time. David, their specialty prime galbi and wagyu brisket are on another level with that rich, beefy flavor you love. Annie, the staff handle all the grilling so you can just sit back and enjoy without worrying about the smoky cooking part. They also have lighter options and the banchan spread is top notch. The vibe is a bit more upscale and polished than the usual Convoy spots which makes it feel like a special occasion.",
            image: "images/david-annie/song-hak-1.jpg",
            images: [
              "images/david-annie/song-hak-1.jpg",
              "images/david-annie/song-hak-2.jpg",
              "images/david-annie/song-hak-3.jpg",
              "images/david-annie/song-hak-4.jpg",
              "images/david-annie/song-hak-5.jpg",
              "images/david-annie/song-hak-6.jpg"
            ],
            address: "4681 Convoy St, Ste 101, San Diego, CA 92111",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8245,-117.1555",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8245,-117.1555&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Convoy St Plaza Lot",
                address: "4681 Convoy St, San Diego, CA 92111",
                cost: "Free",
                tip: "Free strip mall parking right in front. Can get tight on weekend evenings so arrive a few minutes early.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8245,-117.1555",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.8245,-117.1555&dirflg=d"
              },
              {
                type: "free",
                recommended: false,
                name: "Adjacent Convoy Lots",
                address: "Nearby strip mall lots on Convoy St",
                cost: "Free",
                tip: "The neighboring strip mall lots along Convoy are all free and just a short walk.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8240,-117.1550",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.8240,-117.1550&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.8245&dropoff[longitude]=-117.1555&dropoff[nickname]=Song%20Hak%20Korean%20BBQ",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.8245&destination[longitude]=-117.1555"
            },
            cost: "$70–90 for two",
            dressCode: "Smart casual, this is a slightly more upscale spot than typical Convoy BBQ",
            reservation: {
              status: "suggested",
              name: "David",
              partySize: 2,
              time: "6:15 PM",
              notes: "Reservations strongly recommended for weekend evenings. Book through Yelp or call ahead."
            },
            reviews: {
              google: { stars: 4.4, count: 1500 },
              yelp: { stars: 4.0, count: 950 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "+18582220429",
            foodRecs: {
              david: [
                { name: "Prime Galbi (Short Rib)", desc: "David, the prime grade galbi here is a cut above. Rich, marbled, and cooked to perfection by the staff. You just sit back and eat." },
                { name: "Wagyu Brisket", desc: "This is their showstopper. Wagyu grade brisket that melts in your mouth. The marbling is incredible and the flavor is out of this world." },
                { name: "Spicy Pork Collar", desc: "Bold spicy marinade on a perfectly fatty cut. The staff will cook it to get those crispy caramelized edges you love." }
              ],
              annie: [
                { name: "Thinly Sliced Beef Belly", desc: "Annie, this is lighter than you'd expect. Thin slices that cook quickly and pair perfectly with the lettuce wraps and fresh banchan." },
                { name: "Chicken Breast", desc: "Clean and simple with a light marinade. The staff handle the grilling so you won't get any of the smoke or grease on you." },
                { name: "Seafood Combo", desc: "Fresh shrimp and squid grilled at the table. Light, clean, and perfect for a smaller appetite." }
              ],
              shared: [
                { name: "Corn Cheese", desc: "Sweet corn baked with melted cheese right on the grill. It sounds simple but it's incredibly addicting and the perfect side to share." }
              ]
            },
            tips: [
              "The staff cook everything for you so just sit back and enjoy the experience",
              "Their prime and wagyu cuts are a step above typical AYCE quality",
              "Weekend evenings book up fast so reserve ahead of time"
            ],
            swapOptions: []
          },
          // ── Alt 3: SOT BBQ (Plan A only) ──
          {
            name: "SOT BBQ",
            type: "Dinner",
            location: "Convoy St, San Diego",
            tagline: "Sleek newer Korean BBQ spot on Convoy with premium a la carte and combo options for a more refined experience",
            description: "SOT is one of the newer Korean BBQ spots on Convoy and it brings a more refined, modern feel to the table. <a href=\"https://www.google.com/maps/search/?api=1&query=SOT+BBQ+Convoy+San+Diego\" target=\"_blank\">SOT BBQ</a> offers premium a la carte cuts and curated combo platters rather than the typical all you can eat format, which means the quality of every piece of meat is top tier. David, their marinated short rib and premium brisket are exactly the bold, savory flavors you love and the quality really shines through when it's a la carte. Annie, the combo platters let you try smaller portions of different cuts so you're not locked into one thing, and the lighter options like chicken and seafood are fresh and clean. The space itself is sleek and modern with a date night atmosphere that feels a bit more elevated.",
            image: "images/david-annie/sot-bbq-1.jpg",
            images: [
              "images/david-annie/sot-bbq-1.jpg",
              "images/david-annie/sot-bbq-2.jpg",
              "images/david-annie/sot-bbq-3.jpg",
              "images/david-annie/sot-bbq-4.jpg",
              "images/david-annie/sot-bbq-5.jpg",
              "images/david-annie/sot-bbq-6.jpg"
            ],
            address: "4646 Convoy St, San Diego, CA 92111",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8240,-117.1549",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8240,-117.1549&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Convoy St Plaza Lot",
                address: "4646 Convoy St, San Diego, CA 92111",
                cost: "Free",
                tip: "Free strip mall parking right in front. Shared lot with other Convoy businesses.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8240,-117.1549",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.8240,-117.1549&dirflg=d"
              },
              {
                type: "free",
                recommended: false,
                name: "Adjacent Convoy Lots",
                address: "Nearby strip mall lots on Convoy St",
                cost: "Free",
                tip: "Neighboring lots along Convoy are free and just a minute walk.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8235,-117.1545",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.8235,-117.1545&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.8240&dropoff[longitude]=-117.1549&dropoff[nickname]=SOT%20BBQ",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.8240&destination[longitude]=-117.1549"
            },
            cost: "$65–85 for two",
            dressCode: "Smart casual, the space has a more modern and polished vibe",
            reservation: {
              status: "suggested",
              name: "David",
              partySize: 2,
              time: "6:15 PM",
              notes: "Reservations recommended for weekend evenings. Walk ins welcome but waits can be long."
            },
            reviews: {
              google: { stars: 4.3, count: 600 },
              yelp: { stars: 4.0, count: 400 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: null,
            foodRecs: {
              david: [
                { name: "Marinated Short Rib", desc: "David, the short rib here is premium quality and the marinade has that perfect balance of sweet and savory. A la carte means every cut is chosen with care." },
                { name: "Premium Brisket", desc: "Thick, well marbled, and cooked on the table grill to perfection. This is the kind of brisket that makes you appreciate quality over quantity." },
                { name: "Spicy Pork Belly", desc: "Bold gochujang glaze on thick cut pork belly. Get some char on the edges for the best texture and flavor." }
              ],
              annie: [
                { name: "Chicken Combo Platter", desc: "Annie, the combo platters are perfect because you get smaller portions of a few different things. The chicken is light and well seasoned without being heavy." },
                { name: "Seafood Selection", desc: "Fresh shrimp and squid that are clean and light on the grill. Great for balancing out the heavier meats David will be ordering." },
                { name: "Veggie Platter", desc: "Grilled mushrooms, zucchini, and onions that complement the proteins perfectly. Fresh and not greasy at all." }
              ],
              shared: [
                { name: "Korean Egg Soufflé", desc: "Their fluffy steamed egg soufflé is the perfect shared starter. Light, savory, and a nice palate cleanser between all the grilled items." }
              ]
            },
            tips: [
              "A la carte pricing means you pay for quality over quantity, portions are generous for the price",
              "The combo platters are the best value if you want to try a variety of cuts",
              "The modern interior makes it feel like a special date night spot"
            ],
            swapOptions: []
          }
        ]
      },
      {
        order: 3,
        time: "7:35 PM",
        endTime: "8:15 PM",
        name: "Boba Bar and Desserts",
        type: "Dessert",
        location: "Convoy St, San Diego",
        tagline: "Puffles, boba, and frozen treats that are genuinely the most photogenic desserts on Convoy",
        description: "We saved the sweetest stop for last and honestly this place is going to make your night. <a href=\"https://www.google.com/maps/search/?api=1&query=Boba+Bar+and+Desserts+4619+Convoy+St+San+Diego\" target=\"_blank\">Boba Bar</a> is famous for their puffles, which are these egg waffle cones filled with ice cream and topped with all kinds of fun toppings. Annie, this is your moment. The portions look big but the waffle is light and airy so it's perfect for a smaller appetite. They also have incredible boba milk tea that's freshly brewed. It's a 3 minute walk from Olleh so you don't even have to move the car. Just stroll over and end the night on the sweetest note possible.",
        image: "images/david-annie/boba-1.jpg",
        images: [
          "images/david-annie/boba-1.jpg",
          "images/david-annie/boba-2.jpg",
          "images/david-annie/boba-3.jpg",
          "images/david-annie/boba-4.jpg",
          "images/david-annie/boba-5.jpg",
          "images/david-annie/boba-6.jpg",
          "images/david-annie/boba-7.jpg"
        ],
        address: "4619 Convoy St, San Diego, CA 92111",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8194,-117.1557",
        appleMapsUrl: "https://maps.apple.com/?daddr=32.8194,-117.1557&dirflg=d",
        parkingOptions: [
          {
            type: "free",
            recommended: true,
            name: "Same Convoy Lot",
            address: "Strip mall lot on Convoy St",
            cost: "Free",
            tip: "3 minute walk from Olleh. Same Convoy strip mall parking, no need to move the car.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8194,-117.1557",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8194,-117.1557&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.8194&dropoff[longitude]=-117.1557&dropoff[nickname]=Boba%20Bar%20and%20Desserts",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.8194&destination[longitude]=-117.1557"
        },
        cost: "$15–20 for two",
        dressCode: null,
        reservation: null,
        reviews: {
          google: { stars: 4.5, count: 1800 },
          yelp: { stars: 4.3, count: 1149 }
        },
        happyHour: null,
        menuUrl: "https://www.bobabarsd.com",
        reservationUrl: null,
        phone: null,
        foodRecs: null,
        tips: [
          "The puffles are their signature, get one with ice cream and toppings to share",
          "Their freshly brewed boba milk tea is some of the best on Convoy",
          "It's a 3 minute walk from Olleh so just leave the car and stroll over"
        ],
        swapOptions: [
          // ── Alt 1: Iceskimo (shared with Plan B) ──
          {
            name: "Iceskimo",
            type: "Dessert",
            location: "Convoy St, San Diego",
            tagline: "Taiwanese shaved snow that's lighter than ice cream and creamier than shaved ice, made from scratch with real ingredients",
            description: "If you want something lighter and more unique than regular ice cream, <a href=\"https://www.google.com/maps/search/?api=1&query=Iceskimo+4609+Convoy+St+San+Diego\" target=\"_blank\">Iceskimo</a> is a must. They make Taiwanese shaved snow from scratch with no powders, no syrups, and no artificial anything. The flavor infused snow blocks get shaved into thin ribbons that literally melt on your tongue. David, the Vietnamese Coffee flavor is rich and bold with that classic coffee kick. Annie, the Ube or Strawberry flavors are light, creamy, and not too sweet at all. You pick your base flavor and then add toppings like fresh fruit, mochi, and boba from their DIY bar. It's fun, interactive, and the perfect light ending to dinner.",
            image: "images/david-annie/iceskimo-1.jpg",
            images: [
              "images/david-annie/iceskimo-1.jpg",
              "images/david-annie/iceskimo-2.jpg",
              "images/david-annie/iceskimo-3.jpg",
              "images/david-annie/iceskimo-4.jpg",
              "images/david-annie/iceskimo-5.jpg",
              "images/david-annie/iceskimo-6.jpg"
            ],
            address: "4609 Convoy St, Ste B, San Diego, CA 92111",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8240,-117.1549",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8240,-117.1549&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Convoy St Plaza Lot",
                address: "4609 Convoy St, San Diego, CA 92111",
                cost: "Free",
                tip: "Free strip mall parking right in front. Can get tight on weekend evenings so you may need to park in an adjacent lot.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8240,-117.1549",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.8240,-117.1549&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.8240&dropoff[longitude]=-117.1549&dropoff[nickname]=Iceskimo",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.8240&destination[longitude]=-117.1549"
            },
            cost: "$12-18 for two",
            dressCode: null,
            reservation: null,
            reviews: {
              google: { stars: 4.6, count: 1200 },
              yelp: { stars: 4.0, count: 1129 }
            },
            happyHour: null,
            menuUrl: "https://www.iceskimo.com",
            reservationUrl: null,
            phone: "+18582161111",
            foodRecs: null,
            tips: [
              "Toppings are charged by weight so start with a few favorites and add more if you want",
              "The Coconut shaved snow with condensed milk drizzle is a fan favorite combination",
              "Open until 9:30 PM on weeknights and 10:30 PM Fri and Sat so you have plenty of time after dinner"
            ],
            swapOptions: []
          },
          // ── Alt 2: Happy Lemon (shared with Plan B) ──
          {
            name: "Happy Lemon",
            type: "Dessert",
            location: "Convoy St, San Diego",
            tagline: "The boba chain famous for their signature salted cheese foam topping and house brewed teas",
            description: "If you're in the mood for classic boba with a twist, <a href=\"https://www.google.com/maps/search/?api=1&query=Happy+Lemon+4633+Convoy+St+San+Diego\" target=\"_blank\">Happy Lemon</a> is the spot. They've been making waves since 2006 with house brewed teas, fresh squeezed juices, and their signature salted cheese foam topping that people absolutely love. David, the Brown Sugar Boba Milk Tea is rich and satisfying with that perfect chewy boba texture. Annie, the Jasmine Green Tea with Salted Cheese is lighter and so refreshing with just the right amount of creamy foam on top. They also have bubble waffles if you want a little something extra to share on your walk.",
            image: "images/david-annie/happy-lemon-1.jpg",
            images: [
              "images/david-annie/happy-lemon-1.jpg",
              "images/david-annie/happy-lemon-2.jpg",
              "images/david-annie/happy-lemon-3.jpg",
              "images/david-annie/happy-lemon-4.jpg",
              "images/david-annie/happy-lemon-5.jpg",
              "images/david-annie/happy-lemon-6.jpg"
            ],
            address: "4633 Convoy St, Ste 107, San Diego, CA 92111",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8237,-117.1552",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8237,-117.1552&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Convoy St Plaza Lot",
                address: "4633 Convoy St, San Diego, CA 92111",
                cost: "Free",
                tip: "Inside a small mall off Convoy St. The parking is shared with other businesses so it can be a challenge on busy nights. Try adjacent Convoy lots if full.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8237,-117.1552",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.8237,-117.1552&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.8237&dropoff[longitude]=-117.1552&dropoff[nickname]=Happy%20Lemon",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.8237&destination[longitude]=-117.1552"
            },
            cost: "$12-18 for two",
            dressCode: null,
            reservation: null,
            reviews: {
              google: { stars: 4.0, count: 752 },
              yelp: { stars: 3.5, count: 859 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "+18584306800",
            foodRecs: null,
            tips: [
              "The Salted Cheese foam topping is their signature and what sets them apart from other boba shops",
              "It's inside a small mall off Convoy so look for the entrance rather than a storefront on the street",
              "Open until 11:00 PM on weeknights and midnight Fri and Sat so there's no rush after dinner"
            ],
            swapOptions: []
          },
          // ── Alt 3: Bopomofo Cafe (shared with Plan B) ──
          {
            name: "Bopomofo Cafe",
            type: "Dessert",
            location: "Kearny Mesa, San Diego",
            tagline: "A Taiwanese inspired cafe with elevated boba, creative matcha drinks, and the crispiest popcorn chicken on Convoy",
            description: "This is more than just a boba shop, it's a whole vibe. <a href=\"https://www.google.com/maps/search/?api=1&query=Bopomofo+Cafe+7951+Othello+Ave+San+Diego\" target=\"_blank\">Bopomofo Cafe</a> is a Taiwanese inspired cafe that takes everything up a notch with high quality ingredients, homemade drinks, and a cozy atmosphere that makes you want to linger. David, try the Black Sesame Latte or their Ba La Matcha, both are creative and bold. Annie, the Lychee Pear Blossom tea is light, floral, and so refreshing. And you absolutely have to split the Popcorn Chicken, big juicy bites of marinated chicken with Thai basil aioli that people literally cannot stop raving about. It's the perfect dessert stop that doubles as a late night snack.",
            image: "images/david-annie/bopomofo-1.jpg",
            images: [
              "images/david-annie/bopomofo-1.jpg",
              "images/david-annie/bopomofo-2.jpg",
              "images/david-annie/bopomofo-3.jpg",
              "images/david-annie/bopomofo-4.jpg",
              "images/david-annie/bopomofo-5.jpg",
              "images/david-annie/bopomofo-6.jpg"
            ],
            address: "7951 Othello Ave, Ste 106, San Diego, CA 92111",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8190,-117.1540",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8190,-117.1540&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Othello Ave Plaza Lot",
                address: "7951 Othello Ave, San Diego, CA 92111",
                cost: "Free",
                tip: "Free lot right in front of the cafe. It's a bit off the main Convoy strip on Othello Ave but easy to find.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8190,-117.1540",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.8190,-117.1540&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.8190&dropoff[longitude]=-117.1540&dropoff[nickname]=Bopomofo%20Cafe",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.8190&destination[longitude]=-117.1540"
            },
            cost: "$15-25 for two",
            dressCode: null,
            reservation: null,
            reviews: {
              google: { stars: 4.3, count: 78 },
              yelp: { stars: 4.5, count: 426 }
            },
            happyHour: null,
            menuUrl: "https://www.bopomofocafe.com/menu",
            reservationUrl: null,
            phone: "+16262170885",
            foodRecs: null,
            tips: [
              "The Popcorn Chicken has a 100% approval rating and is an absolute must order even as a dessert stop",
              "It's on Othello Ave just off Convoy, not directly on the main strip but very close",
              "Open daily until 9:00 PM so plan accordingly if dinner runs late"
            ],
            swapOptions: []
          }
        ]
      }
    ],

    travelTimes: [
      { from: 1, to: 2, duration: "15 min drive", mode: "car" },
      { from: 2, to: 3, duration: "3 min walk", mode: "walk" }
    ],

    budget: {
      items: [
        { label: "Dinner (Olleh Korean BBQ)", cost: "$60–70" },
        { label: "Dessert (Boba Bar)", cost: "$15–20" },
        { label: "Parking", cost: "Free" }
      ],
      total: "$75–90",
      tip: "The premium menu at Olleh is $30 per person and includes everything. Parking is free at both Sunset Cliffs and on Convoy so you won't spend a dime on it. If you want to save a bit more, share a puffle at Boba Bar instead of getting two."
    },

    checklist: [
      { id: "chk-call-olleh", text: "Call Olleh to reserve for 6:15 PM, 2 guests: (858) 673-6350", bold: "Olleh" },
      { id: "chk-leave", text: "Leave home by 4:45 PM to arrive at Sunset Cliffs by 5:15 PM with parking buffer", bold: "4:45 PM" }
    ],

    calendar: {
      title: "DateFlo: Cliffside Seoul (Sunset Cliffs + Convoy)",
      date: "20260328",
      startTime: "T001500Z",
      endTime: "T031500Z",
      location: "San Diego, CA",
      description: "Plan A: Cliffside Seoul\n\n5:15 PM Sunset Cliffs Walk\n6:15 PM Korean BBQ at Olleh\n7:35 PM Dessert at Boba Bar\n\nFull details: dateflo.com/david-and-annie"
    },

    logistics: {
      whatToWear: "Keep it casual and comfy. Walking shoes for the cliffs and a light layer for after sunset when the breeze picks up. Dinner is casual so no need to change.",
      transportation: "Drive from home to Sunset Cliffs, then one quick 15 minute drive to Convoy for the rest of the night. Parking is free at both spots so you won't spend a dime on it."
    }
  },

  // ════════════════════════════════════
  // PLAN B: BAY VIEWS & BROTH
  // ════════════════════════════════════
  {
    id: "bay-views-broth",
    couple: "David & Annie",
    coupleId: "david-2026",
    partner1: "David",
    partner2: "Annie",
    planName: "Bay Views & Broth",
    planEmoji: "🍜",
    planVibe: "Panoramic bay views from the best lookout in the city, award winning Vietnamese on Convoy, and puffle heaven for dessert",
    greeting: "We designed this one to be the perfect mix of everything you two love. You're starting at the best panoramic viewpoint in San Diego where you can see the entire bay, the skyline, and the ocean all at once. Then you're heading to Convoy for Vietnamese food from a restaurant that's won Best Vietnamese in San Diego multiple years running, and finishing with the most talked about dessert spot on the street. The views, the food, the vibes. This one has it all.",
    occasion: "Date Night",
    date: "Saturday, March 28, 2026",
    dateShort: "Sat, March 28",
    startTime: "5:00 PM",
    endTime: "7:45 PM",
    city: "San Diego, CA",
    area: "Pacific Beach + Convoy",
    coverImage: "images/david-annie/kate-sessions-1.jpg",
    route: "Home → Kate Sessions Park → Phuong Trang → Boba Bar → Home",

    preferences: {
      david: {
        dietary: "No restrictions, open to anything",
        flavors: "Korean BBQ, bold flavors, Asian and American",
        drinks: "Open to anything",
        avoid: "Nothing specific"
      },
      annie: {
        dietary: "No allergies, small appetite",
        flavors: "Vietnamese and Korean food, mainly Asian",
        drinks: "Open to anything",
        avoid: "Anything too greasy"
      }
    },

    weather: {
      high: "68°F",
      low: "56°F",
      conditions: "Mostly sunny, upper 60s cooling to mid 50s",
      sunset: "7:10 PM",
      rainChance: "10%",
      note: "Light layer for the park, it's breezy on the hilltop."
    },

    stops: [
      {
        order: 1,
        time: "5:00 PM",
        endTime: "5:45 PM",
        name: "Kate Sessions Park",
        type: "Walk",
        location: "Pacific Beach, San Diego",
        tagline: "The panoramic viewpoint where you can see the entire bay, the skyline, and the ocean all at once",
        description: "This is hands down the best viewpoint in San Diego and most people don't even know about it. <a href=\"https://www.google.com/maps/search/?api=1&query=Kate+Sessions+Park+San+Diego\" target=\"_blank\">Kate Sessions Park</a> sits on a hill in Pacific Beach with sweeping views of Mission Bay, downtown San Diego, Point Loma, and the Pacific Ocean. The grassy hillside is perfect for a casual stroll and the photo opportunities here are genuinely incredible. David and Annie, you said you love great views and scenery for pictures and this is exactly that. The golden hour light at this time makes everything look absolutely stunning. Walk along the upper path for the best angles and take your time soaking it all in.",
        image: "images/david-annie/kate-sessions-1.jpg",
        images: [
          "images/david-annie/kate-sessions-1.jpg",
          "images/david-annie/kate-sessions-2.jpg",
          "images/david-annie/kate-sessions-3.jpg",
          "images/david-annie/kate-sessions-4.jpg",
          "images/david-annie/kate-sessions-5.jpg"
        ],
        address: "5115 Soledad Rd, San Diego, CA 92109",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8062,-117.2352",
        appleMapsUrl: "https://maps.apple.com/?daddr=32.8062,-117.2352&dirflg=d",
        parkingOptions: [
          {
            type: "free",
            recommended: true,
            name: "Kate Sessions Lot",
            address: "5115 Soledad Rd, San Diego",
            cost: "Free",
            tip: "Free lot right at the park entrance. Arrive by 4:45 PM on weekends for the best spots.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8062,-117.2352",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8062,-117.2352&dirflg=d"
          },
          {
            type: "free",
            recommended: false,
            name: "Soledad Rd Street Parking",
            address: "Soledad Rd near the park",
            cost: "Free",
            tip: "Street parking along Soledad Rd if the lot is full. Short walk to the viewpoint.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8068,-117.2348",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8068,-117.2348&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.8062&dropoff[longitude]=-117.2352&dropoff[nickname]=Kate%20Sessions%20Park",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.8062&destination[longitude]=-117.2352"
        },
        cost: "Free",
        dressCode: "Comfy shoes, the hillside is grassy and easy to walk",
        reservation: null,
        reviews: {
          google: { stars: 4.7, count: 8500 },
          yelp: { stars: 4.5, count: 650 }
        },
        happyHour: null,
        menuUrl: null,
        reservationUrl: null,
        phone: null,
        foodRecs: null,
        tips: [
          "Walk to the upper path for the best panoramic views of the bay and skyline",
          "Golden hour light makes this the perfect photo spot",
          "The park is spacious and never feels crowded even on weekends"
        ],
        swapOptions: [
          // ── Alt 1: La Jolla Coast Walk Trail ──
          {
            name: "La Jolla Coast Walk Trail",
            type: "Walk",
            location: "La Jolla, San Diego",
            tagline: "A hidden cliffside trail with sea caves, ocean panoramas, and some of the best coastal scenery in California",
            description: "David and Annie, this is one of the most romantic walks in all of San Diego and most visitors don't even know it exists. The <a href=\"https://www.google.com/maps/search/?api=1&query=Coast+Walk+Trail+La+Jolla+San+Diego\" target=\"_blank\">La Jolla Coast Walk Trail</a> is tucked behind The Cave Store and runs along dramatic sandstone bluffs overlooking the ocean. You'll see carved sea caves, crashing waves, and if you're lucky, seals lounging on the rocks below. The trail is only about half a mile each way so it's easy and relaxed, but the views are genuinely breathtaking. Golden hour light here is unreal for photos.",
            image: "images/david-annie/la-jolla-coast-1.jpg",
            images: [
              "images/david-annie/la-jolla-coast-1.jpg",
              "images/david-annie/la-jolla-coast-2.jpg",
              "images/david-annie/la-jolla-coast-3.jpg",
              "images/david-annie/la-jolla-coast-4.jpg",
              "images/david-annie/la-jolla-coast-5.jpg",
              "images/david-annie/la-jolla-coast-6.jpg"
            ],
            address: "Coast Walk Trl, La Jolla, CA 92037",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8488,-117.2683",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8488,-117.2683&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Coast Blvd Street Parking",
                address: "Coast Blvd, La Jolla, CA 92037",
                cost: "Free (2 hour limit)",
                tip: "Timed street parking along Coast Boulevard near The Cave Store. Arrive early because La Jolla parking fills up fast, especially on weekends.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8490,-117.2680",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.8490,-117.2680&dirflg=d"
              },
              {
                type: "paid",
                recommended: false,
                name: "Prospect St & Cave St Area",
                address: "Prospect St, La Jolla, CA 92037",
                cost: "Metered, varies",
                tip: "Additional metered street parking on Prospect Street and Cave Street. Short walk to the trailhead.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8495,-117.2675",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.8495,-117.2675&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.8488&dropoff[longitude]=-117.2683&dropoff[nickname]=La%20Jolla%20Coast%20Walk%20Trail",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.8488&destination[longitude]=-117.2683"
            },
            cost: "Free",
            dressCode: "Comfy walking shoes, the trail is well maintained but has some uneven sections near the cliffs",
            reservation: null,
            reviews: {
              google: { stars: 4.7, count: 2500 },
              yelp: { stars: 4.5, count: 30 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: null,
            foodRecs: null,
            tips: [
              "The trailhead is behind The Cave Store on Coast Boulevard, easy to miss if you're not looking for it",
              "About 0.6 miles each way, perfect for a leisurely 30 to 40 minute stroll",
              "Parking in La Jolla is tough on weekends so plan to arrive a little early"
            ],
            swapOptions: []
          },
          // ── Alt 2: Cabrillo National Monument (shared with Plan A) ──
          {
            name: "Cabrillo National Monument",
            type: "Walk",
            location: "Point Loma, San Diego",
            tagline: "The tip of Point Loma with 360 degree views of the ocean, the bay, and the entire San Diego skyline",
            description: "This is the kind of spot that makes you fall in love with San Diego all over again. <a href=\"https://www.google.com/maps/search/?api=1&query=Cabrillo+National+Monument+1800+Cabrillo+Memorial+Dr+San+Diego\" target=\"_blank\">Cabrillo National Monument</a> sits at the very tip of the Point Loma peninsula and the views are a full 360 degrees of ocean, bay, downtown skyline, and Coronado. David and Annie, you can walk the Bayside Trail through coastal sage scrub habitat, check out the historic 1854 lighthouse, and if the tide is low you can explore the tidepools. The golden hour light from up here is absolutely stunning and you'll have panoramic photo opportunities in every direction.",
            image: "images/david-annie/cabrillo-1.jpg",
            images: [
              "images/david-annie/cabrillo-1.jpg",
              "images/david-annie/cabrillo-2.jpg",
              "images/david-annie/cabrillo-3.jpg",
              "images/david-annie/cabrillo-4.jpg",
              "images/david-annie/cabrillo-5.jpg",
              "images/david-annie/cabrillo-6.jpg"
            ],
            address: "1800 Cabrillo Memorial Dr, San Diego, CA 92106",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.6735,-117.2425",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.6735,-117.2425&dirflg=d",
            parkingOptions: [
              {
                type: "paid",
                recommended: true,
                name: "Cabrillo Monument Parking Lot",
                address: "1800 Cabrillo Memorial Dr, San Diego, CA 92106",
                cost: "$20 per vehicle (includes park entry)",
                tip: "The $20 covers both parking and entry to the monument. The lot is right next to the main viewpoints and visitor center. Your pass is good for 7 days.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.6735,-117.2425",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.6735,-117.2425&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.6735&dropoff[longitude]=-117.2425&dropoff[nickname]=Cabrillo%20National%20Monument",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.6735&destination[longitude]=-117.2425"
            },
            cost: "$20 per vehicle entry",
            dressCode: "Comfy walking shoes, bring a light layer since it gets breezy at the tip of Point Loma",
            reservation: null,
            reviews: {
              google: { stars: 4.7, count: 18000 },
              yelp: { stars: 4.5, count: 818 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "+16195234285",
            foodRecs: null,
            tips: [
              "The park closes at 5:00 PM so plan to arrive with enough time to enjoy the views and trails",
              "The Bayside Trail is about 2 miles round trip with gorgeous views of the San Diego Bay",
              "Check the tide charts if you want to explore the tidepools, low tide of 0.7 feet or below is ideal"
            ],
            swapOptions: []
          },
          // ── Alt 3: Harbor Island Park (shared with Plan A) ──
          {
            name: "Harbor Island Park",
            type: "Walk",
            location: "Harbor Island, San Diego",
            tagline: "A chill bayfront stroll with postcard perfect views of the downtown skyline and Coronado Bridge",
            description: "If you want a totally relaxed, flat, and scenic walk with some of the best skyline views in San Diego, <a href=\"https://www.google.com/maps/search/?api=1&query=Harbor+Island+Park+1875+Harbor+Island+Dr+San+Diego\" target=\"_blank\">Harbor Island Park</a> is perfect. David and Annie, the bayfront path stretches about 1.5 miles along the water with views of the downtown skyline, Coronado Bridge, Point Loma, and all the boats and sailboats cruising by. It never feels crowded and the vibe is calm and relaxed. The grassy lawns are great for just sitting and watching the sunset together. It's easy, beautiful, and the kind of place where you can just breathe and enjoy each other's company.",
            image: "images/david-annie/harbor-island-1.jpg",
            images: [
              "images/david-annie/harbor-island-1.jpg",
              "images/david-annie/harbor-island-2.jpg",
              "images/david-annie/harbor-island-3.jpg",
              "images/david-annie/harbor-island-4.jpg",
              "images/david-annie/harbor-island-5.jpg",
              "images/david-annie/harbor-island-6.jpg"
            ],
            address: "1875 Harbor Island Dr, San Diego, CA 92101",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7253,-117.2064",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.7253,-117.2064&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Harbor Island Park Lot",
                address: "1875 Harbor Island Dr, San Diego, CA 92101",
                cost: "Free",
                tip: "Free parking lot right across from the park. Plenty of spaces and easy access to the bayfront path.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7253,-117.2064",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.7253,-117.2064&dirflg=d"
              },
              {
                type: "free",
                recommended: false,
                name: "Harbor Island Dr Street Parking",
                address: "Harbor Island Dr, San Diego, CA 92101",
                cost: "Free",
                tip: "Additional free street parking along Harbor Island Drive if the main lot is full.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.7258,-117.2070",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.7258,-117.2070&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.7253&dropoff[longitude]=-117.2064&dropoff[nickname]=Harbor%20Island%20Park",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.7253&destination[longitude]=-117.2064"
            },
            cost: "Free",
            dressCode: "Whatever you're comfortable in, the path is flat and paved",
            reservation: null,
            reviews: {
              google: { stars: 4.7, count: 2051 },
              yelp: { stars: 4.5, count: 78 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "+16196866200",
            foodRecs: null,
            tips: [
              "The park is open 6:30 AM to 10:00 PM so you have plenty of time for an evening stroll",
              "The 1.5 mile bayfront path is completely flat and paved, perfect for a relaxed walk",
              "One of the best spots in San Diego for sunset with unobstructed views across the bay"
            ],
            swapOptions: []
          }
        ]
      },
      {
        order: 2,
        time: "6:00 PM",
        endTime: "7:15 PM",
        name: "Phuong Trang",
        type: "Dinner",
        location: "Convoy St, San Diego",
        tagline: "The award winning Vietnamese restaurant that San Diego keeps coming back to for over 30 years",
        description: "Annie, this one has your name written all over it. <a href=\"https://www.google.com/maps/search/?api=1&query=Phuong+Trang+4170+Convoy+St+San+Diego\" target=\"_blank\">Phuong Trang</a> has been serving some of the best Vietnamese food in San Diego since 1988 and they've won Best Vietnamese from San Diego Magazine multiple years running. Everything is made fresh with no MSG and the menu has over 200 dishes so you'll both find exactly what you're craving. The portions are generous and incredibly affordable. David, they have some serious bold flavors here that go way beyond basic pho. Annie, the lighter dishes like the rice paper wraps and broken rice plates are perfect for a smaller appetite and nothing on the menu is greasy. This is comfort food done right.",
        image: "images/david-annie/phuong-trang-1.jpg",
        images: [
          "images/david-annie/phuong-trang-1.jpg",
          "images/david-annie/phuong-trang-2.jpg",
          "images/david-annie/phuong-trang-3.jpg",
          "images/david-annie/phuong-trang-4.jpg",
          "images/david-annie/phuong-trang-5.jpg",
          "images/david-annie/phuong-trang-6.jpg",
          "images/david-annie/phuong-trang-7.jpg"
        ],
        address: "4170 Convoy St, San Diego, CA 92111",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8187,-117.1544",
        appleMapsUrl: "https://maps.apple.com/?daddr=32.8187,-117.1544&dirflg=d",
        parkingOptions: [
          {
            type: "free",
            recommended: true,
            name: "Phuong Trang Lot",
            address: "4170 Convoy St lot",
            cost: "Free",
            tip: "There's a strip mall lot right in front. It fills up fast on weekend evenings so arrive right at 6:00 PM.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8187,-117.1544",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8187,-117.1544&dirflg=d"
          },
          {
            type: "free",
            recommended: false,
            name: "Nearby Convoy Lots",
            address: "Adjacent strip mall lots",
            cost: "Free",
            tip: "The neighboring strip mall lots are all free and just a 1 minute walk.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8190,-117.1540",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8190,-117.1540&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.8187&dropoff[longitude]=-117.1544&dropoff[nickname]=Phuong%20Trang",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.8187&destination[longitude]=-117.1544"
        },
        cost: "$30–40 for two",
        dressCode: "Casual, it's a relaxed neighborhood spot",
        reservation: null,
        reviews: {
          google: { stars: 4.3, count: 4200 },
          yelp: { stars: 4.0, count: 2578 }
        },
        happyHour: null,
        menuUrl: "https://phuongtrangrestaurant.com/menus",
        reservationUrl: null,
        phone: "+18585656750",
        foodRecs: {
          david: [
            { name: "Garlic Butter Chicken Wings", desc: "David, start with these. They're a must have appetizer and the garlic butter sauce is genuinely addicting. Ask for the lemon and salt dipping sauce on the side for an extra kick." },
            { name: "Bo 7 Mon (7 Course Beef)", desc: "If you want to go all in, this is the move. Seven different preparations of beef that take you on a journey. It's bold, it's fun, and it's one of their most talked about dishes." },
            { name: "Bun Bo Hue (Spicy Beef Noodle Soup)", desc: "A rich and spicy broth with tender beef that's got real depth. This is the kind of bold flavor that you can't get from regular pho." }
          ],
          annie: [
            { name: "Goi Cuon (Fresh Spring Rolls)", desc: "Annie, these are light, fresh, and perfect. Rice paper wraps with shrimp, herbs, and vermicelli dipped in peanut sauce. Exactly the kind of clean flavors you love." },
            { name: "Com Tam (Broken Rice with Grilled Pork)", desc: "A classic Vietnamese comfort dish. The grilled pork is savory without being greasy and the broken rice soaks up all the flavor. Perfect portion for a lighter appetite." },
            { name: "Pho Ga (Chicken Pho)", desc: "If you're in the mood for something warm and comforting, this chicken pho has a clear, clean broth that's gentle and satisfying. Light but flavorful." }
          ],
          shared: [
            { name: "Ca Kho To (Caramelized Fish in Clay Pot)", desc: "This is their famous dish and it's worth sharing. Catfish braised in a sweet and savory caramel sauce served in a traditional clay pot. Unique and memorable." }
          ]
        },
        tips: [
          "No reservations needed, just walk in. But arrive by 6:00 PM to avoid the dinner rush",
          "The garlic butter chicken wings are a must, everyone orders them for a reason",
          "They're closed Monday and Tuesday, so plan accordingly"
        ],
        swapOptions: [
          // ── Alt 1: Pho Nom ──
          {
            name: "Pho Nom",
            type: "Dinner",
            location: "Convoy St, San Diego",
            tagline: "Modern Vietnamese on Convoy with elevated pho and bold flavors that go way beyond the basics",
            description: "If you want Vietnamese food with a modern twist, <a href=\"https://www.google.com/maps/search/?api=1&query=Pho+Nom+4646+Convoy+St+San+Diego\" target=\"_blank\">Pho Nom</a> is the move. They take classic Vietnamese dishes and elevate everything from the broth to the presentation. David, you're going to love the signature Pho Nom with bone in back rib and short rib in a seriously beefy broth made with premium fish sauce. Annie, their Hainan Chicken with fragrant garlic ginger rice is lighter, clean, and comforting. The vibe is warm and modern with a neighborhood eatery feel right in the heart of <a href=\"https://www.google.com/maps/search/?api=1&query=Convoy+Street+San+Diego\" target=\"_blank\">Convoy</a>.",
            image: "images/david-annie/pho-nom-1.jpg",
            images: [
              "images/david-annie/pho-nom-1.jpg",
              "images/david-annie/pho-nom-2.jpg",
              "images/david-annie/pho-nom-3.jpg",
              "images/david-annie/pho-nom-4.jpg",
              "images/david-annie/pho-nom-5.jpg",
              "images/david-annie/pho-nom-6.jpg"
            ],
            address: "4646 Convoy St, Ste 114, San Diego, CA 92111",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8240,-117.1549",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8240,-117.1549&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "4646 Convoy St Plaza Lot",
                address: "4646 Convoy St, San Diego, CA 92111",
                cost: "Free",
                tip: "Free strip mall parking lot right in front of the restaurant. Gets busy during dinner rush so arrive by 6:00 PM for best availability.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8240,-117.1549",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.8240,-117.1549&dirflg=d"
              },
              {
                type: "free",
                recommended: false,
                name: "Adjacent Convoy Lots",
                address: "Nearby strip mall lots on Convoy St",
                cost: "Free",
                tip: "The neighboring strip mall lots along Convoy are all free and just a short walk.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8235,-117.1545",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.8235,-117.1545&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.8240&dropoff[longitude]=-117.1549&dropoff[nickname]=Pho%20Nom",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.8240&destination[longitude]=-117.1549"
            },
            cost: "$35-50 for two",
            dressCode: "Casual, relaxed neighborhood spot",
            reservation: null,
            reviews: {
              google: { stars: 4.4, count: 850 },
              yelp: { stars: 4.0, count: 777 }
            },
            happyHour: null,
            menuUrl: "https://www.phonomsd.com/menu",
            reservationUrl: null,
            phone: null,
            foodRecs: {
              david: [
                { name: "Pho Nom (Signature)", desc: "David, this is their showstopper. Bone in back rib, sliced short rib, brisket, and beef balls in an extra beefy pho broth made with 40N fish sauce. It's rich, bold, and incredibly satisfying." },
                { name: "Chili Tamarind Wings", desc: "These have a 100% approval rating for a reason. Sweet and tangy with a kick of heat. Perfect starter to share before the pho arrives." }
              ],
              annie: [
                { name: "Hainan Chicken", desc: "Annie, this one is perfect for you. Tender poached chicken served over fragrant garlic ginger rice with fresh cucumber and scallions, plus a side of savory chicken broth. Light, clean, and comforting." },
                { name: "Shrimp Spring Rolls", desc: "Fresh, light, and beautifully presented. These are a great starter that won't fill you up and the flavors are clean and refreshing." }
              ],
              shared: [
                { name: "Mango Sticky Rice", desc: "Split this for dessert right at the table. Sweet coconut sticky rice with fresh mango. It's the perfect way to end the meal on a light, tropical note." }
              ]
            },
            tips: [
              "No reservations needed, walk in only. Arrive by 6:00 PM on weekends to avoid the wait",
              "The signature Pho Nom is their most popular dish and it's worth every penny",
              "Open daily including Sundays, closes at 9:15 PM on weeknights and 10:15 PM Fri and Sat"
            ],
            swapOptions: []
          },
          // ── Alt 2: Pho Duyen Mai ──
          {
            name: "Pho Duyen Mai",
            type: "Dinner",
            location: "Kearny Mesa, San Diego",
            tagline: "One of the most beloved pho spots in San Diego with rich slow simmered broth and a legendary banh xeo",
            description: "This is the kind of place where the broth tells you everything you need to know. <a href=\"https://www.google.com/maps/search/?api=1&query=Pho+Duyen+Mai+5375+Kearny+Villa+Rd+San+Diego\" target=\"_blank\">Pho Duyen Mai</a> has over 1,300 Yelp reviews and people keep coming back because the pho broth here is genuinely some of the best in San Diego. David, their Rare Steak and Flank Pho is rich, deeply flavorful, and exactly the kind of bold soup you love. Annie, the chicken pho is clean and soothing with a lighter broth that's perfect for you. Their Banh Xeo is also legendary and it's amazing to share. The portions are generous and the prices are very reasonable for the quality.",
            image: "images/david-annie/pho-duyen-mai-1.jpg",
            images: [
              "images/david-annie/pho-duyen-mai-1.jpg",
              "images/david-annie/pho-duyen-mai-2.jpg",
              "images/david-annie/pho-duyen-mai-3.jpg",
              "images/david-annie/pho-duyen-mai-4.jpg",
              "images/david-annie/pho-duyen-mai-5.jpg",
              "images/david-annie/pho-duyen-mai-6.jpg"
            ],
            address: "5375 Kearny Villa Rd, Ste 111, San Diego, CA 92123",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8235,-117.1460",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8235,-117.1460&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Kearny Villa Rd Plaza Lot",
                address: "5375 Kearny Villa Rd, San Diego, CA 92123",
                cost: "Free",
                tip: "Free strip mall parking lot right in front. Gets busy during lunch but dinner is usually more manageable. Arrive by 6:00 PM on weekends.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8235,-117.1460",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.8235,-117.1460&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.8235&dropoff[longitude]=-117.1460&dropoff[nickname]=Pho%20Duyen%20Mai",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.8235&destination[longitude]=-117.1460"
            },
            cost: "$25-35 for two",
            dressCode: "Casual, it's a no frills neighborhood spot",
            reservation: null,
            reviews: {
              google: { stars: 4.5, count: 753 },
              yelp: { stars: 4.5, count: 1396 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "+18585605354",
            foodRecs: {
              david: [
                { name: "Pho Tai Nam (Rare Steak & Flank Pho)", desc: "David, this is their signature for a reason. The broth has been simmered for hours and it's deep, rich, and incredibly flavorful. The rare steak cooks perfectly in the hot broth." },
                { name: "Salt and Pepper Wings", desc: "Start with these. Crispy, well seasoned, and absolutely addicting. They're one of the most ordered appetizers for a reason." }
              ],
              annie: [
                { name: "Pho Ga (Chicken Pho)", desc: "Annie, the chicken pho here has a clean, aromatic broth that's lighter than the beef version but still deeply satisfying. Perfect for a smaller appetite." },
                { name: "Goi Cuon (Fresh Spring Rolls)", desc: "Light, fresh, and wrapped with shrimp, herbs, and rice vermicelli. Exactly the kind of clean starter you'll love." }
              ],
              shared: [
                { name: "Banh Xeo (Vietnamese Crepe)", desc: "You have to try this together. The crispy Vietnamese pancake is filled with pork, shrimp, and bean sprouts and it's genuinely one of the best banh xeos people say they've ever had. Wrap pieces in lettuce with fresh herbs and dip in the sauce." }
              ]
            },
            tips: [
              "The Banh Xeo is legendary here and worth ordering every time",
              "Open Mon through Sat, closes around 8:45 PM. Sunday hours may be limited so check ahead",
              "Portions are generous and prices are very reasonable, you'll leave full and happy"
            ],
            swapOptions: []
          },
          // ── Alt 3: Mien Trung Restaurant ──
          {
            name: "Mien Trung Restaurant",
            type: "Dinner",
            location: "Kearny Mesa, San Diego",
            tagline: "A cash only gem with what many call the best Bun Bo Hue in San Diego and Orange County",
            description: "This is one of those places that only the locals know about and they guard it closely. <a href=\"https://www.google.com/maps/search/?api=1&query=Mien+Trung+Restaurant+7530+Mesa+College+Dr+San+Diego\" target=\"_blank\">Mien Trung</a> specializes in Central Vietnamese dishes and their Bun Bo Hue is considered by many to be the absolute best in San Diego. David, the spicy lemongrass beef broth with thick rice noodles is bold, rich, and has incredible depth. This is way more intense and flavorful than regular pho. Annie, they also have lighter options like Banh Cuon (steamed rice rolls) and Bun Cha Gio (vermicelli with egg rolls) that are more delicate and perfect for you. Fair warning though, this place is cash only so bring some bills.",
            image: "images/david-annie/mien-trung-1.jpg",
            images: [
              "images/david-annie/mien-trung-1.jpg",
              "images/david-annie/mien-trung-2.jpg",
              "images/david-annie/mien-trung-3.jpg",
              "images/david-annie/mien-trung-4.jpg",
              "images/david-annie/mien-trung-5.jpg",
              "images/david-annie/mien-trung-6.jpg"
            ],
            address: "7530 Mesa College Dr, Ste A, San Diego, CA 92111",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8080,-117.1620",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8080,-117.1620&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Mesa College Dr Plaza Lot",
                address: "7530 Mesa College Dr, San Diego, CA 92111",
                cost: "Free",
                tip: "Free lot right in front of the restaurant. Small lot but dinner time is usually less crowded than lunch.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8080,-117.1620",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.8080,-117.1620&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.8080&dropoff[longitude]=-117.1620&dropoff[nickname]=Mien%20Trung%20Restaurant",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.8080&destination[longitude]=-117.1620"
            },
            cost: "$20-30 for two",
            dressCode: "Very casual, this is a no frills family run spot",
            reservation: null,
            reviews: {
              google: { stars: 4.5, count: 1200 },
              yelp: { stars: 4.0, count: 584 }
            },
            happyHour: null,
            menuUrl: "https://phosd.com/menu",
            reservationUrl: null,
            phone: "+18585760962",
            foodRecs: {
              david: [
                { name: "Bun Bo Hue Dac Biet (Special)", desc: "David, this is the dish that put Mien Trung on the map. Spicy lemongrass beef broth with thick rice noodles, tender beef, and pork. The broth has serious depth and heat. People drive across San Diego just for this bowl." },
                { name: "Bun Rieu", desc: "If you want to try something different, this crab and tomato based noodle soup has a tangy, savory broth that's totally unique. Bold and memorable." }
              ],
              annie: [
                { name: "Banh Cuon (Steamed Rice Rolls)", desc: "Annie, these are delicate, light, and beautiful. Thin steamed rice crepes filled with seasoned pork and mushrooms, served with fresh herbs and dipping sauce. Nothing greasy about these at all." },
                { name: "Bun Cha Gio Thit Nuong (Vermicelli with BBQ Pork & Egg Roll)", desc: "Rice vermicelli with grilled pork and crispy egg rolls on a bed of fresh herbs and lettuce. It's lighter than a soup and the flavors are clean and balanced." }
              ],
              shared: [
                { name: "Banh Beo (Steamed Rice Cakes)", desc: "These cute little steamed rice cakes topped with dried shrimp and scallion oil are a Central Vietnamese specialty. Light, fun, and a great way to start the meal together." }
              ]
            },
            tips: [
              "CASH ONLY so bring bills. They do have an ATM inside but it's easier to come prepared",
              "Closed on Mondays, open Tue through Fri 8:30 AM to 8:00 PM, Sat 8:00 AM to 8:00 PM, Sun 8:00 AM to 4:00 PM",
              "It's a small family run place with a cozy, homey atmosphere. Don't expect fancy but the food more than makes up for it"
            ],
            swapOptions: []
          }
        ]
      },
      {
        order: 3,
        time: "7:20 PM",
        endTime: "7:45 PM",
        name: "Boba Bar and Desserts",
        type: "Dessert",
        location: "Convoy St, San Diego",
        tagline: "The puffle and boba spot with over a thousand five star reviews that everyone on Convoy is obsessed with",
        description: "Perfect way to end the night. <a href=\"https://www.google.com/maps/search/?api=1&query=Boba+Bar+and+Desserts+4619+Convoy+St+San+Diego\" target=\"_blank\">Boba Bar</a> is right down the street from Phuong Trang so you can walk over in about 5 minutes. They're famous for their puffles, these gorgeous egg waffle cones loaded with ice cream and toppings that look like they were made for Instagram. Annie, the waffle is light and airy so it won't weigh you down after dinner. David, try their freshly brewed boba milk tea, it's some of the best on Convoy. Grab your treats and take a little stroll together to close out the night.",
        image: "images/david-annie/boba-1.jpg",
        images: [
          "images/david-annie/boba-1.jpg",
          "images/david-annie/boba-2.jpg",
          "images/david-annie/boba-3.jpg",
          "images/david-annie/boba-4.jpg",
          "images/david-annie/boba-5.jpg",
          "images/david-annie/boba-6.jpg",
          "images/david-annie/boba-7.jpg"
        ],
        address: "4619 Convoy St, San Diego, CA 92111",
        googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8194,-117.1557",
        appleMapsUrl: "https://maps.apple.com/?daddr=32.8194,-117.1557&dirflg=d",
        parkingOptions: [
          {
            type: "free",
            recommended: true,
            name: "Same Convoy Lot",
            address: "Strip mall lot on Convoy St",
            cost: "Free",
            tip: "5 minute walk from Phuong Trang. Same Convoy strip mall parking.",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8194,-117.1557",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8194,-117.1557&dirflg=d"
          }
        ],
        transit: {
          uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.8194&dropoff[longitude]=-117.1557&dropoff[nickname]=Boba%20Bar%20and%20Desserts",
          lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.8194&destination[longitude]=-117.1557"
        },
        cost: "$15–20 for two",
        dressCode: null,
        reservation: null,
        reviews: {
          google: { stars: 4.5, count: 1800 },
          yelp: { stars: 4.3, count: 1149 }
        },
        happyHour: null,
        menuUrl: "https://www.bobabarsd.com",
        reservationUrl: null,
        phone: null,
        foodRecs: null,
        tips: [
          "The puffles are their signature item and they're perfect for sharing",
          "Freshly brewed boba milk tea is a must try",
          "It's a short walk from Phuong Trang, no need to drive"
        ],
        swapOptions: [
          // ── Alt 1: Iceskimo (shared with Plan A) ──
          {
            name: "Iceskimo",
            type: "Dessert",
            location: "Convoy St, San Diego",
            tagline: "Taiwanese shaved snow that's lighter than ice cream and creamier than shaved ice, made from scratch with real ingredients",
            description: "If you want something lighter and more unique than regular ice cream, <a href=\"https://www.google.com/maps/search/?api=1&query=Iceskimo+4609+Convoy+St+San+Diego\" target=\"_blank\">Iceskimo</a> is a must. They make Taiwanese shaved snow from scratch with no powders, no syrups, and no artificial anything. The flavor infused snow blocks get shaved into thin ribbons that literally melt on your tongue. David, the Vietnamese Coffee flavor is rich and bold with that classic coffee kick. Annie, the Ube or Strawberry flavors are light, creamy, and not too sweet at all. You pick your base flavor and then add toppings like fresh fruit, mochi, and boba from their DIY bar. It's fun, interactive, and the perfect light ending to dinner.",
            image: "images/david-annie/iceskimo-1.jpg",
            images: [
              "images/david-annie/iceskimo-1.jpg",
              "images/david-annie/iceskimo-2.jpg",
              "images/david-annie/iceskimo-3.jpg",
              "images/david-annie/iceskimo-4.jpg",
              "images/david-annie/iceskimo-5.jpg",
              "images/david-annie/iceskimo-6.jpg"
            ],
            address: "4609 Convoy St, Ste B, San Diego, CA 92111",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8240,-117.1549",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8240,-117.1549&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Convoy St Plaza Lot",
                address: "4609 Convoy St, San Diego, CA 92111",
                cost: "Free",
                tip: "Free strip mall parking right in front. Can get tight on weekend evenings so you may need to park in an adjacent lot.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8240,-117.1549",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.8240,-117.1549&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.8240&dropoff[longitude]=-117.1549&dropoff[nickname]=Iceskimo",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.8240&destination[longitude]=-117.1549"
            },
            cost: "$12-18 for two",
            dressCode: null,
            reservation: null,
            reviews: {
              google: { stars: 4.6, count: 1200 },
              yelp: { stars: 4.0, count: 1129 }
            },
            happyHour: null,
            menuUrl: "https://www.iceskimo.com",
            reservationUrl: null,
            phone: "+18582161111",
            foodRecs: null,
            tips: [
              "Toppings are charged by weight so start with a few favorites and add more if you want",
              "The Coconut shaved snow with condensed milk drizzle is a fan favorite combination",
              "Open until 9:30 PM on weeknights and 10:30 PM Fri and Sat so you have plenty of time after dinner"
            ],
            swapOptions: []
          },
          // ── Alt 2: Happy Lemon (shared with Plan A) ──
          {
            name: "Happy Lemon",
            type: "Dessert",
            location: "Convoy St, San Diego",
            tagline: "The boba chain famous for their signature salted cheese foam topping and house brewed teas",
            description: "If you're in the mood for classic boba with a twist, <a href=\"https://www.google.com/maps/search/?api=1&query=Happy+Lemon+4633+Convoy+St+San+Diego\" target=\"_blank\">Happy Lemon</a> is the spot. They've been making waves since 2006 with house brewed teas, fresh squeezed juices, and their signature salted cheese foam topping that people absolutely love. David, the Brown Sugar Boba Milk Tea is rich and satisfying with that perfect chewy boba texture. Annie, the Jasmine Green Tea with Salted Cheese is lighter and so refreshing with just the right amount of creamy foam on top. They also have bubble waffles if you want a little something extra to share on your walk.",
            image: "images/david-annie/happy-lemon-1.jpg",
            images: [
              "images/david-annie/happy-lemon-1.jpg",
              "images/david-annie/happy-lemon-2.jpg",
              "images/david-annie/happy-lemon-3.jpg",
              "images/david-annie/happy-lemon-4.jpg",
              "images/david-annie/happy-lemon-5.jpg",
              "images/david-annie/happy-lemon-6.jpg"
            ],
            address: "4633 Convoy St, Ste 107, San Diego, CA 92111",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8237,-117.1552",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8237,-117.1552&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Convoy St Plaza Lot",
                address: "4633 Convoy St, San Diego, CA 92111",
                cost: "Free",
                tip: "Inside a small mall off Convoy St. The parking is shared with other businesses so it can be a challenge on busy nights. Try adjacent Convoy lots if full.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8237,-117.1552",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.8237,-117.1552&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.8237&dropoff[longitude]=-117.1552&dropoff[nickname]=Happy%20Lemon",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.8237&destination[longitude]=-117.1552"
            },
            cost: "$12-18 for two",
            dressCode: null,
            reservation: null,
            reviews: {
              google: { stars: 4.0, count: 752 },
              yelp: { stars: 3.5, count: 859 }
            },
            happyHour: null,
            menuUrl: null,
            reservationUrl: null,
            phone: "+18584306800",
            foodRecs: null,
            tips: [
              "The Salted Cheese foam topping is their signature and what sets them apart from other boba shops",
              "It's inside a small mall off Convoy so look for the entrance rather than a storefront on the street",
              "Open until 11:00 PM on weeknights and midnight Fri and Sat so there's no rush after dinner"
            ],
            swapOptions: []
          },
          // ── Alt 3: Bopomofo Cafe (shared with Plan A) ──
          {
            name: "Bopomofo Cafe",
            type: "Dessert",
            location: "Kearny Mesa, San Diego",
            tagline: "A Taiwanese inspired cafe with elevated boba, creative matcha drinks, and the crispiest popcorn chicken on Convoy",
            description: "This is more than just a boba shop, it's a whole vibe. <a href=\"https://www.google.com/maps/search/?api=1&query=Bopomofo+Cafe+7951+Othello+Ave+San+Diego\" target=\"_blank\">Bopomofo Cafe</a> is a Taiwanese inspired cafe that takes everything up a notch with high quality ingredients, homemade drinks, and a cozy atmosphere that makes you want to linger. David, try the Black Sesame Latte or their Ba La Matcha, both are creative and bold. Annie, the Lychee Pear Blossom tea is light, floral, and so refreshing. And you absolutely have to split the Popcorn Chicken, big juicy bites of marinated chicken with Thai basil aioli that people literally cannot stop raving about. It's the perfect dessert stop that doubles as a late night snack.",
            image: "images/david-annie/bopomofo-1.jpg",
            images: [
              "images/david-annie/bopomofo-1.jpg",
              "images/david-annie/bopomofo-2.jpg",
              "images/david-annie/bopomofo-3.jpg",
              "images/david-annie/bopomofo-4.jpg",
              "images/david-annie/bopomofo-5.jpg",
              "images/david-annie/bopomofo-6.jpg"
            ],
            address: "7951 Othello Ave, Ste 106, San Diego, CA 92111",
            googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8190,-117.1540",
            appleMapsUrl: "https://maps.apple.com/?daddr=32.8190,-117.1540&dirflg=d",
            parkingOptions: [
              {
                type: "free",
                recommended: true,
                name: "Othello Ave Plaza Lot",
                address: "7951 Othello Ave, San Diego, CA 92111",
                cost: "Free",
                tip: "Free lot right in front of the cafe. It's a bit off the main Convoy strip on Othello Ave but easy to find.",
                googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.8190,-117.1540",
                appleMapsUrl: "https://maps.apple.com/?daddr=32.8190,-117.1540&dirflg=d"
              }
            ],
            transit: {
              uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=32.8190&dropoff[longitude]=-117.1540&dropoff[nickname]=Bopomofo%20Cafe",
              lyft: "https://lyft.com/ride?id=lyft&destination[latitude]=32.8190&destination[longitude]=-117.1540"
            },
            cost: "$15-25 for two",
            dressCode: null,
            reservation: null,
            reviews: {
              google: { stars: 4.3, count: 78 },
              yelp: { stars: 4.5, count: 426 }
            },
            happyHour: null,
            menuUrl: "https://www.bopomofocafe.com/menu",
            reservationUrl: null,
            phone: "+16262170885",
            foodRecs: null,
            tips: [
              "The Popcorn Chicken has a 100% approval rating and is an absolute must order even as a dessert stop",
              "It's on Othello Ave just off Convoy, not directly on the main strip but very close",
              "Open daily until 9:00 PM so plan accordingly if dinner runs late"
            ],
            swapOptions: []
          }
        ]
      }
    ],

    travelTimes: [
      { from: 1, to: 2, duration: "10 min drive", mode: "car" },
      { from: 2, to: 3, duration: "5 min walk", mode: "walk" }
    ],

    budget: {
      items: [
        { label: "Dinner (Phuong Trang)", cost: "$30–40" },
        { label: "Dessert (Boba Bar)", cost: "$15–20" },
        { label: "Parking", cost: "Free" }
      ],
      total: "$45–60",
      tip: "This plan is incredibly affordable. Phuong Trang is one of those rare restaurants where the food quality far exceeds the price. Parking is free everywhere tonight. You'll come in well under budget with room to spare."
    },

    checklist: [
      { id: "chk-leave-b", text: "Leave home by 4:30 PM to arrive at Kate Sessions by 5:00 PM", bold: "4:30 PM" },
      { id: "chk-pt-hours", text: "Confirm Phuong Trang is open (closed Mon and Tue, open Wed through Sun 11 AM to 8 PM)", bold: "Phuong Trang" }
    ],

    calendar: {
      title: "DateFlo: Bay Views & Broth (Kate Sessions + Convoy)",
      date: "20260328",
      startTime: "T000000Z",
      endTime: "T024500Z",
      location: "San Diego, CA",
      description: "Plan B: Bay Views & Broth\n\n5:00 PM Kate Sessions Park\n6:00 PM Dinner at Phuong Trang\n7:20 PM Dessert at Boba Bar\n\nFull details: dateflo.com/david-and-annie"
    },

    logistics: {
      whatToWear: "Casual and comfy all night. Walking shoes for the park and you're set. The restaurant and dessert spot are both casual so no need to dress up.",
      transportation: "Drive to Kate Sessions Park first, then one quick 10 minute drive to Convoy for dinner and dessert. Everything on Convoy is walking distance once you park. All parking is free tonight."
    }
  }
];

// Default to Plan A, designs can switch via window.switchPlan(index)
window.PLAN = window.PLAN_ALL[0];
window.switchPlan = function(index) {
  window.PLAN = window.PLAN_ALL[index];
  if (window._renderPlan) window._renderPlan();
};
