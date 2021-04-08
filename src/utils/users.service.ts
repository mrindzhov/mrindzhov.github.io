import { firebaseDatabase } from './firebase';

const db = firebaseDatabase.ref('users/');

export const service = {
  getAll: () => db,
  getByUserName: (/**userName:string */) => db.orderByChild('Identifier').equalTo('mrindzhov@gmail.com'),
  create: (data: any) => db.push(data),
  update: (key: string, data: Object) => db.child(key).update(data),
  remove: (key: string) => db.child(key).remove(),
  removeAll: () => db.remove(),
};
