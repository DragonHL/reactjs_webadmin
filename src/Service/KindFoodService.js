import firebase from '../FirebaseCofig/Firebase';

const db = firebase.ref ('/KINDFOOD');

const getAll = () => {
  return db;
};

const getAllFollowStatus = status => {
  return db.orderByChild ('status').equalTo (status);
};

const create = data => {
  return db.push (data);
};

const update = (key, data) => {
  return db.child (key).update (data);
};

const remove = key => {
  return db.child (key).update ({status: 1});
};

const updateQuantity = (key, quantity) => {
  return db.child (key).update ({quantity: quantity});
};

export default {
  getAll,
  create,
  update,
  remove,
  getAllFollowStatus,
  updateQuantity,
};
