import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Tyson Oliveira" 
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum nesciunt earum     placeat, sapiente velit voluptatibus officiis ducimus! Aliquam maiores eligendi sequi autem molestiae, sapiente incidunt excepturi eum accusantium corporis! Minus!" 
      />

      <Post 
        author="Thais"
        content="Um novo post"
      />
    </div>
  )
}
