<script setup lang="ts"></script>

<template>
    <div class="clouds-holder">
        <!-- TODO: div with background-repeat -->
        <div class="clouds">
            <img
                class="cloud left"
                src="@/assets/images/clouds/left_clouds.png" />
            <img
                class="cloud right"
                src="@/assets/images/clouds/right_clouds.png" />
            <div class="middle-clouds middle cloud" />
            <div class="middle-clouds middle cloud" />
        </div>
    </div>
</template>

<style scoped lang="scss">
$animation-amplitude-x: 1.4rem;
$animation-amplitude-y: 0.2rem;

@mixin anim-keyframes($delta) {
    @keyframes move-clouds {
        0% {
            transform: translateX(-$animation-amplitude-x + $delta)
                translateY($animation-amplitude-y);
        }
        50% {
            transform: translateX($animation-amplitude-x + $delta)
                translateY(-$animation-amplitude-y);
        }
        100% {
            transform: translateX(-$animation-amplitude-x + $delta)
                translateY($animation-amplitude-y);
        }
    }
}

.clouds-holder {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -8%;
    height: 16rem;
    overflow: hidden;

    .clouds {
        position: relative;

        .middle-clouds {
            width: 100%;
            height: 12rem;
            background-image: url(/src/assets/images/clouds/middle_clouds.png);
            background-repeat: repeat-x;
            background-size: cover;
        }

        .cloud {
            height: 40rem;
            user-select: none;
            position: absolute;

            @mixin animation-base($delay: 0s) {
                animation-name: move-clouds;
                animation-duration: 10s;
                animation-iteration-count: infinite;
                animation-fill-mode: both;
                animation-timing-function: ease-in-out;
                animation-delay: $delay;
            }
            &.left {
                left: -1.5 * $animation-amplitude-x;
                @include animation-base(-1.66s);
            }

            @for $i from 1 through 4 {
                &.middle:nth-of-type(#{$i}) {
                    @include anim-keyframes($i * 1rem);
                    @include animation-base($i * -21.1313s);
                    left: $i * -1.52rem;
                }
            }
            &.right {
                right: -1.5 * $animation-amplitude-x;
                @include animation-base();
            }
        }
    }
}

@include anim-keyframes(0);
</style>
