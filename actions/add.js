import axios from 'axios'
import dotenv from "dotenv";
import fs from 'node:fs'
import FormData from 'form-data'
dotenv.config();

const host = 'ipfs.infura.io'
const port = '5001'

const apiKey = process.env.INFURA_API_KEY;
const apiSecretKey = process.env.INFURA_API_SECRET_KEY;

// +
// const filePath = './public/data.json';

// +
const filePath = './public/data.sol';

// const filePath = './public/image.png';

const add = async () => {
  if (!fs.existsSync(filePath)) {
    console.error('❌ File not found:', filePath);
    return;
  }

  // создаем multipart форму
  const form = new FormData();
  form.append("file", fs.createReadStream(filePath));

  // Basic Auth → Buffer.from
  const auth = Buffer.from(`${apiKey}:${apiSecretKey}`).toString("base64");

  const url = `https://${host}:${port}/api/v0/add?pin=true`;

  console.log("🚀 Send file to IPFs:", url);

  const response = await axios.post(url, form, {
    headers: {
      ...form.getHeaders(),
      Authorization: `Basic ${auth}`,
    },
    maxBodyLength: Infinity,
  });

  console.log("✔️ SUCCESS:");
  console.log(response.data);

  console.log("📌 CID:", response.data.Hash);
};

add();