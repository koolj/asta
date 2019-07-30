/*
 * Licensed under TesterPRO license, all rights reserved 2019.
 * Created by KoolJ, aka koolj@testerpro.org.
 * Feb 8, 2019.
 */
//Kết nối CSDL Couchbase
var fb_p_bucket = '';
var couchbase = '';
const serverUrl = '45.118.145.34';
const connectCouchbase = async () => {
    try {
        
        var couchbase = require('couchbase');
        var cluster = new couchbase.Cluster('couchbase://' + serverUrl);
        cluster.authenticate('ufp', 'bb123456');
        
        var fb_p_bucket = cluster.openBucket('fb_p');
        fb_p_bucket.enableN1ql(serverUrl+":8093")

        fb_p_bucket.upsert('testdoc', {uid:'u1'}, function(err, result) {
        if (err) throw err;

        fb_p_bucket.get('testdoc', function(err, result) {
            if (err) throw err;

            console.log(result.value);
            console.log('Connect Couchbase successfully!');
        });
        });
        

    } catch(error) {
        console.log(`Cannot connect Couchbase. Error: ${error}`)
    }
}
connectCouchbase()
