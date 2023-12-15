import { Serializer as ДокумРаспSerializer } from
  '../mixins/regenerated/serializers/i-i-s-vapro-докум-расп';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДокумРаспSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
