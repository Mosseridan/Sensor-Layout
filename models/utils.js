
exports.contains = function(model, doc, onError, onTrue, onFalse) {
    if (!doc._id) return onError('No id specified.');
    if (!doc.name) return onError('No name specified.');
    model.findOne({ $or: [{ 'name': doc.name }, { '_id': doc._id }] }, (err, doc) => {
        if(err) return onError(err);
        if(doc) return onTrue(doc);
        return onFalse();
    });
}


exports.containsById = function(model, id, onError, onTrue, onFalse) {
    if (!id) return onError('No id specified.');
    model.findOne({ '_id': id }, (err, doc) => {
        if(err) return onError(err);
        if(doc) return onTrue(doc);
        return onFalse();
    });
}


exports.containsByName = function(model, name, onError, onTrue, onFalse) {
    if (!name) return onError('No name specified.');
    model.findOne({ 'name': name }, (err, doc) => {
        if(err) return onError(err);
        if(doc) return onTrue(doc);
        return onFalse();
    });
}


exports.validateField = function(model, field, fieldKind, onError, onSuccess) {
    if (!field) return onError('No '+ fieldKind +' specified.');
    this.contains(
        model, // model
        field, // doc
        onError, // onError
        onSuccess, //onTrue
        () => onError('Invalid '+ fieldKind +' specified: '+ field +'.') //onFalse
    );
}

exports.validateFieldById = function(model, id, fieldKind, onError, onSuccess) {
    this.containsById(
        model, // model
        id, // id
        onError, // onError
        onSuccess, //onTrue
        () => onError('Invalid '+ fieldKind +' specified: '+ name +'.') //onFalse
    );
}


exports.validateFieldByName = function(model, name, fieldKind, onError, onSuccess) {
    this.containsByName(
        model, // model
        name, // name
        onError, // onError
        onSuccess, //onTrue
        () => onError('Invalid '+ fieldKind +' specified: '+ name +'.') //onFalse
    );
}


exports.validateFields = function(model, fields, fieldKind, onError, onSuccess) {
    // TODO: IMPLEMENT THIS.
    onSuccess();
    // if (!field) return onError('No '+ fieldKind +' specified.');
    // utils.contains(
    //     model, // model
    //     field, // doc
    //     onError, // onError
    //     onSuccess, //onTrue
    //     () => onError('Invalid '+ fieldKind +' specified: '+ field +'.') //onFalse
    // );
}


exports.addDoc = function(model, doc, docKind, onError, onSuccess) {
    this.contains(
        model, // model
        doc, // doc
        onError, // onError
        (doc) => onError('This '+ docKind +' already exists.'), //onTrue
        () => doc.save((err,doc) => { //onFalse
            if(err) onError(err);
            else onSuccess(doc);
        })
    );
}

exports.getDeleteOnError = function(model, doc, onError) {
    return (err) =>{
        model.remove({ _id: doc._id }, (rmErr)  => {
            if (rmErr) return onError(rmErr);
            onError(err);
        });
    }
}

exports.getCallback = function(onError, onSuccess) {
  return function(err, res){
    if (err) onError(err);
    else onSuccess(res);
  }
}

exports.NamedObject = { _id: String, name: String}
