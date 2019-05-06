"use strict";

module.exports = {
  hooks: {
    readPackage,
  },
};

function readPackage(pkg, context) {
  if (pkg.name === "libnpmaccess") {
    pkg.dependencies["figgy-pudding"] = "^3.5.1";
    context.log("added figgy-pudding to libnpmaccess");
  }

  if (pkg.name === "npm-registry-fetch") {
    pkg.dependencies["safe-buffer"] = "^5.1.2";
    context.log("added safe-buffer to npm-registry-fetch");
  }

  return pkg;
}
