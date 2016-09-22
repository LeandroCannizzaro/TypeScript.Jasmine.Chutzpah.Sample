var Jasmine;
(function (Jasmine) {
    var Sample;
    (function (Sample) {
        var Player = (function () {
            function Player() {
            }
            Player.prototype.play = function (song) {
                this.currentlyPlayingSong = song;
                this.isPlaying = true;
            };
            Player.prototype.pause = function () {
                this.isPlaying = false;
            };
            Player.prototype.resume = function () {
                if (this.isPlaying) {
                    throw new Error("song is already playing");
                }
                this.isPlaying = true;
            };
            Player.prototype.makeFavorite = function () {
                this.currentlyPlayingSong.persistFavoriteStatus(true);
            };
            return Player;
        }());
        Sample.Player = Player;
    })(Sample = Jasmine.Sample || (Jasmine.Sample = {}));
})(Jasmine || (Jasmine = {}));
//# sourceMappingURL=Player.js.map