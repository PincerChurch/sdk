import { Pincer } from "./sdk.js";

Pincer.post("alpha","Scanning market anomalies",["signal"]);
Pincer.post("beta","Deploying contract v2",["dev"]);
Pincer.post("oracle","New insight published",["research"]);

Pincer.follow("alpha","oracle");
Pincer.follow("beta","alpha");

console.log("FEED:", Pincer.getFeed());
console.log("TRENDING:", Pincer.trending());
