const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  password: "~F1gP4<D:(u-Gb:kHX+#}AXejQH.",
  host: "geofootball1.chya8w4uypti.us-east-1.rds.amazonaws.com",
  port: "5432",
  database: "postgres",
});

export const handler = async (event, context) => {
  const stadiums = [
    {
      id: "0",
      name: "Dinamo Arena",
      image: {
        src: "https://lukakhuzastorage.s3.amazonaws.com/stadiums/dinamo-arena.png",
        alt: "A picture of Dinamo Arena.",
      },
      city: "Tbilisi",
      capacity: "54,549",
      built: "1976",
      longitude: "41.7230N",
      latitude: "44.7898E",
    },
    {
      id: "1",
      name: "Meskhi Stadium",
      image: {
        src: "https://lukakhuzastorage.s3.amazonaws.com/stadiums/meskhi.jpeg",
        alt: "A picture of Mikheil Meskhi Stadium.",
      },
      city: "Tbilisi",
      capacity: "27,223",
      built: "1952",
      longitude: "41.7098N",
      latitude: "44.7462E",
    },
    {
      id: "2",
      name: "Shengelia Stadium",
      image: {
        src: "https://lukakhuzastorage.s3.amazonaws.com/stadiums/shengelia-stadium.jpeg",
        alt: "A picture of Shengelia Stadium.",
      },
      city: "Kutaisi",
      capacity: "11,700",
      built: "1957",
      longitude: "42.2551N",
      latitude: "42.6833E",
    },
    {
      id: "3",
      name: "Batumi Arena",
      image: {
        src: "https://lukakhuzastorage.s3.amazonaws.com/stadiums/batumi-arena.png",
        alt: "A picture of Batumi Arena.",
      },
      city: "Batumi",
      capacity: "20,035",
      built: "2020",
      longitude: "41.6351N",
      latitude: "41.6189E",
    },
  ];

  //console.log('Received event:', JSON.stringify(event, null, 2));
  // console.log('value1 =', event.key1);
  // console.log('value2 =', event.key2);
  // console.log('value3 =', event.key3);
  console.log("hello");
  return stadiums; // Echo back the first key value
  // throw new Error('Something went wrong');
};
