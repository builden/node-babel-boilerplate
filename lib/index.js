import { observable, autorun } from 'mobx';

class Store {
  @observable count = 0;
  @observable arr = [123];
}

const store = new Store();
export default store;

autorun(() => {
  console.log(store.arr.toJS());
});
store.arr.push(1123);
