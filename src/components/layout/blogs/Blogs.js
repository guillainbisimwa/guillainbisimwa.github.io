import getBlogs from "../../../services/mediumApi";
import Blog from "../../blog/Blog";


const getData = () => {
    const blogs = JSON.parse(localStorage.getItem('blogs'));
    if (blogs.length > 0) {
      return blogs;
    }
    return {};
}
  

const Blogs = () => {
    getBlogs();
    
    return (
        <div id='blog'>
            <h2 className='text-center mt-5'>MY <span className="c-primary">BLOGS</span></h2>
            <p className='text-center c-gray mb-4'>Some articles about my activity & experience</p>
           <Blog blogs={getData()} /> 
        </div>
    )
}

export default Blogs;