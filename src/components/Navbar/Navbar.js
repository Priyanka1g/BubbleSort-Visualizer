import React, { Fragment } from 'react'
import './Navbar.css'

const Navbar = ({ generateRandomArray, handleSort, sorting, completed }) =>{

    return (
        <Fragment>
        <header>
            <div className='title'>Bubble Sort Visualizer</div>

            <div className='toolbox'>
                
                <div>
                    <button onClick={generateRandomArray} disabled={sorting}>Randomize</button>
                    <button onClick={handleSort} disabled={sorting || completed}>BubbleSort</button>
                </div>
            </div>
        </header>
        </Fragment>
    )
}

export default Navbar