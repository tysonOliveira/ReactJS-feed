import { Header } from './components/Header';
import { Post } from './Post';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper} >
        <aside>
          sidebar
        </aside>
        <main>
          <Post
            author="Tyson Oliveira"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur pariatur quos ea dolorum! Laboriosam, ex iusto, quidem amet totam molestiae accusamus eius ab, earum ipsa consectetur expedita at? Consequuntur, expedita?"
          />
          <Post
            author="Oliveira"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa tenetur excepturi, incidunt placeat harum voluptatibus deleniti enim. Ipsam, facere qui cum magnam aliquid aliquam corporis dolore pariatur sed officiis. Hic."
          />
        </main>    
      </div>
    </div>
  )
}
