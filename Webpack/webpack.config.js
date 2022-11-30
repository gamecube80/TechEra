const path = require('path');

module.exports = {
    //change between development and production
    mode: "production",
    //change file it looks for from index to file listed here
    entry: './src/App.js',
    //this is where it sends the .js file that is created when cpm run build is called
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    }
}