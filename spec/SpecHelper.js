var Jasmine;
(function (Jasmine) {
    var Sample;
    (function (Sample) {
        beforeEach(function () {
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
//# sourceMappingURL=SpecHelper.js.map