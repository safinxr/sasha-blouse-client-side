import React from 'react';
import { Link } from 'react-router-dom';

const TableTwo = ({ food}) => {
    const {  food_name, food_image, food_category, totalPrice, qty, added_by, food_origin,  ordered } = food
    return (
        <table className="table">
            <tbody>
                <tr>
                    <td className='w-5/12'>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask rounded w-16 h-16">
                                    <img src={food_image} alt="" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold uppercase text-lg">{food_name}</div>
                                <div className=" opacity-70">Category : {food_category}</div>
                            </div>
                        </div>
                    </td>
                    <td className='w-3/12'>
                        Food Added by : {added_by}
                        <br />
                        <span className="badge badge-ghost badge-sm">
                            Food Origin : {food_origin}</span>
                    </td>
                    <td className='w-3/12'>TOTAL PRICE : ${totalPrice}
                        <br />
                        Quantity : {qty}
                    </td>
                    <th className='w-1/12'>
                        {/* <div className='flex items-center justify-between'>
                            <Link to={`/updatepage/${_id}`} className='uppercase active:scale-95 px-4 bg-black py-2 text-white rounded'>update</Link>


                            <button
                                onClick={() => deleteBtn(_id)}
                                className="active:scale-95 text-2xl px-4 py-1 border-2 border-black rounded"><AiFillDelete></AiFillDelete></button>
                        </div> */}

                    </th>
                </tr>
            </tbody>


        </table>
    );
};

export default TableTwo;