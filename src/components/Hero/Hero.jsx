import './Hero.scss';

function Hero({ hero }) {
    return (
         <section className='Hero'>
            <div className="Hero__info">
                <div className='Hero__image'>
                    <img src={hero.image} alt="Daniel" />
                </div>
                <div className="Hero__info">
                    <h1>
                        {hero.name} {hero.profession}
                    </h1>
                    <p>πΊοΈ{hero.city} </p>
                    <p>ποΈ{hero.birthDate}</p>
                    <p>π§ <a href={"mailto:" + hero.email} className="Hero__link">
                        danielsanchezvazquez5@gmail.com
                        </a>
                    </p>
                    <p>π± {hero.phone}</p>
                    <p>πΎ<a href={hero.gitHub}>
                    GitHub
                
                    </a></p>
                </div>
            </div>
        </section>
    );
}

export default Hero;