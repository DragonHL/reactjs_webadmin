import firebase from '../FirebaseCofig/Firebase';

const db = firebase.ref ('/Bill');

const getAll = () => {
  return db;
};


const getAllCar = () => {
  return db.child('cart').orderByChild('product');
}

export default {
    getAll,
    getAllCar
}
