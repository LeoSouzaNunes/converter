export default function getPlaylistId(playlistUrl: string): string {
    const playlistId = playlistUrl.match(
        /^https:\/\/www\.youtube\.com\/playlist\?list=(.*)$/
    );

    if (!playlistId) {
        throw new Error("Invalid playlist URL");
    }

    return playlistId[1];
}
