import firebase from '../FirebaseCofig/Firebase';

const db = firebase.ref ('/food');

const getAll = () => {
  return db;
};

const getAllFollowKindFood = kindFoodID => {
  return db.orderByChild ('kindFoodID').equalTo (kindFoodID);
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

export default {
  getAll,
  create,
  update,
  remove,
  getAllFollowKindFood,
};
