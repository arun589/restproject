function savetolocalStorage(event){
    event.preventDefault();
    const can=event.target.candy.value;
    const desc=event.target.description.value;
    const pri=event.target.price.value;
    const quan=event.target.quantity.value;
    const obj={
        can,
        desc,
        pri,
        quan
    }
    axios.post("https://crudcrud.com/api/5bf79745466a42a181d78f4abb83bd45/candyData",obj)
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
    screen(obj);
  }
  function screen(obj){
    var parentele=document.getElementById("list");
    var child=document.createElement("li");
    child.textContent=obj.can +" - "+obj.desc +" - "+obj.pri+" - "+obj.quan;
    const buy1=document.createElement("input");
    buy1.type="button";
    buy1.value="buy1";
    buy1.onclick=()=>{
        const data=obj._id;
       // alert(`https://crudcrud.com/api/f8a5fff895524b2c8685cc444933426a/candyData/${data}`);
        //alert(data);
        //const qu=obj.quan-1;
        if(obj.quan<=0)
        {
            alert("empty");
            return;
        }
        axios.put(`https://crudcrud.com/api/5bf79745466a42a181d78f4abb83bd45/candyData/${data}`,{
            can:obj.can,
            desc:obj.desc,
            pri:obj.pri,
            quan :obj.quan-1
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
        parentele.removeChild(child);
        obj.quan=obj.quan-1;
        screen(obj);
       
        
    }
    const buy2=document.createElement("input");
    buy2.type="button";
    buy2.value="buy2";
    buy2.onclick=()=>{
        const data=obj._id;
       // alert(`https://crudcrud.com/api/f8a5fff895524b2c8685cc444933426a/candyData/${data}`);
        //alert(data);
        //const qu=obj.quan-1;
        if(obj.quan<=1)
        {
            alert("empty");
            return;
        }
        axios.put(`https://crudcrud.com/api/5bf79745466a42a181d78f4abb83bd45/candyData/${data}`,{
            can:obj.can,
            desc:obj.desc,
            pri:obj.pri,
            quan :obj.quan-2
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
        parentele.removeChild(child);
        obj.quan=obj.quan-2;
        screen(obj);
    }
    const buy3=document.createElement("input");
    buy3.type="button";
    buy3.value="buy3";
    buy3.onclick=()=>{
        const data=obj._id;
       
        if(obj.quan<=2)
        {
            alert("empty");
            return;
        }
        axios.put(`https://crudcrud.com/api/5bf79745466a42a181d78f4abb83bd45/candyData/${data}`,{
            can:obj.can,
            desc:obj.desc,
            pri:obj.pri,
            quan :obj.quan-3
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
        parentele.removeChild(child);
        obj.quan=obj.quan-3;
        screen(obj);
    }
    
    child.appendChild(buy1);
    child.appendChild(buy2);
    child.appendChild(buy3);
    parentele.appendChild(child);
}
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/5bf79745466a42a181d78f4abb83bd45/candyData")
        .then((res)=>{
            for(let i=0;i<res.data.length;i++)
            {
                screen(res.data[i]);
            }
        })
        .catch((err)=>console.log(err));
})