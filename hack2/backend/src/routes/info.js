// * ////////////////////////////////////////////////////////////////////////
// *
// * FileName     [ info.js ]
// * PackageName  [ server ]
// * Synopsis     [ Get restaurant info from database ]
// * Author       [ Chin-Yi Cheng ]
// * Copyright    [ 2022 11 ]
// *
// * ////////////////////////////////////////////////////////////////////////

import Info from '../models/info'


exports.GetSearch = async (req, res) => {
    /*******    NOTE: DO NOT MODIFY   *******/
    const priceFilter = req.query.priceFilter
    const mealFilter  = req.query.mealFilter
    const typeFilter  = req.query.typeFilter
    const sortBy      = req.query.sortBy
    /****************************************/
    
    console.log(priceFilter);
    if(sortBy === 'distance'){
        await Info.find({}).sort('distance').exec((err, data) => {
                if(err){
                    res.status(403).send({message: 'error', contents: []});
                }
                else{
                    if(priceFilter !== undefined){
                        for(var i = 0; i<priceFilter.length; i++){
                            priceFilter[i] = JSON.parse(priceFilter[i]);
                            console.log(priceFilter[i]);
                        }
                        data = data.filter((x) => priceFilter.indexOf(x.price) !== -1);
                    }
                    if(mealFilter !== undefined){
                        data = data.filter((x) => {
                            for(var i = 0; i < mealFilter.length; i++){
                                for(var j = 0; j < x.tag.length; j++){
                                    if(mealFilter[i] === x.tag[j]){
                                        return true;
                                    }
                                }
                            }
                            return false;
                        })
                    }
                    if(typeFilter !== undefined){
                        data = data.filter((x) => {
                            for(var i = 0; i < typeFilter.length; i++){
                                for(var j = 0; j < x.tag.length; j++){
                                    if(typeFilter[i] === x.tag[j]){
                                        return true;
                                    }
                                }
                            }
                            return false;
                        })
                    }
                    res.status(200).send({message: 'success', contents: data});
                }
            }
        )
    }
    else{
        await Info.find({}).sort('price').exec((err, data) => {
            if(err){
                res.status(403).send({message: 'error', contents: []});
            }
            else{
                if(priceFilter !== undefined){
                    for(var i = 0; i<priceFilter.length; i++){
                        priceFilter[i] = JSON.parse(priceFilter[i]);
                        console.log(priceFilter[i]);
                    }
                    data = data.filter((x) => priceFilter.indexOf(x.price) !== -1);
                }
                if(mealFilter !== undefined){
                    data = data.filter((x) => {
                        for(var i = 0; i < mealFilter.length; i++){
                            for(var j = 0; j < x.tag.length; j++){
                                if(mealFilter[i] === x.tag[j]){
                                    return true;
                                }
                            }
                        }
                        return false;
                    })
                }
                if(typeFilter !== undefined){
                    data = data.filter((x) => {
                        for(var i = 0; i < typeFilter.length; i++){
                            for(var j = 0; j < x.tag.length; j++){
                                if(typeFilter[i] === x.tag[j]){
                                    return true;
                                }
                            }
                        }
                        return false;
                    })
                }
                res.status(200).send({message: 'success', contents: data});
            }
        }
    )
    }
    // NOTE Hint: 
    // use `db.collection.find({condition}).exec(err, data) {...}`
    // When success, 
    //   do `res.status(200).send({ message: 'success', contents: ... })`
    // When fail,
    //   do `res.status(403).send({ message: 'error', contents: ... })` 
    

    // TODO Part I-3-a: find the information to all restaurants
    
    // TODO Part II-2-a: revise the route so that the result is filtered with priceFilter, mealFilter and typeFilter
    // TODO Part II-2-b: revise the route so that the result is sorted by sortBy
}

exports.GetInfo = async (req, res) => {
    /*******    NOTE: DO NOT MODIFY   *******/
    const id = req.query.id
    /****************************************/
    
    // NOTE USE THE FOLLOWING FORMAT. Send type should be 
    // if success:
    // {
    //    message: 'success'
    //    contents: the data to be sent. Hint: A dictionary of the restaruant's information.
    // }
    // else:
    // {
    //    message: 'error'
    //    contents: []
    // }

    // TODO Part III-2: find the information to the restaurant with the id that the user requests
}