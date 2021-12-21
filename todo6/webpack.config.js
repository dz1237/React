const dev = require("./webpack.config.dev");
const prod = require("./webpack.config.prod");
const Target = process.env.NODE_ENV;
if (Target == "dev") {
    module.exports = dev;
}
if (Target === "build") {
    module.exports = prod;
}