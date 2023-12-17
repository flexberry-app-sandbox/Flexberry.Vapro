import { Serializer as ИнфОЗаказеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-logistika123-инф-о-заказе';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ИнфОЗаказеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
