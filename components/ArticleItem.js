
import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'
import Image from 'next/image'

const ArticleItem = ({ article }) => {
  return (
    <Link href={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.title} </h3>
       
        <Image
  
    alt="The guitarist in the concert."
    src={`/images/${article.image}`}
    width="500"
    height="500"
    layout="responsive"
/>
<h3>{article.date}</h3>
      </a>
    </Link>
  )
}

export default ArticleItem
