# aws-lambda-info NPM module

A module for determining AWS Lambda function information.
Version and stage information can be determined from the lambda function name.

## Use example

### Example 1: default function naming (baseName_version_stage)
    var lambdaInfo = require("aws-lambda-info");
                  
    var funcName = lambdaInfo.fullName(); # e.g. myFunction_1.0.1_prod
    var baseName = lambdaInfo.baseName(); # myFunction
    var version = lambdaInfo.version();   # 1.0.1
    var stage = lambdaInfo.stage();       # prod

### Example 2: custom naming (e.g. stage:baseName:version)
    var lambdaInfo = require("aws-lambda-info");
    lambdaInfo.init({
        nameDelimiter: ':',  # Delimiter separating the name, stage, version
        baseNamePos: 1,
        stagePos: 0,
        versionPos: -1        # -1: last, -2: second last...
    });

### Example 3: custom naming (e.g. stage:baseName)
    lambdaInfo.init({
        nameDelimiter: ':',  # Delimiter separating the name, stage, version
        baseNamePos: 1,
        stagePos: 0,
        versionPos: null        # null: param not included in name
    });

    var version = lambdaInfo.version();  # (returns empty string)

## Release History

* 2015/09/24 - v0.1.0 - Initial version of module

## License

Copyright (c) 2015 [SC5](http://sc5.io/), licensed for users and contributors under MIT license.
https://github.com/SC5/aws-lambda-info/blob/master/LICENSE


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/SC5/sc5-aws-lambda-info/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
