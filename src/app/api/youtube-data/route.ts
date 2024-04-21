import { NextRequest,NextResponse } from "next/server";
import ytdl from "ytdl-core";

export async function GET (request:NextRequest){
    const {searchParams} = new URL (request.url)
    const url:any = searchParams.get('url')
    const info = await ytdl.getInfo(url)
    const details = info.videoDetails
    const audio = ytdl.filterFormats(info.formats, 'audioonly')
    const videoformats = ytdl.filterFormats(info.formats,'video')

    return NextResponse.json({
        videoformats , details , audio
    })

}