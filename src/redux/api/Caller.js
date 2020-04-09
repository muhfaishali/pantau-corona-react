import axios from 'axios';

const appGet = async (url)=>{

    let resp = await axios.get(url).then(response => response.data)
    console.log({resp});
    
    return await resp;
}

export default {appGet}