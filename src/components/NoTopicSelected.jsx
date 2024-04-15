import noTopicImage from '../assets/project.jpeg'
import noTopicPic from '../assets/project2.jpeg'

export default function NoTopicSelected() {
    return (
        <div className='questions'>
            <p>Select a topic from the sidebar</p>
            <img src={noTopicPic} width='500' height='350' />
        </div>
    )
}