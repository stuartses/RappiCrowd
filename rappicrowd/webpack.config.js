module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
	exclude: /node_modules/,
	use: {
	  loader: "style-loader"
	}	      
      },
      {
        test: /\.css$/,
	exclude: /node_modules/,
	use: {
	  loader: "css-loader"
	}      
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        exclude: /node_modules/,
        use: {
	  loader: "file-loader"
	} 	      
      },
      {
        test: /\.png$/,
	exclude: /node_modules/,
	use: {
	  loader: "url-loader?mimetype=image/png"
	}      
      }      	    
    ]
  }
}
