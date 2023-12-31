﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Vapro
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Инф о заказе.
    /// </summary>
    // *** Start programmer edit section *** (ИнфОЗаказе CustomAttributes)

    // *** End programmer edit section *** (ИнфОЗаказе CustomAttributes)
    [AutoAltered()]
    [Caption("Информация о заказе")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ИнфОЗаказеE", new string[] {
            "Товары as \'Товары\'",
            "Товары.НаимТовара as \'Наим товара\'",
            "Количество as \'Количество\'",
            "Товары.ЕдиницыИзмер as \'Единицы измерения\'",
            "Товары.Цена as \'Цена товара\'"}, Hidden=new string[] {
            "Товары.НаимТовара"})]
    [MasterViewDefineAttribute("ИнфОЗаказеE", "Товары", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "НаимТовара")]
    public class ИнфОЗаказе : ICSSoft.STORMNET.DataObject
    {
        
        private int fКоличество;
        
        private IIS.Vapro.Товары fТовары;
        
        private IIS.Vapro.ДокумПоставки fДокумПоставки;
        
        // *** Start programmer edit section *** (ИнфОЗаказе CustomMembers)

        // *** End programmer edit section *** (ИнфОЗаказе CustomMembers)

        
        /// <summary>
        /// Количество.
        /// </summary>
        // *** Start programmer edit section *** (ИнфОЗаказе.Количество CustomAttributes)

        // *** End programmer edit section *** (ИнфОЗаказе.Количество CustomAttributes)
        public virtual int Количество
        {
            get
            {
                // *** Start programmer edit section *** (ИнфОЗаказе.Количество Get start)

                // *** End programmer edit section *** (ИнфОЗаказе.Количество Get start)
                int result = this.fКоличество;
                // *** Start programmer edit section *** (ИнфОЗаказе.Количество Get end)

                // *** End programmer edit section *** (ИнфОЗаказе.Количество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ИнфОЗаказе.Количество Set start)

                // *** End programmer edit section *** (ИнфОЗаказе.Количество Set start)
                this.fКоличество = value;
                // *** Start programmer edit section *** (ИнфОЗаказе.Количество Set end)

                // *** End programmer edit section *** (ИнфОЗаказе.Количество Set end)
            }
        }
        
        /// <summary>
        /// Инф о заказе.
        /// </summary>
        // *** Start programmer edit section *** (ИнфОЗаказе.Товары CustomAttributes)

        // *** End programmer edit section *** (ИнфОЗаказе.Товары CustomAttributes)
        [PropertyStorage(new string[] {
                "Товары"})]
        [NotNull()]
        public virtual IIS.Vapro.Товары Товары
        {
            get
            {
                // *** Start programmer edit section *** (ИнфОЗаказе.Товары Get start)

                // *** End programmer edit section *** (ИнфОЗаказе.Товары Get start)
                IIS.Vapro.Товары result = this.fТовары;
                // *** Start programmer edit section *** (ИнфОЗаказе.Товары Get end)

                // *** End programmer edit section *** (ИнфОЗаказе.Товары Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ИнфОЗаказе.Товары Set start)

                // *** End programmer edit section *** (ИнфОЗаказе.Товары Set start)
                this.fТовары = value;
                // *** Start programmer edit section *** (ИнфОЗаказе.Товары Set end)

                // *** End programmer edit section *** (ИнфОЗаказе.Товары Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Vapro.ДокумПоставки.
        /// </summary>
        // *** Start programmer edit section *** (ИнфОЗаказе.ДокумПоставки CustomAttributes)

        // *** End programmer edit section *** (ИнфОЗаказе.ДокумПоставки CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "ДокумПоставки"})]
        public virtual IIS.Vapro.ДокумПоставки ДокумПоставки
        {
            get
            {
                // *** Start programmer edit section *** (ИнфОЗаказе.ДокумПоставки Get start)

                // *** End programmer edit section *** (ИнфОЗаказе.ДокумПоставки Get start)
                IIS.Vapro.ДокумПоставки result = this.fДокумПоставки;
                // *** Start programmer edit section *** (ИнфОЗаказе.ДокумПоставки Get end)

                // *** End programmer edit section *** (ИнфОЗаказе.ДокумПоставки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ИнфОЗаказе.ДокумПоставки Set start)

                // *** End programmer edit section *** (ИнфОЗаказе.ДокумПоставки Set start)
                this.fДокумПоставки = value;
                // *** Start programmer edit section *** (ИнфОЗаказе.ДокумПоставки Set end)

                // *** End programmer edit section *** (ИнфОЗаказе.ДокумПоставки Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ИнфОЗаказеE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ИнфОЗаказеE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ИнфОЗаказеE", typeof(IIS.Vapro.ИнфОЗаказе));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ИнфОЗаказе.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfИнфОЗаказе CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfИнфОЗаказе CustomAttributes)
    public class DetailArrayOfИнфОЗаказе : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Vapro.DetailArrayOfИнфОЗаказе members)

        // *** End programmer edit section *** (IIS.Vapro.DetailArrayOfИнфОЗаказе members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ИнфОЗаказе by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ИнфОЗаказе.
        /// </summary>
        public DetailArrayOfИнфОЗаказе(IIS.Vapro.ДокумПоставки fДокумПоставки) : 
                base(typeof(ИнфОЗаказе), ((ICSSoft.STORMNET.DataObject)(fДокумПоставки)))
        {
        }
        
        public IIS.Vapro.ИнфОЗаказе this[int index]
        {
            get
            {
                return ((IIS.Vapro.ИнфОЗаказе)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Vapro.ИнфОЗаказе dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
