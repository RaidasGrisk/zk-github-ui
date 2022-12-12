<script setup>
</script>

<template>
  <span v-for="item in Array.from(Array(40).keys())" class="backround-bubble" />
</template>

<style>

@keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}

@keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}

/* https://wweb.dev/resources/animated-css-background-generator/ */
/* #add1ff */
/* #5da3e5 */
.background {
    position: relative;
    width: 100vw;
    top: 0;
    left: 0;
    background: #0f0f10;
    overflow: hidden;
}

.background .backround-bubble {
    z-index: 1;
    width: 49vmin;
    height: 49vmin;
    border-radius: 49vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 30;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}


.background .backround-bubble:nth-child(0) {
    z-index: 1;
    color: #5da3e5;
    top: 14%;
    left: 97%;
    animation-duration: 113s;
    animation-delay: -17s;
    transform-origin: 13vw 2vh;
    box-shadow: -98vmin 0 12.814786112407495vmin currentColor;
}
.background .backround-bubble:nth-child(1) {
    z-index: 1;
    color: #5da3e5;
    top: 59%;
    left: 7%;
    animation-duration: 29s;
    animation-delay: -185s;
    transform-origin: -16vw 19vh;
    box-shadow: 98vmin 0 13.159875529399567vmin currentColor;
}
.background .backround-bubble:nth-child(2) {
    z-index: 1;
    color: #5c2ab2;
    top: 92%;
    left: 29%;
    animation-duration: 124s;
    animation-delay: -145s;
    transform-origin: -22vw -13vh;
    box-shadow: -98vmin 0 12.856390912993756vmin currentColor;
}
.background .backround-bubble:nth-child(3) {
    z-index: 1;
    color: #5da3e5;
    top: 37%;
    left: 9%;
    animation-duration: 144s;
    animation-delay: -68s;
    transform-origin: 8vw 4vh;
    box-shadow: -98vmin 0 12.850202522178428vmin currentColor;
}
.background .backround-bubble:nth-child(4) {
    z-index: 1;
    color: #add1ff;
    top: 50%;
    left: 80%;
    animation-duration: 41s;
    animation-delay: -162s;
    transform-origin: 5vw -9vh;
    box-shadow: 98vmin 0 12.74327655400457vmin currentColor;
}
.background .backround-bubble:nth-child(5) {
    z-index: 1;
    color: #5c2ab2;
    top: 88%;
    left: 20%;
    animation-duration: 192s;
    animation-delay: -71s;
    transform-origin: -5vw 14vh;
    box-shadow: -98vmin 0 12.478044581838555vmin currentColor;
}
.background .backround-bubble:nth-child(6) {
    color: #5c2ab2;
    top: 86%;
    left: 61%;
    animation-duration: 103s;
    animation-delay: -47s;
    transform-origin: -8vw -24vh;
    box-shadow: 98vmin 0 13.065343322435748vmin currentColor;
}
.background .backround-bubble:nth-child(7) {
    color: #5da3e5;
    top: 42%;
    left: 29%;
    animation-duration: 92s;
    animation-delay: -144s;
    transform-origin: -14vw -8vh;
    box-shadow: -98vmin 0 12.768987998834769vmin currentColor;
}
.background .backround-bubble:nth-child(8) {
    color: #add1ff;
    top: 17%;
    left: 23%;
    animation-duration: 25s;
    animation-delay: -94s;
    transform-origin: -13vw 9vh;
    box-shadow: 98vmin 0 12.5861475190043vmin currentColor;
}
.background .backround-bubble:nth-child(9) {
    color: #5da3e5;
    top: 7%;
    left: 52%;
    animation-duration: 186s;
    animation-delay: -153s;
    transform-origin: -19vw 24vh;
    box-shadow: 98vmin 0 12.764381457736532vmin currentColor;
}
.background .backround-bubble:nth-child(10) {
    color: #add1ff;
    top: 75%;
    left: 6%;
    animation-duration: 197s;
    animation-delay: -184s;
    transform-origin: -18vw -22vh;
    box-shadow: 98vmin 0 12.763943623444751vmin currentColor;
}
.background .backround-bubble:nth-child(11) {
    color: #5c2ab2;
    top: 11%;
    left: 84%;
    animation-duration: 163s;
    animation-delay: -62s;
    transform-origin: 22vw -21vh;
    box-shadow: 98vmin 0 13.201205855516505vmin currentColor;
}
.background .backround-bubble:nth-child(12) {
    color: #add1ff;
    top: 51%;
    left: 5%;
    animation-duration: 161s;
    animation-delay: -23s;
    transform-origin: -15vw -9vh;
    box-shadow: -98vmin 0 12.27010767382904vmin currentColor;
}
.background .backround-bubble:nth-child(13) {
    color: #5da3e5;
    top: 16%;
    left: 40%;
    animation-duration: 197s;
    animation-delay: -12s;
    transform-origin: -21vw -15vh;
    box-shadow: 98vmin 0 12.687202372281108vmin currentColor;
}
.background .backround-bubble:nth-child(14) {
    color: #add1ff;
    top: 47%;
    left: 22%;
    animation-duration: 52s;
    animation-delay: -99s;
    transform-origin: 21vw 9vh;
    box-shadow: 98vmin 0 12.625160233017054vmin currentColor;
}
.background .backround-bubble:nth-child(15) {
    color: #add1ff;
    top: 20%;
    left: 52%;
    animation-duration: 20s;
    animation-delay: -193s;
    transform-origin: 13vw -19vh;
    box-shadow: -98vmin 0 12.872020515186914vmin currentColor;
}
.background .backround-bubble:nth-child(16) {
    color: #add1ff;
    top: 60%;
    left: 80%;
    animation-duration: 94s;
    animation-delay: -178s;
    transform-origin: 12vw 19vh;
    box-shadow: -98vmin 0 12.436159167825666vmin currentColor;
}
.background .backround-bubble:nth-child(17) {
    color: #5da3e5;
    top: 32%;
    left: 24%;
    animation-duration: 64s;
    animation-delay: -121s;
    transform-origin: 15vw -23vh;
    box-shadow: 98vmin 0 12.595853160332785vmin currentColor;
}
.background .backround-bubble:nth-child(18) {
    color: #5c2ab2;
    top: 67%;
    left: 98%;
    animation-duration: 53s;
    animation-delay: -170s;
    transform-origin: 16vw -21vh;
    box-shadow: 98vmin 0 12.510267559215448vmin currentColor;
}
.background .backround-bubble:nth-child(19) {
    color: #5c2ab2;
    top: 39%;
    left: 90%;
    animation-duration: 71s;
    animation-delay: -25s;
    transform-origin: 20vw -20vh;
    box-shadow: 98vmin 0 12.865547945131764vmin currentColor;
}
.background .backround-bubble:nth-child(20) {
    color: #add1ff;
    top: 45%;
    left: 32%;
    animation-duration: 27s;
    animation-delay: -89s;
    transform-origin: -8vw -8vh;
    box-shadow: -98vmin 0 12.552676833551658vmin currentColor;
}
.background .backround-bubble:nth-child(21) {
    color: #add1ff;
    top: 49%;
    left: 49%;
    animation-duration: 40s;
    animation-delay: -108s;
    transform-origin: -4vw 17vh;
    box-shadow: 98vmin 0 13.003115945592116vmin currentColor;
}
.background .backround-bubble:nth-child(22) {
    color: #add1ff;
    top: 77%;
    left: 73%;
    animation-duration: 26s;
    animation-delay: -162s;
    transform-origin: 9vw -21vh;
    box-shadow: -98vmin 0 12.626968606031875vmin currentColor;
}
.background .backround-bubble:nth-child(23) {
    color: #5c2ab2;
    top: 25%;
    left: 8%;
    animation-duration: 61s;
    animation-delay: -200s;
    transform-origin: 16vw 24vh;
    box-shadow: 98vmin 0 13.087614051310062vmin currentColor;
}
.background .backround-bubble:nth-child(24) {
    color: #5c2ab2;
    top: 44%;
    left: 25%;
    animation-duration: 116s;
    animation-delay: -150s;
    transform-origin: -9vw 12vh;
    box-shadow: -98vmin 0 12.575307100972278vmin currentColor;
}
.background .backround-bubble:nth-child(25) {
    color: #5c2ab2;
    top: 52%;
    left: 47%;
    animation-duration: 123s;
    animation-delay: -93s;
    transform-origin: 10vw 14vh;
    box-shadow: 98vmin 0 12.764457935905616vmin currentColor;
}
.background .backround-bubble:nth-child(26) {
    color: #add1ff;
    top: 30%;
    left: 52%;
    animation-duration: 28s;
    animation-delay: -9s;
    transform-origin: -20vw 0vh;
    box-shadow: 98vmin 0 12.898080681317051vmin currentColor;
}
.background .backround-bubble:nth-child(27) {
    color: #add1ff;
    top: 66%;
    left: 68%;
    animation-duration: 134s;
    animation-delay: -87s;
    transform-origin: 2vw -15vh;
    box-shadow: -98vmin 0 13.044079237024564vmin currentColor;
}
.background .backround-bubble:nth-child(28) {
    color: #5da3e5;
    top: 59%;
    left: 23%;
    animation-duration: 54s;
    animation-delay: -103s;
    transform-origin: 4vw -5vh;
    box-shadow: 98vmin 0 13.007410310677008vmin currentColor;
}
.background .backround-bubble:nth-child(29) {
    color: #5da3e5;
    top: 6%;
    left: 34%;
    animation-duration: 119s;
    animation-delay: -97s;
    transform-origin: 14vw 11vh;
    box-shadow: 98vmin 0 12.255335980209518vmin currentColor;
}
.background .backround-bubble:nth-child(30) {
    color: #5da3e5;
    top: 94%;
    left: 55%;
    animation-duration: 93s;
    animation-delay: -136s;
    transform-origin: 1vw -11vh;
    box-shadow: -98vmin 0 13.189151428895148vmin currentColor;
}
.background .backround-bubble:nth-child(31) {
    color: #add1ff;
    top: 8%;
    left: 73%;
    animation-duration: 133s;
    animation-delay: -75s;
    transform-origin: -6vw 10vh;
    box-shadow: 98vmin 0 12.313331483324301vmin currentColor;
}
.background .backround-bubble:nth-child(32) {
    color: #5c2ab2;
    top: 60%;
    left: 58%;
    animation-duration: 182s;
    animation-delay: -79s;
    transform-origin: 11vw 18vh;
    box-shadow: -98vmin 0 12.26046376647621vmin currentColor;
}
.background .backround-bubble:nth-child(33) {
    color: #add1ff;
    top: 76%;
    left: 35%;
    animation-duration: 108s;
    animation-delay: -193s;
    transform-origin: -20vw 23vh;
    box-shadow: 98vmin 0 13.169177539327057vmin currentColor;
}
.background .backround-bubble:nth-child(34) {
    color: #5c2ab2;
    top: 94%;
    left: 100%;
    animation-duration: 150s;
    animation-delay: -92s;
    transform-origin: 4vw -15vh;
    box-shadow: 98vmin 0 12.886696697904638vmin currentColor;
}
.background .backround-bubble:nth-child(35) {
    color: #5c2ab2;
    top: 64%;
    left: 26%;
    animation-duration: 183s;
    animation-delay: -26s;
    transform-origin: 12vw -14vh;
    box-shadow: 98vmin 0 13.017101681721087vmin currentColor;
}
.background .backround-bubble:nth-child(36) {
    color: #5da3e5;
    top: 20%;
    left: 4%;
    animation-duration: 94s;
    animation-delay: -12s;
    transform-origin: -14vw 6vh;
    box-shadow: 98vmin 0 12.432920637927047vmin currentColor;
}
.background .backround-bubble:nth-child(37) {
    color: #add1ff;
    top: 36%;
    left: 88%;
    animation-duration: 15s;
    animation-delay: -84s;
    transform-origin: 17vw -15vh;
    box-shadow: 98vmin 0 12.497596725216376vmin currentColor;
}
.background .backround-bubble:nth-child(38) {
    color: #add1ff;
    top: 65%;
    left: 51%;
    animation-duration: 179s;
    animation-delay: -196s;
    transform-origin: -1vw 5vh;
    box-shadow: -98vmin 0 12.727105331762685vmin currentColor;
}
.background .backround-bubble:nth-child(39) {
    color: #5c2ab2;
    top: 86%;
    left: 31%;
    animation-duration: 162s;
    animation-delay: -97s;
    transform-origin: -12vw -20vh;
    box-shadow: -98vmin 0 12.448106181759599vmin currentColor;
}
.background .backround-bubble:nth-child(40) {
    color: #5c2ab2;
    top: 12%;
    left: 37%;
    animation-duration: 23s;
    animation-delay: -82s;
    transform-origin: -1vw -10vh;
    box-shadow: -98vmin 0 13.067180619477519vmin currentColor;
}
.background .backround-bubble:nth-child(41) {
    color: #5c2ab2;
    top: 79%;
    left: 89%;
    animation-duration: 52s;
    animation-delay: -11s;
    transform-origin: 11vw 19vh;
    box-shadow: 98vmin 0 12.344959550553982vmin currentColor;
}
.background .backround-bubble:nth-child(42) {
    color: #add1ff;
    top: 41%;
    left: 78%;
    animation-duration: 154s;
    animation-delay: -19s;
    transform-origin: -11vw 15vh;
    box-shadow: 98vmin 0 12.599304536731378vmin currentColor;
}
.background .backround-bubble:nth-child(43) {
    color: #5da3e5;
    top: 85%;
    left: 29%;
    animation-duration: 160s;
    animation-delay: -167s;
    transform-origin: -16vw 16vh;
    box-shadow: 98vmin 0 12.604398815035847vmin currentColor;
}
.background .backround-bubble:nth-child(44) {
    color: #5c2ab2;
    top: 11%;
    left: 59%;
    animation-duration: 112s;
    animation-delay: -160s;
    transform-origin: 1vw 16vh;
    box-shadow: 98vmin 0 13.122102685036918vmin currentColor;
}
.background .backround-bubble:nth-child(45) {
    color: #add1ff;
    top: 21%;
    left: 28%;
    animation-duration: 41s;
    animation-delay: -175s;
    transform-origin: 25vw 20vh;
    box-shadow: 98vmin 0 12.561540524159314vmin currentColor;
}
.background .backround-bubble:nth-child(46) {
    color: #5c2ab2;
    top: 96%;
    left: 24%;
    animation-duration: 138s;
    animation-delay: -66s;
    transform-origin: 15vw 11vh;
    box-shadow: -98vmin 0 12.707444195965307vmin currentColor;
}
.background .backround-bubble:nth-child(47) {
    color: #add1ff;
    top: 7%;
    left: 100%;
    animation-duration: 35s;
    animation-delay: -115s;
    transform-origin: -20vw -18vh;
    box-shadow: -98vmin 0 13.031172035902662vmin currentColor;
}
.background .backround-bubble:nth-child(48) {
    color: #add1ff;
    top: 60%;
    left: 55%;
    animation-duration: 20s;
    animation-delay: -88s;
    transform-origin: 25vw -9vh;
    box-shadow: 98vmin 0 12.423530162944758vmin currentColor;
}
.background .backround-bubble:nth-child(49) {
    color: #5da3e5;
    top: 26%;
    left: 37%;
    animation-duration: 156s;
    animation-delay: -64s;
    transform-origin: 17vw -12vh;
    box-shadow: 98vmin 0 13.184705854659903vmin currentColor;
}



</style>
