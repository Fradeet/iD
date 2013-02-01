iD.operations.Delete = function(selection, context) {
    var operation = function() {
        var annotation;

        if (selection.length === 1) {
            annotation = t('operations.delete.annotation.' + context.geometry(selection[0]));
        } else {
            annotation = t('operations.delete.annotation.multiple', {n: selection.length});
        }

        context.perform(
            iD.actions.DeleteMultiple(selection),
            annotation);
    };

    operation.available = function() {
        return true;
    };

    operation.enabled = function() {
        return true;
    };

    operation.id = "delete";
    operation.key = t('operations.delete.key');
    operation.title = t('operations.delete.title');
    operation.description = t('operations.delete.description');

    return operation;
};
