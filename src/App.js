import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.css'
import CountryList from './components/CountryList/CountryList';
import SearchBox from './components/SearchBox/SearchBox';
import HeaderComponent  from './components/HeaderComponent';
// import CountryList from './components/CountryList/CountryList';

// import SearchBox from './components/SearchBox/SearchBox';
import FooterComponent from './components/Footer/Footer';
import ContactUsComponent from './components/ContactUs/ContactUs';
import {Route} from 'react-router-dom';

import { BrowserRouter} from 'react-router-dom';

class App extends Component {

  constructor(){
    super();
    this.state = {
     countries:[],
     stats:[],
     searchField:''
    }
  }

  async componentDidMount(){
    const resp = await fetch('https://api.covid19api.com/countries')
    const countries = await resp.json()
    this.setState({countries})
    this.state.countries.forEach( async country => {
      const resp = await fetch(`https://api.covid19api.com/total/country/${country.Slug}`)
      const data = await resp.json()
      if(data.length)
      this.setState(prevState => (
        {stats:prevState.stats.concat({...data[data.length - 1],CountryCode:country.ISO2})}
      ))
    })
  }

  

  handleChange = (e) =>{
    this.setState({searchField:e.target.value})
  }

  render() {
    const {stats,searchField} = this.state
    const filteredCountries = stats.filter(country =>(
      country.Country.toLowerCase().includes(searchField.toLowerCase())
    ))
    return (
      <BrowserRouter>
       
       <div>
        <HeaderComponent/>
        <div className="back">
        <div className="container">
          
          
         <SearchBox placeholder="Enter country name ..." handleChange={this.handleChange}/> 
        
 <CountryList stats = {filteredCountries}/>

        
        </div>
        
       </div>
       <FooterComponent value={this.props.ctr}/>
       
       
        </div>
        
        
      </BrowserRouter>
      
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    ctr:state.counter
  }
}

export default connect(mapStateToProps)(App);
