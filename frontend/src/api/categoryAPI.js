import { axiosClient } from './axiosClient';

const CategoryAPI = {
    getAll(){
        const url = `/categories`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/category/${id}`;
        return axiosClient.get(url);
    },
    add(category){
        const url = `/category`;
        return axiosClient.post(url, category)
    },
    remove(id){
        const url =`/category/${id}`;
        return axiosClient.delete(url)

    },
   
}
export default CategoryAPI;