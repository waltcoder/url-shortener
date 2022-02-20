import './error.css';
import { Link } from 'react-router-dom';

export default function Error() {
	return (
		<section>
			<img src="notfound.png" alt="Página não encontrada!" srcset="" />
			<p>Página não encontrada!</p>
			<Link to="/" id="backToHome">
				Voltar para home
			</Link>
		</section>
	);
}
