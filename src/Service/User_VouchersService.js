import firebase from "../FirebaseCofig/Firebase";

const db = firebase.ref("/USERVOUCHERS");

const getAll = () => {
    return db;
}

const getAllFollowVoucherId= (voucherId) => {
    return db.orderByChild('voucherId').equalTo(voucherId);
}

const getAllFollowStatus = (status) => {
    return db.orderByChild('status').equalTo(status);
}

const getAllFollowCode = (code) => {
    return db.orderByChild('code').equalTo(code);
}

const create = (data) => {
    return db.push(data);
}

const update = (key, data) => {
    return db.child(key).update(data);
}

const remove = (key) => {
    return db.child(key).update({ status: 1 });
}

// const remove = (key) => {
//     return db.child(key).remove();
// }

export default {
    getAll,
    create,
    update,
    remove,
    getAllFollowVoucherId,
    getAllFollowStatus,
    getAllFollowCode
}