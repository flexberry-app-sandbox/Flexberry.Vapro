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
              link: 'i-i-s-logistika123-товары-l',
              caption: i18n.t('forms.application.sitemap.логистика.номенклатура.i-i-s-logistika123-товары-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.номенклатура.i-i-s-logistika123-товары-l.title'),
              icon: 'tags',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.caption'),
            title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.title'),
            children: [{
              link: 'i-i-s-logistika123-организация-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-logistika123-организация-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-logistika123-организация-l.title'),
              icon: 'file',
              children: null
            }, {
              link: 'i-i-s-logistika123-клиенты-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-logistika123-клиенты-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-logistika123-клиенты-l.title'),
              icon: 'file',
              children: null
            }, {
              link: 'i-i-s-logistika123-сотрудники-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-logistika123-сотрудники-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-logistika123-сотрудники-l.title'),
              icon: 'briefcase',
              children: null
            }, {
              link: 'i-i-s-logistika123-список-барж-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-logistika123-список-барж-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-logistika123-список-барж-l.title'),
              icon: 'archive',
              children: null
            }, {
              link: 'i-i-s-logistika123-список-контей-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-logistika123-список-контей-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-logistika123-список-контей-l.title'),
              icon: 'chart bar',
              children: null
            }, {
              link: 'i-i-s-logistika123-пункт-погрузки-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-logistika123-пункт-погрузки-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-logistika123-пункт-погрузки-l.title'),
              icon: 'briefcase',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.логистика.документация.caption'),
            title: i18n.t('forms.application.sitemap.логистика.документация.title'),
            children: [{
              link: 'i-i-s-logistika123-докум-поставки-l',
              caption: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-logistika123-докум-поставки-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-logistika123-докум-поставки-l.title'),
              icon: 'calendar',
              children: null
            }, {
              link: 'i-i-s-logistika123-докум-расп-l',
              caption: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-logistika123-докум-расп-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-logistika123-докум-расп-l.title'),
              icon: 'tags',
              children: null
            }, {
              link: 'i-i-s-logistika123-докум-рез-пост-l',
              caption: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-logistika123-докум-рез-пост-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-logistika123-докум-рез-пост-l.title'),
              children: null
            }]
          }]
        }
      ]
    };
  }),
})