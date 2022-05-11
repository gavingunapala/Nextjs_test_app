// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'

//add custom css
import '../styles.newpage.css'

function MyApp({ Component, pageProps  }) {
  return <Component {...pageProps} />
}

export default MyApp