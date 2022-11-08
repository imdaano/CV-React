import { useState } from 'react';
import Descriptions from './Descriptions';
import './Curriculum.scss';

function Curriculum({ curriculumSections }) {
    const { experience, education } = curriculumSections
    const [showExperience, setShowExperience] = useState(false)

    return (
        <section className='Curriculum'>
            <nav>
                <button onClick={() => setShowExperience(false) }>Education</button>
                <button onClick={() => setShowExperience(true) }>Experience</button>
            </nav>
            {showExperience
                ? <Descriptions Descriptions={experience} />
                : <Descriptions Descriptions={education} /> }
        </section>
    )
}

export default Curriculum 