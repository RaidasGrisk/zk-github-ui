<script setup>
// import backgroundAnimation from './backgroundAnimation.vue'

const goto = (refName) => {
  document.getElementById('target-id').scrollIntoView(
    { block: 'center', behavior: 'smooth' }
  )
}

</script>

<template>

  <!-- This is bullshit but vite does not build it properly, so cannot put this into a seprate file WTF? -->
  <!-- Not this is a mess, but oh well :D -->
  <div class="background">
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span></span>
  </div>

  <n-space justify="center">
  <n-card style="z-index: 2; max-width:430px; opacity: 0.95; border-radius: 20px; padding: 1rem" :hoverable="true">
    <n-space justify="center">

      <n-icon-wrapper :size="64" :border-radius="10" color="#2080f0">
        <n-icon :size="36">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9c1.6 2.3 4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2z" fill="currentColor"></path></svg>
        </n-icon>
      </n-icon-wrapper>
      <n-icon-wrapper :size="64" :border-radius="10" color="#2080f0">
        <n-icon :size="50">
          <svg viewBox="157.109 201.315 52.568 47.192" xmlns="http://www.w3.org/2000/svg">
            <defs></defs>
            <clipPath id="a">
              <path d="m0 0h126.735v36h-126.735z"></path>
            </clipPath>
            <g clip-path="url(#a)" fill="#2d2d2d" transform="matrix(1, 0, 0, 1, 164.202377, 205.41925)">
              <path d="m19.7016 35.9257c-.6628.0193-1.3078-.2159-1.803-.6574-.4951-.4414-.8029-1.0557-.8602-1.7169l-.2997-2.3514c-2.8544-.8143-4.5243-2.9286-4.9581-6.2857l-2.56904-19.81145c-.55108-.08877-1.10889-.12892-1.66699-.12-.82607-.00677-1.64917.09994-2.44626.31714v30.04571h-5.040937v-24.1514c0-3.27717 1.470037-5.59145 4.147497-6.55431v-1.55714c0-1.8 1.09325-3.0085746 2.71743-3.0085746s2.64321 1.0114246 2.90582 2.8571446l.19978 1.44286c2.9315.82 4.6442 3.17714 5.1523 7.00282l2.3749 19.0972c1.4189.2743 2.8771.2743 4.2959 0l2.3749-19.0943c.4967-3.82858 2.2293-6.18572 5.1523-7.0143l.1998-1.44285c.2626-1.83715 1.2959-2.8571457 2.9058-2.8571457s2.7174 1.2085757 2.7174 3.0085757v1.55714c2.6775.96286 4.1475 3.27714 4.1475 6.55428v24.1514h-5.0466v-30.03997c-.7971-.2172-1.6202-.32391-2.4463-.31714-.5581-.00892-1.1159.03123-1.667.12l-2.569 19.81431c-.4253 3.2971-2.1351 5.4628-4.9581 6.2857l-.2826 2.3543c-.0441.6686-.3501 1.2928-.8515 1.7369-.5013.4441-1.1575.6721-1.826.6345zm-2.0295-4.4971.2598 2.0257c.0272.4442.2283.8597.5596 1.1566.3312.2968.766.451 1.2101.4291.221.0159.4428-.0128.6525-.0843s.4029-.1844.5682-.332.2993-.3269.3941-.5273.1485-.4177.1578-.6393l.2598-2.0285c-1.345.2209-2.7169.2209-4.0619 0zm17.5291 3.0314h3.2484v-23.2657c0-2.77717-1.119-4.69431-3.2484-5.5886zm-34.253242 0h3.256912v-28.8543c-2.12655.89429-3.234076 2.81143-3.234076 5.5886zm9.208442-29.11144 2.5176 19.44854c.3597 2.8143 1.687 4.6343 3.942 5.4286l-2.3264-18.7371c-.4282-3.3029-1.784-5.32004-4.1332-6.14004zm19.0933 0c-2.3492.82-3.7107 2.83715-4.1332 6.14284l-2.3264 18.7229c2.2579-.7943 3.5824-2.6143 3.942-5.4286zm-24.14568-.99428c.8007-.19489 1.62224-.29085 2.44626-.28572.5153-.00544 1.03035.02511 1.54139.09143l-.15413-1.12286c-.19696-1.37714-.87632-2.074283-2.01524-2.074283s-1.81828.808573-1.81828 2.108573zm26.75178-.28572c.824-.00513 1.6456.09083 2.4463.28572v-1.27143c0-1.3-.6965-2.108574-1.8183-2.108574s-1.8183.697144-2.0152 2.074284l-.1542 1.12286c.5111-.06633 1.0261-.09688 1.5414-.09143z"></path>
            </g>
          </svg>
        </n-icon>
      </n-icon-wrapper>
    </n-space>
    <n-divider style="width: 20%; display: block; margin-left: auto; margin-right: auto; text-align: center;"/>
    <n-h1 style="margin: 0px;">Github account proof on</n-h1>
    <span style="font-size: 30px; font-weight: bold; margin: 0px; background: -webkit-linear-gradient(180deg, #2080f0, #5c2ab2); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Mina</span>
    <n-divider style="width: 40%; display: block; margin-left: auto; margin-right: auto; text-align: center;"/>
    <n-badge :max="15" type="info">
      zk proof that mina account is owned by github user
    </n-badge>
    <br>
    <br>
    <n-badge :value="'zero-knowledge app'" :max="15" type="info"/>
  </n-card>
  </n-space>
  <br><br>

  <n-button
    strong secondary type="info" size="large"
    style="z-index: 2; transform: scale(2);"
    @click="goto('target-id')"
  >
    <template #icon>
      <n-icon class="blob">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512"><path d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4l96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z" fill="currentColor"></path></svg>
      </n-icon>
    </template>
  </n-button>
</template>

<style scoped>

.blob {
	transform: scale(1);
	animation: pulse 2s infinite;
}

@keyframes pulse {
	0% {
		transform: scale(0.75);
	}

	70% {
		transform: scale(1.1);
	}

	100% {
		transform: scale(0.75);
	}
}

.n-gradient-text {
  font-size: 30px;
}

/* https://wweb.dev/resources/animated-css-background-generator/ */
/* 0f0f10 */
/* #5da3e5 */
/* #5c2ab2 */
@keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}

.background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #0f0f10;
    overflow: hidden;
}

.background span {
    width: 50vmin;
    height: 50vmin;
    border-radius: 50vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 19;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

.background span:nth-child(0) {
    color: #5c4ab2;
    top: 15%;
    left: 89%;
    animation-duration: 148s;
    animation-delay: -197s;
    transform-origin: 25vw -21vh;
    box-shadow: -100vmin 0 13.008939435379705vmin currentColor;
}
.background span:nth-child(1) {
    color: #5da3e5;
    top: 59%;
    left: 29%;
    animation-duration: 119s;
    animation-delay: -232s;
    transform-origin: 3vw 11vh;
    box-shadow: 100vmin 0 13.373206602781277vmin currentColor;
}
.background span:nth-child(2) {
    color: #5da3e5;
    top: 16%;
    left: 95%;
    animation-duration: 293s;
    animation-delay: -302s;
    transform-origin: 17vw 22vh;
    box-shadow: 100vmin 0 12.743094923955482vmin currentColor;
}
.background span:nth-child(3) {
    color: #5da3e5;
    top: 71%;
    left: 17%;
    animation-duration: 61s;
    animation-delay: -73s;
    transform-origin: 22vw 2vh;
    box-shadow: -100vmin 0 13.195742701416298vmin currentColor;
}
.background span:nth-child(4) {
    color: #5c4ab2;
    top: 67%;
    left: 55%;
    animation-duration: 71s;
    animation-delay: -58s;
    transform-origin: 11vw 23vh;
    box-shadow: 100vmin 0 12.938351895603533vmin currentColor;
}
.background span:nth-child(5) {
    color: #5c4ab2;
    top: 82%;
    left: 32%;
    animation-duration: 312s;
    animation-delay: -58s;
    transform-origin: 4vw -3vh;
    box-shadow: 100vmin 0 12.69227430949013vmin currentColor;
}
.background span:nth-child(6) {
    color: #5c4ab2;
    top: 70%;
    left: 86%;
    animation-duration: 266s;
    animation-delay: -86s;
    transform-origin: -9vw 6vh;
    box-shadow: 100vmin 0 13.468821425833298vmin currentColor;
}
.background span:nth-child(7) {
    color: #5c4ab2;
    top: 70%;
    left: 21%;
    animation-duration: 216s;
    animation-delay: -188s;
    transform-origin: -14vw 20vh;
    box-shadow: 100vmin 0 12.806214046993304vmin currentColor;
}
.background span:nth-child(8) {
    color: #5c4ab2;
    top: 47%;
    left: 68%;
    animation-duration: 314s;
    animation-delay: -198s;
    transform-origin: -7vw 19vh;
    box-shadow: -100vmin 0 13.415310433521213vmin currentColor;
}
.background span:nth-child(9) {
    color: #5c4ab2;
    top: 37%;
    left: 70%;
    animation-duration: 58s;
    animation-delay: -52s;
    transform-origin: 17vw 12vh;
    box-shadow: -100vmin 0 12.523760725690163vmin currentColor;
}
.background span:nth-child(10) {
    color: #5da3e5;
    top: 5%;
    left: 95%;
    animation-duration: 13s;
    animation-delay: -193s;
    transform-origin: 7vw 14vh;
    box-shadow: 100vmin 0 12.708218136493102vmin currentColor;
}
.background span:nth-child(11) {
    color: #5c4ab2;
    top: 16%;
    left: 65%;
    animation-duration: 168s;
    animation-delay: -87s;
    transform-origin: -1vw 5vh;
    box-shadow: 100vmin 0 13.32342865458087vmin currentColor;
}
.background span:nth-child(12) {
    color: #5da3e5;
    top: 95%;
    left: 56%;
    animation-duration: 85s;
    animation-delay: -219s;
    transform-origin: -5vw 7vh;
    box-shadow: -100vmin 0 13.41338207533578vmin currentColor;
}
.background span:nth-child(13) {
    color: #5da3e5;
    top: 30%;
    left: 6%;
    animation-duration: 295s;
    animation-delay: -127s;
    transform-origin: -19vw -16vh;
    box-shadow: -100vmin 0 13.132496307279403vmin currentColor;
}
.background span:nth-child(14) {
    color: #5c4ab2;
    top: 84%;
    left: 22%;
    animation-duration: 204s;
    animation-delay: -298s;
    transform-origin: -21vw -22vh;
    box-shadow: 100vmin 0 13.016673877802587vmin currentColor;
}
.background span:nth-child(15) {
    color: #5c4ab2;
    top: 70%;
    left: 64%;
    animation-duration: 167s;
    animation-delay: -202s;
    transform-origin: -19vw -4vh;
    box-shadow: 100vmin 0 13.075991022849513vmin currentColor;
}
.background span:nth-child(16) {
    color: #5c4ab2;
    top: 4%;
    left: 46%;
    animation-duration: 243s;
    animation-delay: -88s;
    transform-origin: 4vw 11vh;
    box-shadow: -100vmin 0 13.280484783469312vmin currentColor;
}
.background span:nth-child(17) {
    color: #5c4ab2;
    top: 78%;
    left: 11%;
    animation-duration: 282s;
    animation-delay: -156s;
    transform-origin: 0vw -23vh;
    box-shadow: 100vmin 0 12.952020532805076vmin currentColor;
}
.background span:nth-child(18) {
    color: #5da3e5;
    top: 16%;
    left: 42%;
    animation-duration: 315s;
    animation-delay: -292s;
    transform-origin: 15vw -13vh;
    box-shadow: 100vmin 0 13.228555595167279vmin currentColor;
}
.background span:nth-child(19) {
    color: #5c4ab2;
    top: 82%;
    left: 85%;
    animation-duration: 225s;
    animation-delay: -173s;
    transform-origin: -12vw -7vh;
    box-shadow: 100vmin 0 12.820671709978743vmin currentColor;
}

</style>
