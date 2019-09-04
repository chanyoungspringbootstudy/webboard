const {override, addBabelPlugins} = require('customize-cra'); // require == import

// module.exports == exports default
module.exports = override(
    ...addBabelPlugins(
        ['@babel/plugin-proposal-decorators', {'legacy': true}]
    )
);