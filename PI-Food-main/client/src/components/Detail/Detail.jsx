import { useSelector} from "react-redux"


export const Detail = ()=>{
    const detail = useSelector((state)=>state.detail)
    
    const {id, title, image, summary, healthScore, steps} = detail;
    console.log(detail.diets)
    return(<div>
        <h1>{title}</h1>
        <h3>ID: {id}</h3>
        <img src={image} alt={title} />
        <h2>HealthScore: {healthScore}</h2>
        <p>Summary: {summary}</p>
        <p>Step by step: {steps}</p>
        <h2>Diets:</h2>
      <ul>
        {detail.diets.map((diet, index) => (
          <li key={index}>{diet}</li>
        ))}
      </ul>


    </div>)
}