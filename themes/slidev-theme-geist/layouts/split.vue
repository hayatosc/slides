<template>
    <div class="split">
        <slot />
    </div>
</template>

<style>
.split {
    height: 100%;
    @apply absolute grid grid-cols-2 gap-8 left-8;
}
</style>
