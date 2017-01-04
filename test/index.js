import test from 'ava';
import mobx from 'mobx';
import store from '../lib/index';

test('mobx', t => {
  t.is(store.count, 0);
  store.count += 1;

  mobx.autorun(() => {
    t.is(store.count, 1);
  });
});

test('bar', async t => {
  const bar = Promise.resolve('bar');

  t.is(await bar, 'bar');
});

test('object-rest-spread', t => {
  const obj = {
    a: 0,
    b: 'b',
  };
  const newObj = {
    ...obj,
    c: 'c',
  };

  t.deepEqual(newObj, {
    a: 0,
    b: 'b',
    c: 'c',
  });
});
