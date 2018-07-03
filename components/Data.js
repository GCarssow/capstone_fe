// import React, { Component } from 'react'

// // var parkData = require("react-chartjs").Line

// class Data extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isHidden: true,
//       parkData: {
//       },
//       chartOptions: {}
//     }
//     this.toggleHidden = this.toggleHidden.bind(this)
//   }

// update = (data) => {
//     var reduced = data.reduce((acc, curr) => {
//       acc.push(curr.date_applied.substr(0,10))
//       return acc
//     }, [])
//     reduced = reduced.sort()
//        this.setState({
//         chartData: {
//           datasets: [{
//             }]
//         },
//       })    
//   }
  
// componentDidMount() {
//     this.update(this.props.data.park)
//   }
  
// toggleHidden() {
//     this.setState({
//     isHidden: !this.state.isHidden
//     })
//   }
  
//   render() {
//     return (
//       <View>
//         <button onClick={(event) => this.toggleHidden()}>View Park Info</button>
//         {this.state.isHidden ? null : <LineChart data={this.state.parkData} options={this.state.chartOptions} width="100%" height="250"/>}
//       </View>
//     )
//   }
// }

// export default Data