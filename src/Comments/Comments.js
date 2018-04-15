import React, { Component } from 'react';
import Footer from './Footer/Footer';
import './Comments.css';

const DEFAULT_COMMENTS = [
	{key:1, user:"Влад", date:"12 октября 2011", text:"Привіт, є тут хтось?"},
	{key:2, user:"Самуил", date:"13 октября 2011", text:"Привет, Верунь! ниче себе ты крутая. фотка класс!!!!"},
	{key:3, user:"Лилия Семёновна", date:"14 октября 2011", text:"Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?"	},
	{key:4, user:"Лилия Семёновна", date:"14 октября 2011", text:"Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?"},
	{key:5, user:"Лилия Семёновна", date:"14 октября 2011", text:"Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?"},

];

class Comments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments:[],
			showAllComments:false,
		}
	}
	//fill array
	componentDidMount() {
		this.setState({
			comments:DEFAULT_COMMENTS,
		});
	};
	//get new comment
	callbackFromComments = (dataFromChild) => {
		let array = this.state.comments;
		array.push(dataFromChild);
    this.setState({comments:array});
  };
	//change state for displaying comments
	handleShowAllComments = () => {this.setState({showAllComments:!this.state.showAllComments})}

  render() {
    return (
      <div>
      	<div className="comments_wrapper">
					<div className="comments_menu">
						<div className="comments_menu-item" style={{width: '30%'}} >
							<b>Последние отзывы</b>
						</div>
						<div className="comments_menu-item" style={{	width: '50%', fontSize:'14px'}}>
							<a href='javascript:void(0)' onClick={this.handleShowAllComments}>
								{this.state.showAllComments === true ? "Последние отзывы": "Все отзывы"}
							</a>
						</div>
						<div className="comments_menu-item">
							<i className="fa fa-heart like_icon" ></i>
							<span style={{fontSize:'11px', paddingRight:'20px'}}>131</span>
							<i className="fa fa-comment comment_icon" ></i>
							<span style={{fontSize:'11px'}}>{this.state.comments.length}</span>
						</div>

				 </div>

					{/* comments list starts */}
					<div className="comments_list">
						{
							this.state.comments.map((e) => {
								let commentView =
								<div className="comments_message" key={e.key}>
									<div>
										<b className="comments_message_username">{e.user}</b>
										<span className="comments_message_date">{e.date}</span>
									</div>

									<article className="talkbubble">
										{e.text}
									</article>
								</div>

								if(this.state.showAllComments === false) {
									if (e.key >= this.state.comments.length - 2) {
										return (commentView)
									}
								}else if(this.state.showAllComments === true) {
									return (commentView)
								}
							})
						}
					</div>
			</div>

			<Footer
				commentsLength={this.state.comments.length}
				callbackFromComments={this.callbackFromComments}
			 />
      </div>
    );
  }
}

export default Comments;
