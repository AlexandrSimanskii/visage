<template>
  <button class="svg-button">
    <svg viewBox="0 0 409 103" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_14_1160)">
        <path
          class="hover-effect"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.21844 11.28C4.21844 7.41401 7.35245 4.28 11.2184 4.28H25.2926C25.2926 4.28 135.659 0 248.234 0C360.81 0 377.052 4.28 377.052 4.28H397.782C401.648 4.28 404.782 7.41401 404.782 11.28V95.72C404.782 99.586 401.648 102.72 397.782 102.72H381.489H25.2926H11.2184C7.35246 102.72 4.21844 99.586 4.21844 95.72V51.36V11.28Z"
          fill="#B98766"
        />

        <g filter="url(#filter0_i_14_1160)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.32966 5.82194C3.80791 2.44598 6.711 0 10.1207 0L398.838 0C402.266 0 405.18 2.47288 405.647 5.86895C406.882 14.8424 409 32.7461 409 49.9333C409 66.9682 406.919 84.0031 405.68 92.6342C405.197 96.0029 402.297 98.44 398.894 98.44H10.1207C6.71099 98.44 3.80791 95.994 3.32966 92.6181C2.09209 83.8821 0 66.5511 0 49.22C0 31.8889 2.09209 14.5579 3.32966 5.82194Z"
            fill="url(#paint0_linear_14_1160)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_14_1160"
          x="0"
          y="0"
          width="409"
          height="98.4399"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.898039 0 0 0 0 0.717647 0 0 0 0 0.603922 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_14_1160"
          />
        </filter>
        <linearGradient
          id="paint0_linear_14_1160"
          x1="439.181"
          y1="40.8838"
          x2="409.656"
          y2="-78.5776"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C88C61" />
          <stop offset="1" stop-color="#EBBE9C" />
        </linearGradient>
        <clipPath id="clip0_14_1160">
          <rect width="409" height="102.72" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <div class="inner">
      <slot></slot>
      <img src="/images/icons/tap.svg" alt="tap" />
    </div>
  </button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
button {
  position: relative;
  border: none;
  background-color: transparent;
}
svg {
  width: 350px;
}
.svg-button {
  cursor: pointer;
  transition: transform 0.2s ease, filter 0.3s ease;
}

.svg-button:hover .hover-effect {
  filter: brightness(1.2) drop-shadow(0 0 5px #c88c61);
}

.svg-button:active {
  transform: scale(0.97);
}

.svg-button:active .hover-effect {
  filter: brightness(0.9);
}
.inner {
  font-weight: 500;
  letter-spacing: 1px;
  text-transform:uppercase ;
  color: white;
  display: flex;
  align-items: center;
  gap: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
}
</style>
