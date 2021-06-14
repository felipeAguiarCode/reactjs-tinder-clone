import React, {useState , useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import database from '../../services/firebase';
import './TinderCards.css';

function TinderCards() {
	const [people, setPeople] = useState([]);

	//bad - não vigia re-rendedização
	// const people = [];
	// people.push('felipe');

	//GOOD (adicionar elementos e vigiar renderizaçã)
	// setPeople([...people, 'felipe', 'x']) //mantenha o que esta e adicione

	//Pedaço de codigo que roda com base em uma condição
	useEffect(()=>{
		//código que irá rodar
		const unsubscribe = database
			.collection('people')
			.onSnapshot(snapshot => (
				setPeople(snapshot.docs.map(doc => doc.data()))
			));

		return () =>{
			unsubscribe();
		};
		//irá rodar quando o componente carregar e nunca mais
	}, []);

	return (
		<div>
			<div className="tinderCards__cardContainer">
				{people.map((person) => (
					<TinderCard
						className="swipe"
						key={person.name}
						preventSwipe={['up', 'down']}
					>
						<div 
							style={{ backgroundImage: `url(${person.url})` }}
							className="card"
						>
							<h3>{person.name}</h3>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	);
}

export default TinderCards;
