let fetchUSer = document.querySelector(".listUserFetch > .row");
let url = "https://reqres.in/api/users"
fetch(url)
  .then(response => response.json())
  .then(data => {
      let dataUser = data.data
      console.log("check data 2",dataUser);
    fetchUSer.innerHTML = dataUser.map((item)=>{
        return ` 
        <li class="singleUser list-group-item col-4">
        <img src="${item.avatar} " alt="item img">
        </li>
        <li class="singleUser list-group-item col-4 text-center">
        ${item.id} -${item.first_name} - ${item.email} 
        </li>
        <li class="singleUser list-group-item col-4 text-center">
        </li>`
  })
  .join('')
})
.catch(err => console.log(err))


