package Logistika123.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Logistika123.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ДокумРезПост
 */
@Entity(name = "IISLogistika123ДокумРезПост")
@Table(schema = "public", name = "ДокумРезПост")
public class DokumRezPost {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "СтатусЗаказа")
    private String статусзаказа;

    @Column(name = "НаличиеДеф")
    private Boolean наличиедеф;

    @Column(name = "УдовлКл")
    private String удовлкл;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DokumRasp")
    @Convert("DokumRasp")
    @Column(name = "ДокумРасп", length = 16, unique = true, nullable = false)
    private UUID _dokumraspid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DokumRasp", insertable = false, updatable = false)
    private DokumRasp dokumrasp;


    public DokumRezPost() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public String getСтатусЗаказа() {
      return статусзаказа;
    }

    public void setСтатусЗаказа(String статусзаказа) {
      this.статусзаказа = статусзаказа;
    }

    public Boolean getНаличиеДеф() {
      return наличиедеф;
    }

    public void setНаличиеДеф(Boolean наличиедеф) {
      this.наличиедеф = наличиедеф;
    }

    public String getУдовлКл() {
      return удовлкл;
    }

    public void setУдовлКл(String удовлкл) {
      this.удовлкл = удовлкл;
    }


}