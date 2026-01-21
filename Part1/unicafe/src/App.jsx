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
      <Button onClick={handleGoodClick} text="Good"/>
      <Button onClick={handleNeutralClick} text="Neutral"/>
      <Button onClick={handleBadClick} text="bad"/>
       <h1>Statistics</h1> 
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
  if (props.all == 0){
    return(
      <div>
        <p>No feedback given.</p>
      </div>
    )}
  else{
  return (
  <div>
      <StatisticLine text="Good: " value={props.good}/>
      <StatisticLine text="Neutral :" value={props.neutral}/>
      <StatisticLine text="Bad: " value={props.bad}/>
      <StatisticLine text="All: " value={props.all}/>
      <StatisticLine text="Average: " value={props.average}/>
      <StatisticLine text="Positive: " value={props.positive + "%"}/>
  </div>
  )
  }
}

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
  {text}
  </button>
)

//const Display = props => <div>{props.value}</div>

const StatisticLine = (props) => {
  console.log("Value passed in StatLine "+props.value)
  return(
    <div>
      <p> {props.text} {props.value} </p>
    </div>
  )
}


export default App