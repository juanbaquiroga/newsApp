import Link from 'next/link'
import PageLayout from '@/components/pageLayout'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'

export default function Home({articles}) {
    //fetching de datos desde el cliente
    // const [articles, setArticles] = useState([])
    // useEffect(()=>{
    //     fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5dfe720ad96a4b5cb0ffbe69db514eb6')
    //         .then(res => res.json())
    //         .then( resposnse =>{
    //             const {articles} = resposnse
    //             setArticles(articles)
    //         })
    // },[])
  return(
        <PageLayout title="newsapi - home">
            <div className={styles.container}>
                {articles.leng == 0 && <p>loading ...</p>}
                {articles.length > 0 && articles.map((article, index) =>(
                    <article key={index}>
                        <img alt={`image for the article ${article.title}`} src={article.urlToImage}></img>
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                    </article>
                ))}
            </div>
        </PageLayout>
  )
}

export async function getServerSideProps(){
    const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5dfe720ad96a4b5cb0ffbe69db514eb6')
    const {articles} = await response.json()
    //aqui tambien podriamos acceder a la base de datos y enviar la informacion(mediante mongoose por ejemplo)
    return{
        props:{
            articles
        }
    }
}
