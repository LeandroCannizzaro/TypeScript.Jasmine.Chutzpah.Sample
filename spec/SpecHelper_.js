var Jasmine;
(function (Jasmine) {
    var Sample;
    (function (Sample) {
        var PlayerMatcherResult = (function () {
            function PlayerMatcherResult(pass, message) {
                this.pass = pass;
                this.message = message;
            }
            return PlayerMatcherResult;
        }());
        Sample.PlayerMatcherResult = PlayerMatcherResult;
        var PlayerMatcher = (function () {
            function PlayerMatcher() {
            }
            PlayerMatcher.prototype.compare = function (actual, expected) {
                var player = (Sample.Player)(Object), actual;
                var pass = player.currentlyPlayingSong === expected && player.isPlaying;
            };
            PlayerMatcher.prototype.compare = function (actual, expected) {
            };
            return PlayerMatcher;
        }());
        Sample.PlayerMatcher = PlayerMatcher;
        var PlayerExtensions = (function () {
            function PlayerExtensions() {
            }
            PlayerExtensions.prototype.match = function (util, customEqualityTesters) {
            };
            return PlayerExtensions;
        }());
        Sample.PlayerExtensions = PlayerExtensions;
        beforeEach(function () {
            //interface CustomMatcher {
            //    compare<T>(actual: T, expected: T): CustomMatcherResult;
            //    compare(actual: any, expected: any): CustomMatcherResult;
            //}
            //interface CustomMatcherFactory {
            //    (util: MatchersUtil, customEqualityTesters: Array<CustomEqualityTester>): CustomMatcher;
            //}
            //interface CustomMatcherFactories {
            //    [index: string]: CustomMatcherFactory;
            //}
            //interface CustomMatcherResult {
            //    pass: boolean;
            //    message?: string;
            //}
            //interface MatchersUtil {
            //    equals(a: any, b: any, customTesters?: Array<CustomEqualityTester>): boolean;
            //    contains<T>(haystack: ArrayLike<T> | string, needle: any, customTesters?: Array<CustomEqualityTester>): boolean;
            //    buildFailureMessage(matcherName: string, isNot: boolean, actual: any, ...expected: Array<any>): string;
            //}
            jasmine.addMatchers({
                toBePlaying: function () {
                    return {
                        compare: function (actual, expected) {
                            var player = actual;
                            return {
                                pass: player.currentlyPlayingSong === expected && player.isPlaying
                            };
                        }
                    };
                }
            });
        });
    })(Sample = Jasmine.Sample || (Jasmine.Sample = {}));
})(Jasmine || (Jasmine = {}));
//# sourceMappingURL=SpecHelper_.js.map