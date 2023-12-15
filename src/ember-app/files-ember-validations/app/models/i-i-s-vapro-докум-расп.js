import {
  defineNamespace,
  defineProjections,
  Model as ДокумРаспMixin
} from '../mixins/regenerated/models/i-i-s-vapro-докум-расп';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДокумРаспMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
