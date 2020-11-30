import firebase from '../FirebaseCofig/Firebase';

const db = firebase.ref ('/Bill');

const getAll = () => {
  return db;
};


// const getTotalPriceFollowDate = (start, end) => {
//   return db.orderByChild('date').startAt(start).endAt(end);
// }
const getTotalPriceFollowDate = (start, end) => {
  return db.orderByChild('date').startAt(start).endAt(end);
}

export default {
    getAll,
    getTotalPriceFollowDate
}
