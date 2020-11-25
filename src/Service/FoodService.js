import firebase from "../FirebaseCofig/Firebase";

const db = firebase.ref("/Food");

const getAll = () => {
    return db;
}

const getAllFollowKindFood = () => {
    firebase.ref("Food").child("imageUrl")
     .on("value", 
     snapshot => { return console.log(snapshot.val()) },
     error => {
         console.log(error);
     },
    );
}

const create = (data) => {
    return db.push(data);
}

const update = (key, data) => {
    return db.child(key).update(data);
}

const remove = (key) => {
    return db.child(key).remove();
}

export default {
    getAll,
    create,
    update,
    remove,
    getAllFollowKindFood
}