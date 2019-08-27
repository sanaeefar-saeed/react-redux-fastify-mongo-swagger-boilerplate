import React from 'react'

const RenderSpecField = (props) => {
  return (
    <table className="table table-striped" style={{marginTop: 20}}>
      <thead>
      <tr>
        <th>Specific</th>
        <th>Value</th>
        <th>Remove</th>
      </tr>
      </thead>
      <tbody>
      {props.specifications.map(spec => {
          return (
            <tr key={spec._id}>
              <td>{spec.specName}</td>
              <td>{spec.specValue}</td>
              <td>
                <button onClick={() => props.deleteSpec(spec._id)} className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          )
        }
      )}
      </tbody>
    </table>
  )
};

export default RenderSpecField