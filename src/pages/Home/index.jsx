import './home.css';
import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import Menu from '../../components/Navbar';
import LinkItem from '../../components/LinkItem';
import api from '../../services/api';
export default function Home() {
	const [link, setLink] = useState('');
	const [data, setData] = useState('');
	const [showModal, setShowModal] = useState(false);
	async function handleShortLink(evt) {
		evt.preventDefault();
		// setShowModal(true);
		try {
			const response = await api.post('/shorten', {
				long_url: link,
			});
			setData(response.data);
			setShowModal(true);
			setLink('');
		} catch {
			alert('Ops parece que algo deu errado');
			setLink('');
		}
	}
	return (
		<section className="App__home">
			<svg id="logo" width="179" height="198" viewBox="0 0 179 198" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M25.9288 152.292L75.6144 140.371L61.0951 189.361L25.9288 152.292Z" fill="white" />
				<rect y="10.8066" width="169" height="155" rx="22" transform="rotate(-3.66624 0 10.8066)" fill="white" />
				<path
					d="M80.5327 87.1197C82.4116 89.6315 84.8087 91.7098 87.5614 93.2138C90.3141 94.7177 93.3581 95.6121 96.4868 95.8361C99.6156 96.0602 102.756 95.6088 105.695 94.5125C108.634 93.4161 111.303 91.7006 113.52 89.4822L126.645 76.3572C130.63 72.2315 132.835 66.7058 132.785 60.9703C132.735 55.2347 130.435 49.7482 126.379 45.6924C122.323 41.6366 116.836 39.336 111.101 39.2862C105.365 39.2363 99.8396 41.4412 95.714 45.4259L88.189 52.9072"
					stroke="#132742"
					stroke-width="5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M98.0327 78.3697C96.1539 75.8579 93.7568 73.7795 91.0041 72.2756C88.2514 70.7716 85.2074 69.8773 82.0786 69.6532C78.9499 69.4292 75.8095 69.8806 72.8706 70.9769C69.9317 72.0732 67.2629 73.7888 65.0452 76.0072L51.9202 89.1322C47.9355 93.2579 45.7306 98.7835 45.7805 104.519C45.8303 110.255 48.1309 115.741 52.1867 119.797C56.2425 123.853 61.729 126.153 67.4646 126.203C73.2001 126.253 78.7258 124.048 82.8515 120.063L90.3327 112.582"
					stroke="#132742"
					stroke-width="5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			<h2 className='App__home-title'>URL Shortener</h2>
			<p>Cole seu link para encurtar</p>
			<form>
				<div className="inputControl">
					{/* <i class="gg-link"></i> */}
					<FiLink size="24" color="#ffffff" className="iconLink" />
					<label htmlFor="pasteYourLink" className="srOnly">
						Cole seu link aqui...
					</label>
					<input
						type="text"
						name="pasteYourLink"
						id="pasteYourLink"
						placeholder="Cole seu link aqui ..."
						inputMode='url'
						enterKeyHint='done'
						value={link}
						onChange={(e) => setLink(e.target.value)}
					/>
				</div>
				<button id="btn" className="btn" onClick={handleShortLink}>
					Gerar link
				</button>
			</form>
			<Menu />
			{showModal && <LinkItem closeModal={() => setShowModal(false)} content={data} />}
		</section>
	);
}
