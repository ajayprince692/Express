export const findIndex = (array,id)=>{
    for(i=0;i<array.length;i++){
        if(array[i].id==id){
            return i
        }
    }
    return -1
}

