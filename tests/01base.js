/*global before:false */
var expect = require('expect');
var lambdaInfo = require('../index.js');
var funcBasename = 'lambdaFunction';
var funcVersion = '0.1.0';
var funcStage = 'dev';
var funcName;

describe('aws-lambda-info', function() {
    describe('basic settings, notation base_version_stage', function () {
        before(function(done) {
            funcName = process.env['AWS_LAMBDA_FUNCTION_NAME'] = [
                funcBasename,
                funcVersion,
                funcStage
            ].join('_');
            done();
        });

        it('fullName()', function(done) {  
            expect(funcName).toEqual(lambdaInfo.fullName());
            done();
        });

        it('baseName()', function(done) {
            expect(funcBasename).toEqual(lambdaInfo.baseName());
            done();
        });

        it('version()', function(done) {
            expect(funcVersion).toEqual(lambdaInfo.version());
            done();
        });

        it('stage()', function(done) {
            expect(funcStage).toEqual(lambdaInfo.stage());
            done();
        });
    });

    describe('custom settings, notation stage:base:version', function () {
        before(function(done) {
            funcName = process.env['AWS_LAMBDA_FUNCTION_NAME'] = [
                funcStage,
                funcBasename,
                funcVersion
            ].join(':');

            lambdaInfo.init({
                baseNamePos: 1,
                nameDelimiter: ':',
                versionPos: -1,
                stagePos: 0
            });

            done();
        });

        it('fullName()', function(done) {  
            expect(funcName).toEqual(lambdaInfo.fullName());
            done();
        });

        it('baseName()', function(done) {
            expect(funcBasename).toEqual(lambdaInfo.baseName());
            done();
        });

        it('version()', function(done) {
            expect(funcVersion).toEqual(lambdaInfo.version());
            done();
        });

        it('stage()', function(done) {
            expect(funcStage).toEqual(lambdaInfo.stage());
            done();
        });
    });

    describe('custom settings, notation base-stage', function () {
        before(function(done) {
            funcName = process.env['AWS_LAMBDA_FUNCTION_NAME'] = [
                funcBasename,
                funcStage
            ].join('-');

            lambdaInfo.init({
                baseNamePos: 0,
                nameDelimiter: '-',
                versionPos: null,
                stagePos: -1
            });

            done();
        });

        it('fullName()', function(done) {  
            expect(funcName).toEqual(lambdaInfo.fullName());
            done();
        });

        it('baseName()', function(done) {
            expect(funcBasename).toEqual(lambdaInfo.baseName());
            done();
        });

        it('version()', function(done) {
            expect('').toEqual(lambdaInfo.version());
            done();
        });

        it('stage()', function(done) {
            expect(funcStage).toEqual(lambdaInfo.stage());
            done();
        });
    });
});
