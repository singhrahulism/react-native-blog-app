import React, { useReducer } from 'react' ;

const BlogContext = React.createContext() ;

const reducer = (state, action) =>
{
    switch(action.type)
    {
        case 'add_blogPost':
            return [...state, {id: Math.floor(Math.random()*99999), title: `Blog Post #${state.length+1}`}]
        case 'delete_blogPost':
            return state.filter((blogPost) => {blogPost.id !== action.payload})
        default:
            return state ;
    }
}

export const BlogProvider = ({children}) =>
{
    const [blogPosts, dispatch] = useReducer(reducer, []) ;
    
    const addBlogPost = () =>
    {
        dispatch({type: 'add_blogPost'})
    }

    const deleteBlogPost = (id) =>
    {
        console.log({id})
        dispatch({type: 'delete_blogPost', payload: id})
    }

    return <BlogContext.Provider value={{
        data : blogPosts,
        addBlogPost,
        deleteBlogPost
    }}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext ;