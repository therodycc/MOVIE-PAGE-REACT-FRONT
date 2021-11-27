import React from "react";

const Table = ({ items, headers }) => {
    return (
        <>
            <div className="card-body">
                <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                    <h6 className="text-white text-capitalize ps-3">Actors</h6>
                </div>
                <div className=" table-responsive">
                    <table className="table table-hover">
                        <thead className="text-warning">
                            <tr>
                                {headers.map((head, index) => (
                                    <th key={index}>{head.title}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr key={item.id}>
                                    {headers.map((head) => (
                                        <>
                                            <td>
                                                {!item[head.key] && (<head.render data={item} />)}
                                                {item[head.key] && (item[head.key] || '')}
                                            </td>
                                        </>
                                    ))}

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Table;

