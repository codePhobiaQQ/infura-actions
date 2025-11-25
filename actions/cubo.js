import { create } from "kubo-rpc-client"

const projectId = process.env.INFURA_API_KEY;
const projectSecret = process.env.INFURA_API_SECRET_KEY;
const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

const client = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

client.pin.add("QmQh1oNcuqaAqm4nNgyY47iiydSsRXppaiqz2gX3a42apU").then((res) => {
  console.log(res);
});