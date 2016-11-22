import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Duck } from 'components'
import * as usersLikesActionCreators from 'redux/modules/usersLikes'

const { string, func, object, bool, number } = PropTypes

const DuckContainer = React.createClass({
  propTypes: {
    duckId: string.isRequired,
    duck: object.isRequired,
    numberOfLikes: number,
    isLiked: bool.isRequired,
    hideLikeCount: bool.isRequired,
    hideReplyBtn: bool.isRequired,
    handleDeleteLike: func.isRequired,
    addAndHandleLike: func.isRequired,
  },
  contextTypes: {
    router: object.isRequired,
  },
  getDefaultProps () {
    return {
      hideReplyBtn: false,
      hideLikeCount: true,
    }
  },
  goToProfile (e) {
    e.stopPropagation()
    this.context.router.push('/' + this.props.duck.uid)
  },
  handleClick (e) {
    e.stopPropagation()
    this.context.router.push('/duckDetail/' + this.props.duck.duckId)
  },
  render () {
    return (
      <Duck
        goToProfile={this.goToProfile}
        onClick={this.props.hideReplyBtn === true ? null : this.handleClick}
        {...this.props} />
    )
  }
})

function mapStateToProps ({ducks, likeCount, usersLikes}, props) {
  return {
    duck: ducks[props.duckId],
    hideLikeCount: props.hideLikeCount,
    hideReplyBtn: props.hideReplyBtn,
    numberOfLikes: likeCount[props.duckId],
    isLiked: usersLikes[props.duckId] === true,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(usersLikesActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DuckContainer)
