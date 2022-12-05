import Ads from '../model/Ads';

export const search = async (req, res, next) => {
    let info = [];
    try {
        info = await Ads.aggregate([{
            $lookup: {
                from: "companies",
                localField: "companyId",
                foreignField: "_id",
                as: "company"
            },
        }, {
            $unwind: {
                'path': '$company'
            }
        },
        { $match: {
                $or: [
                    { "company.name": { '$regex': req.query.keyword, '$options': 'i' } },
                    { "primaryText": { '$regex': req.query.keyword, '$options': 'i' } },
                    { "headline": { '$regex': req.query.keyword, '$options': 'i' } },
                    { "description": { '$regex': req.query.keyword, '$options': 'i' } },
                ]
            }
        }
        ]);
    } catch (e) {
        console.log(e);
    }
    return res.json({ info });
};