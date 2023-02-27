import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {eachListBlog} = props
  const {id, title, topic, imageUrl, avatarUrl, author} = eachListBlog
  return (
    <li className="blog-item">
      <Link to={`/blogs/${id}`} className="link-items">
        <div className="container-bg-card">
          <img src={imageUrl} alt={`item${id}`} className="image-url" />
          <div className="list-description-container">
            <p className="topic-description">{topic}</p>
            <h1 className="title-description">{title}</h1>
            <div className="profile-container">
              <img src={avatarUrl} alt={`author${id}`} className="author-url" />
              <p className="author-description">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
