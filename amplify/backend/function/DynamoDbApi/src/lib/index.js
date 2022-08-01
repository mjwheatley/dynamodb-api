module.exports = {
   tables: require(`./tables`),
   utils: {
      ...require(`./response`)
   },
   HttpMethodMap: require(`./httpMethodMap`)
};
