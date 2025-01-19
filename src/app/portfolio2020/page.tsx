import React from 'react'
import './stylesheets/main.css'
import './stylesheets/modal.css'
import './stylesheets/bootstrap.css'

const page = () => {
  return (
    <>
    <div className="entry"></div>
	  <div className="fixed-bg"></div>

    <div className="nav-container">
        <nav className="nav-menu">
        <ul>
          {/* <li><a onclick="scrollHome()"><span>Home</span></a></li>
          <li><a onclick="scrollAbout()"><span>About</span></a></li>
          <li><a onclick="scrollProject()"><span>Recent Works</span></a></li>
          <li><a onclick="scrollContact()"><span>Contact</span></a></li> */}
        </ul>
        </nav>
    </div>
	
<div className="arrow">
	<span></span>
	<span></span>
	<span></span> 
</div>
	
<div className="top-page" id="homepage">
	<div className="top-container">
		<img src="portfolio2020-assets/stylesheets/img/logo.png" />
		<h1>Garet Lam</h1>	
		<h2>Design. Code. Develop.</h2>
	</div>
</div>
	
			
<div className="about-section" id="aboutSection">
	<div className="about-image">
		<img src="portfolio2020-assets/stylesheets/img/garet.png" />
	</div>
	
	<div className="about-text">
		<div className="text-container">
		<h3>About<span></span></h3>
		<p className="about-para">
			Self-taught web developer with a desire to change the norms of what
			a website should be. I develop digital solutions to solve real world problems and further
			grow businesses. Making web applications become a reality is what drives
			me to develop and further improve my skillset
		</p>
			
	<div id="progress-bar-container">
		<div className="progressBar">
			<p className="bar-header">HTML / CSS3</p>
			<p className="progress-percent">90%</p>
			<div className="overlay-bar"></div>			
			<div className="html-container">
				<div className="html-bar" style={{width: "90%"}}>
					<div className="yellow-bar"></div>
				</div> 
			</div>
		</div>
		
		<div className="progressBar">
			<p className="bar-header">Javascript / ES6</p>
			<p className="progress-percent">70%</p>
			<div className="overlay-bar"></div>
			<div className="html-container">
				<div className="html-bar" style={{width: "70%"}}>
					<div className="yellow-bar"></div>
				</div> 
			</div>
		</div>
		
		<div className="progressBar">
			<p className="bar-header">Adobe Photoshop</p>
			<p className="progress-percent">80%</p>
			<div className="overlay-bar"></div>
			<div className="html-container">
				<div className="html-bar" style={{width: "80%"}}>
					<div className="yellow-bar"></div>
				</div> 
			</div>
		</div>
		
		<div className="progressBar">
			<p className="bar-header">Wordpress</p>
			<p className="progress-percent">65%</p>
			<div className="overlay-bar"></div>
			<div className="html-container">
				<div className="html-bar" style={{width: "65%"}}>
						<div className="yellow-bar"></div>
				</div> 
			</div>
		</div>
		
		<div className="progressBar">
			<p className="bar-header">JS Frameworks (React/NextJS)</p>
			<p className="progress-percent">65%</p>
			<div className="overlay-bar"></div>
			<div className="html-container">
				<div className="html-bar" style={{width: "65%"}}>
					<div className="yellow-bar"></div>
				</div> 
			</div>
		</div>

		<div className="progressBar">
			<p className="bar-header">MySQL/MongoDB</p>
			<p className="progress-percent">35%</p>
			<div className="overlay-bar"></div>
			<div className="html-container">
				<div className="html-bar" style={{width: "35%"}}>
					<div className="yellow-bar"></div>
				</div>
			</div>
		</div>
	</div>
		</div>
	</div>
</div>
	 
<div className="project-section" id="projectSection">
	<h3>Recent Works<div></div></h3>
	<div className="container project-container">

			<div className="card"><img src="portfolio2020-assets/stylesheets/img/levelupworks-front.jpg" />
				<div className="info">
					<h1>Level Up Works</h1>
					<p>Redesign of the Level Up Works. Uses MERN Stack</p>
					<button id="levelupworks">Learn More</button>
				</div>
			</div>
		
			<div className="card"><img src="portfolio2020-assets/stylesheets/img/project2.jpg"/>
				<div className="info">
				  <h1>Persus Vincere</h1>
				  <p>Brochure website for a mockup architect company</p>
				  <button id="persusvincere">Learn More</button>
				</div>
			 </div>
		
			<div className="card"><img src="portfolio2020-assets/stylesheets/img/project1.jpg"/>
				<div className="info">
				  <h1>Red Dew</h1>
				  <p>Web development company landing page mockup</p>
				  <button id="reddew">Learn More</button>
				</div>
			  </div>

			<div className="card"><img src="portfolio2020-assets/stylesheets/img/project3.jpg"/>
				<div className="info">
				  <h1>Annex</h1>
				  <p>Features user authentication. Create, delete, and update posts</p>
				  <button id="annex">Learn More</button>
				</div>
			 </div>
	
			<div className="card"><img src="portfolio2020-assets/stylesheets/img/project4.jpg"/>
				<div className="info">
				  <h1>Ruminate</h1>
				  <p>Mobile App Concept - Wine App - View ratings and info</p>
				  <button id="ruminate">Learn More</button>
				</div>
			</div>

			<div className="card"><img src="portfolio2020-assets/stylesheets/img/project6.jpg"/>
				<div className="info">
					<h1>Graphic Design</h1>
					<p>General Graphic Designs</p>
					<button id="fgc">Learn More</button>
				</div>
			</div>		
	</div>
</div>
	
<div className="contact-section" id="contactSection">
	<h3>Contact<div></div></h3>
	<p>Have a question or want to work together?</p>
	<div style={{color: "white", marginBottom: "50px", lineHeight: "35px"}}>
		<p style={{color: "white", fontWeight: "bold"}}><img style={{marginRight: "10px", height: "20px"}} src="portfolio2020-assets/stylesheets/img/fav3.png" />+64220473697</p>
		<p style={{color: "white"}}>OR</p>
		<p style={{color: "white", fontWeight: "bold"}}><img style={{marginRight: "10px", height: "15px"}} src="portfolio2020-assets/stylesheets/img/fav5.png" />garet.lam@gmail.com</p>
	</div>
	
<footer>
		<p id="footer-p">
			 GARET LAM &copy;2020
		</p>
</footer>
</div>

<div id="simpleModal" className="modal">
	<div className="modal-content">
		<span className="closeBtn"></span>
			<div className="owl-carousel owl-theme">
				
			</div>
		<div className="modal-container">
			<p className="modal-header">Test Title</p>
			<hr/>
			<p className="modal-info">Lorem ipsum</p>
			<a className="view-site" href="#" target="_blank">View Site</a>
		</div>			
	</div>
</div>
</>
  )
}

export default page