import {getData} from "service.js";

let fetchFootList = async () => {
    let listFlood = await getData();
    renderFoodList(listFlood);
};
fetchFootList();
