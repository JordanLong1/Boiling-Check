import React from 'react'; 
import BoilingCheck from './BoilingCheck'
class TempCalculator extends React.Component {

    state = {temperture: ''}

    handleChange = event => {
        this.setState({
            temperture: event.target.value
        })
    }


    render() {
        const temp = this.state.temperture
        return (
            <fieldset>
                <label>Enter a temperatue below:</label>
                <input 
                value={temp} 
                onChange={this.handleChange}
                />
        <BoilingCheck degrees={parseFloat(temp)}/>
            </fieldset>
        )
    };
};

export default TempCalculator