module.exports = {
    module: {
      rules: [
        {
          test: /\.(mp3|wav|ogg|mp4|webm)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/',
              },
            },
          ],
        },
      ],
    },
  };
  