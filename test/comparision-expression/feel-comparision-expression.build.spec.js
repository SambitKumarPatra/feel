/*
*
*  ©2016-2017 EdgeVerve Systems Limited (a fully owned Infosys subsidiary),
*  Bangalore, India. All Rights Reserved.
*
*/
var chalk = require('chalk');
var chai = require('chai');
var expect = chai.expect;
var FEEL = require('../../dist/feel');

describe(chalk.blue('Comparision expression ast parsing test'), function() {

    it('Successfully builds ast from simple comparision expression', function(done) {
        var text = '5 in (<= 5)';

        var parsedGrammar = FEEL.parse(text);
        parsedGrammar.build().then(result => {
            expect(result).not.to.be.undefined;
            done();
        }).catch(err => done(err));
    });

    it('Successfully builds ast from comparision expression', function(done) {
        var text = '5 in ((5..10])';

        var parsedGrammar = FEEL.parse(text);
        parsedGrammar.build().then(result => {
            expect(result).not.to.be.undefined;
            done();
        }).catch(err => done(err));
    });

    it('Successfully builds ast from comparision expression', function(done) {
        var text = '5 in ([5..10])';

        var parsedGrammar = FEEL.parse(text);
        parsedGrammar.build().then(result => {
            expect(result).not.to.be.undefined;
            done();
        }).catch(err => done(err));
    });

    it('Successfully builds ast from comparision expression', function(done) {
        var text = '5 in (4,5,6)';

        var parsedGrammar = FEEL.parse(text);
        parsedGrammar.build().then(result => {
            expect(result).not.to.be.undefined;
            done();
        }).catch(err => done(err));
    });

    it('Successfully builds ast from comparision expression', function(done) {
        var text = '5 in (<5,>5)';

        var parsedGrammar = FEEL.parse(text);
        parsedGrammar.build().then(result => {
            expect(result).not.to.be.undefined;
            done();
        }).catch(err => done(err));
    });

    it('Successfully builds ast from comparision expression', function(done) {
        var text = '(a + 5) >= (7 + g)';

        _context = {
            a: 10,
            g: 7
        }
        var parsedGrammar = FEEL.parse(text);
        parsedGrammar.build(_context).then(result => {
            expect(result).not.to.be.undefined;
            done();
        }).catch(err => done(err));
    });

    it('Successfully builds ast from comparision expression', function(done) {
        var text = '(a+b) between (c + d) and (e - f)';
        _context = {
            a: 10,
            b: 7,
            c: 8,
            d: 5,
            e: 10,
            f: 5
        }
        var parsedGrammar = FEEL.parse(text);
        parsedGrammar.build(_context).then(result => {
            expect(result).not.to.be.undefined;
            done();
        }).catch(err => done(err));
    });

    it('Successfully compare dates successfully', function(done) {
        var text = 'date("2012-12-25") > date("2012-12-24")';
        var parsedGrammar = FEEL.parse(text);
        parsedGrammar.build().then(result => {
            expect(result).to.be.true;
            done();
        }).catch(err => done(err));
    });

    it('Successfully compare dateandtime successfully', function(done) {
        var text = 'dateandtime("2012-12-24T23:59:00") < dateandtime("2012-12-25T00:00:00")';
        var parsedGrammar = FEEL.parse(text);
        parsedGrammar.build().then(result => {
            expect(result).to.be.true;
            done();
        }).catch(err => done(err));
    });
});
