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
import TBM_logo from '../assets/images/TBM_logo.jpeg';
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
                <img src={TBM_logo} alt="" />
              </div>
        <div className="content">
        <h2>
            The Black Monologues
          </h2>
          <p>Website: <a href="https://www.theblackmonologues.com/" target="_blank" >theblackmonologues.com</a></p>
          <p>Producer: Funmi-Obsidian (Obi) Àyànmọ́</p>
          <br></br>
          <a href="https://open.spotify.com/episode/1N3j6W1on9xLK8ANNRJi3f?si=pE92bJwdR1e-KN81s2-5xw&dl_branch=1" target="_blank" >Godalyn's Episode</a>
          <br></br>
          <a href="https://open.spotify.com/episode/0zLLj6UMUOIqUYKgr2wFcG?si=6P0S4_a6Sw25KQlP7NWXGw&dl_branch=1" target="_blank" >Michael's Episode</a>
          <br></br>
          <a href="https://open.spotify.com/episode/3xOyziv3Y9N2XdjllIFSbA?si=717ZPU2cSCexCrox0NS9WA&dl_branch=1" target="_blank" >Katie's Episode</a>
          <br></br>
          <a href="https://open.spotify.com/episode/09TnE70Zkg0idt0QWozT0s?si=kp1SORW5SAi3Sayttzqm0g&dl_branch=1" target="_blank" >Edwin's Episode</a>
        </div>
      </section>
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
                <p>A London Rocks Film Festival winner.</p>  
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
