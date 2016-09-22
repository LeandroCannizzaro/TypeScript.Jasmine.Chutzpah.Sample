var Jasmine;
(function (Jasmine) {
    var Sample;
    (function (Sample) {
        var Song = (function () {
            function Song() {
            }
            Song.prototype.persistFavoriteStatus = function (value) {
                throw new Error("not yet implemented");
            };
            return Song;
        }());
        Sample.Song = Song;
    })(Sample = Jasmine.Sample || (Jasmine.Sample = {}));
})(Jasmine || (Jasmine = {}));
//# sourceMappingURL=Song.js.map