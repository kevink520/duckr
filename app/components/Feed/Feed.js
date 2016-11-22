import React, { PropTypes } from 'react'
import { newDucksContainer, header } from './styles.css'
import { errorMsg } from 'sharedStyles/styles.css'
import { DuckContainer } from 'containers'

function newDucksAvailable () {
  return (
    <div className={newDucksContainer} onClick={handleClick}>
      {'New Ducks Available'}
    </div>
  )
}

Feed.propTypes = {
  duckIds: PropTypes.array.isRequired,
  newDucksAvailable: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  resetNewDucksAvailable: PropTypes.func.isRequired,
}

export default function Feed (props) {
  
  return props.isFetching === true
    ? <h1 className={header}>{'Fetching'}</h1>
    : <div>
        {props.newDucksAvailable ? <newDucksAvailable handleClick={props.resetNewDucksAvailable} /> : null }
        {props.duckIds.length === 0
          ? <p className={header}>{'This is unfortunate.'} <br /> {'It appears there are no ducks yet 😞'}</p>
          : null}
        {props.duckIds.map((id) => (
          <DuckContainer duckId={id} key={id} />
        ))}
        {props.error ? <p className={errorMsg}>{props.error}</p> : null}
      </div>
}
