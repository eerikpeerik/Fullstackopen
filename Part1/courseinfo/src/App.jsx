const App = () => {
    const content = 
    {
      headerText: "Half Stack application development",
      info: [
    { part: 'Fundamentals of React', amount: 10},
    { part: 'Using props to pass data', amount: 7},
    { part: 'State of a component', amount: 14}
      ]
    }
  return (
    <div>
      <Header name={content}/>
      <Content content={content}/>
      <Total totalExercises={content}/>
    </div>
  )
}

const Header = (props) => {
  return (
      <h1>{props.name.headerText}</h1>
  )
}

const Content = (props) => {

  return(
    <div>
      <Part gosh={props.content.info[0]}/>
      <Part gosh={props.content.info[1]}/>
      <Part gosh={props.content.info[2]}/>
    </div>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.totalExercises.info[0].amount + props.totalExercises.info[1].amount + props.totalExercises.info[2].amount}</p>
  )
}

const Part = (props) => {

  return (
      <p>{props.gosh.part} {props.gosh.amount}</p>
 
  )
}

export default App