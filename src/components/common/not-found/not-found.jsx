import React from 'react'

const NotFound = ({ urlImg, title }) => {
    return (
        <>
            <div style={{ overflow: "hidden" }} className="col-lg-12  d-flex align-items-center flex-column justify-content-center">
                <h4 className="text-warning mt-5">
                    {title}
                </h4>
                <img
                    // src={addNewImg}
                    src={urlImg}
                    className="col-lg-12 mt-3 img-not-found"
                    alt=""
                />
            </div>
        </>
    )
}

export default NotFound
