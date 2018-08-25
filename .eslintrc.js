const path = require('path');

module.exports = {
  "extends": ["airbnb"],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "no-underscore-dangle": "off",
    "jsx-a11y/anchor-is-valid": [
      "error", {
        "components": [ "Link" ],
        "specialLink": [ "to", "hrefLeft", "hrefRight" ],
        "aspects": [ "noHref", "invalidHref", "preferButton" ]
      }],
    "react/jsx-filename-extension": [
      1, {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": [
          path.resolve("src/client")
        ]
      }
    }
  }
}
