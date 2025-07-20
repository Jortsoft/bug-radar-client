<script setup lang="ts">
// IPMORT COMPONENTS
import fileTreeComponent from "./components/fileTreeComponent.vue"
import ticketComponent from "./components/ticketComponent.vue"
import ticketModal from "./components/ticketModal.vue"

// IMPORT MODULES
import { ref, onMounted } from 'vue'
import axios from 'axios'

const modalOpen = ref(false)

const projectList = ref<any[]>([])
const ticketList = ref<any[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

const currentProjectId = ref<string | null>(null);
const currentTicket = ref<any>(null);

const apiUrl: string = 'https://bug-radar-410308731214.us-central1.run.app/api/';

const getProjectList = async () => {
  try {
    const response = await axios.get<any>(
      `${apiUrl}Dependency/graph`
    )
    projectList.value = response.data
  } catch (err: any) {
    error.value = err.message || 'Failed to fetch projects'
  } finally {
    loading.value = false
  }
}

const transferToJira = async (ticket: any) => {
  loading.value = true
  try {
    const response = await axios.post<any>(
      `${apiUrl}jira/task`,
      {
        summary: ticket.ticketJson.summary,
        description: ticket.ticketJson.description,
        projectKey: 'CCS',
        issueType: 'task'
      }
    )
    console.log('Jira response:', response.data)
    alert('Succesfully transfer to jira!');
  } catch (err: any) {
    error.value = err.message || 'Failed to create Jira task'
    console.error(err)
  } finally {
    loading.value = false
  }
}


const getTicketList = async (projectId: string) => {
  try {
    const response = await axios.get<any>(
      `${apiUrl}Ticket?projectId=${projectId}`
    )
    ticketList.value = response.data
    ticketList.value.forEach(ticket => {
      ticket.ticketJson = JSON.parse(ticket.ticketJson);
    });
    ticketList.value = ticketList.value.sort((a, b) => b.priority - a.priority)
    console.log(ticketList.value)
  } catch (err: any) {
    error.value = err.message || 'Failed to fetch projects'
  } finally {
    loading.value = false
  }
}

const projectClickInvoke = (projectId: string) => {
  currentProjectId.value = projectId;
  getTicketList(projectId)
}

const ticketClickInvoke = (ticket: any) => {
  currentTicket.value = ticket;
}

const ticketJiraClickInvoke = (ticket: any) => {
  transferToJira(ticket)
}

const modalClose = () => {
  currentTicket.value = null;
}

onMounted(() => {
  getProjectList()
})

</script>

<template>
  <!-- DETAIL MODAL -->
  <ticketModal v-if="currentTicket !== null" :ticket="currentTicket" @close-modal="modalClose()" />

  <div class="container">
    <!-- LOGO HERE -->
    <div class="logo">
      <p>BugRadar 🐞</p>
    </div>

    <div class="cont">
      <!-- FILE TREE -->
      <fileTreeComponent :projectList="projectList.nodes" :currentProjectId="currentProjectId"
        @click-project="projectClickInvoke($event)" />

      <!-- TICKET LIST -->
      <div class="ticket-list">
        <ticketComponent v-for="(ticket, index) in ticketList" :key="index" :ticket="ticket"
          @click-ticket="ticketClickInvoke($event)" @click-ticket-jira="ticketJiraClickInvoke($event)" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  .logo {
    font-size: 48px;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .cont {
    display: flex;

    .ticket-list {
      width: 100%;
      min-height: 600px;
      background-color: white;
      border-radius: 10px;
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      overflow-y: scroll;
    }
  }
}
</style>
