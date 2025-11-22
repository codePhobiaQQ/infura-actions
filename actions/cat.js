import axios from 'axios'
import dotenv from "dotenv";
dotenv.config();

const host = 'ipfs.infura.io'
const port = '5001'

const apiKey = process.env.INFURA_API_KEY;
const apiSecretKey = process.env.INFURA_API_SECRET_KEY;

const CID = 'QmPoFzmpj5B8afnUSWRNBCQh8mzoifFZtehbXjoEU9Rz2j'

const cat = async () => {
  const params = new URLSearchParams({arg: CID});
  const url = `https://${host}:${port}/api/v0/cat?${params.toString()}`

  const response = await axios.post(
    url,
    null,
    {
      auth: {
        username: apiKey,
        password: apiSecretKey,
      },
      responseType: "arraybuffer",
    }
  );

  console.log("✔️ SUCCESS, bytes:", response.data.byteLength);
}

cat()