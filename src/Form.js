import React from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyPress}) => {
    return (
      <div className="form"> 
        ID
        <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>

        Password
        <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <br/>
        <div className="create-button" onClick={onCreate}>
    
    LOGIN   
     </div>
      </div>

  );
};

export default Form;