const output = document.getElementById('output');
const text = document.querySelectorAll(".data p");
const category = document.querySelectorAll(".data small");


const data = [
    {
        "text": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "cat": "big",
        key: 1
    },
    {
        "text": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "cat": "medium",
        key: 2
    },
    {
        "text": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "cat": "small",
        key: 3
    },
    {
        "text": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "cat": "big",
        key: 4
    },
    {
        "text": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "cat": "medium",
        key: 5
    },
    {
        "text": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "cat": "small",
        key:  6
    },
    {
        "text": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "cat": "big",
        key:  7
    },
    {
        "text": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "cat": "medium",
        key:  8
    },
    {
        "text": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "cat": "small",
        key:  9
    }
];
let tempData = []

const showItem = (data) => {
    let html = ''
    data.forEach((item, index) => {
        html +=
            `<div class="data col-md-4" data-index="${item.key}" onclick="deleteHandler(${item.key})">
                <div class="card mb-4 box-shadow">
                  <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1906d79638c%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1906d79638c%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7265625%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="height: 225px; width: 100%; display: block;">
                  <div class="card-body">
                    <p class="card-text">${item.text}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small class="text-muted filter">${item.cat}</small>
                    </div>
                  </div>
                </div>
              </div>`
    });
    tempData = data;
    output.innerHTML = html;
}

showItem(data);

document.getElementById("input-filter").addEventListener('input',(event)=>{
    console.log(event.target.value);
    const filterValue = event.target.value;

    const newData = [];
    data.forEach((item) => {
        if(item.cat.includes(filterValue)){
            newData.push(item);
        }
    })
    console.log(newData)
    showItem(newData);
})

const deleteHandler = (key) => {
    tempData = tempData.filter((item) => {
        return item.key !== key;
    })
    showItem(tempData);
}


// const user={
//     name:'reza',
//     reza(){
//         console.log(this.name)
//     }
// }
// user.reza();
// setTimeout(user.reza, 1500);