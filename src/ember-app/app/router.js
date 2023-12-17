import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-logistika123-докум-поставки-l');
  this.route('i-i-s-logistika123-докум-поставки-e',
  { path: 'i-i-s-logistika123-докум-поставки-e/:id' });
  this.route('i-i-s-logistika123-докум-поставки-e.new',
  { path: 'i-i-s-logistika123-докум-поставки-e/new' });
  this.route('i-i-s-logistika123-докум-расп-l');
  this.route('i-i-s-logistika123-докум-расп-e',
  { path: 'i-i-s-logistika123-докум-расп-e/:id' });
  this.route('i-i-s-logistika123-докум-расп-e.new',
  { path: 'i-i-s-logistika123-докум-расп-e/new' });
  this.route('i-i-s-logistika123-докум-рез-пост-l');
  this.route('i-i-s-logistika123-докум-рез-пост-e',
  { path: 'i-i-s-logistika123-докум-рез-пост-e/:id' });
  this.route('i-i-s-logistika123-докум-рез-пост-e.new',
  { path: 'i-i-s-logistika123-докум-рез-пост-e/new' });
  this.route('i-i-s-logistika123-клиенты-l');
  this.route('i-i-s-logistika123-клиенты-e',
  { path: 'i-i-s-logistika123-клиенты-e/:id' });
  this.route('i-i-s-logistika123-клиенты-e.new',
  { path: 'i-i-s-logistika123-клиенты-e/new' });
  this.route('i-i-s-logistika123-организация-l');
  this.route('i-i-s-logistika123-организация-e',
  { path: 'i-i-s-logistika123-организация-e/:id' });
  this.route('i-i-s-logistika123-организация-e.new',
  { path: 'i-i-s-logistika123-организация-e/new' });
  this.route('i-i-s-logistika123-пункт-погрузки-l');
  this.route('i-i-s-logistika123-пункт-погрузки-e',
  { path: 'i-i-s-logistika123-пункт-погрузки-e/:id' });
  this.route('i-i-s-logistika123-пункт-погрузки-e.new',
  { path: 'i-i-s-logistika123-пункт-погрузки-e/new' });
  this.route('i-i-s-logistika123-сотрудники-l');
  this.route('i-i-s-logistika123-сотрудники-e',
  { path: 'i-i-s-logistika123-сотрудники-e/:id' });
  this.route('i-i-s-logistika123-сотрудники-e.new',
  { path: 'i-i-s-logistika123-сотрудники-e/new' });
  this.route('i-i-s-logistika123-список-барж-l');
  this.route('i-i-s-logistika123-список-барж-e',
  { path: 'i-i-s-logistika123-список-барж-e/:id' });
  this.route('i-i-s-logistika123-список-барж-e.new',
  { path: 'i-i-s-logistika123-список-барж-e/new' });
  this.route('i-i-s-logistika123-список-контей-l');
  this.route('i-i-s-logistika123-список-контей-e',
  { path: 'i-i-s-logistika123-список-контей-e/:id' });
  this.route('i-i-s-logistika123-список-контей-e.new',
  { path: 'i-i-s-logistika123-список-контей-e/new' });
  this.route('i-i-s-logistika123-товары-l');
  this.route('i-i-s-logistika123-товары-e',
  { path: 'i-i-s-logistika123-товары-e/:id' });
  this.route('i-i-s-logistika123-товары-e.new',
  { path: 'i-i-s-logistika123-товары-e/new' });
  this.route('i-i-s-vapro-докум-поставки-l');
  this.route('i-i-s-vapro-докум-поставки-e',
  { path: 'i-i-s-vapro-докум-поставки-e/:id' });
  this.route('i-i-s-vapro-докум-поставки-e.new',
  { path: 'i-i-s-vapro-докум-поставки-e/new' });
  this.route('i-i-s-vapro-докум-расп-l');
  this.route('i-i-s-vapro-докум-расп-e',
  { path: 'i-i-s-vapro-докум-расп-e/:id' });
  this.route('i-i-s-vapro-докум-расп-e.new',
  { path: 'i-i-s-vapro-докум-расп-e/new' });
  this.route('i-i-s-vapro-докум-рез-пост-l');
  this.route('i-i-s-vapro-докум-рез-пост-e',
  { path: 'i-i-s-vapro-докум-рез-пост-e/:id' });
  this.route('i-i-s-vapro-докум-рез-пост-e.new',
  { path: 'i-i-s-vapro-докум-рез-пост-e/new' });
  this.route('i-i-s-vapro-клиенты-l');
  this.route('i-i-s-vapro-клиенты-e',
  { path: 'i-i-s-vapro-клиенты-e/:id' });
  this.route('i-i-s-vapro-клиенты-e.new',
  { path: 'i-i-s-vapro-клиенты-e/new' });
  this.route('i-i-s-vapro-организация-l');
  this.route('i-i-s-vapro-организация-e',
  { path: 'i-i-s-vapro-организация-e/:id' });
  this.route('i-i-s-vapro-организация-e.new',
  { path: 'i-i-s-vapro-организация-e/new' });
  this.route('i-i-s-vapro-пункт-погрузки-l');
  this.route('i-i-s-vapro-пункт-погрузки-e',
  { path: 'i-i-s-vapro-пункт-погрузки-e/:id' });
  this.route('i-i-s-vapro-пункт-погрузки-e.new',
  { path: 'i-i-s-vapro-пункт-погрузки-e/new' });
  this.route('i-i-s-vapro-сотрудники-l');
  this.route('i-i-s-vapro-сотрудники-e',
  { path: 'i-i-s-vapro-сотрудники-e/:id' });
  this.route('i-i-s-vapro-сотрудники-e.new',
  { path: 'i-i-s-vapro-сотрудники-e/new' });
  this.route('i-i-s-vapro-список-барж-l');
  this.route('i-i-s-vapro-список-барж-e',
  { path: 'i-i-s-vapro-список-барж-e/:id' });
  this.route('i-i-s-vapro-список-барж-e.new',
  { path: 'i-i-s-vapro-список-барж-e/new' });
  this.route('i-i-s-vapro-список-контей-l');
  this.route('i-i-s-vapro-список-контей-e',
  { path: 'i-i-s-vapro-список-контей-e/:id' });
  this.route('i-i-s-vapro-список-контей-e.new',
  { path: 'i-i-s-vapro-список-контей-e/new' });
  this.route('i-i-s-vapro-товары-l');
  this.route('i-i-s-vapro-товары-e',
  { path: 'i-i-s-vapro-товары-e/:id' });
  this.route('i-i-s-vapro-товары-e.new',
  { path: 'i-i-s-vapro-товары-e/new' });
});

export default Router;
