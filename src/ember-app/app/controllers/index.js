import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.логистика.caption'),
          title: i18n.t('forms.application.sitemap.логистика.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.логистика.номенклатура.caption'),
            title: i18n.t('forms.application.sitemap.логистика.номенклатура.title'),
            children: [{
              link: 'i-i-s-vapro-товары-l',
              caption: i18n.t('forms.application.sitemap.логистика.номенклатура.i-i-s-vapro-товары-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.номенклатура.i-i-s-vapro-товары-l.title'),
              icon: 'tasks',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.caption'),
            title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.title'),
            children: [{
              link: 'i-i-s-vapro-организация-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-vapro-организация-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-vapro-организация-l.title'),
              icon: 'calendar',
              children: null
            }, {
              link: 'i-i-s-vapro-клиенты-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-vapro-клиенты-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-vapro-клиенты-l.title'),
              icon: 'suitcase',
              children: null
            }, {
              link: 'i-i-s-vapro-сотрудники-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-vapro-сотрудники-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-vapro-сотрудники-l.title'),
              icon: 'building',
              children: null
            }, {
              link: 'i-i-s-vapro-список-барж-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-vapro-список-барж-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-vapro-список-барж-l.title'),
              icon: 'chart line',
              children: null
            }, {
              link: 'i-i-s-vapro-список-контей-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-vapro-список-контей-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-vapro-список-контей-l.title'),
              icon: 'book',
              children: null
            }, {
              link: 'i-i-s-vapro-пункт-погрузки-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-vapro-пункт-погрузки-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-vapro-пункт-погрузки-l.title'),
              icon: 'tasks',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.логистика.документация.caption'),
            title: i18n.t('forms.application.sitemap.логистика.документация.title'),
            children: [{
              link: 'i-i-s-vapro-докум-поставки-l',
              caption: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-vapro-докум-поставки-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-vapro-докум-поставки-l.title'),
              icon: 'briefcase',
              children: null
            }, {
              link: 'i-i-s-vapro-докум-расп-l',
              caption: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-vapro-докум-расп-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-vapro-докум-расп-l.title'),
              icon: 'edit',
              children: null
            }, {
              link: 'i-i-s-vapro-докум-рез-пост-l',
              caption: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-vapro-докум-рез-пост-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-vapro-докум-рез-пост-l.title'),
              icon: 'tasks',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})