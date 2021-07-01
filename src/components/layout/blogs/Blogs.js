import Blog from "../../blog/Blog";

const Blogs = () => {
    return (
        <div>
            <h2 className='text-center mt-5'>MY <span className="c-primary">BLOGS</span></h2>
            <p className='text-center c-gray'>Some articles about my activity & experience</p>
           <Blog /> 
        </div>
        
    )
}

export default Blogs;