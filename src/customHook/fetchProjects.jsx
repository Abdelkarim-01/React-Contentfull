import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
    space: 'emmjbirsp9pg',
    environment: 'master', // defaults to 'master' if not set
    accessToken: import.meta.env.VITE_API_KEY,
  });

// client.getEntries({ content_type:'projects' }).
//     then(response => console.log(response));

const useFetchProjects=()=>{
    const [loading,setLoading] =useState(true)
    const [projects,setProjects] =useState([]) 
    const getData= async()=>{
        try {
            const response = await client.getEntries({ content_type:'projects' }) ;
            const data = response.items.map(item=>{
                return {
                    id : item.sys.id ,
                    title :item.fields.title,
                    url :item.fields.url,
                    img :item.fields.image.fields.file.url
                }
            })
            setLoading(false) ;
            setProjects(data);
            
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
        getData()
    },[])

    return {loading,projects} ;
}

export default useFetchProjects;