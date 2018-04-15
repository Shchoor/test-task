import React, { Component } from 'react';
import './Statistic.css';

const STATS = [11, 3, 1];
class Statistic extends Component {
	constructor(props) {
		super(props);
		this.state = {
			total:this.getTotal(),
		}
	}
	//returns total summ of all elements in array
	getTotal() {
		return STATS.reduce((a, b) => a + b, 0);
	};

  render() {
		var progressLine1 = {
      width: (STATS[0]/this.state.total)*100+'%',
			backgroundColor: '#7CD270'
    };
		var progressLine2 = {
      width: (STATS[1]/this.state.total)*100+'%',
			backgroundColor: 'LightSkyBlue'
    };
		var progressLine3 = {
      width: (STATS[2]/this.state.total)*100+'%',
			backgroundColor: 'LightSkyBlue'
    };

    return (
      <div className="stat">
				<table>
					<tbody>
				  <tr>
				    <td></td>
				    <td className="table_td-text-align">
							Услуг
						</td>
				  </tr>
					{/* space */}
					<tr>
						<td></td>
						<td className="table_space"></td>
					</tr>
					<tr className="table_tr-border-top">
						<td></td>
						<td className="table_space"></td>
					</tr>
					{/* space ends */}
				  <tr>
				    <td className="table_tr-border-left">
							<div className="progress" data-label="Ручное бронирование">
							  <span className="value" style={progressLine1}></span>
							</div>
						</td>
				    <td className="table_td-text-align">
								<span className="table_td-content">{STATS[0]}</span>
						</td>
				  </tr>
				  <tr>
				    <td className="table_tr-border-left">
							<div className="progress" data-label="Пакетные туры">
							  <span className="value" style={progressLine2}></span>
							</div>
						</td>
				    <td className="table_td-text-align">
							<span className="table_td-content">{STATS[1]}</span>
						</td>
				  </tr>
				  <tr>
				    <td className="table_tr-border-left">
							<div className="progress" data-label="Отели">
							  <span className="value" style={progressLine3}></span>
							</div>
							</td>
				    <td className="table_td-text-align">
							<span className="table_td-content">{STATS[2]}</span>
						</td>
				  </tr>
					{/* space */}
					<tr>
						<td></td>
						<td className="table_space"></td>
					</tr>
					<tr className="table_tr-border-top">
						<td></td>
						<td className="table_space"></td>
					</tr>
					{/* space ends */}
				  <tr>
				    <th>Всего</th>
				    <th className="table_td-text-align">
							<span className="table_td-content">{this.state.total}</span>
						</th>
				  </tr>
				</tbody>
				</table>
      </div>
    );
  }
}

export default Statistic;
