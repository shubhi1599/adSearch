import Ads from '../model/Ads';

export const search = async (req, res, next) => {
    let info = [];
    try{
        console.log(req.query.keyword);
         info = await Ads.aggregate([{
            $match:{
                $text:{
                    $search: req.query.keyword
                }
            }
         },{
             $lookup : { 
                from : "companies",
                localField: "companyId",
                foreignField: "_id",
                as: "complete_info"  }, 
            }
        ]);
        }catch(e){
            console.log(e);
        }
    return res.json({info});
};