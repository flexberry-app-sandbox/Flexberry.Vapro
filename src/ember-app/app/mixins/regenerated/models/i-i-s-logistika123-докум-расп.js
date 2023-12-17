import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  номерДокРаспр: DS.attr('number'),
  докумПоставки: DS.belongsTo('i-i-s-logistika123-докум-поставки', { inverse: null, async: false }),
  пунктПогрузки: DS.belongsTo('i-i-s-logistika123-пункт-погрузки', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-logistika123-сотрудники', { inverse: null, async: false }),
  списокБарж: DS.belongsTo('i-i-s-logistika123-список-барж', { inverse: null, async: false }),
  списокКонтей: DS.belongsTo('i-i-s-logistika123-список-контей', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-logistika123-докум-расп.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДокРаспр: {
    descriptionKey: 'models.i-i-s-logistika123-докум-расп.validations.номерДокРаспр.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  докумПоставки: {
    descriptionKey: 'models.i-i-s-logistika123-докум-расп.validations.докумПоставки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  пунктПогрузки: {
    descriptionKey: 'models.i-i-s-logistika123-докум-расп.validations.пунктПогрузки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-logistika123-докум-расп.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  списокБарж: {
    descriptionKey: 'models.i-i-s-logistika123-докум-расп.validations.списокБарж.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  списокКонтей: {
    descriptionKey: 'models.i-i-s-logistika123-докум-расп.validations.списокКонтей.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокумРаспE', 'i-i-s-logistika123-докум-расп', {
    дата: attr('Дата', { index: 0 }),
    номерДокРаспр: attr('Номер документа распределения', { index: 1 }),
    докумПоставки: belongsTo('i-i-s-logistika123-докум-поставки', 'Номер документа поставки', {
      номДокПостав: attr('Номер документа распределения', { index: 3, hidden: true }),
      организация: belongsTo('i-i-s-logistika123-организация', '', {
        наимОрганиз: attr('Наименование организации', { index: 4 })
      }, { index: -1, hidden: true }),
      клиенты: belongsTo('i-i-s-logistika123-клиенты', '', {
        заказчик: attr('Заказчик', { index: 7 }),
        телефон: attr('Телефон', { index: 8 }),
        адресПоставки: attr('Адрес поставки', { index: 9 })
      }, { index: -1, hidden: true })
    }, { index: 2, displayMemberPath: 'номДокПостав' }),
    сотрудники: belongsTo('i-i-s-logistika123-сотрудники', 'Ответственный', {
      фИОСотруд: attr('ФИО сотрудника', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'фИОСотруд' }),
    пунктПогрузки: belongsTo('i-i-s-logistika123-пункт-погрузки', 'Адрес пункта погрузки', {
      адрес: attr('Адрес пункта погрузки', { index: 11, hidden: true })
    }, { index: 10, displayMemberPath: 'адрес' }),
    списокБарж: belongsTo('i-i-s-logistika123-список-барж', 'Номер баржи', {
      номерБаржи: attr('Номер баржи', { index: 13, hidden: true })
    }, { index: 12, displayMemberPath: 'номерБаржи' }),
    списокКонтей: belongsTo('i-i-s-logistika123-список-контей', 'Номер контейнера', {
      номерКонтей: attr('Номер контейнера', { index: 15, hidden: true })
    }, { index: 14, displayMemberPath: 'номерКонтей' })
  });

  modelClass.defineProjection('ДокумРаспL', 'i-i-s-logistika123-докум-расп', {
    дата: attr('Дата', { index: 0 }),
    номерДокРаспр: attr('Номер документа распределения по баржам', { index: 1 }),
    докумПоставки: belongsTo('i-i-s-logistika123-докум-поставки', 'Номер документа поставки', {
      номДокПостав: attr('Номер документа поставки', { index: 2 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-logistika123-сотрудники', 'Ответсвенный', {
      фИОСотруд: attr('Ответсвенный', { index: 3 })
    }, { index: -1, hidden: true }),
    пунктПогрузки: belongsTo('i-i-s-logistika123-пункт-погрузки', 'Адрес пункта погрузки', {
      адрес: attr('Адрес пункта погрузки', { index: 4 })
    }, { index: -1, hidden: true }),
    списокБарж: belongsTo('i-i-s-logistika123-список-барж', 'Номер баржи', {
      номерБаржи: attr('Номер баржи', { index: 5 })
    }, { index: -1, hidden: true }),
    списокКонтей: belongsTo('i-i-s-logistika123-список-контей', 'Номер контейнера', {
      номерКонтей: attr('Номер контейнера', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
