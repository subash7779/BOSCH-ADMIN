
const parseOnlyLetterAndSpace = expression => expression.replace(/[^A-Za-z ]/g, '');

const parseLength = (expression, length) => expression.substring(0, length);

const checkAtLeastLength = (expression, length) => expression && expression.trim().length >= length;

const checkIsfilled = expression => expression && expression.length > 0;

const checkIsTrue = expression => expression;

const checkEmailPattern = mail => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(mail);
}

const registrationModel = [{
    name: 'name',
    label: 'Name',
    type: 'text',
    parseFun: parseOnlyLetterAndSpace,
    validators: [{
        id: 'name-length',
        isValidFun: expression => checkAtLeastLength(expression, 3),
        alert: 'Name is too short'
    }]
}, {
    name: 'mail',
    label: 'Email',
    type: 'text',
    validators: [{
        id: 'mail-pattern',
        isValidFun: checkEmailPattern,
        alert: 'Email is not valid'
    }, {
        id: 'email-required',
        isValidFun: checkIsfilled,
        alert: 'Email is empty'
    }]
}, {
    name: 'education',
    label: 'Education',
    type: 'select',
    options: [
        { value: '', name: 'None' },
        { value: 'primary', name: 'Primary School' },
        { value: 'secondary', name: 'Secondary School' },
        { value: 'university', name: 'University' }
    ],
    validators: [{
        id: 'education-required',
        isValidFun: checkIsfilled,
        alert: 'Education is not selected'
    }]
}, {
    name: 'sex',
    label: 'Sex',
    type: 'radio',
    options: [
        { value: 'male', name: 'Male' },
        { value: 'female', name: 'Female' }
    ],
    validators: [{
        id: 'sex-required',
        isValidFun: checkIsfilled,
        alert: 'Sex is not selected'
    }]
}, {
    name: 'description',
    label: 'Description',
    type: 'textarea',
    parseFun: expression => parseLength(expression, 2000),
    validators: [{
        id: 'description-required',
        isValidFun: checkIsfilled,
        alert: 'Description is empty'
    }]
}, {
    name: 'terms',
    label: 'Agree to terms and conditions',
    type: 'checkbox',
    validators: [{
        id: 'terms-required',
        isValidFun: checkIsTrue,
        alert: 'You must agree before submitting'
    }]
}];

export default registrationModel;

