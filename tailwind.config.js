/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
        center:true,
        padding:'16px'
    },
    extend: {
      backgroundImage: {
        'image1': "url('/dist/img/image1.jpeg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors:{
        primary:'#4338ca',
        secondary:'#64748b',
        dark:'#18181b',
        gradient:'#1d2671'
        test:'#1e1616'
      },
      screen:{
        '2xl':'1320px'
      }
    },
  },
  plugins: [
    
  ],
}

