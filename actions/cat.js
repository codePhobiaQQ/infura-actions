import axios from 'axios'
import dotenv from "dotenv";
dotenv.config();

const host = 'ipfs.infura.io'
const port = '5001'

const apiKey = process.env.INFURA_API_KEY;
const apiSecretKey = process.env.INFURA_API_SECRET_KEY;

// const cid = 'QmPoFzmpj5B8afnUSWRNBCQh8mzoifFZtehbXjoEU9Rz2j'

// +
// const cid = 'QmZtmD2qt6fJot32nabSP3CUjicnypEBz7bHVDhPQt9aAy'

// +
// const cid = 'Qmagoxruae3xs9kvEUVWLdm5bFsq1XhjEboSaGV7ykUrNH'

// +
// const cid = 'QmQh1oNcuqaAqm4nNgyY47iiydSsRXppaiqz2gX3a42apU'

// +
// const cid = 'QmP4e6pgbdF5dp7dvhYbhmhKkZSqL25uzm7dBokP6JWFbc'

//
const cid = 'QmeiqiCoeE2YcVdc29sKjmZdznn3DjszXvQamNard2RbxV'

// -
// const cid = 'QmauzKRR2kJ7r7KsL3WDgDZwoNZY37AZicwepxrKAMMuoz'

const cat = async () => {
  const params = new URLSearchParams({arg: cid});

  const response = await axios.post(
    `https://${host}:${port}/api/v0/cat?${params.toString()}`,
    {},
    {
      headers: {
        Authorization: `Basic ${btoa(`${apiKey}:${apiSecretKey}`)}`,
      },
      responseType: "arraybuffer",
    },
  );

  const decoder = new TextDecoder();
  const text = decoder.decode(response.data);

  console.log("✔️ SUCCESS, bytes:", text);
  console.log("✔️ SUCCESS, data:", response.data);
}

cat()