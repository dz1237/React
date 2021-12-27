import React from 'react';
const Password = (props) => {
    let { pwd } = props
    return (
        <div>
            <label htmlFor="psaaword">
                {pwd}
            </label>
            <input type="password" id="password" />
        </div>
    )
}
export default Password;