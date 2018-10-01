const _ = require('lodash');
const moment = require('moment');


function camelCaseObjectKeys(obj, options = { deep: true }) {
    return changeKeyCase(obj, _.camelCase, options);
}



function changeKeyCase(obj, caseFunc, options) {

    // DEEP = TRUE
    const { deep } = options;

    return _.transform(obj, (result, value, key) => {
        const valueIsArray = _.isArray(value);
        const caseKey = caseFunc(key);  // Make output to camel case ex. aa_aa = aaAa
        if(caseKey === 'createdAt' || caseKey === 'updatedAt' || caseKey === 'deletedAt'){
          return ;
        }

        if (deep && _.isObject(value) && !valueIsArray) {
            if(!_.isDate(value)){
              result[caseKey] = changeKeyCase(value, caseFunc, options);
              return;
            } else {
              value = moment(value).format('DD/MM/YY');
            }
        }

        if (deep && valueIsArray && _.some(value, _.isObject)) {
            const newArr = [];
            _.each(value, (v) => {
              if(!_.isString(v)){
                newArr.push(changeKeyCase(v, caseFunc, options));
              } else {
                newArr.push(v);
              }
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
