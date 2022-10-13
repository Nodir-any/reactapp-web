import "./Header.css";

function Header(){
	return(
		<div className="header">
			<div className="navBar">
				<h3 className="logo">Logo.</h3>
				<ul>
					<li><a href="/#/">Home</a></li>
					<li><a href="/#/">About</a></li>
					<li><a href="/#/">Services</a></li>
					<li><a href="/#/">Contacts</a></li>
					<button className="btn">Subscribe</button>
				</ul>
			</div>
		</div>
	);
}

export default Header;