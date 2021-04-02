import { firebaseDatabase } from './App/firebase';

const db = firebaseDatabase.ref('users/');

const service = {
  getAll: () => db,
  getByUserName: (/**userName:string */) => db.orderByChild('Identifier').equalTo('mrindzhov@gmail.com'),
  create: (data: any) => db.push(data),
  update: (key: string, data: Object) => db.child(key).update(data),
  remove: (key: string) => db.child(key).remove(),
  removeAll: () => db.remove(),
};

export default service;
