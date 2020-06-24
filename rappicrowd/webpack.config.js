''' This is webpack. This file controls the configuration according type files and rules '''
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
		  presets: ['@babel/preset-env',
			    '@babel/preset-react',{
			    'plugins': ['@babel/plugin-proposal-class-properties']}]
	  }  		
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
