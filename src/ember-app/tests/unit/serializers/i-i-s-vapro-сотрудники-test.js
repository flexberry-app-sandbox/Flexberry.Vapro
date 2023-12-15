import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-vapro-сотрудники', 'Unit | Serializer | i-i-s-vapro-сотрудники', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-vapro-сотрудники',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-vapro-ед-изм',
    'transform:i-i-s-vapro-состоян-заказа',
    'transform:i-i-s-vapro-уд-кл',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
