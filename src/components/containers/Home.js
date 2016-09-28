import { connect } from 'react-redux'
import { getMentionsByAccount } from '../../actionCreators/mentions'

import Feed from '../presentationals/Feed/Feed'

const mapStateToProps = (state) => {
  return {
    mentions: state.mentions
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleRetrieveMentions: () => dispatch(getMentionsByAccount('661072_53ca2jsh01c88c4wwkc0wockckk0w4440o4o0w8wkkgco4o888', '1214654'))
  }
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed)

export default Home
