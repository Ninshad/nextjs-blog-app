import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'

import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }) => {

  const [relatedPost, setRelatedPost] = useState([])
  useEffect(() => {
    if(slug){
      getSimilarPosts(categories, slug).then((result)=> setRelatedPost(result))
    }else{
      getSimilarPosts().then((result)=> setRelatedPost(result))
    }
    
  }, [slug])
  
  console.log(relatedPost);

  return (
    <div>PostWidget</div>
  )
}

export default PostWidget