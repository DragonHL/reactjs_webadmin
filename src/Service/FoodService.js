import firebase from "../FirebaseCofig/Firebase";

const db = firebase.ref("/Food");

const getAll = () => {
    console.log(db)
    return db;
}

const getAllFollowKindFood = (name) => {
    return db.orderByChild('nameKindFood').equalTo(name);
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