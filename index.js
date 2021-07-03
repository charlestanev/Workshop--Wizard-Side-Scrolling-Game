function hotelRoom(input) {
  let months = input[0];
  let nightCount = Number(input[1]);
  let studio;
  let apatment;
  let pricePerNight;

  switch (months) {
    case "May":
    case "October":
      if ((pricePerNight = 65 || nightCount > 14)) {
        apatment = pricePerNight * nightCount * 0.9;
        console.log(`Apartment: ${apatment.toFixed(2)} lv.`);
      }
      if ((pricePerNight = 50 || nightCount > 14)) {
        studio = pricePerNight * nightCount * 0.7;
        console.log(`Studio: ${studio.toFixed(2)} lv.`);
      } else if ((pricePerNight = 50 || nightCount > 7)) {
        studio = pricePerNight * nightCount * 0.95;
        console.log(`Studio: ${studio.toFixed(2)} lv.`);
      }
      break;
    case "June":
    case "September":
      if ((pricePerNight = 68.7 || nightCount > 14)) {
        apatment = pricePerNight * nightCount * 0.9;
        console.log(`Apartment: ${apatment.toFixed(2)} lv.`);
      }
      if ((pricePerNight = 75.2 || nightCount > 14)) {
        studio = pricePerNight * nightCount * 0.8;
        console.log(`Studio: ${studio.toFixed(2)} lv.`);
      }
      break;
    case "July":
    case "August":
      if ((pricePerNight = 77 || nightCount > 14)) {
        apatment = pricePerNight * nightCount * 0.9;
        console.log(`Apartment: ${apatment.toFixed(2)} lv.`);
      }
      if ((pricePerNight = 76 || nightCount > 14)) {
        studio = pricePerNight * nightCount;
        console.log(`Studio: ${studio.toFixed(2)} lv.`);
      }
      break;
  }
}

hotelRoom((["May",
"15"])
);


hotelRoom((["June",
"14"])
);

