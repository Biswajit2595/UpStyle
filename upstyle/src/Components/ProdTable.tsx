import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../constants'

const ProdTable = ({id,Brand,Category,Price,Quantity,Rating,Size,Stock,Title,image,imgbag}:ProductType) => {
  return (
    <tr >
        <td>{id}</td>
        <td>{Title}</td>
        <td>{Brand}</td>
        <td>{Category}</td>
        <td>{Price}</td>
        <td>{Rating}</td>
        <td>{Stock}</td>
        <td>
            <Link to={`/edit/`}>
            <button>Edit</button>
            </Link>
        </td>
        <td>
            <button>Delete</button>
        </td>
        </tr>
)
}

export default ProdTable