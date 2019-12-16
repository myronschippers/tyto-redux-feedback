import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
    state = {
        understanding: '',
        errorMessage: null,
    }

    changeFeeling = (event) => {
        if (event.target.value !== '') {
            this.setState({
                errorMessage: null,
            })
        }

        this.setState({
            understanding: event.target.value,
        },
        () => {
            console.log(this.state.understanding);
        })
    }

    clickNext = (event) => {
        // validate that there is a score
        if (this.state.understanding !== '') {
            // track feeling in redux
            this.props.dispatch({
                type: 'ADD_UNDERSTANDING',
                payload: this.state.understanding,
            });
            // go to the next page
            this.props.history.push('/supported');
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
                <h2>How well are you understanding the content?</h2>
                <div>
                    <div>
                        <label>
                            <div>Understanding?</div>
                            <input
                                type="number"
                                placeholder="Understanding 1 - 10"
                                value={this.state.understanding}
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

export default connect()(Understanding);