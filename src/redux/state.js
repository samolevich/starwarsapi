import App from '../App'

export const state = {
  usersPool: [
    { name: 'Rafael', route: 1 },
    { name: 'Michael', route: 2 },
    { name: 'Gabriel', route: 3 },
    { name: 'Asrael', route: 4 },
    { name: 'Asasel', route: 5 },
    { name: 'Sentiel', route: 6 },
    { name: 'Uriel', route: 7 },
    { name: 'Selaphiel', route: 8 },
    { name: 'Jegudiel', route: 9 },
  ],
  posts: ['string', 'anotherString']
};

export const addPost = (text) => {
  state.posts.push(text);
  new App()
}

export default state;
