var plugins = [{
      plugin: require('D:/Projects/Gatsby/master-gatsby/gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('D:/Projects/Gatsby/master-gatsby/gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"35ani96r","dataset":"production","watchMode":true,"token":"skhj3EIBZmxEfwY1QY8Fv38MihCozYwJB2d256fmKN5bsU6fodSKdn6jrsSZ33xbPIYkGaGoF8fOTeVeakHGJYeS4WKpsAaI0l0vX8JjXomO8sk4apFE4lUFkd9FcZWNkzK4dhPDGscxgLmWvy3CV7LBXSV9gDT417Rnbo7WJ9RMxd36s35o"},
    },{
      plugin: require('D:/Projects/Gatsby/master-gatsby/gatsby/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
