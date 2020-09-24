import React from 'react'

// import axios from 'axios'

export default function Whiskeys(props) {
  
//   const getData = async() => {
//   try {
//     const response = await fetch('http://localhost:3000/whiskeys')
//   const whiskeyData = await response.json()
//   setWhiskeys(whiskeyData)
//   console.log(whiskeyData)
//   } catch (error){
//     console.log(error)
//   } 
// }


// const handleDelete = async (id) => {
//   try{
//     await fetch(`http://localhost:3000/whiskeys/${whiskeys.id}`, 
//       {
//       method:'DELETE',
//       headers:{
//         'Content-Type': 'application/json'
//       }
//     }).then((response) => {
//       console.log('Whiskey was removed')
//     })
// }catch (error){
//   console.log(error)
// }
// }
// useEffect(() => {
//   (async function () {
//       await getData();
//   })();
// }, []);
  return(
    <div>
      <h1>Whiskey!</h1>
      { props.whiskeyData.map(whiskey => {
        return (
      <ul key={whiskey.id}>
        <li><h2>{whiskey.name}</h2></li>
        <li><img src={whiskey.image} alt={whiskey.name} /></li>
        <li><h3>{whiskey.distiller}</h3></li>
        <li><h3>{whiskey.origin}</h3></li>
      <button onClick={props.handleDelete}>Remove from List</button>
      </ul>
      
        )})
      }
    </div>
  )

}