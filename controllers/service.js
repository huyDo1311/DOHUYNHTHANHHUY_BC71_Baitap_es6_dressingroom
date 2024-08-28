const URL_BASE = "../data/Data.json"

export let getData = async() => {
    let res = await axios({
        url: BASE_URL,
        method: "GET"
    });
    return res.data;
};