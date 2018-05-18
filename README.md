# vpplayer-shaka-video-integration
Jquery Audio and video player plugin with shaka dash streaming integration.

<h3>Dependency</h3><br/>

<b>Jquery library</b><br/>
get jquery library from <a href="https://jquery.com/download/">https://jquery.com/download/</a>

<b>Shaka player library</b><br/>
optional if integrating dash streaming.<br/>
get shakaplayer library from <a href="https://cdnjs.com/libraries/shaka-player">https://cdnjs.com/libraries/shaka-player</a><br/>
Thanks for google shaka player.

the below library is required if integrating audio player<br/>
<b>Bootstrap library</b><br/>
get bootstrap library from one of the following link <a href="https://www.bootstrapcdn.com/">https://www.bootstrapcdn.com/</a> <b>or</b> <a href="https://getbootstrap.com/docs/3.3/getting-started/">https://getbootstrap.com/docs/3.3/getting-started/</a>

<b>Glyphicon</b><br/>
download the glyphicon from <a href="https://jquery.com/download/">https://jquery.com/download/</a>

After the library files are downloaded copy the libraries to the directory of the application.
Link all the libraries along with the <b>vpplayer.js</b> and <b>vpplayer.css</b>.

<pre>
&#x3C;html&#x3E;
&#x3C;head&#x3E;
&#x3C;script type="text/javascript" src="./js/jquery-2.1.1.min.js"&#x3E;&#x3C;/script&#x3E;
&#x3C;script type="text/javascript" src="./js/bootstrap.js"&#x3E;&#x3C;/script&#x3E;
&#x3C;script type="text/javascript" src="./js/shaka-player.compiled.js"&#x3E;&#x3C;/script&#x3E;
&#x3C;link rel="stylesheet" type="text/css" href="./css/bootstrap.css"&#x3E;
&#x3C;script type="text/javascript" src="./lib/vpplayer.js"&#x3E;&#x3C;/script&#x3E;
&#x3C;link rel="stylesheet" type="text/css" href="./css/vpplayer.css"&#x3E;
&#x3C;/head&#x3E;
&#x3C;script&#x3E;
/**
  * vpplayer script
  *
  */
&#x3C;/script&#x3E;
&#x3C;body&#x3E;
&#x3C;div id="player"&#x3E;
&#x3C;/div&#x3E;
&#x3C;/body&#x3E;
</pre>

To know more about how to call audio player along with its parameter see this link <a href="https://github.com/rvprasath/vpplayer">https://github.com/rvprasath/vpplayer</a><br/>
<b>NOTE</b><br/>
The previous version of player only supports audio player, but this version allows both audio and video player
so to integrate vpplayer the <code>playerType</code> parameter is required.<br/>

<table>
<thead>
<tr>
<th>parameter</th>
<th>value</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="2"><b>playerType</b></td>
  <td><b>video</b> initializes video player</td>
</tr>
<tr>
<td><b>audio</b> initializes audio player</td>
</tr>
</tbody>
</table>

<b>vpplayer script</b><br/>
audio player

<img src="https://raw.githubusercontent.com/rvprasath/vpplayer-shaka-video-integration/master/screenshots/img3.png"/>

<pre>
$(document).ready(function(){
$("#player").vpplayer({
		playerType: "audio",
});
});
</pre>
<h2></h2>

video player

<img src="https://raw.githubusercontent.com/rvprasath/vpplayer-shaka-video-integration/master/screenshots/img1.png"/>

<img src="https://raw.githubusercontent.com/rvprasath/vpplayer-shaka-video-integration/master/screenshots/img2.png"/>

<pre>
$(document).ready(function(){
$("#player").vpplayer({
		playerType: "video",
});
});
</pre>
<h2></h2>

<b>Sample code with all parameters</b>
<pre>
$(document).ready(function(){
	$("#player").vpplayer({
	playerType: "video",
	autoPlay: false,
	poster: "./image/middle.png",
	streamingType: "SHAKA-PLAYER/DASH",
	url : "./video/sample.mp4",
	quality: ["1080","720"],
	playBackSpeed: ["1.5","1.25","1","0.75","0.5"],
	thumbnail : {"height": 63,"width": 112,"nh": 4, "nv": 17, "secPerFrame": 1, "thumbnailUrl": ["./image/1.png","./image/1.png"]},
	manifestUrl : [{"1080":"./video/sample_1080.mpd"},{"720":"./video/sample_720.mpd"}],
	shakaBufferingGoal: 10,
});
});
</pre>
<h2></h2>

<b>parameters value definition</b>

<table>
<thead>
<tr>
<th>parameter</th>
<th>value</th>
</tr>
</thead>
<tbody>
<tr>
  <td><b>playerType</b></td>
  <td><b>video</b> or <b>audio</b> tells the plugin about player type.</td>
</tr>
<tr>
  <td><b>autoPlay</b></td>
  <td><b>true</b> or <b>false</b> if 'true' plays the video when player initializes, if 'false' plays video on clicking play button.</td>
</tr>
<tr>
  <td><b>poster</b></td>
  <td>url of the video poster image, which will be shown before player begins playing video.</td>
</tr>
<tr>
  <td><b>streamingType</b></td>
  <td><b>SHAKA-PLAYER/DASH</b> if this parameter is enabled the <b>manifestUrl</b> parameter must be called to enable dash streaming</td>
</tr>
<tr>
  <td><b>url</b></td>
  <td><b>url of the video file</b> if this parameter is enabled <b>streamingType</b> parameter is not required</td>
</tr>
<tr>
  <td><b>quality</b></td>
  <td><b>["1080","720"]</b> This is array of values. This defines the video quality only dash streaming supports this.</td>
</tr>
<tr>
  <td><b>playBackSpeed</b></td>
  <td><b>["1.5","1.25","1","0.75","0.5"]</b>This is array of values. play back speed rate. This value is changeable according to ones requirement.</td>
</tr>
<tr>
  <td><b>manifestUrl</b></td>
  <td><b>[{"1080":"./video/sample_1080.mpd"},{"720":"./video/sample_720.mpd"}]</b>This is array of object. This parameter object key should match with quality parameter and its size, to enable change quality options. <b>Note : </b>Dash streaming supports mpd files and it requires transcoding of video files into chunks.</td>
</tr>
<tr>
  <td><b>shakaBufferingGoal</b></td>
  <td>This may be any numerical value which defines buffering speed of shaka streaming.</td>
</tr>
<tr>
  <td><b>thumbnail</b></td>
  <td><b>{"height": 63,"width": 112,"nh": 4, "nv": 17, "secPerFrame": 1, "thumbnailUrl": ["./image/1.png","./image/1.png"]}</b>This is object value. To know about how to create thumbnail from video which has to be displayed in vpplayer click here
 <a href="https://github.com/rvprasath/videothumbnail">How to create video thumbnail</a> </td>
</tr>  
</tbody>
</table>

<b>Sample code basic video and dash streaming</b><br/>
<b>Normal video</b>
<pre>
$(document).ready(function(){
	$("#player").vpplayer({
	playerType: "video",
	autoPlay: false,
	poster: "./image/middle.png",
	url : "./video/sample.mp4",
	playBackSpeed: ["1.5","1.25","1","0.75","0.5"],
	thumbnail : {"height": 63,"width": 112,"nh": 4, "nv": 17, "secPerFrame": 1, "thumbnailUrl": ["./image/1.png","./image/1.png"]},
});
});
</pre>
<h2></h2>

<b>Dash streaming with shaka integration</b>
<pre>
$(document).ready(function(){
	$("#player").vpplayer({
	playerType: "video",
	autoPlay: false,
	poster: "./image/middle.png",
	streamingType: "SHAKA-PLAYER/DASH",
	quality: ["1080","720"],
	playBackSpeed: ["1.5","1.25","1","0.75","0.5"],
	thumbnail : {"height": 63,"width": 112,"nh": 4, "nv": 17, "secPerFrame": 1, "thumbnailUrl": ["./image/1.png","./image/1.png"]},
	manifestUrl : [{"1080":"./video/sample_1080.mpd"},{"720":"./video/sample_720.mpd"}],
	shakaBufferingGoal: 10,
});
});
</pre>

<h2><a href="#license" aria-hidden="true" class="anchor" id="user-content-license"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>license</h2>
<p>MIT. Copyright (c) <a href="https://github.com/rvprasath/" rel="nofollow">rvprasath</a>.</p>
