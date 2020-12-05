import firebase from '../FirebaseCofig/Firebase';

const db = firebase.ref ('/Bill');

const getAll = () => {
  return db;
};

const getAllCart = () => {
  return db.orderByChild("cart");
};

const updateStatus = (key, value) => {
  return db.child(key).update({status: value});
}


export default {
    getAll,
    getAllCart,
    updateStatus
}
