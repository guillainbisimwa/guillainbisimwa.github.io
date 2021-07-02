import { FaCalendar } from 'react-icons/fa';
import PropTypes from 'prop-types';

import './Blog.css';

const shortenText = (text, startingPoint, maxLength) => {
    return text.length > maxLength ? text.slice(startingPoint, maxLength) : text;
}

const toText = (node) =>{
    const tag = document.createElement('div');
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
  }

const Blog = ({blog}) => {
    return (
        <div className="">
            <div className="blog-card">
                <div className="blog-img">
                    <img src={blog.thumbnail} alt="blog-1"/>
                    <div className="blog-oly">
                        <p>{blog.categories[0]} </p>
                    </div>
                </div>
                <div className="blog-content">
                    <div className="d-flex c-gray mt-2 mb-2">
                        <FaCalendar /> <p className='mx-2'>{shortenText(blog.pubDate, 0, 10)}</p>
                    </div>
                    <div className="blog-text">
                        <h4>{shortenText(blog.title, 0, 30)}</h4>
                        <h6><a href="#">{shortenText(toText(blog.content), 0, 150)}...</a></h6>
                    </div>
                    <a className="btn btn-sm bg-primary_ text-light" href={blog.link} target="_blank"
                    rel="noopener noreferrer">Read more...</a>
                </div>
            </div>
        </div>
    )
};

Blog.propTypes = {
    blog: PropTypes.any,
}

export default Blog;