import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import see_you_tomorrow from '../assets/images/see_you_tomorrow.jpg';
import the_lost_soul from '../assets/images/the_lost_soul.jpg';
import him from '../assets/images/him.jpg';
import rewind from '../assets/images/rewind.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Portfolio
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style5">
			<div className="inner">

        <section>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
            <iframe 
                className="col-12"
                height="650px"
								id="player"
								type="text/html"
								src="https://www.youtube.com/embed/XQua6g7rwyo"
								frameborder="0">
							</iframe>
						</div>
					</div>
				</section>

				<section>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
							<iframe 
                className="col-6"
                height="350px"
								id="player"
								type="text/html"
								src="https://www.youtube.com/embed/NQJxIcTtlZI"
								frameborder="0">
							</iframe>
							<iframe 
                className="col-6"
                height="350px"
								id="player"
								type="text/html"
								src="https://www.youtube.com/embed/wzsF7B_BiyE"
								frameborder="0">
							</iframe>
							<iframe 
                className="col-4"
                height="240px"
								id="player"
								type="text/html"
								src="https://www.youtube.com/embed/9dRmhTEeMTc"
								frameborder="0">
							</iframe>
              <iframe 
                className="col-4"
                height="240px"
								id="player"
								type="text/html"
								src="https://www.youtube.com/embed/l04ngViiVoY"
								frameborder="0">
							</iframe>
							<iframe 
                className="col-4"
                height="240px"
								id="player"
								type="text/html"
								src="https://www.youtube.com/embed/gGz07yv7bAY"
								frameborder="0">
							</iframe>
			
						</div>
					</div>
				</section>

				<br></br>
				<br></br>

				<h5>Zuheir Kredieh</h5>
				<blockquote>"He's is not only very collaborative, Lewis is such a great artist, listener and very talented. It took me just once to explain to him the mood of my film and he just handed over the music after one week only. It was THE music!</blockquote>


			</div>
		</section>

    

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
              <div className="image">
                <img src={see_you_tomorrow} alt="" />
              </div>
              <div className="content">
                <h2>
                  See You Tomorrow
                </h2>
                <p>Director: Zuheir Kredieh</p>
                <p>Writer: Zuheir Kredieh</p>
                <br />
                <p>An IndieX Film Festival winner.</p>  
                <p>A Brighton Rocks Film Festival nomination.</p>
              </div>
      </section>
      <section className="spotlight">
              <div className="image">
                <img src={the_lost_soul} alt="" />
              </div>
        <div className="content">
        <h2>
            The Lost Soul
          </h2>
          <p>Director: Pierre Levasseur</p>
          <p>Writer: Pierre Levasseur</p>
        </div>
      </section>
      <section className="spotlight">
              <div className="image">
                <img src={him} alt="" />
              </div>
              <div className="content">
                <h2>
                  Him
                </h2>
                <p>Director: Cheerio Xin</p>
                <p>Writer: Cheerio Xin</p>  
              </div>
      </section>
      <section className="spotlight">
              <div className="image">
                <img src={rewind} alt="" />
              </div>
        <div className="content">
        <h2>
            Rewind
          </h2>
          <p>Director: Patrycja Pączkowska</p>
          <p>Writer: Patrycja Pączkowska</p>  
        </div>
      </section>
    </section>
    

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Contact</h2>
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
