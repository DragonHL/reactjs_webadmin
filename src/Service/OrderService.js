import firebase from '../FirebaseCofig/Firebase';

const db = firebase.ref ('/Bill');

const getAll = () => {
  return db;
};

const getAllCart = () => {
  return db.orderByChild("cart");
};

const getBillFollowBillId = (billid) => {
  return db.orderByChild("billid").equalTo(billid);

};

const updateStatus = (key, value) => {
  return db.child(key).update({status: value});
}


export default {
    getAll,
    getAllCart,
    updateStatus,
    getBillFollowBillId
}
