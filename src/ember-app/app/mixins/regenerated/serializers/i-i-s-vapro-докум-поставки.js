import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      клиенты: { serialize: 'odata-id', deserialize: 'records' },
      организация: { serialize: 'odata-id', deserialize: 'records' },
      сотрудники: { serialize: 'odata-id', deserialize: 'records' },
      инфОЗаказе: { serialize: false, deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
