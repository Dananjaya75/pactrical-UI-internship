import { blog1, blog2, blog3 } from "./Assets.tsx";
import "./Blog.css";

function Blog() {
  return (
    <div className="blog-container">
      <h2>Blog Posts</h2>
      <p>Here are some of our latest blog posts...</p>
      <div className="blog-content">
        <div className="blog-posts">
          <img src={blog1} alt="" className="blog-img" />
          <h3>Blog Post 1</h3>
          <p>
            by <span>Shopify Team Has Theam/August 12,2022</span> Lorem ipsum
            dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>
        <div className="blog-posts">
          <img src={blog2} alt="" className="blog-img" />
          <h3>Blog Post 1</h3>
          <p>
            by <span>Shopify Team Has Theam/August 12,2022</span> Lorem ipsum
            dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>

        <div className="blog-posts">
          <img src={blog3} alt="" className="blog-img" />
          <h3>Blog Post 1</h3>
          <p>
            by <span>Shopify Team Has Theam/August 12,2022</span> Lorem ipsum
            dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Blog;
