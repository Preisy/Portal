<script setup lang="ts">
import PortalLogo from '../icons/PortalLogo.vue';


</script>

<template>
<div class="bg-wrapper">
    <div class="structure">
        <div class="footer-block">
            <PortalLogo class="logo"></PortalLogo>
        </div>
    </div>
</div>
</template>
<style scoped lang="scss">
    .bg-wrapper {
        background-color:  #1C1C1C;
        .structure {
            padding-top: 1rem;
            padding-bottom: 1rem;
            .logo {
                height: 50%;
            }
        }
    }
</style>
