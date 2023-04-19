import React from 'react';
import ReactPlayer from 'react-player';

function VimeoPlayer() {
    return (
        <ReactPlayer
        url="https://i.vimeocdn.com/video/1424898755-40ed7b3079d95e8f3b99ded84feb80e8ab074b5a592c222ae6ef66ad4114df52-d"
        playing
        muted
        loop
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
        />
    );
}

export default VimeoPlayer;