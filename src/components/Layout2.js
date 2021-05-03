import React from 'react';
import { NavLink } from 'react-router-dom';
import agreement1 from '../../public/images/image 11.png';

class Layout2 extends React.Component{
  render() {
    return(
      <div className='wrap_of_lay2'>
        <div className='main_lay2'>
         <p className='nameOfLay2'>Шаблон. Договор о займе</p>
         <NavLink to='#' className='keep_button2'>Сохранить</NavLink>
          <NavLink to='#' className='download_button2'>Скачать</NavLink>
          <NavLink to='#' className='print_button2'>Печать</NavLink>
          <NavLink to='#' className='apps_button2'>Приложения к документу</NavLink>

          <div className='wrap_constructor2'>
            <img src={agreement1} className='lay_agreement2'/>
            <p className='interrogatory2'>Опросный лист</p>
            <form action='#'>
            <p className='radio_name_title2'>Договор будет называться (содержимое договора от этого изменяться не будет):</p>
            <div className='radio_name3'>
              <input type='radio' name='name' className='name_input' id='name3'/>
              <label htmlFor='name3' className='name_label'>Договор простого товарищества;</label>
            </div>
            <div className='radio_name4'>
              <input type='radio' name='name' className='name_input' id='name4'/>
              <label htmlFor='name4' className='name_label'>Договор о совместной деятельности.</label>
            </div>

            <p className='radio_target_title2'>Цель заключения договора</p>
            <div className='radio_target3'>
              <input type='radio' name='target' className='target_input' id='target3'/>
              <label htmlFor='target3' className='target_label'>Некоммерческая цель;</label>
            </div>
            <div className='radio_target4'>
              <input type='radio' name='target' className='target_input' id='target4'/>
              <label htmlFor='target4' className='target_label'>Совместная деятельность для извлечения прибыли (коммерческая цель).</label>
            </div>

            <p className='checkbox_status_title2'>Правовой статус участников товарищества:</p>
            <p className='checkbox_status_subtitle2'>Галочкой отметить правовой статус сторон, а также количество сторон:</p>
            <div className='lay_checkbox6'>
              <input type='checkbox' name='status' className='checkbox_input' id='checkbox6'/>
              <label htmlFor='checkbox6' className='checkbox_label'> Юридическое лицо:</label>
            </div>
            <div className='lay_checkbox7'>
              <input type='checkbox' name='status' className='checkbox_input' id='checkbox7'/>
              <label htmlFor='checkbox7' className='checkbox_label'> Коммерческое юридическое лицо-</label>
              <input type='tel' name='amount' className='amount_input5' placeholder='Количество сторон'/>
            </div>
            <div className='lay_checkbox8'>
              <input type='checkbox' name='status' className='checkbox_input' id='checkbox8'/>
              <label htmlFor='checkbox8' className='checkbox_label'> Некоммерческое юридическое лицо-</label>
              <input type='tel' name='amount' className='amount_input6' placeholder='Количество сторон'/>
            </div>
            <div className='lay_checkbox9'>
              <input type='checkbox' name='status' className='checkbox_input' id='checkbox9'/>
              <label htmlFor='checkbox9' className='checkbox_label'> Индивидуальный предприниматель - </label>
              <input type='tel' name='amount' className='amount_input7' placeholder='Количество сторон'/>
            </div>
            <div className='lay_checkbox10'>
              <input type='checkbox' name='status' className='checkbox_input' id='checkbox10'/>
              <label htmlFor='checkbox10' className='checkbox_label'> Физическое лицо -</label><input type='tel' name='amount' className='amount_input8' placeholder='Количество сторон'/>
            </div>

            <p className='radio_time_title2'>Договор заключается:</p>
            <div className='radio_time4'>
              <input type='radio' name='time' className='time_input' id='time4'/>
              <label htmlFor='time4' className='time_label'>На определенный срок;</label>
            </div>
            <div className='radio_time5'>
              <input type='radio' name='time' className='time_input' id='time5'/>
              <label htmlFor='time5' className='time_label'>На неопределенный срок;</label>
            </div>
            <div className='radio_time6'>
              <input type='radio' name='time' className='time_input' id='time6'/>
              <label htmlFor='time6' className='time_label'>До достижения определенной темы.</label>
            </div>
            
            </form>
          </div>

        </div>
      </div>
    )
  }
}

export default Layout2;
