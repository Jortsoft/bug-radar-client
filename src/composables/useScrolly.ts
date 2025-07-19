import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollY() {
    const scrollY = ref(window.scrollY)

    const update = () => {
        scrollY.value = window.scrollY
    }

    onMounted(() => {
        window.addEventListener('scroll', update)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', update)
    })

    return { scrollY }
}
