let data = "../data/Data.json";
let khoDo = []
function getData() {
  axios
    .get(data)
    .then((response) => {
      console.log(response.data);
      renderNavPills(response.data.navPills);
      renderTabPanes(response.data);
      khoDo = response.data ;
    })
    .catch((error) => {
      console.error("Có lỗi xảy ra:", error);
    });
}

getData();

function renderNavPills(data) {
  var content = "";
  data.map((item) => {
    content += ` <li class="nav-item">
            <a class="nav-link" id="${item.tabName}-tab" data-toggle="pill" href="#${item.tabName}">
              ${item.showName}
            </a>
          </li>`;
  });
  document.getElementById("navPills").innerHTML = content;
}

function renderTabPanes(data) {
  var content = "";
  data.navPills.map((item, index) => {
    content += `
    <div class="tab-pane fade${index === 0 ? " show active" : ""}" id="${
      item.tabName
    }">
        <div class="row">
            ${data.tabPanes
            .filter((pane) => pane.type === item.type) 
            .map((pane) =>`
                                <div class="col-md-4">
                                    <div class="card">
                                    <img src="${pane.imgSrc_jpg}" class="card-img-top" alt="${pane.name}">
                                    <div class="card-body text-center">
                                        <h5 class="card-title">${pane.name}</h5>
                                        <button onclick="fittingRoom('${pane.id}')">Thử đồ</button>
                                    </div>
                                    </div>
                                </div>`).join("")}    
        </div>
    </div>`});

  document.getElementById("tabPanes").innerHTML = content;
}

function fittingRoom(id) {
    let {tabPanes} = khoDo;
    let clotheItem = tabPanes.find((item) => {
        return item.id === id;
    })
    if (clotheItem.type === 'topclothes') {
        document.getElementById('topclothes').innerHTML = `<img style="width:100%;" src="${clotheItem.imgSrc_png}" alt="${clotheItem.name}">`;
    } else if (clotheItem.type === 'botclothes') {
        document.getElementById('botclothes').innerHTML = `<img style="width:100%;" src="${clotheItem.imgSrc_png}" alt="${clotheItem.name}">`;
    } else if (clotheItem.type === 'shoes') {
        document.getElementById('shoes').innerHTML = `<img style="width:100%;" src="${clotheItem.imgSrc_png}" alt="${clotheItem.name}">`;
    } else if (clotheItem.type === 'handbags') {
        document.getElementById('handbags').innerHTML = `<img style="width:100%;" src="${clotheItem.imgSrc_png}" alt="${clotheItem.name}">`;
    } else if (clotheItem.type === 'necklaces') {
        document.getElementById('necklaces').innerHTML = `<img style="width:100%;" src="${clotheItem.imgSrc_png}" alt="${clotheItem.name}">`;
    } else if (clotheItem.type === 'hairstyle') {
        document.getElementById('hairstyle').innerHTML = `<img src="${clotheItem.imgSrc_png}" alt="${clotheItem.name}">`;
    } else if (clotheItem.type === 'background') {
        document.getElementById('background').innerHTML = `<img style="height: 100%" src="${clotheItem.imgSrc_png}" alt="${clotheItem.name}">`;
    } else {
        alert("Không có món đồ");
    }
}
