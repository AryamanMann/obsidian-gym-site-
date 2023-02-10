import React from 'react';
import ProgramBox from './Programbox';
import fimage1 from '../images/1.svg';
import fimage2 from '../images/2.svg';
import fimage3 from '../images/3.svg';
import fimage4 from '../images/4.svg';

function Program() {
    return (
        <div id='features'>
            <h1>PROGRAMS</h1>
            <div className='a-container'>
                <ProgramBox image={fimage1} title="Strength Training" para="This program focuses on developing and increasing strength and power." />
                <ProgramBox image={fimage2} title="Calisthenics" para="This program focuses on developing muscles using only body weight." />
                <ProgramBox image={fimage3} title="Hypertrophy" para="This program focuses on increasing muscle size and mass." />
                <ProgramBox image={fimage4} title="Cardio Exrercise" para="This program improves the ability to perform aerobic activities." />
            </div>
        </div>
    )
}

export default Program;