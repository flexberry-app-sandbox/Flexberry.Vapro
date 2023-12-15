import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import УдКлEnum from '../enums/i-i-s-vapro-уд-кл';

export default FlexberryEnum.extend({
  enum: УдКлEnum,
  sourceType: 'IIS.Vapro.УдКл'
});
