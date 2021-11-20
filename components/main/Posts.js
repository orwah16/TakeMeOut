import React, { Component } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Post from './Post'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postContainer: {
    justifyContent: 'space-between',
    marginBottom: 5,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 10,
    padding: 0,
    borderWidth: 0,
  },
})

class Posts extends Component {
  static propTypes = {
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        words: PropTypes.string,
        sentence: PropTypes.string,
        paragraph: PropTypes.string,
        image: PropTypes.string,
        user: PropTypes.shape({
          name: PropTypes.string,
          username: PropTypes.string,
          avatar: PropTypes.string,
          email: PropTypes.string,
        }),
      })
    ).isRequired,
  }

  static defaultProps = {
    containerStyle: {},
  }

  render() {
    return (
      <FlatList
        scrollEnabled={false}
        removeClippedSubviews={false}
        contentContainerStyle={[styles.container, this.props.containerStyle]}
        data={this.props.posts}
        renderItem={list => {
          return (
            <Post
              key={`post-${list.item.id}`}
              containerStyle={styles.postContainer}
              {...list.item}
            />
          )
        }}
      />
    )
  }
}

export default Posts