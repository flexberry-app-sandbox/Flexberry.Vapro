import {
  defineNamespace,
  defineProjections,
  Model as СписокКонтейMixin
} from '../mixins/regenerated/models/i-i-s-logistika123-список-контей';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СписокКонтейMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
