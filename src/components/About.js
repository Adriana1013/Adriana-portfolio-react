import React from 'react';

function About() {
  return (
	<section>
	  <div>
	    <h1 className="App">About Me</h1>
		  </div>
		    <div>
			<img src={require('../Assets/Adriana.JPG')} alt="about-me" className="Photo"/>
			<p className='copy'>
			  My name is Adriana and I'm currently working in marketing and taking a part-time Coding Boot Camp through Northwestern. I look forward to using my new skills along with my passion for marketing.   
			</p>
			<hr />
			</div>
		</section>
	);
}

export default About;