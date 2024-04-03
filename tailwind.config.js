/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui:{
    themes:[
      "coffee"
    ],
  },
  module:{
    rules:[
      {
        test: /\.(png|jp?g|gif)$/i,
        use:[
          {
            loader: 'file-loader',
          }
        ]
      }
    ]
  }
}

