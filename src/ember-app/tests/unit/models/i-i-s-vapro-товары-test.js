import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-vapro-товары', 'Unit | Model | i-i-s-vapro-товары', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-vapro-докум-поставки',
    'model:i-i-s-vapro-докум-расп',
    'model:i-i-s-vapro-докум-рез-пост',
    'model:i-i-s-vapro-инф-о-заказе',
    'model:i-i-s-vapro-клиенты',
    'model:i-i-s-vapro-организация',
    'model:i-i-s-vapro-пункт-погрузки',
    'model:i-i-s-vapro-сотрудники',
    'model:i-i-s-vapro-список-барж',
    'model:i-i-s-vapro-список-контей',
    'model:i-i-s-vapro-товары',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
