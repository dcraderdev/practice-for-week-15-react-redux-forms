import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';

export const loadArticles = () => {
  return {
    type: LOAD_ARTICLES,
    articles
  };
};

const ADD_ARTICLES = 'article/addArticles';

export const addArticles = (article) => {
  return {
    type: ADD_ARTICLES,
    article
  };
};



const initialState = { entries: [], isLoading: true };
const articleReducer = (state = initialState, action) => {

const newState = { ...state}

  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    case ADD_ARTICLES:
      return { ...state, entries: [...action.article] };
    default:
      return state;
  }
};

export default articleReducer;