import moment from 'moment'

 // take the time the post was created and then shows us the time relative to now
export default (postedTime) => {
  const relativeTime = moment(postedTime).fromNow()
  return relativeTime
}
