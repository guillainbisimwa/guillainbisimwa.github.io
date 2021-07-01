import test from './../../assets/Screenshot.png';
import { FaCalendar } from 'react-icons/fa';
import PropTypes from 'prop-types';

import './Blog.css';

const Blog = ({blog}) => {
    console.log('blog');
    console.log(blog);
    return (
        
        <div className="">
            <div className="blog-card">
                <div className="blog-img">
                    <img src={test} alt="blog-1"/>
                    <div className="blog-oly">
                        <p>html, css</p>
                    </div>
                </div>
                <div className="blog-content">
                    <div className="d-flex c-gray mt-2 mb-2">
                        <FaCalendar /> <p className='mx-2'> 02 feb 2020</p>
                    </div>
                    <div className="blog-text">
                        <h5><a href="#">Business contents insurance iure ipsam ratione is a type of business...</a></h5>
                    </div>
                    <button className="btn bg-primary_ text-light">Read more...</button>
                </div>
            </div>
        </div>
    )
};

Blog.propTypes = {
    blog: PropTypes.any,
}

export default Blog;