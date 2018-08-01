import React, { Component } from 'react';
import Script1 from './Script1';
import TodoItemList from './TodoItemList';
import Form from './Form';


class App extends Component {
    render() {
        return (
          <Script1 form={<Form/>}>

            <TodoItemList/>
          </Script1>

      );
            }
}

export default App;