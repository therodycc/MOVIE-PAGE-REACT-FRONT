import React from 'react'

const Select = ({ action, options }) => {
    return (
        <>
            <select
                className="form-control mb-3 bg-white pl-3 "
                onChange={(e) => action(e)}
            >
                <option value="" selected>GENERAL</option>
                {
                    options.map((item) => (
                        <option value={item}>{item}</option>
                    ))
                }
            </select>
        </>
    )
}

export default Select;
