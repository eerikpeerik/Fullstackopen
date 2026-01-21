import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  var average = 0
  var positive = 0
  if (all != 0) {  
    average = ((good - bad)/all)
    positive = (good/all)*100
  }


  const handleGoodClick = () => {
    console.log("Good button pressed")
    const newGood = good + 1
    const newAll = all + 1
    
    setAll(newAll)
    console.log("All in handleGoodClick: "+all)
    setGood(newGood)
    console.log("Good in handleGoodClick: "+good)
    

  }

  const handleNeutralClick = () => {
    const newNeutral = neutral + 1
    const newAll = all + 1

    setAll(newAll)
    setNeutral(newNeutral)
    


  }

  const handleBadClick = () => {
    const newBad = bad + 1
    const newAll = all + 1

    setAll(newAll)
    setBad(newBad)
    

  }

  
  return (
    <div>
      <Header />
      <button onClick={handleGoodClick}>
        good
      </button>
      <button onClick={handleNeutralClick}>
        neutral
      </button>
      <button onClick={handleBadClick}>
        bad
      </button>
      <Statistics
        good={good} 
        neutral={neutral} 
        bad={bad} 
        all={all} 
        average={average} 
        positive={positive}
      /> 
    </div>
  )
}

const Header = () => {
  return (
    <div>
      <h1>Give feedback</h1>
    </div>
  )
}

const Statistics = (props) => {
  console.log("Avg: "+props.average, "All: "+props.all)
  return (<div>
    <h1>Statistics</h1> 
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive}%</p>
  </div>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>
  {props.text}
  </button>
)

const Display = props => <div>{props.value}</div>


export default App