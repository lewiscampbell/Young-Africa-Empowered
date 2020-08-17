import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>About</h2>
        <p>Lewis A Campbell | Music Composer</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Profile</h3>

          <p>
          Lewis is a professional, experienced music composer based in London. With roots in modern music production and with a classical training, he is equipped to work on a wide range of projects and genres making use of the powerful yet gentle sound of the orchestra with modern music production techniques and advanced sound design to create a full, modern cinematic sound.
          </p>

          <hr />

          <h3>Qualifications</h3>
          <p>
            - 1st Class BA(hons) in Music Production & Sound Engineering from Point Blank Music School
            <br></br>
            - D*D*D* in Music from the BRIT School
          </p>

          <hr />

          <h5>Zuheir Kredieh</h5>
				  <blockquote>"He's is not only very collaborative, Lewis is such a great artist, listener and very talented. It took me just once to explain to him the mood of my film and he just handed over the music after one week only. It was THE music!"</blockquote>
        </div>



        
      </section>
    </article>

    

    
    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Conact</h2>
          <p>
            For all inquiries please email: lewisacampbell99@gmail.com
          </p>
          <ul className="actions stacked">
          <li>
            <a href='mailto:lewisacampbell99@gmail.com' className="button fit">
              Email
            </a>
          </li>
        </ul>
        </header>
      </div>
    </section>
    
    
  </Layout>
);

export default IndexPage;
