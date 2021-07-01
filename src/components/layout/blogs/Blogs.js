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
    const data = getData();
    
    return (
        <div id='blog'>
            <h2 className='text-center mt-5'>MY <span className="c-primary">BLOGS</span></h2>
            <p className='text-center c-gray mb-4'>Some articles about my activity & experience</p>
            <div>
            {data && (
          <div className="row">
            {data.map(item => ( 
                <div className='col-md-6 col-lg-4' key={item.title}>
                    <Blog blog={item} />
                </div>)
            )}
            </div>)
            }
            </div>
        </div>
    )
}

export default Blogs;