var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectId;

let dbName = "";
let connection = "";

function Database(dbName, connection)
{
	this.dbName = dbName;
	this.connection = connection;
}

Database.prototype.CreateCollection = function(collection)
{
	MongoClient.connect(this.connection, { useNewUrlParser: true }, (err, db) => {
		if (err)
		{
            console.log(err);
            return;
        }
		var dbo = db.db(this.dbName);
		dbo.createCollection(collection, (err, res) => {
			if (err) throw err;
			db.close();
		});
	});
};

Database.prototype.Create = function(collection, obj)
{
	MongoClient.connect(this.connection, { useNewUrlParser: true }, (err, db) => {
        if (err)
        {
            console.log(err);
            return;
        }
		var dbo = db.db(this.dbName);
		dbo.collection(collection).insertOne(obj, () => {
			if (err) throw err;
		    db.close();
		});
	});
};

Database.prototype.Get = function(collection, id, callBack)
{
	MongoClient.connect(this.connection, { useNewUrlParser: true },
		(err, db) => 
		{
            if (err)
            {
                console.log(err);
                return;
            }
			var dbo = db.db(this.dbName);
			var query = {_id: ObjectID(id)};
			dbo.collection(collection).find(query).toArray((err, result) => {
				if (err) throw err;
    			db.close();
    			return callBack(result);
			});
			
		});
}

Database.prototype.GetAllForCollection = function(collection, callBack)
{
	MongoClient.connect(this.connection, { useNewUrlParser: true }, (err, db) => {
        if (err)
        {
            console.log(err);
            return;
        }
		var dbo = db.db(this.dbName);
		dbo.collection(collection).find({}).toArray((err, result)=> 
		{
    		if (err) throw err;
    		db.close();
    		return callBack(result);
  		});
	});
}

Database.prototype.Update = function(collection, obj)
{

}

Database.prototype.Delete = function(collection, id)
{
    MongoClient.connect(this.connection, { useNewUrlParser: true }, (err, db) => {
        if (err)
        {
            console.log(err);
            return;
        }
        var dbo = db.db(this.dbName);
        var myquery = {_id: ObjectID(id)};
        console.log(myquery);
        dbo.collection(collection).deleteOne(myquery);
        console.log("deleted");
    });
}

module.exports = Database;

