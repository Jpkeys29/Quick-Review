import noTopicImage from '../assets/project.jpeg'

export default function NoTopicSelected() {
    return (
        <div>
            <img src={noTopicImage} width='500' height='350' />
            <p>Select a topic from the sidebar</p>
        </div>
    )
}