import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({ author, publishedAt }) { 
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  return (
    <article className={styles.post}> 
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:30'>
          {publishedDateFormatted}
        </time>

      </header>

      <div className={styles.content}>
        <p>Fala galera</p> 
        <p> a Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ut cum dolore totam iusto animi hic laboriosam </p>
        <p>facilis mollitia aliquid reiciendis odit quod quidem eligendi perspiciatis, at optio unde sed.</p> 
        <p>{' '}<a href="">Developer/javaScript</a></p>
        <p>
          <a href="">#novoprojeto</a>&nbsp;&nbsp;
          <a href="">#nlw</a>&nbsp;&nbsp;
          <a href="">#rocketseat</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe se feedback</strong>

        <textarea placeholder='Deixe um comentário' />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList} >
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}

