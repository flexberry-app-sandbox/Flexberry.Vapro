import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  номДокПостав: DS.attr('number'),
  клиенты: DS.belongsTo('i-i-s-logistika123-клиенты', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-logistika123-организация', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-logistika123-сотрудники', { inverse: null, async: false }),
  инфОЗаказе: DS.hasMany('i-i-s-logistika123-инф-о-заказе', { inverse: 'докумПоставки', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-logistika123-докум-поставки.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номДокПостав: {
    descriptionKey: 'models.i-i-s-logistika123-докум-поставки.validations.номДокПостав.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-logistika123-докум-поставки.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-logistika123-докум-поставки.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-logistika123-докум-поставки.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  инфОЗаказе: {
    descriptionKey: 'models.i-i-s-logistika123-докум-поставки.validations.инфОЗаказе.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокумПоставкиE', 'i-i-s-logistika123-докум-поставки', {
    дата: attr('Дата', { index: 0 }),
    номДокПостав: attr('Номер документа поставки', { index: 1 }),
    организация: belongsTo('i-i-s-logistika123-организация', 'Наименование организации', {
      наимОрганиз: attr('Наименование организации', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наимОрганиз' }),
    сотрудники: belongsTo('i-i-s-logistika123-сотрудники', 'Ответственный', {
      фИОСотруд: attr('Ответственный', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фИОСотруд' }),
    клиенты: belongsTo('i-i-s-logistika123-клиенты', 'Наименование заказчика', {
      заказчик: attr('Заказчик', { index: 7, hidden: true }),
      телефон: attr('Телефон', { index: 8 }),
      адресПоставки: attr('Адрес поставки', { index: 9 })
    }, { index: 6, displayMemberPath: 'заказчик' }),
    инфОЗаказе: hasMany('i-i-s-logistika123-инф-о-заказе', 'Информация о заказе', {
      товары: belongsTo('i-i-s-logistika123-товары', 'Товары', {
        наимТовара: attr('Наим товара', { index: 1, hidden: true }),
        единицыИзмер: attr('Единицы измерения', { index: 3 }),
        цена: attr('Цена товара', { index: 4 })
      }, { index: 0, displayMemberPath: 'наимТовара' }),
      количество: attr('Количество', { index: 2 })
    })
  });

  modelClass.defineProjection('ДокумПоставкиL', 'i-i-s-logistika123-докум-поставки', {
    дата: attr('Дата', { index: 0 }),
    номДокПостав: attr('Номер документа поставки', { index: 1 }),
    организация: belongsTo('i-i-s-logistika123-организация', 'Наименование организации', {
      наимОрганиз: attr('Наименование организации', { index: 2 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-logistika123-сотрудники', 'Ответственный', {
      фИОСотруд: attr('Ответственный', { index: 3 })
    }, { index: -1, hidden: true }),
    клиенты: belongsTo('i-i-s-logistika123-клиенты', 'Заказчик', {
      заказчик: attr('Заказчик', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
