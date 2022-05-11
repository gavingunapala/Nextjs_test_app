import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import NAVBAR from '../components/navbar';
import FOOTER from '../components/footer';
import mypic from '../public/Deliveries.png';

export default function Home() {
  return (
  <div>
    <NAVBAR />
    <br/>
      <div className="row">
        <div className="column">
        <Image
                    alt="Next.js logo"
                    src={mypic}
                  />
        </div>
        <div className="column mycenter">
          <h1 className='mydelivary'>Deliveries</h1><br/>
          <p className='mydelivary'>view all deliveries and manage all deliveries </p><br/>
          <a type="button" className="btn btn-primary center" href='/deliveries'>DELIVARY</a>
        </div>
      </div>
      <hr />
    <FOOTER/>
  </div>
  );
}
