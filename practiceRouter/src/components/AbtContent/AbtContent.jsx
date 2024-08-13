
import { useParams } from 'react-router-dom'

const AbtContent = () => {
    const {content} = useParams();
  return (
    <div className='text-white bg-yellow-300'>
      I am Content: {content} 
    </div>
  )
}

export default AbtContent