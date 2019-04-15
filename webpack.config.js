var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
 
module.exports = {
	entry: './src/app.js',
	output: {
		filename: './dist/build.js'
	},
    watch: true,
    
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      files: ['./dist/*.html'],
      server: { baseDir: ['dist'] }
    })
  ]
}
