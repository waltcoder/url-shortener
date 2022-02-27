import './linkitems.css';
import { FiX, FiCopy } from 'react-icons/fi';

export default function LinkItem({ closeModal, content }) {
	async function copyBtnLink() {
		await navigator.clipboard.writeText(content.link);
		alert('link copiado');
	}
	return (
		<div className="App__link">
			<section id="modalContainer">
				<div className="modal">
					<div>
						<span>Link encurtado:</span>
						<button className="btnFiX" onClick={closeModal}>
							<FiX className="fiX" size={40} color="#000000" />
						</button>
					</div>
					<small>{content.long_url}</small>
					<button className="btnLink" onClick={copyBtnLink}>
						{content.link}
						<FiCopy className="fiCopy" size={24} color="#ffffff" />
					</button>
				</div>
			</section>
		</div>
	);
}
