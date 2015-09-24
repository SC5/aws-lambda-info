 // name_version_stage
var nameDelimiter = '_';
var baseNamePos = 0;
var versionPos = -2; // second last element
var stagePos = -1; // last element
var testName = null;


function partElement(list, pos) {
    if (pos < 0) {
        // Negative indexes start from end
        pos = list.length + pos;
    }

    return list[pos];
}

var initFn = function(params) {
    if (params.hasOwnProperty('nameDelimiter')) {
        nameDelimiter = params.nameDelimiter;
    }
    if (params.hasOwnProperty('baseNamePos')) {
        baseNamePos = params.baseNamePos;
    }
    if (params.hasOwnProperty('versionPos')) {
        versionPos = params.versionPos;
    }
    if (params.hasOwnProperty('stagePos')) {
        stagePos = params.stagePos;
    }

    return module;
}

var getBaseNameFn = function() {
    var parts = getFunctionNameFn().split(nameDelimiter);

    return partElement(parts, baseNamePos);
}

var getFunctionNameFn = function() {
    return process.env.AWS_LAMBDA_FUNCTION_NAME;
} 

var getStageFn = function() {
    if (stagePos === null) {
        return '';
    }

    var parts = getFunctionNameFn().split(nameDelimiter);
    return partElement(parts, stagePos);
}

var getVersionFn = function() {
    if (versionPos === null) {
        return '';
    }
    var parts = getFunctionNameFn().split(nameDelimiter);
    return partElement(parts, versionPos);  
}

module.exports = exports = {
    init: initFn,
    fullName: getFunctionNameFn,
    baseName: getBaseNameFn,
    stage: getStageFn,
    version: getVersionFn
};
