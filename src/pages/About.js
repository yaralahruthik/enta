import tmdb from '../images/TMBDCredit.svg';

const About = () => {
	return (
		<div className='about'>
			<h2 className='about__title'>Ideas to improve!</h2>
			<p className='about__body'>
				Currently, the app works as a tracker for your movies and TV shows. I
				intended this to be a tracker only app.
			</p>
			<p className='about__body'>
				But the below improvements can be further made!
			</p>
			<ul className='about__list'>
				<li>
					Add a show more button or enable the cards to be clickable to take to
					a page with further details about the title.
				</li>
				<li>
					Add a play button to the card to make a streaming app or a trailer can
					be played.
				</li>
				<li>Add a progress bar to the card.</li>
				<li>
					Home page can be improved by adding more lists such as popular,
					trending, top rated like in the movies and TV page.
				</li>
				<li>
					React Native version? I'll be making it responsive enough anyway.
				</li>
			</ul>
			<h2 className='about__title'>API Credits</h2>
			<a href='https://www.themoviedb.org/' target='_blank' rel='noreferrer'>
				<img className='about__credits' src={tmdb} alt='tmdb credit' />
			</a>
		</div>
	);
};

export default About;
