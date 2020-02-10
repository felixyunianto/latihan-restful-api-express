'use strict';

exports.ok = function(values, res){
    var data = {
        'message' : 'success',
        'status' :  true,
        'data' : values
    };
    res.json(data);
    res.end();
};