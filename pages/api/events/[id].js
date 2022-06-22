import data from "../../../events.json"
export default function handler(req, res) {
    const {id} = req.query
    const event = data.find((e)=>e.id.toString()===id)
    if (event) {
        res.status(200).json(event)  
    }else{
        res.status(404).json(null)
    }
  }