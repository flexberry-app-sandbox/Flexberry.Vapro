﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Logistika123
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Докум рез пост.
    /// </summary>
    // *** Start programmer edit section *** (ДокумРезПост CustomAttributes)

    // *** End programmer edit section *** (ДокумРезПост CustomAttributes)
    [AutoAltered()]
    [Caption("Документ результатов поставки")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ДокумРезПостE", new string[] {
            "Дата as \'Дата\'",
            "ДокумРасп as \'Номер документа распределения по баржам\'",
            "ДокумРасп.НомерДокРаспр as \'Номер документа распределения по баржам\'",
            "ДокумРасп.ДокумПоставки.Организация.НаимОрганиз as \'Наименование организации\'",
            "Сотрудники as \'Ответственный\'",
            "Сотрудники.ФИОСотруд as \'Ответственный\'",
            "ДокумРасп.ДокумПоставки.Клиенты.Заказчик as \'Наименование заказчика\'",
            "ДокумРасп.ДокумПоставки.Клиенты.Телефон as \'Телефон\'",
            "ДокумРасп.ДокумПоставки.Клиенты.АдресПоставки as \'Адрес поставки\'",
            "СтатусЗаказа as \'Статус заказа\'",
            "НаличиеДеф as \'Наличие дефектов\'",
            "УдовлКл as \'Удовлетворенность клиента\'"}, Hidden=new string[] {
            "ДокумРасп.НомерДокРаспр",
            "Сотрудники.ФИОСотруд"})]
    [MasterViewDefineAttribute("ДокумРезПостE", "ДокумРасп", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "НомерДокРаспр")]
    [MasterViewDefineAttribute("ДокумРезПостE", "Сотрудники", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИОСотруд")]
    [View("ДокумРезПостL", new string[] {
            "Дата as \'Дата\'",
            "ДокумРасп.НомерДокРаспр as \'Номер документа распределения по баржам\'",
            "Сотрудники.ФИОСотруд as \'Ответственный\'",
            "СтатусЗаказа as \'Статус заказа\'",
            "НаличиеДеф as \'Наличие дефектов\'",
            "УдовлКл as \'Удовлетворенность клиента\'"})]
    public class ДокумРезПост : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата = System.DateTime.Now;
        
        private IIS.Logistika123.СостоянЗаказа fСтатусЗаказа;
        
        private bool fНаличиеДеф;
        
        private IIS.Logistika123.УдКл fУдовлКл;
        
        private IIS.Logistika123.Сотрудники fСотрудники;
        
        private IIS.Logistika123.ДокумРасп fДокумРасп;
        
        // *** Start programmer edit section *** (ДокумРезПост CustomMembers)

        // *** End programmer edit section *** (ДокумРезПост CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (ДокумРезПост.Дата CustomAttributes)

        // *** End programmer edit section *** (ДокумРезПост.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (ДокумРезПост.Дата Get start)

                // *** End programmer edit section *** (ДокумРезПост.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (ДокумРезПост.Дата Get end)

                // *** End programmer edit section *** (ДокумРезПост.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокумРезПост.Дата Set start)

                // *** End programmer edit section *** (ДокумРезПост.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (ДокумРезПост.Дата Set end)

                // *** End programmer edit section *** (ДокумРезПост.Дата Set end)
            }
        }
        
        /// <summary>
        /// НаличиеДеф.
        /// </summary>
        // *** Start programmer edit section *** (ДокумРезПост.НаличиеДеф CustomAttributes)

        // *** End programmer edit section *** (ДокумРезПост.НаличиеДеф CustomAttributes)
        public virtual bool НаличиеДеф
        {
            get
            {
                // *** Start programmer edit section *** (ДокумРезПост.НаличиеДеф Get start)

                // *** End programmer edit section *** (ДокумРезПост.НаличиеДеф Get start)
                bool result = this.fНаличиеДеф;
                // *** Start programmer edit section *** (ДокумРезПост.НаличиеДеф Get end)

                // *** End programmer edit section *** (ДокумРезПост.НаличиеДеф Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокумРезПост.НаличиеДеф Set start)

                // *** End programmer edit section *** (ДокумРезПост.НаличиеДеф Set start)
                this.fНаличиеДеф = value;
                // *** Start programmer edit section *** (ДокумРезПост.НаличиеДеф Set end)

                // *** End programmer edit section *** (ДокумРезПост.НаличиеДеф Set end)
            }
        }
        
        /// <summary>
        /// СтатусЗаказа.
        /// </summary>
        // *** Start programmer edit section *** (ДокумРезПост.СтатусЗаказа CustomAttributes)

        // *** End programmer edit section *** (ДокумРезПост.СтатусЗаказа CustomAttributes)
        public virtual IIS.Logistika123.СостоянЗаказа СтатусЗаказа
        {
            get
            {
                // *** Start programmer edit section *** (ДокумРезПост.СтатусЗаказа Get start)

                // *** End programmer edit section *** (ДокумРезПост.СтатусЗаказа Get start)
                IIS.Logistika123.СостоянЗаказа result = this.fСтатусЗаказа;
                // *** Start programmer edit section *** (ДокумРезПост.СтатусЗаказа Get end)

                // *** End programmer edit section *** (ДокумРезПост.СтатусЗаказа Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокумРезПост.СтатусЗаказа Set start)

                // *** End programmer edit section *** (ДокумРезПост.СтатусЗаказа Set start)
                this.fСтатусЗаказа = value;
                // *** Start programmer edit section *** (ДокумРезПост.СтатусЗаказа Set end)

                // *** End programmer edit section *** (ДокумРезПост.СтатусЗаказа Set end)
            }
        }
        
        /// <summary>
        /// УдовлКл.
        /// </summary>
        // *** Start programmer edit section *** (ДокумРезПост.УдовлКл CustomAttributes)

        // *** End programmer edit section *** (ДокумРезПост.УдовлКл CustomAttributes)
        public virtual IIS.Logistika123.УдКл УдовлКл
        {
            get
            {
                // *** Start programmer edit section *** (ДокумРезПост.УдовлКл Get start)

                // *** End programmer edit section *** (ДокумРезПост.УдовлКл Get start)
                IIS.Logistika123.УдКл result = this.fУдовлКл;
                // *** Start programmer edit section *** (ДокумРезПост.УдовлКл Get end)

                // *** End programmer edit section *** (ДокумРезПост.УдовлКл Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокумРезПост.УдовлКл Set start)

                // *** End programmer edit section *** (ДокумРезПост.УдовлКл Set start)
                this.fУдовлКл = value;
                // *** Start programmer edit section *** (ДокумРезПост.УдовлКл Set end)

                // *** End programmer edit section *** (ДокумРезПост.УдовлКл Set end)
            }
        }
        
        /// <summary>
        /// Докум рез пост.
        /// </summary>
        // *** Start programmer edit section *** (ДокумРезПост.ДокумРасп CustomAttributes)

        // *** End programmer edit section *** (ДокумРезПост.ДокумРасп CustomAttributes)
        [PropertyStorage(new string[] {
                "ДокумРасп"})]
        [NotNull()]
        public virtual IIS.Logistika123.ДокумРасп ДокумРасп
        {
            get
            {
                // *** Start programmer edit section *** (ДокумРезПост.ДокумРасп Get start)

                // *** End programmer edit section *** (ДокумРезПост.ДокумРасп Get start)
                IIS.Logistika123.ДокумРасп result = this.fДокумРасп;
                // *** Start programmer edit section *** (ДокумРезПост.ДокумРасп Get end)

                // *** End programmer edit section *** (ДокумРезПост.ДокумРасп Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокумРезПост.ДокумРасп Set start)

                // *** End programmer edit section *** (ДокумРезПост.ДокумРасп Set start)
                this.fДокумРасп = value;
                // *** Start programmer edit section *** (ДокумРезПост.ДокумРасп Set end)

                // *** End programmer edit section *** (ДокумРезПост.ДокумРасп Set end)
            }
        }
        
        /// <summary>
        /// Докум рез пост.
        /// </summary>
        // *** Start programmer edit section *** (ДокумРезПост.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (ДокумРезПост.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.Logistika123.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (ДокумРезПост.Сотрудники Get start)

                // *** End programmer edit section *** (ДокумРезПост.Сотрудники Get start)
                IIS.Logistika123.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (ДокумРезПост.Сотрудники Get end)

                // *** End programmer edit section *** (ДокумРезПост.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокумРезПост.Сотрудники Set start)

                // *** End programmer edit section *** (ДокумРезПост.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (ДокумРезПост.Сотрудники Set end)

                // *** End programmer edit section *** (ДокумРезПост.Сотрудники Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ДокумРезПостE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДокумРезПостE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДокумРезПостE", typeof(IIS.Logistika123.ДокумРезПост));
                }
            }
            
            /// <summary>
            /// "ДокумРезПостL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДокумРезПостL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДокумРезПостL", typeof(IIS.Logistika123.ДокумРезПост));
                }
            }
        }
    }
}
