import React from 'react'; 
import BoilingCheck from './BoilingCheck'
import TempInput from './TempInput'




class TempCalculator extends React.Component {

    constructor(props) {
        super(props) 
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFarenheitChange = this.handleFarenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'}
    }

  
    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature: temperature});
      }
    
      handleFarenheitChange (temperature) {
        this.setState({scale: 'f', temperature: temperature});
      }

      toCelsius(farenheit) {
        return (farenheit - 32) * 5 /9;
    }
    
     toFarenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }
    
     tryConvert(temperature, convert) {
        const input = parseFloat(temperature); 
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input); 
        const rounded = Math.round(output * 1000) / 1000
        return rounded.toString();
    }


    render() {
        const scale = this.state.scale; 
        const temperature = this.state.temperature; 
        const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature
        const farenheit = scale === 'c' ? this.tryConvert(temperature, this.toFarenheit) : temperature
       return (
           <div>
               <TempInput 
               scale='c'
               temperature={celsius}
               onTemperatureChange={ this.handleCelsiusChange}
               />
               <TempInput 
               scale='f'
               temperature={farenheit}
               onTemperatureChange={this.handleFarenheitChange}
               />
               <BoilingCheck 
                degrees={parseFloat(celsius)}
               />
           </div>
       )
    };
};

export default TempCalculator