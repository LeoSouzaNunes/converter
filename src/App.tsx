import headphonesLogo from "./assets/headphones.png";
import "./App.css";
import { Button, Input } from "./components";
import { useCallback } from "react";
import { getPlaylistId } from "./helpers";

function App() {
    // TODO: implement the converted playlist display

    const handleSubmit = useCallback(
        async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const url = event.currentTarget[0] as HTMLInputElement;
            const playlistUrl = url.value;
            const playlistId = getPlaylistId(playlistUrl);

            console.log(playlistId);

            // here we will post the playlistId to the server
        },
        []
    );

    return (
        <>
            <div>
                <img
                    src={headphonesLogo}
                    className="logo headphone"
                    alt="Headphone logo"
                />
            </div>
            <h1>Youtube Playlist Converter</h1>
            <form onSubmit={handleSubmit}>
                <div className="card">
                    <Input
                        placeholder="Playlist URL goes here..."
                        type="url"
                        pattern={
                            "^https://www\\.youtube\\.com/playlist\\?list=(.*)$"
                        }
                        warning="https://www.youtube.com/playlist?list=..."
                    />
                    <Button type="submit" disabled={false} />
                </div>
            </form>
            <div className="footer">
                This is a youtube playlist converter. It will convert your
                youtube playlist into MP3 files.
            </div>
        </>
    );
}

export default App;
