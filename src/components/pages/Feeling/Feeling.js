import React, { Component } from 'react';

class Feeling extends Component {
    state = {
        feeling: '',
        errorMessage: null,
    }

    changeFeeling = (event) => {
        if (event.target.value !== '') {
            this.setState({
                errorMessage: null,
            })
        }
        
        this.setState({
            feeling: event.target.value,
        },
        () => {
            console.log(this.state.feeling);
        })
    }

    clickNext = (event) => {
        // validate that there is a score
        if (this.state.feeling !== '') {
            // track feeling in redux
            // go to the next page
        } else {
            // show error
            this.setState({
                errorMessage: 'You must input a number.'
            })
        }
    }

    render() {
        let errorMessageHtml = null;

        if (this.state.errorMessage != null) {
            errorMessageHtml = (
                <div className="errMsg">
                    {this.state.errorMessage}
                </div>
            );
        }

        return (
            <div>
                <h2>How are you feeling today?</h2>
                <div>
                    <div>
                        <label>
                            <div>Feeling?</div>
                            <input
                                type="number"
                                placeholder="Feeling 1 - 10"
                                value={this.state.feeling}
                                onChange={this.changeFeeling}
                            />
                        </label>
                    </div>
                    <div>
                        <button onClick={this.clickNext}>NEXT</button>
                    </div>
                    {errorMessageHtml}
                </div>
            </div>
        );
    }
}

export default Feeling;
