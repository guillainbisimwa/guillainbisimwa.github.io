import { useState } from 'react';
import ReactMixitup from 'react-mixitup';
import { FaList } from 'react-icons/fa';
import Project from '../../project/Project';

const Projects = () => {
    
    const [state, setState] = useState({ items: ['js1', 'js2', 'js3', 'ror', 'html', 'python', 'ruby']});
   
    const all = () =>
    setState({
        items: ['js1', 'js2', 'js3', 'ror', 'html', 'python', 'ruby']
    });

    const rails = () =>
    setState({
        items: ['ror']
    });

    const js = () =>
    setState({
        items: ['js1', 'js2', 'js3']
    });

    const html = () =>
    setState({
        items: ['html', 'js1', 'js2', 'js3']
    });

    const ruby = () =>
    setState({
        items: ['ror', 'ruby']
    });

    const python = () =>
    setState({
        items: ['python']
    });

    // const react = () =>
    // setState({
    //     items: ['js1', 'js2']
    // });

    // const redux = () =>
    // setState({
    //     items: ['js1', 'js2']
    // });

    // const ts = () =>
    // setState({
    //     items: ['js1', 'js2']
    // });

    return (
        <div id="projects">
            <h2 className='text-center mt-5'>See My Best <span className="c-primary">Works</span></h2>
            <p className='text-center c-gray'>You can try search for quick jump and also click category</p>
            <div className='text-center m-4'>
                <button className="btn bg-primary_ text-light me-5" onClick={all}>
                    All projects <FaList />
                </button>

                <button className="btn bg-primary_ text-light me-3" onClick={rails}>Ruby on Rails</button>
                <button className="btn bg-primary_ text-light me-3" onClick={js}>JavaScript</button>
                <button className="btn bg-primary_ text-light me-3" onClick={html}>Html/css</button>
                <button className="btn bg-primary_ text-light me-3" onClick={ruby}>Ruby</button>
                {/* <button className="btn bg-primary_ text-light me-3" onClick={react}>React</button>
                <button className="btn bg-primary_ text-light me-3" onClick={redux}>React/Redux</button> */}
                <button className="btn bg-primary_ text-light me-3" onClick={python}>python</button>
            </div>
           
            <ReactMixitup
            items={state.items}
            transition
            duration={200}
            renderCells={items => (
                <div className='row'>
                {items.map(({key, ref, style}) => (
                    <div key={key} className='col-12 col-sm-12 col-md-6 col-lg-3 p-3 p-r' >
                        <Project project={key} />
                    </div>
                ))}
                </div>
            )}
            />
      </div>
    )
}

export default Projects;