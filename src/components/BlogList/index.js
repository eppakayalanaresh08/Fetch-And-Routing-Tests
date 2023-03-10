import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {
    blogLists: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getMountBlogs()
  }

  getMountBlogs = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updateData = data.map(eachObject => ({
      id: eachObject.id,
      title: eachObject.title,
      imageUrl: eachObject.image_url,
      avatarUrl: eachObject.avatar_url,
      author: eachObject.author,
      topic: eachObject.topic,
    }))
    console.log(response)
    console.log(data)
    this.setState({blogLists: updateData, isLoading: false})
  }

  render() {
    const {blogLists, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="blogs-list">
            {blogLists.map(eachObject => (
              <BlogItem eachListBlog={eachObject} key={eachObject.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
