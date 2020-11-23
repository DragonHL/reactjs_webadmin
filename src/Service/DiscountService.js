import firebase from "../FirebaseCofig/Firebase";

const db = firebase.ref("/Discount");

const getAll = () => {
    return db;
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
    remove
}