import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogItem: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updateData = {
      imageUrl: data.image_url,
      title: data.title,
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      topic: data.topic,
    }
    this.setState({blogItem: updateData, isLoading: false})
  }

  render() {
    const {blogItem, isLoading} = this.state
    const {title, avatarUrl, imageUrl, content, author} = blogItem
    return (
      <div className="blog-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blogs-bg">
            <h1 className="blog-title">{title}</h1>
            <div className="author-container">
              <img className="avatar-url" src={avatarUrl} alt={author} />
              <p className="author-name">{author}</p>
            </div>
            <img className="blogs-image" src={imageUrl} alt={title} />
            <p className="content">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
