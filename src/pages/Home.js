import React, { Component } from 'react'; 

class Home extends Component {

	render() {

    let menu = [
      {
        "provinsi": "Kristine",
        "usulan": 968
      },
      {
        "provinsi": "Julia",
        "usulan": 504
      },
      {
        "provinsi": "Maxine",
        "usulan": 389
      },
      {
        "provinsi": "Curry",
        "usulan": 708
      },
      {
        "provinsi": "Brooke",
        "usulan": 327
      },
      {
        "provinsi": "Sheree",
        "usulan": 750
      },
      {
        "provinsi": "Lewis",
        "usulan": 213
      },
      {
        "provinsi": "Daphne",
        "usulan": 908
      },
      {
        "provinsi": "Amy",
        "usulan": 672
      }
    ]
		return (
		<div className="container">
      <ul className="list-group">

      {
        menu.map((item, index) =>
          <li className="list-group-item" key={index}>{item.usulan} {item.provinsi}</li> 
        )
      }
      </ul>  
    </div>
		);
	}
}

export default Home
