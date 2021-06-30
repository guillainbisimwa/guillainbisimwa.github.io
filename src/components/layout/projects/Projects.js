import { useState } from 'react';
import ReactMixitup from 'react-mixitup';
import { FaTwitter } from 'react-icons/fa';
import Project from '../../project/Project';

const Projects = () => {
    
    const [state, setState] = useState({ items: ['js1', 'js2', 'ror', 'html', 'python', 'ruby']});
   
    const rails = () =>
    setState({
        items: ['js1', 'js2']
    })

    const all = () =>
    setState({
        items: ['js1', 'ror', 'html', 'python', 'ruby']
    })

    return (
        <div>
            <button className="btn bg-primary_ text-light me-5">
            All <FaTwitter />
            </button>

            <button className="btn bg-primary_ text-light me-5" onClick={rails}>Shuffle</button>
            <button className="btn bg-primary_ text-light me-5" onClick={all}>All</button>
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