<script setup lang="ts">
const props = defineProps<{
    ticket: any;
}>()

const emit = defineEmits<{
    (e: 'close-modal', close: boolean): void
}>()

const clickProject = () => {
    emit('close-modal', true)
}
const isBug: boolean = props.ticket.ticketJson.taskType.includes('task');

</script>

<template>
    <div class="modal">
        <div class="box" :class="{ bug: isBug, task: !isBug }">
            <div class="close icon" @click="clickProject(true)">
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M17.5001 20.5946L25.2336 28.3281C25.644 28.7385 26.2006 28.969 26.7809 28.969C27.3613 28.969 27.9178 28.7385 28.3282 28.3281C28.7386 27.9178 28.9691 27.3612 28.9691 26.7808C28.9691 26.2005 28.7386 25.6439 28.3282 25.2335L20.5917 17.5L28.3267 9.76646C28.5298 9.56327 28.6909 9.32206 28.8008 9.05661C28.9107 8.79116 28.9672 8.50667 28.9671 8.21938C28.9671 7.93209 28.9104 7.64762 28.8004 7.38223C28.6904 7.11683 28.5292 6.8757 28.326 6.6726C28.1228 6.46951 27.8816 6.30842 27.6162 6.19854C27.3507 6.08866 27.0662 6.03214 26.7789 6.03221C26.4916 6.03228 26.2072 6.08893 25.9418 6.19894C25.6764 6.30894 25.4353 6.47014 25.2322 6.67333L17.5001 14.4069L9.76653 6.67333C9.56484 6.46431 9.32354 6.29755 9.05671 6.18278C8.78988 6.06801 8.50287 6.00754 8.21242 6.00488C7.92196 6.00222 7.63389 6.05743 7.365 6.16729C7.09612 6.27715 6.8518 6.43947 6.64632 6.64476C6.44083 6.85005 6.27829 7.09421 6.16817 7.36299C6.05805 7.63178 6.00257 7.9198 6.00496 8.21025C6.00734 8.50071 6.06755 8.78778 6.18207 9.05472C6.29658 9.32165 6.46312 9.56311 6.67195 9.765L14.4084 17.5L6.67341 25.235C6.46458 25.4369 6.29804 25.6783 6.18353 25.9453C6.06901 26.2122 6.0088 26.4993 6.00641 26.7897C6.00403 27.0802 6.05951 27.3682 6.16963 27.637C6.27974 27.9058 6.44229 28.1499 6.64777 28.3552C6.85326 28.5605 7.09757 28.7228 7.36646 28.8327C7.63535 28.9426 7.92342 28.9978 8.21387 28.9951C8.50433 28.9925 8.79134 28.932 9.05817 28.8172C9.325 28.7024 9.5663 28.5357 9.76799 28.3267L17.5001 20.5946Z"
                        fill="white" />
                </svg>
            </div>
            <p class="title">
                <span>{{ isBug ? 'Bug:' : 'Task:' }}</span> {{ ticket?.ticketJson?.summary }}
            </p>
            <p class="desc">
                {{ ticket?.ticketJson?.description }}
            </p>
            <p class="commit">
                <span>Commit title:</span>{{ ticket.commitMessage }}
            </p>
            <p class="author">
                <span>Author:</span>{{ ticket.author }}
            </p>
            <p class="ai-title">
                AI Response
            </p>

            <p class="ai-response">
                {{ ticket.ticketJson.aiResponse }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;

    .box {
        width: 1150px;
        height: calc(100% - 80px);
        border-radius: 10px;
        padding: 30px;
        overflow-y: scroll;
        position: relative;

        .close {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
        }

        &.bug {
            background: #940128;
            background: linear-gradient(180deg, rgba(148, 1, 40, 1) 0%, rgba(138, 0, 37, 1) 100%);
        }

        &.task {
            background: #007CE1;
            background: linear-gradient(180deg, rgba(0, 124, 225, 1) 0%, rgba(0, 113, 206, 1) 100%);
        }

        .title {
            font-size: 36px;
            text-align: center;
            margin-bottom: 20px;
        }

        .desc,
        .commit,
        .author {
            font-size: 24px;
            margin-bottom: 10px;

            span {
                text-decoration: underline;
            }
        }

        .ai-title {
            text-align: center;
            font-size: 36px;
            text-decoration: underline;
            margin-top: 20px;
            margin-bottom: 10px;
        }

        .ai-response {
            font-size: 20px;
        }
    }
}
</style>