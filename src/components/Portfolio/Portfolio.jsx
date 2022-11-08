import './Portfolio.scss'
import Work from './Work';

function Portfolio({ portfolio }) {
    return (
        <section className='Portfolio'>
            <h2 className='Portfolio__title'>Portfolio</h2>
            <div className='Portfolio__wrap'>
                {portfolio.map((work, index) => <Work key={work.alt + index} work= {work} />)}
            </div>
        </section>
    )
}

export default Portfolio;