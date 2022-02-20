import './navbar.css';
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
export default function Navbar() {
	return (
		<header id="header__navbar">
			<navbar className="navbar">
				<ul className="menu">
					<li>
						<a className="links" href="https://twitter.com/waltcoder" target="_blank" rel="noopener noreferrer">
							<BsTwitter size={24} color="#ffffff" />
						</a>
					</li>
					<li>
						<a className="links" href="https://instagram.com/waltcoder" target="_blank" rel="noopener noreferrer">
							<BsInstagram size={24} color="#ffffff" />
						</a>
					</li>
					<li>
						<a className="links" href="https://github.com/waltcoder" target="_blank" rel="noopener noreferrer">
							<BsGithub size={24} color="#ffffff" />
						</a>
					</li>
				</ul>
			</navbar>
		</header>
	);
}
