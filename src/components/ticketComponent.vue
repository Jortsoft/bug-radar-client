<script setup lang="ts">
const props = defineProps<{
    ticket: any;
}>()
const emit = defineEmits<{
    (e: 'click-ticket', ticket: any): void
    (e: 'click-ticket-jira', ticket: any): void

}>()

const clickProject = (ticket: any) => {
    emit('click-ticket', ticket)
}
const emitJiraClick = (ticket: any, e: any) => {
    emit('click-ticket-jira', ticket)
    e.stopPropagation();
}

const isBug: boolean = props.ticket.ticketJson.taskType.includes('task');
</script>

<template>
    <div class="ticket" :class="{ bug: isBug, task: !isBug }" @click="clickProject(ticket)">
        <div class="priority">
            <p>Priority: {{ ticket.priority }}%</p>
        </div>
        <p class="ticket-type">{{ ticket.ticketJson.taskType }}</p>
        <p class="title">
            {{ ticket.ticketJson.summary }}
        </p>
        <p class="desc">
            {{ ticket.ticketJson.description }}
        </p>
        <p class="commit">Commit title: <span>{{ ticket.commitMessage }}</span></p>
        <p class="author">Author: <span>{{ ticket.author }}</span></p>
        <center>
            <button class="transfer-but" @click="emitJiraClick(ticket, $event)">
                <p>Transfer to Jira</p>
            </button>
            <br />
            <button class="transfer-but reject">
                <p>Reject Ticket</p>
            </button>
        </center>
    </div>
</template>

<style scoped lang="scss">
.ticket {
    width: calc(20% - 16px);
    height: 370px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-top: 38px;
    border-radius: 10px;
    position: relative;
    margin-right: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
        transform: scale(1.03);
    }

    &:nth-child(5n) {
        margin-right: 0px;
    }

    @media (max-width: 1679px) {
        &:nth-child(5n) {
            margin-right: 20px;
        }

        &:nth-child(4n) {
            margin-right: 0;
        }

        width: calc(25% - 16px);
    }


    @media (max-width: 1365px) {
        &:nth-child(3n) {
            margin-right: 0;
        }

        &:nth-child(4n) {
            margin-right: 20px;
        }

        width: calc(33.33% - 16px);
    }

    &.bug {
        background: #940128;
        background: linear-gradient(180deg, rgba(148, 1, 40, 1) 0%, rgba(138, 0, 37, 1) 100%);
    }

    &.task {
        background: #007CE1;
        background: linear-gradient(180deg, rgba(0, 124, 225, 1) 0%, rgba(0, 113, 206, 1) 100%);
    }

    .priority {
        position: absolute;
        top: 10px;
        left: 0px;
        background-color: #FFD119;
        border-radius: 5px;
        padding: 5px;
        top: 14px;
        left: -8px;

        p {
            font-size: 11px;
            color: black;
        }
    }

    .ticket-type {
        font-size: 32px;
        text-align: center;
        margin-bottom: 8px;
    }

    .title {
        font-size: 16px;
        margin-bottom: 8px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }

    .desc {
        font-size: 15px;
        opacity: 0.8;
        margin-bottom: 10px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }

    .commit,
    .author {
        font-size: 14px;
        margin-bottom: 3px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;

        span {
            text-decoration: underline;
        }
    }

    .transfer-but {
        margin-top: 20px;
        border: none;
        outline: none;
        background-color: white;
        color: black;
        border-radius: 4px;
        width: 122px;
        height: 30px;
        cursor: pointer;
        transition: 0.4s;

        &.reject {
            color: red;
        }

        &:hover {
            transform: scale(1.1);
        }
    }
}
</style>