import React from 'react';
import './Script1.css';

const Script1 = ({form,form1, children}) => {
    return (
      <main className="todo-list-template">
        <div className="title">
          Digital-Board
        </div>
        <section className="form-wrapper">
          {form}
          {form1}
        </section>
        <section className="todos-wrapper">
          { children }
        </section>
      </main>
  );
};

export default Script1;