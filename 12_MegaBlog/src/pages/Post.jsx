import React,{useEffect,useState} from 'react';
import { useParams,Link,useNavigate } from 'react-router-dom';
import appwriteservice from '../appwrite/config';
import {Container,Button} from '../components';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';

export default function Post() {

    const [post,setPost] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state)=>state.auth.userData);

    const isAuthor = post && userData?post.userId === userData.$id:false;

    useEffect(()=>{
        if(slug){
            appwriteservice.getPost(slug).then((post)=>{
                if(post) setPost(post);
                else navigate('/')
            })
        }
    },[slug,navigate])

    const deletePost = () => {
        appwriteservice.deletePost(slug).then((status)=>{
            if(status){
                appwriteservice.deleteFile(post.featuredImage);
                navigate('/');
            }
        })
    }

  return post?(
    <div className='py-8'>
        <Container>
            <div className='w-full flex justify-center mb-4 relative border rounded-xl p-2'>
                <img src={appwriteservice.getFilePreview(post.featuredImage)}
                 alt={post.title}
                 className='rounded-xl' 
                />

                {isAuthor && (
                    <div className='absolute top-6 right-6'>
                        <Link to={`/edit-post/${post.$id}`}>
                            <Button bgColor="bg-green-500" className="mr-3">Edit</Button>
                        </Link>
                        <Button className='bg-red-500' onClick={deletePost}>Delete</Button>
                    </div>
                )}
            </div>

            <div className="w-full mb-6">
                <h1 className="text-2xl font-bold">{post.title}</h1>
            </div>

            <div className="browser-css">
                {parse(post.content)}
            </div>
        </Container>
    </div>
  ):null
}

