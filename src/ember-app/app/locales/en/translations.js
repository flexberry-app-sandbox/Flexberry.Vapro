import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISLogistika123ДокумПоставкиLForm from './forms/i-i-s-logistika123-докум-поставки-l';
import IISLogistika123ДокумРаспLForm from './forms/i-i-s-logistika123-докум-расп-l';
import IISLogistika123ДокумРезПостLForm from './forms/i-i-s-logistika123-докум-рез-пост-l';
import IISLogistika123КлиентыLForm from './forms/i-i-s-logistika123-клиенты-l';
import IISLogistika123ОрганизацияLForm from './forms/i-i-s-logistika123-организация-l';
import IISLogistika123ПунктПогрузкиLForm from './forms/i-i-s-logistika123-пункт-погрузки-l';
import IISLogistika123СотрудникиLForm from './forms/i-i-s-logistika123-сотрудники-l';
import IISLogistika123СписокБаржLForm from './forms/i-i-s-logistika123-список-барж-l';
import IISLogistika123СписокКонтейLForm from './forms/i-i-s-logistika123-список-контей-l';
import IISLogistika123ТоварыLForm from './forms/i-i-s-logistika123-товары-l';
import IISVaproДокумПоставкиLForm from './forms/i-i-s-vapro-докум-поставки-l';
import IISVaproДокумРаспLForm from './forms/i-i-s-vapro-докум-расп-l';
import IISVaproДокумРезПостLForm from './forms/i-i-s-vapro-докум-рез-пост-l';
import IISVaproКлиентыLForm from './forms/i-i-s-vapro-клиенты-l';
import IISVaproОрганизацияLForm from './forms/i-i-s-vapro-организация-l';
import IISVaproПунктПогрузкиLForm from './forms/i-i-s-vapro-пункт-погрузки-l';
import IISVaproСотрудникиLForm from './forms/i-i-s-vapro-сотрудники-l';
import IISVaproСписокБаржLForm from './forms/i-i-s-vapro-список-барж-l';
import IISVaproСписокКонтейLForm from './forms/i-i-s-vapro-список-контей-l';
import IISVaproТоварыLForm from './forms/i-i-s-vapro-товары-l';
import IISLogistika123ДокумПоставкиEForm from './forms/i-i-s-logistika123-докум-поставки-e';
import IISLogistika123ДокумРаспEForm from './forms/i-i-s-logistika123-докум-расп-e';
import IISLogistika123ДокумРезПостEForm from './forms/i-i-s-logistika123-докум-рез-пост-e';
import IISLogistika123КлиентыEForm from './forms/i-i-s-logistika123-клиенты-e';
import IISLogistika123ОрганизацияEForm from './forms/i-i-s-logistika123-организация-e';
import IISLogistika123ПунктПогрузкиEForm from './forms/i-i-s-logistika123-пункт-погрузки-e';
import IISLogistika123СотрудникиEForm from './forms/i-i-s-logistika123-сотрудники-e';
import IISLogistika123СписокБаржEForm from './forms/i-i-s-logistika123-список-барж-e';
import IISLogistika123СписокКонтейEForm from './forms/i-i-s-logistika123-список-контей-e';
import IISLogistika123ТоварыEForm from './forms/i-i-s-logistika123-товары-e';
import IISVaproДокумПоставкиEForm from './forms/i-i-s-vapro-докум-поставки-e';
import IISVaproДокумРаспEForm from './forms/i-i-s-vapro-докум-расп-e';
import IISVaproДокумРезПостEForm from './forms/i-i-s-vapro-докум-рез-пост-e';
import IISVaproКлиентыEForm from './forms/i-i-s-vapro-клиенты-e';
import IISVaproОрганизацияEForm from './forms/i-i-s-vapro-организация-e';
import IISVaproПунктПогрузкиEForm from './forms/i-i-s-vapro-пункт-погрузки-e';
import IISVaproСотрудникиEForm from './forms/i-i-s-vapro-сотрудники-e';
import IISVaproСписокБаржEForm from './forms/i-i-s-vapro-список-барж-e';
import IISVaproСписокКонтейEForm from './forms/i-i-s-vapro-список-контей-e';
import IISVaproТоварыEForm from './forms/i-i-s-vapro-товары-e';
import IISLogistika123ДокумПоставкиModel from './models/i-i-s-logistika123-докум-поставки';
import IISLogistika123ДокумРаспModel from './models/i-i-s-logistika123-докум-расп';
import IISLogistika123ДокумРезПостModel from './models/i-i-s-logistika123-докум-рез-пост';
import IISLogistika123ИнфОЗаказеModel from './models/i-i-s-logistika123-инф-о-заказе';
import IISLogistika123КлиентыModel from './models/i-i-s-logistika123-клиенты';
import IISLogistika123ОрганизацияModel from './models/i-i-s-logistika123-организация';
import IISLogistika123ПунктПогрузкиModel from './models/i-i-s-logistika123-пункт-погрузки';
import IISLogistika123СотрудникиModel from './models/i-i-s-logistika123-сотрудники';
import IISLogistika123СписокБаржModel from './models/i-i-s-logistika123-список-барж';
import IISLogistika123СписокКонтейModel from './models/i-i-s-logistika123-список-контей';
import IISLogistika123ТоварыModel from './models/i-i-s-logistika123-товары';
import IISVaproДокумПоставкиModel from './models/i-i-s-vapro-докум-поставки';
import IISVaproДокумРаспModel from './models/i-i-s-vapro-докум-расп';
import IISVaproДокумРезПостModel from './models/i-i-s-vapro-докум-рез-пост';
import IISVaproИнфОЗаказеModel from './models/i-i-s-vapro-инф-о-заказе';
import IISVaproКлиентыModel from './models/i-i-s-vapro-клиенты';
import IISVaproОрганизацияModel from './models/i-i-s-vapro-организация';
import IISVaproПунктПогрузкиModel from './models/i-i-s-vapro-пункт-погрузки';
import IISVaproСотрудникиModel from './models/i-i-s-vapro-сотрудники';
import IISVaproСписокБаржModel from './models/i-i-s-vapro-список-барж';
import IISVaproСписокКонтейModel from './models/i-i-s-vapro-список-контей';
import IISVaproТоварыModel from './models/i-i-s-vapro-товары';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-logistika123-докум-поставки': IISLogistika123ДокумПоставкиModel,
    'i-i-s-logistika123-докум-расп': IISLogistika123ДокумРаспModel,
    'i-i-s-logistika123-докум-рез-пост': IISLogistika123ДокумРезПостModel,
    'i-i-s-logistika123-инф-о-заказе': IISLogistika123ИнфОЗаказеModel,
    'i-i-s-logistika123-клиенты': IISLogistika123КлиентыModel,
    'i-i-s-logistika123-организация': IISLogistika123ОрганизацияModel,
    'i-i-s-logistika123-пункт-погрузки': IISLogistika123ПунктПогрузкиModel,
    'i-i-s-logistika123-сотрудники': IISLogistika123СотрудникиModel,
    'i-i-s-logistika123-список-барж': IISLogistika123СписокБаржModel,
    'i-i-s-logistika123-список-контей': IISLogistika123СписокКонтейModel,
    'i-i-s-logistika123-товары': IISLogistika123ТоварыModel,
    'i-i-s-vapro-докум-поставки': IISVaproДокумПоставкиModel,
    'i-i-s-vapro-докум-расп': IISVaproДокумРаспModel,
    'i-i-s-vapro-докум-рез-пост': IISVaproДокумРезПостModel,
    'i-i-s-vapro-инф-о-заказе': IISVaproИнфОЗаказеModel,
    'i-i-s-vapro-клиенты': IISVaproКлиентыModel,
    'i-i-s-vapro-организация': IISVaproОрганизацияModel,
    'i-i-s-vapro-пункт-погрузки': IISVaproПунктПогрузкиModel,
    'i-i-s-vapro-сотрудники': IISVaproСотрудникиModel,
    'i-i-s-vapro-список-барж': IISVaproСписокБаржModel,
    'i-i-s-vapro-список-контей': IISVaproСписокКонтейModel,
    'i-i-s-vapro-товары': IISVaproТоварыModel
  },

  'application-name': 'Логистика',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Логистика',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Логистика',
          title: 'Логистика'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        логистика: {
          caption: 'Логистика',
          title: 'Логистика',
          номенклатура: {
            caption: 'Номенклатура',
            title: 'Номенклатура',
            'i-i-s-logistika123-товары-l': {
              caption: 'Товары',
              title: 'Товары'
            },
            'i-i-s-vapro-товары-l': {
              caption: 'Товары',
              title: 'Товары'
            }
          },
          'данные-об-организации': {
            caption: 'Данные об организации',
            title: 'Данные об организации',
            'i-i-s-logistika123-организация-l': {
              caption: 'Организация',
              title: 'Организация'
            },
            'i-i-s-logistika123-клиенты-l': {
              caption: 'Клиенты',
              title: 'Клиенты'
            },
            'i-i-s-logistika123-сотрудники-l': {
              caption: 'Сотрудники',
              title: 'Сотрудники'
            },
            'i-i-s-logistika123-список-барж-l': {
              caption: 'Список барж',
              title: 'Список барж'
            },
            'i-i-s-logistika123-список-контей-l': {
              caption: 'Список контейнеров',
              title: 'Список контей'
            },
            'i-i-s-logistika123-пункт-погрузки-l': {
              caption: 'Пункт погрузки',
              title: 'Пункт погрузки'
            },
            'i-i-s-vapro-организация-l': {
              caption: 'Организация',
              title: 'Организация'
            },
            'i-i-s-vapro-клиенты-l': {
              caption: 'Клиенты',
              title: 'Клиенты'
            },
            'i-i-s-vapro-сотрудники-l': {
              caption: 'Сотрудники',
              title: 'Сотрудники'
            },
            'i-i-s-vapro-список-барж-l': {
              caption: 'Список барж',
              title: 'Список барж'
            },
            'i-i-s-vapro-список-контей-l': {
              caption: 'Список контейнеров',
              title: 'Список контей'
            },
            'i-i-s-vapro-пункт-погрузки-l': {
              caption: 'Пункт погрузки',
              title: 'Пункт погрузки'
            }
          },
          документация: {
            caption: 'Документация',
            title: 'Документация',
            'i-i-s-logistika123-докум-поставки-l': {
              caption: 'Документ поставки',
              title: 'Докум поставки'
            },
            'i-i-s-logistika123-докум-расп-l': {
              caption: 'Документ распределения по баржам',
              title: 'Докум расп'
            },
            'i-i-s-logistika123-докум-рез-пост-l': {
              caption: 'Документ результатов поставки',
              title: 'Докум рез пост'
            },
            'i-i-s-vapro-докум-поставки-l': {
              caption: 'Документ поставки',
              title: 'Докум поставки'
            },
            'i-i-s-vapro-докум-расп-l': {
              caption: 'Документ распределения по баржам',
              title: 'Докум расп'
            },
            'i-i-s-vapro-докум-рез-пост-l': {
              caption: 'Документ результатов поставки',
              title: 'Докум рез пост'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-logistika123-докум-поставки-l': IISLogistika123ДокумПоставкиLForm,
    'i-i-s-logistika123-докум-расп-l': IISLogistika123ДокумРаспLForm,
    'i-i-s-logistika123-докум-рез-пост-l': IISLogistika123ДокумРезПостLForm,
    'i-i-s-logistika123-клиенты-l': IISLogistika123КлиентыLForm,
    'i-i-s-logistika123-организация-l': IISLogistika123ОрганизацияLForm,
    'i-i-s-logistika123-пункт-погрузки-l': IISLogistika123ПунктПогрузкиLForm,
    'i-i-s-logistika123-сотрудники-l': IISLogistika123СотрудникиLForm,
    'i-i-s-logistika123-список-барж-l': IISLogistika123СписокБаржLForm,
    'i-i-s-logistika123-список-контей-l': IISLogistika123СписокКонтейLForm,
    'i-i-s-logistika123-товары-l': IISLogistika123ТоварыLForm,
    'i-i-s-vapro-докум-поставки-l': IISVaproДокумПоставкиLForm,
    'i-i-s-vapro-докум-расп-l': IISVaproДокумРаспLForm,
    'i-i-s-vapro-докум-рез-пост-l': IISVaproДокумРезПостLForm,
    'i-i-s-vapro-клиенты-l': IISVaproКлиентыLForm,
    'i-i-s-vapro-организация-l': IISVaproОрганизацияLForm,
    'i-i-s-vapro-пункт-погрузки-l': IISVaproПунктПогрузкиLForm,
    'i-i-s-vapro-сотрудники-l': IISVaproСотрудникиLForm,
    'i-i-s-vapro-список-барж-l': IISVaproСписокБаржLForm,
    'i-i-s-vapro-список-контей-l': IISVaproСписокКонтейLForm,
    'i-i-s-vapro-товары-l': IISVaproТоварыLForm,
    'i-i-s-logistika123-докум-поставки-e': IISLogistika123ДокумПоставкиEForm,
    'i-i-s-logistika123-докум-расп-e': IISLogistika123ДокумРаспEForm,
    'i-i-s-logistika123-докум-рез-пост-e': IISLogistika123ДокумРезПостEForm,
    'i-i-s-logistika123-клиенты-e': IISLogistika123КлиентыEForm,
    'i-i-s-logistika123-организация-e': IISLogistika123ОрганизацияEForm,
    'i-i-s-logistika123-пункт-погрузки-e': IISLogistika123ПунктПогрузкиEForm,
    'i-i-s-logistika123-сотрудники-e': IISLogistika123СотрудникиEForm,
    'i-i-s-logistika123-список-барж-e': IISLogistika123СписокБаржEForm,
    'i-i-s-logistika123-список-контей-e': IISLogistika123СписокКонтейEForm,
    'i-i-s-logistika123-товары-e': IISLogistika123ТоварыEForm,
    'i-i-s-vapro-докум-поставки-e': IISVaproДокумПоставкиEForm,
    'i-i-s-vapro-докум-расп-e': IISVaproДокумРаспEForm,
    'i-i-s-vapro-докум-рез-пост-e': IISVaproДокумРезПостEForm,
    'i-i-s-vapro-клиенты-e': IISVaproКлиентыEForm,
    'i-i-s-vapro-организация-e': IISVaproОрганизацияEForm,
    'i-i-s-vapro-пункт-погрузки-e': IISVaproПунктПогрузкиEForm,
    'i-i-s-vapro-сотрудники-e': IISVaproСотрудникиEForm,
    'i-i-s-vapro-список-барж-e': IISVaproСписокБаржEForm,
    'i-i-s-vapro-список-контей-e': IISVaproСписокКонтейEForm,
    'i-i-s-vapro-товары-e': IISVaproТоварыEForm
  },

});

export default translations;
