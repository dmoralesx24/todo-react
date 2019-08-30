import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    };

    onSubmit = (event) => {
        event.prevenDefault();
        this.props.AddTodo(this.state.title);
        this.setState({ title: '' });
    };

    onChange = (event) => this.setState({ title: event.target.value });

    render() {
        return (
            <form style={{ display: 'flex'}} onSubmit={this.onSubmit}>
                <input type='text' name='title' style={{flex: '10', padding: '5px'}} placeholder='Add Todo ...'
                value={this.state.title} onChange={this.onChange}/>
                <input type='submit' value='Submit' className='btn'
                style={{flex: '1'}}/>
            </form>
        )
    }
}

export default AddTodo
