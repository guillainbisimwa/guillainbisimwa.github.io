import { useState } from 'react';
import ReactMixitup from 'react-mixitup';
import { FaList } from 'react-icons/fa';
import Project from '../../project/Project';

const Projects = () => {
    
    const [state, setState] = useState({ items: ['js1', 'js2', 'ror', 'html', 'python', 'ruby']});
   
    const all = () =>
    setState({
        items: ['js1', 'ror', 'html', 'python', 'ruby']
    });

    const rails = () =>
    setState({
        items: ['js1', 'js2']
    });

    const js = () =>
    setState({
        items: ['js1', 'js2']
    });

    const html = () =>
    setState({
        items: ['js1', 'js2']
    });

    const react = () =>
    setState({
        items: ['js1', 'js2']
    });

    const redux = () =>
    setState({
        items: ['js1', 'js2']
    });

    const ts = () =>
    setState({
        items: ['js1', 'js2']
    });

    return (
        <div>
            <h2 className='text-center mt-5'>See My Best Works</h2>
            <p className='text-center c-gray'>You can try search for quick jump and also click category</p>
            <div className='text-center m-4'>
                <button className="btn bg-primary_ text-light me-5" onClick={all}>
                    All projects <FaList />
                </button>

                <button className="btn bg-primary_ text-light me-3" onClick={rails}>Ruby on Rails</button>
                <button className="btn bg-primary_ text-light me-3" onClick={js}>JavaScript</button>
                <button className="btn bg-primary_ text-light me-3" onClick={html}>Html/css</button>
                <button className="btn bg-primary_ text-light me-3" onClick={react}>React</button>
                <button className="btn bg-primary_ text-light me-3" onClick={redux}>React/Redux</button>
                <button className="btn bg-primary_ text-light me-3" onClick={ts}>TypeScript</button>
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