import React from 'react'
import FeedItem from './FeedItem'

class Feed extends React.Component {
  componentWillMount() {
    const { mentions, handleRetrieveMentions } = this.props
    if (mentions.length === 0) handleRetrieveMentions()
  }

  render() {
    const { mentions } = this.props

    return (
      <div className="feed-list">
        {mentions.map(mention => {
          return <FeedItem mention={mention} key={mention.id}/>
        })}
      </div>
    )
  }
}

Feed.propTypes = {
  mentions: React.PropTypes.array.isRequired,
  handleRetrieveMentions: React.PropTypes.func.isRequired
}

export default Feed
