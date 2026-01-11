const https = require('https');

const url = "https://picbed.xiaozhangya.xin/music/Beautiful%20World%20(Da%20Capo%20Version)%20-%20%E5%AE%87%E5%A4%9A%E7%94%B0%E3%83%92%E3%82%AB%E3%83%AB.flac";

console.log("Checking URL:", url);

https.request(url, { method: 'HEAD' }, (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Headers:', res.headers);
}).on('error', (e) => {
  console.error("Error:", e);
}).end();
