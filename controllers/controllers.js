


export let renderData = (navPills) => {
    let content = '';
    foodArr.map((item) => {
        content += `
            <li class="nav-item">
              <a class="nav-link" href="#">item</a>
            </li>
        `;
    });
    document.getElementById("navPills").innerHTML = content;
};
