import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
 return <div>heyoo <pre>{JSON.stringify(process.env,null,2)}</pre></div>
}
