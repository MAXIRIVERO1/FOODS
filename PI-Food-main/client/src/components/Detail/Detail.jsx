import { useSelector} from "react-redux"
import styles from "./Detail.module.css"


export const Detail = ()=>{
    const detail = useSelector((state)=>state.detail)
    
    const {title, image, summary, healthScore, steps} = detail;
    console.log(detail.diets)
    return(
      <div className={styles.container} >
    <div className={styles.card} >
        <h1>{title}</h1>
        <img src={image} className={styles.image} alt={title} />
        <h2>HealthScore: {healthScore}</h2>
        <h3>Summary:</h3>
        <p>{summary}</p>
        <h3>Step by step:</h3>
        <p>{steps}</p>
        <h2>Diets:</h2>
      <ul>
        {detail.diets.map((diet, index) => (
          <li key={index}>{diet}</li>
        ))}
      </ul>


    </div></div>)
}