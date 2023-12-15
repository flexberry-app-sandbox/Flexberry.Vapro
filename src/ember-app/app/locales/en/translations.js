import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
            'i-i-s-vapro-товары-l': {
              caption: 'Товары',
              title: 'Товары'
            }
          },
          'данные-об-организации': {
            caption: 'Данные об организации',
            title: 'Данные об организации',
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
