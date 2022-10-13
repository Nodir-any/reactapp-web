import "./Content.css";
import "https://kit.fontawesome.com/59ea9a7e7e.js";

function Content(){
	return(
		<>
		
			<div className="main">
				<div className="text">
					<div className="hero-text">
					<h3>Welcome to our website <br/>we offer such services here.</h3>
					<p>It is stated description of our services<br/> It is stated description of our services something<br/> 
					It is stated description of our services something else</p>
					</div>
					<img src="https://unsplash.it/450/500" alt="hero image"/>
				</div>
			</div>
			
			<div>
				<h4 className="h4">Services</h4>
				<div className="card-grid">
				<div className="card">
					<h2>Lorem ipsum</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda recusandae maxime distinctio quos ullam incidunt.</p>
					<img src="//unsplash.it/501" alt=""/>
				</div>
				<div className="card">
					<h2>Omnis, veritatis odio.</h2>
					<p>Enim molestiae recusandae ut dolor sit amet consectetur adipisicing. odit possimus eius inventore. Quasi illo unde neque? Itaque, deleniti adipisci?</p>
					<img src="//unsplash.it/502" alt=""/>
				</div>
				<div className="card">
					<h2>Exercitationem, libero quam!</h2>
					<p>Error maiores culpa eaque. Quam quisquam quae nostrum ipsa dolorum atque aperiam fugit soluta error!</p>
					<img src="//unsplash.it/503" alt=""/>
				</div>
				<div className="card">
					<h2>Quibusdam, recusandae odio.</h2>
					<p>Corporis laboriosam, neque est commodi architecto voluptatem, ipsam corrupti ullam similique eligendi hic qui natus?</p>
					<img src="//unsplash.it/504" alt=""/>
				</div>
				<div className="card">
					<h2>Modi, exer citat ionem dicta.</h2>
					<p>Laboriosam, aliquam tempore minus dolorem ullam et veniam asperiores, eveniet vitae odit itaque eligendi ducimus?</p>
					<img src="//unsplash.it/505" alt=""/>
				</div>
				<div className="card">
					<h2>Dolore.</h2>
					<p>Reprehenderit, labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, aut. harum vitae voluptate alias saepe debitis quo perspiciatis, delectus fugiat modi eveniet.</p>
					<img src="//unsplash.it/506" alt=""/>
				</div>
				</div>
				<div className="btn2"><button>Hire</button></div>
			</div>
			
			<div className="footer">
				<div className="navBar">
				<h3 className="logo">Logo.</h3>
				<ul>
					<li><a href="/#/">Home</a></li>
					<li><a href="/#/">About</a></li>
					<li><a href="/#/">Services</a></li>
					<li><a href="/#/">Contacts</a></li>
				</ul>
			</div>
				<div className="social-icons">
					<i className="fa-brands fa-facebook"><a href="#"></a></i>
					<i className="fa-brands fa-twitter"><a href="#"></a></i>
					<i className="fa-brands fa-youtube"><a href="#"></a></i>
					<i className="fa-brands fa-instagram"><a href="#"></a></i>
					<i className="fa-brands fa-github"><a href="#"></a></i>
					<i className="fa-brands fa-linkedin"><a href="#"></a></i>
				</div>
			</div>
			
			<div className="copyright"><p>Copyright &copy; 2022. Design by <a href="#" className="copy-link">A.Nodir</a></p></div>
		</>
	);
}

export default Content;