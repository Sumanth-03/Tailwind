import axios from 'axios';


export const postFormData = (formData ,navigate) => {
    
    axios.post('https://jsonplaceholder.typicode.com/posts', formData)
        .then(response => {
          navigate('/acknowledge', { state: { formData: formData } });
        })
        .catch(error => {
          console.log('There was an error submitting the form!', error);
        });
}

export const getData = (navigate) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            navigate('./displayResponse',{state:{response : res.data}})
        })
        .catch((error)=>{
            console.log('Unable to fetch data ', error)
        })
}


