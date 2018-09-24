const _ = require('lodash');

function camelCaseObjectKeys(obj, options = { deep: true }) {
    return changeKeyCase(obj, _.camelCase, options);
}

function changeKeyCase(obj, caseFunc, options) {
    const { deep } = options;

    return _.transform(obj, (result, value, key) => {
        const valueIsArray = _.isArray(value);
        const caseKey = caseFunc(key);
        if (deep && _.isObject(value) && !valueIsArray) {
            result[caseKey] = changeKeyCase(value, caseFunc, options);
            return;
        }

        if (deep && valueIsArray && _.some(value, _.isObject)) {
            const newArr = [];
            _.each(value, (v) => {
                newArr.push(changeKeyCase(v, caseFunc, options));
            });
            result[caseKey] = newArr;
            return;
        }

        result[caseKey] = value;
    }, {});
}

module.exports = {
    camelCaseObjectKeys,
};
