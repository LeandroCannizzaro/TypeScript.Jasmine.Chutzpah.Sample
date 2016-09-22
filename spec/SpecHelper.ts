module Jasmine.Sample {

    beforeEach(() => {

        jasmine.addMatchers(
        {
            toBePlaying: () => {
                return {
                    compare: (actual: Player, expected: Song) => {
                        var player = actual;

                        return {
                            pass: player.currentlyPlayingSong === expected && player.isPlaying
                        };
                    }
                };
            }
        });
    });
}

declare module jasmine {
    interface Matchers {
        toBePlaying(song: Jasmine.Sample.Song): boolean;
    }
}

