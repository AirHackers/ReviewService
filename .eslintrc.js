module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        // "react/destructuring-assignment": [<enabled/>, 'never'],
        "no-console": 0
    },
    "env": {
        "browser": true,
        "jest": true
    }

};