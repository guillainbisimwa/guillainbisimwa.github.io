import { useState } from 'react';
import ReactMixitup from 'react-mixitup';
import { FaTwitter } from 'react-icons/fa';


const Projects = () => {
    
    const [state, setState] = useState({ items: [1, 2, 3, 4] });
   
    const rails = () =>
    setState({
        items: [1,2]
    })

    const all = () =>
    setState({
        items: [1,2,3,4]
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
            renderCells={items => (
                <div >
                {items.map(({ key, ref, style }) => (
                    <div key={key} ref={ref} >
                    {key}
                    </div>
                ))}
                </div>
            )}
            />
      </div>
    )
}

export default Projects;