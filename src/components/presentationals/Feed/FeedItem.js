import React from 'react'

const highlightMentionFromText = (text, mention) => {
  const re = new RegExp(mention, 'gi')

  return text.replace(re, '<mark>$&</mark>')
}

const FeedItem = ({ mention }) => (
  <div className="feed-item" onClick={() => window.open(mention.clickable_url, '_blank')}>
    <div className="feed-item-left-layout">
      <div
        className="feed-item-picture"
        style={{ backgroundImage: 'url(' + mention.picture_url + ')' }}
        onClick={e => {
          window.open(mention.source_url, '_blank')
          e.stopPropagation()
        }
        }>
        {mention.source_type === 'twitter' ? <div className="feed-item-source-twitter"/> : null}
      </div>
      <div className="feed-item-blue-dot"/>
    </div>
    <div className="feed-item-right-layout">
      <div className="feed-item-short-name">@{mention.source_name}</div>
      <div className="feed-item-full-name">{mention.twitter_real_name}</div>
      <div className="feed-item-title" dangerouslySetInnerHTML={{ __html: highlightMentionFromText(mention.title, 'mention') }}/>
    </div>
  </div>
)

FeedItem.propTypes = {
  mention: React.PropTypes.object.isRequired
}

export default FeedItem
