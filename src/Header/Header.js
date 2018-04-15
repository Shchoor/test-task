import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header_wrapper">
        <img src="./avatar.png" alt="Avatar" className="header_image"/>
				<div className="header_text">
					<div><b>Вероника Ростова</b></div>
			 		<div className="header_sub-text">Менеджер по продажам</div>
				</div>
				<div className="header_message">
					Подберу для вас самые лучшие предложения. <br/>
					Мои услуги абсолютно бесплатны
				</div>
      </div>
    );
  }
}

export default Header;
