var state = {
  ducks: {
    dxrhudsx: {
      uid: 'tylermcginnis',
      name: 'Tyler McGinnis',
      avatar: 'fb.com/tyler',
      text: 'First duck!',
      duckId: '-dxrhudsx',
    },
    txdaqbhs: {
      uid: 'tylermcginnis',
      name: 'Tyler McGinnis',
      avatar: 'fb.com/tyler',
      text: 'Second duck!',
      duckId: '-txdaqbhs',
    },
  },
  usersDucks: {
    tylermcginnis: [dxrhudsx, txdaqbhs],
  },
}

{
  users: {
    isAuthed,
    isFetching,
    error,
    authedId,
    [uid]: {
      lastUpdated,
      info: {
        name,
        uid,
        avatar,
      }
    }
  },
  modal: {
    duck,
    isOpen,
  },
  ducks: {
    isFetching,
    error,
    [duckId]: {
      lastUpdated,
      info: {
        avatar,
        duckId,
        name,
        text,
        timestamp,
        uid,
      }
    }
  },
  usersDucks: {
    isFetching,
    error,
    [uid]: {
      lastUpdated,
      duckIds: [duckId, duckId, duckId],
    },
  },
  likeCount: {
    [duckId]: 0,
  },
  usersLikes: {
    [duckId]: true,
  }
  replies: {
    isFetching,
    error,
    [duckId]: {
      lastUpdated,
      replies: {
        [replyId]: {
          name,
          reply,
          uid,
          timestamp,
          avatar,
          replyId,
        },
      },
    },
  },
  listeners: {
    [listenersId]: true,
  },
  feed: {
    isFetching,
    error,
    newDucksAvailable,
    duckIdsToAdd: [duckId, duckId],
    duckIds: [duckId, duckId],
  },
}