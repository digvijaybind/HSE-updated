/*eslint-disable*/
import axios from "axios";

const getData=async(term)=>{
  var config = {
    method: 'get',
  maxBodyLength: Infinity,
    url: `https://api.freepik.com/v1/icons?term=${term}`,
    headers: { 
      'Accept-Language': 'en-US', 
      'Accept': 'application/json', 
      'Content-Type': 'application/json', 
      'X-Freepik-API-Key': ''
    }
  };
    
     const response=await axios(config)
     data1=await JSON.stringify(response.data)
     data1= await JSON.parse(data1).data
     const url=data1[0].thumbnails[0].url
     return url;
}

export default getData;
