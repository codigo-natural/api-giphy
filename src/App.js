import { useEffect } from "react"
const API_CAT = 'https://catfact.ninja/fact'

export const App = () => {
  useEffect(() => {
    fetch(API_CAT)
    .then(res => res.json())
    .then(data => console.log(data.fact))
  },[])
  return (
    <div>App</div>
  )
}
