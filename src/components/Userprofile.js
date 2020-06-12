import React from 'react';
import FormPanel from './FormPanel';
import registerFormModel from '../models/registrationModel';

function Userprofile() {
  const submitCallback = e => console.log(registerFormModel.map(m => m.label + ': ' + m.value + ',\n').join(''));

  return (
    <div className="container">
      <FormPanel  btnName="Submit" submitCallback={submitCallback} model={registerFormModel} />
    </div>
  );
}

export default Userprofile;
