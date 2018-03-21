
exports.contains = function(model, doc, onError, onTrue, onFalse) {
    if (!doc._id) return onError('No id specified.');
    if (!doc.name) return onError('No name specified.');
    model.findOne({ $or: [{ 'name': doc.name }, { '_id': doc._id }] }, (err, doc) => {
        if(err) return onErr(err);
        if(doc) return onTrue(doc);
        return onFalse();
    });
}


exports.containsById = function(model, id, onError, onTrue, onFalse) {
    if (!id) return onError('No id specified.');
    model.findOne({ '_id': id }, (err, doc) => {
        if(err) return onErr(err);
        if(doc) return onTrue(doc);
        return onFalse();
    });
}


exports.containsByName = function(model, name, onError, onTrue, onFalse) {
    if (!name) return onError('No name specified.');
    model.findOne({ 'name': name }, (err, doc) => {
        if(err) return onErr(err);
        if(doc) return onTrue(doc);
        return onFalse();
    });
}


exports.validateField = function(model, field, fieldKind, onError, onSuccess) {
    if (!field) return onError('No '+ fieldKind +' specified.');
    utils.contains(
        model, // model
        field, // doc
        onError, // onError
        onSuccess, //onTrue
        () => onError('Invalid '+ fieldKind +' specified: '+ field +'.') //onFalse
    );
}

exports.validateFieldById = function(model, namide, fieldKind, onError, onSuccess) {
    utils.containsById(
        model, // model
        id, // id
        onError, // onError
        onSuccess, //onTrue
        () => onError('Invalid '+ fieldKind +' specified: '+ name +'.') //onFalse
    );
}


exports.validateFieldByName = function(model, name, fieldKind, onError, onSuccess) {
    utils.containsByName(
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
    utils.contains(
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
