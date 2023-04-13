const fs = require("fs");
const request = require("request");

const args = process.argv.slice(2);
const [url] = args;

request(url, (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a

  const content = body;

  const fileName = args[args.length - 1].split(".");
  const [name, extension] = fileName.slice(1);

  fs.writeFile(`${__dirname}/${name}.${extension}`, content, function (err) {
    if (err) throw err;
    console.log(
      `Downloaded and saved ${content.length} bytes to ./index.html.`
    );
  });
});
