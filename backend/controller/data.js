const Data = require("../model/data");

const saveData = async (req,res) => {
    let data = req.body;
    if(!data){
        console.log("Some error occured while fetching data");
    }
    const newData = await Data.create(data);
    res.status(200).json({success : true});
}

module.exports = saveData