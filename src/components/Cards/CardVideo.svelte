<script>
  import { onDestroy } from "svelte";
  import MP4Box from "mp4box";
  const url = "https://player.vimeo.com/video/502322604?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t=";
  const getVideo = async (node) => {
    const data = await fetch(url, {
      headers: { range: `bytes=${0}-${267139}` }, mode: 'no-cors',
    });
    const buff = await data.arrayBuffer();
    console.log(buff);
    const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
    var mediaSource = new MediaSource();
    node.src = URL.createObjectURL(mediaSource);
    buff.fileStart = 0;

    let interval = null;
    mediaSource.addEventListener("sourceopen", async () => {
      let source = mediaSource.addSourceBuffer(mimeCodec);
      console.log(source.buffered);
      source.appendBuffer(buff);

      const data2 = await fetch(url, {
        headers: { range: `bytes=${0}-${567139}` },
      });
      const buff2 = await data2.arrayBuffer();

      source.appendBuffer(buff2);

      console.log(buff2);
      console.log("open");
    });
  };
</script>


<video
  controls
  use:getVideo
  on:error={({ target }) => console.log(target.error)}
  on:timeupdate={({ target }) => console.log("time")}
>
<track kind="captions">
    </video>
<style>
  video {
    width: 100%;
  }
</style>
