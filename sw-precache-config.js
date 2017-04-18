module.exports = {
  staticFileGlobs: [
    'dist/**.html',
    'dist/**.js',
    'dist/**.css',
    'dist/assets/images/*',
    'dist/*.eot',
    'dist/*.woff2',
    'dist/*.ttf',
    'dist/*.woff',        
    'dist/*.svg',
    'dist/*.gif',
    'dist/*.ico'   
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html',
  // runtimeCaching: [{
  //   urlPattern: /crowdpouch\.herokuapp\.com/,
  //   handler: 'networkFirst'
  // }]
};