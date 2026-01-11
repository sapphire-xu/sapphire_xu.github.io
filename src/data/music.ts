export interface MusicItem {
    title: string;
    artist: string;
    cover: string;
    url: string;
    lrc?: string;
}

export const musicList: MusicItem[] = [
    {
        title: "Beautiful World (Da Capo Version)",
        artist: "宇多田ヒカル",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/e2/2c/0d/e22c0db8-27f6-7dc3-2d49-3a6e95e827fb/4547366488920.jpg/592x592bb.webp",
        url: "https://picbed.xiaozhangya.xin/music/Beautiful%20World%20(Da%20Capo%20Version)%20-%20%E5%AE%87%E5%A4%9A%E7%94%B0%E3%83%92%E3%82%AB%E3%83%AB.flac"
    },
    {
        title: "One Last Kiss",
        artist: "宇多田ヒカル",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/e2/2c/0d/e22c0db8-27f6-7dc3-2d49-3a6e95e827fb/4547366488920.jpg/592x592bb.webp",
        url: "https://picbed.xiaozhangya.xin/music/One%20Last%20Kiss%20-%20%E5%AE%87%E5%A4%9A%E7%94%B0%E3%83%92%E3%82%AB%E3%83%AB.flac"
    },
    {
        title: "みちしるべ",
        artist: "茅原実里",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/75/c8/c4/75c8c47c-caff-649b-82a2-081d8a80d23a/4540774147137.png/592x592bb.webp",
        url: "https://picbed.xiaozhangya.xin/music/%E3%81%BF%E3%81%A1%E3%81%97%E3%82%8B%E3%81%B9%20-%20%E8%8C%85%E5%8E%9F%E5%AE%9F%E9%87%8C.flac",
        lrc: "https://picbed.xiaozhangya.xin/music/%E3%81%BF%E3%81%A1%E3%81%97%E3%82%8B%E3%81%B9%20-%20%E8%8C%85%E5%8E%9F%E5%AE%9F%E9%87%8C.lrc"
    }
];
