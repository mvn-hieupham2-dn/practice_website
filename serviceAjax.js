$(document).ready(()=>{
    url = "https://reqres.in/api/users";
    $.ajax({
        url: url,
        type:'get',
        dataType:'json',
        success:function (data) {
            console.log(data.data)    
            let ajaxList = document.querySelector(".listUserAjax > .row");
            ajaxList.innerHTML = data.data.map((item)=>{
            return ` 
            <li class="singleUser list-group-item col-6">
            <img src="${item.avatar} " alt="item img">
            </li>
            <li class="singleUser list-group-item col-6 text-center">
            ${item.id} -${item.first_name} - ${item.email} 
            </li>`
        })
        .join(' ')
        }
    })

})