
const add = (array, prop)=>{
return(id, content)=>{
const id2 = Object.keys(id)[0];
const index = array.findIndex(obj => obj[id2] == id[id2]);
if(index == -1){
array.push({[id2] : id[id2], [prop] : content})
}else {
array[index][prop] += ` ${content}`;
}
return array;
  }
}

const remove = (array)=>{
return (id)=>{
const id2 = Object.keys(id)[0];
const index = array.findIndex(obj => obj[id2] == id[id2]);
return (array.splice(index, 1), array)
 }
}
const edit = (array, prop)=>{
return(id, content)=>{
const id2 = Object.keys(id)[0];
const index = array.findIndex(obj => obj[id2] == id[id2]);
array[index][prop] = `${content}`;
return array;
  }
}
const read = (array, prop)=>{
return(id, content)=>{
return array;
  }
}

module.exports = {
add,
remove,
edit,
read
}