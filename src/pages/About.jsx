import Layout from '../components/Layout'
import { useParams } from 'react-router-dom'

const About = () => {
    const { name } = useParams()

    return (
        <Layout>
            <h1>About</h1>
            <div>{name}</div>
        </Layout>
    )
}

export default About
