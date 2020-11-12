import React from 'react'; 

const scaleNames = {
    c: 'Celsius', 
    f: 'Farenheit'
}



class TempInput extends React.Component {


    handleChange = e => {
        this.props.onTemperatureChange(e.target.value)
    }

    render() {
        const temp = this.props.temperature
        const scale = this.props.scale

        return (
                <fieldset>
                    <label>Enter a temperature in {scaleNames[scale]}</label>
                    <input 
                    value={temp} 
                    onChange={this.handleChange}
                    />
                </fieldset>
            
        )
    }
}

export default TempInput