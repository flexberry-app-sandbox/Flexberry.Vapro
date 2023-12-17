import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДокумРаспMixin
} from '../mixins/regenerated/models/i-i-s-logistika123-докум-расп';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДокумРаспMixin, Validations, {
});

defineProjections(Model);

export default Model;
