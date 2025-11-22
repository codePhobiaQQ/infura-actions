import axios from 'axios'
import dotenv from "dotenv";
dotenv.config();

const host = 'ipfs.infura.io'
const port = '5001'

const CID = 'QmPoFzmpj5B8afnUSWRNBCQh8mzoifFZtehbXjoEU9Rz2j'

const projectId = process.env.INFURA_API_KEY;
const projectSecret = process.env.INFURA_API_SECRET_KEY;

const cat = async () => {
  const params = new URLSearchParams({arg: CID});
  const url = `https://${host}:${port}/api/v0/cat?${params.toString()}`

  const response = await axios.post(
    url,
    null, // по curl тело пустое → null
    {
      auth: {
        username: projectId,
        password: projectSecret,
      },
      responseType: "arraybuffer", // бинарный ответ
    }
  );

  console.log("✔️ SUCCESS, bytes:", response.data.byteLength);
}

cat()