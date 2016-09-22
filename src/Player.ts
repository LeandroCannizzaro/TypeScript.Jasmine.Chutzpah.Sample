module Jasmine.Sample {

    export interface IPlayer {

        currentlyPlayingSong: Song;
        isPlaying: boolean;
        play(song: Song): void;
        pause(): void;
        resume(): void;
        makeFavorite(): void;

    }

    export class Player implements IPlayer {

        currentlyPlayingSong: Song;
        isPlaying: boolean;

        play(song: Song): void {
            this.currentlyPlayingSong = song;
            this.isPlaying = true;
        }

        pause(): void {
            this.isPlaying = false;
        }

        resume(): void {
            if (this.isPlaying) {
                throw new Error("song is already playing");
            }

            this.isPlaying = true;
        }

        makeFavorite(): void {
            this.currentlyPlayingSong.persistFavoriteStatus(true);
        }
    }
}