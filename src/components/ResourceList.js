import React from 'react'
import axios from 'axios'

class ResourceList extends React.Component {
  state = {
    resource: []
  }

  async componentDidMount  () {
    const { resource } = this.props
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
    this.setState({ resource: response.data })
  }

  async componentDidUpdate (prevProp) {
    if (prevProp.resource !== this.props.resource) {
      const { resource } = this.props
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
      this.setState({ resource: response.data })
    }
  }
  render () {
    return (
      <div>{this.state.resource.length}</div>
    )
  }
}

export default ResourceList
