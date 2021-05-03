import React from 'react';
import { NavLink } from 'react-router-dom';
import agreement1 from '../../public/images/image 11.png';

class Layout1 extends React.Component{
  render() {
    return(
      <div className='wrap_of_lay1'>
        <div className='main_lay1'>
           <p className='nameOfLay1'>Шаблон. Договор о возмездном оказании услуг</p>
           <NavLink to='#' className='keep_button1'>Сохранить</NavLink>
           <NavLink to='#' className='download_button1'>Скачать</NavLink>
           <NavLink to='#' className='print_button1'>Печать</NavLink>
           <NavLink to='#' className='apps_button1'>Приложения к документу</NavLink>

          <div className='wrap_constructor'>
            <img src={agreement1} className='lay_agreement1'/>
            <p className='interrogatory'>Опросный лист</p>
            <form action='#'>
              <p className='radio_name_title'>Договор будет называться (содержимое договора от этого изменяться не будет):</p>
              <div className='radio_name1'>
                <input type='radio' name='name' className='name_input' id='name1'/>
                <label htmlFor='name1' className='name_label'>Договор простого товарищества;</label>
              </div>
              <div className='radio_name2'>
                <input type='radio' name='name' className='name_input' id='name2'/>
                <label htmlFor='name2' className='name_label'>Договор о совместной деятельности.</label>
              </div>
            
              <p className='radio_target_title'>Цель заключения договора</p>
              <div className='radio_target1'>
                <input type='radio' name='target' className='target_input' id='target1'/>
                <label htmlFor='target1' className='target_label'>Некоммерческая цель;</label>
              </div>
              <div className='radio_target2'>
                <input type='radio' name='target' className='target_input' id='target2'/>
                <label htmlFor='target2' className='target_label'>Совместная деятельность для извлечения прибыли (коммерческая цель).</label>
              </div>
            
              <p className='checkbox_status_title'>Правовой статус участников товарищества:</p>
              <p className='checkbox_status_subtitle'>Галочкой отметить правовой статус сторон, а также количество сторон:</p>
              <div className='lay_checkbox1'>
                <input type='checkbox' name='status' className='checkbox_input' id='checkbox1'/>
                <label htmlFor='checkbox1' className='checkbox_label'> Юридическое лицо:</label>
              </div>
              <div className='lay_checkbox2'>
                <input type='checkbox' name='status' className='checkbox_input' id='checkbox2'/>
                <label htmlFor='checkbox2' className='checkbox_label'> Коммерческое юридическое лицо-</label>
                <input type='tel' name='amount' className='amount_input1' placeholder='Количество сторон'/>
              </div>
              <div className='lay_checkbox3'>
                <input type='checkbox' name='status' className='checkbox_input' id='checkbox3'/>
                <label htmlFor='checkbox3' className='checkbox_label'> Некоммерческое юридическое лицо-</label>
                <input type='tel' name='amount' className='amount_input2' placeholder='Количество сторон'/>
              </div>
              <div className='lay_checkbox4'>
                <input type='checkbox' name='status' className='checkbox_input' id='checkbox4'/>
                <label htmlFor='checkbox4' className='checkbox_label'> Индивидуальный предприниматель - </label>
                <input type='tel' name='amount' className='amount_input3' placeholder='Количество сторон'/>
              </div>
              <div className='lay_checkbox5'>
                <input type='checkbox' name='status' className='checkbox_input' id='checkbox5'/>
                <label htmlFor='checkbox5' className='checkbox_label'> Физическое лицо -</label><input type='tel' name='amount' className='amount_input4' placeholder='Количество сторон'/>
              </div>
          
              <p className='radio_time_title'>Договор заключается:</p>
              <div className='radio_time1'>
                <input type='radio' name='time' className='time_input' id='time1'/>
                <label htmlFor='time1' className='time_label'>На определенный срок;</label>
              </div>
              <div className='radio_time2'>
                <input type='radio' name='time' className='time_input' id='time2'/>
                <label htmlFor='time2' className='time_label'>На неопределенный срок;</label>
              </div>
              <div className='radio_time3'>
                <input type='radio' name='time' className='time_input' id='time3'/>
                <label htmlFor='time3' className='time_label'>До достижения определенной темы.</label>
              </div>

            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Layout1;
