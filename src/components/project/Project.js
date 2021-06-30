import PropTypes from 'prop-types';
import { useState } from 'react';
import game from './../../assets/Screenshot22.png';


const Project = ({project}) => {
    const myProjects = [{id:1, title:'', keyword: 'js1', src: game}, {id:2, keyword: 'ror', src: game},
        {id:3, keyword: 'html', src: game}, {id:4, keyword: 'python', src: game},
        {id:5, keyword: 'ruby', src: game},{id:6, keyword: 'js2', src: game},
    ];
    const [state, setState] = useState(myProjects.filter(ob => ob.keyword == project))

    return (
        <div className="border border-light p-4 img-container project">
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://gbisimwa.me/To-Do-List/"
            >
                <img id="projectTodDo" src={state[0].src} alt="Project Todo " />
            </a>
            <div className="info_project">
                <p className="fw-bold text-truncate">To-Do-List {state[0].id}</p>
               
            </div>
           
            <div className="port-oly">
                <div className="port-btn port-inner-btn">
                    <button className="btn bg-primary_ btn-sm text-light mt-2 btn-block">live preview</button>
                    <button className="btn bg-primary_ btn-sm text-light mt-2 btn-block">view details</button>
                </div>
            </div>
        </div>
    )
}

Project.propTypes = {
    //project: PropTypes.oneOfType([PropTypes.object]).isRequired,
    //project: PropTypes.object,
    project: PropTypes.string.isRequired,
}

export default Project;