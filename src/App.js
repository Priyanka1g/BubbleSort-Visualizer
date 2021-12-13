import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Chart from  './components/Chart/Chart'

// import bubble sort algorithm 
import BubbleSortAlgo from './components/Algorithm/BubbleSortAlgo'

const App=() =>{
	// Generating shuffled array of len 20 to 100
  const len = Math.floor(Math.random() * 100) + 20;
  // defining algorithm
  const algo = 'bubbleSort';
  //speed 500ms
  const speed = 500;

  //generating random array
	const generateRandomArray = () => {
		setCompleted(false)
		setSorting(false)
		setSortedIndex([])

		const randomArray = Array.from(Array(len + 1).keys()).slice(1)
		
		for (let i = randomArray.length - 1; i > 0; i--) {
			const randomIndex = Math.floor(Math.random() * (i - 1))
			const temp = randomArray[i]

			randomArray[i] = randomArray[randomIndex]
			randomArray[randomIndex] = temp
		}
		
		setBlocks(randomArray)
	}

	// some useful states
	const [blocks, setBlocks] = useState([])
	const [sorting, setSorting] = useState(false)
	const [completed, setCompleted] = useState(true)
	const [compare, setCompare] = useState([])
	const [swap, setSwap] = useState([])
	const [sortedIndex, setSortedIndex] = useState([])

	// Initially Generating random array
  useEffect(() => {
		generateRandomArray()
	}, [])

	// Sorting according to the algorithm
	const handleSort = () => {
		
		const sortAccOrder = (order) => {
			(function loop(i) {
				setTimeout(function () {
					const [j, k, arr, index] = order[i]
					setCompare([j, k])
					setSwap([])

					if(index !== null){
						setSortedIndex((prevState) => (
							[...prevState, index]
						))
					}
		
					if(arr){
						
						setBlocks(arr)
						if(j !== null || k != null)
							setSwap([j, k])

					}

					if (++i < order.length){
						loop(i)
					} else {
						setSorting(false)
						setCompleted(true)
					}   
				}, speed)
			})(0)
			
		}

		setSorting(true)
//for bubblesort algo
		algo === 'bubbleSort' ? sortAccOrder(BubbleSortAlgo(blocks))  : (() => {
			setSorting(false)
			setCompleted(true)
		})()
	}

	return (
		<div className="App">
			<Navbar 
				generateRandomArray={() => generateRandomArray(len)}
				handleSort={handleSort} 
				sorting={sorting}
				completed={completed}
				len={len}
				speed={speed}
				algo={algo}
			/>
			
			<Chart 
				blocks={blocks} 
				compare={sorting && compare}
				swap={sorting && swap}
				sorted={sortedIndex} 
			/>
		</div>
	);
}

export default App