import React, { Component } from 'react';

import './Footer.css';

const ENTER_KEY = 13;

class Footer extends Component {
	constructor(props) {
		super(props);
		this.handleClickPostComment = this.handleClickPostComment.bind(this);
		this.state = {
			userText:"",
		}
	}

	handleUserText = (e) => {this.setState({userText:e.target.value})}

	//returns date format like: 4 мая 2018
	formatDate(date) {
	  var monthNames = [
	    "января", "февраля", "марта",
	    "апреля", "мая", "июня", "июля",
	    "августа", "сентября", "октября",
	    "ноября", "декабря"
	  ];
	  var day = date.getDate();
	  var monthIndex = date.getMonth();
	  var year = date.getFullYear();

	  return day + ' ' + monthNames[monthIndex] + ' ' + year;
	}


	handleClickPostComment = () => {
		let object = {
			key:+this.props.commentsLength + 1,
			user:"Влад Польовий",
			date: this.formatDate(new Date()),
			text:this.state.userText
		}
		if (object.text.trim().length !== 0) {
			if (document.getElementById('myInput').value != ''){
				this.props.callbackFromComments(object);
			}
			document.getElementById('myInput').value = '';
		}
	}
	//ctrl+enter post comment
	handleKeyDown = (e) => {
     if (e.keyCode === ENTER_KEY && e.ctrlKey) {
         this.handleClickPostComment();
      }
	}

  render() {
    return (
      <div>
      	<div className="footer_wrapper">
					<div className="footer_textarea-div">
						<textarea
							id="myInput"
							className="footer_textarea"
							name="comment"
							onChange={this.handleUserText}
							onKeyDown={this.handleKeyDown}
						 />
					</div>

					<button className="footer_button" onClick={this.handleClickPostComment}>
						<b>Написать консультанту</b>
					</button>
				</div>
      </div>
    );
  }
}

export default Footer;
