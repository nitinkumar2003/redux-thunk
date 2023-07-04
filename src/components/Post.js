import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchPostJsonplaceholder } from '../redux/postActions'

const Post = () => {
const dispatch=useDispatch()
const {postInfo}=useSelector(state=>state)
console.log('postInfo',postInfo)

useEffect(()=>{
    dispatch(fetchPostJsonplaceholder())
},[])

  return (
    <div>Post</div>
  )
}

export default Post