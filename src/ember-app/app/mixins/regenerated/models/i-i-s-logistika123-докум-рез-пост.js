import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  наличиеДеф: DS.attr('boolean'),
  статусЗаказа: DS.attr('i-i-s-logistika123-состоян-заказа'),
  удовлКл: DS.attr('i-i-s-logistika123-уд-кл'),
  докумРасп: DS.belongsTo('i-i-s-logistika123-докум-расп', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-logistika123-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-logistika123-докум-рез-пост.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  наличиеДеф: {
    descriptionKey: 'models.i-i-s-logistika123-докум-рез-пост.validations.наличиеДеф.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  статусЗаказа: {
    descriptionKey: 'models.i-i-s-logistika123-докум-рез-пост.validations.статусЗаказа.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  удовлКл: {
    descriptionKey: 'models.i-i-s-logistika123-докум-рез-пост.validations.удовлКл.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  докумРасп: {
    descriptionKey: 'models.i-i-s-logistika123-докум-рез-пост.validations.докумРасп.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-logistika123-докум-рез-пост.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокумРезПостE', 'i-i-s-logistika123-докум-рез-пост', {
    дата: attr('Дата', { index: 0 }),
    докумРасп: belongsTo('i-i-s-logistika123-докум-расп', 'Номер документа распределения по баржам', {
      номерДокРаспр: attr('Номер документа распределения по баржам', { index: 2, hidden: true }),
      докумПоставки: belongsTo('i-i-s-logistika123-докум-поставки', '', {
        организация: belongsTo('i-i-s-logistika123-организация', '', {
          наимОрганиз: attr('Наименование организации', { index: 3 })
        }, { index: -1, hidden: true }),
        клиенты: belongsTo('i-i-s-logistika123-клиенты', '', {
          заказчик: attr('Наименование заказчика', { index: 6 }),
          телефон: attr('Телефон', { index: 7 }),
          адресПоставки: attr('Адрес поставки', { index: 8 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: 1, displayMemberPath: 'номерДокРаспр' }),
    сотрудники: belongsTo('i-i-s-logistika123-сотрудники', 'Ответственный', {
      фИОСотруд: attr('Ответственный', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фИОСотруд' }),
    статусЗаказа: attr('Статус заказа', { index: 9 }),
    наличиеДеф: attr('Наличие дефектов', { index: 10 }),
    удовлКл: attr('Удовлетворенность клиента', { index: 11 })
  });

  modelClass.defineProjection('ДокумРезПостL', 'i-i-s-logistika123-докум-рез-пост', {
    дата: attr('Дата', { index: 0 }),
    докумРасп: belongsTo('i-i-s-logistika123-докум-расп', 'Номер документа распределения по баржам', {
      номерДокРаспр: attr('Номер документа распределения по баржам', { index: 1 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-logistika123-сотрудники', 'Ответственный', {
      фИОСотруд: attr('Ответственный', { index: 2 })
    }, { index: -1, hidden: true }),
    статусЗаказа: attr('Статус заказа', { index: 3 }),
    наличиеДеф: attr('Наличие дефектов', { index: 4 }),
    удовлКл: attr('Удовлетворенность клиента', { index: 5 })
  });
};
