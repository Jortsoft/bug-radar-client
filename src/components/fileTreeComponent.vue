<script setup lang="ts">
import { useScrollY } from "../composables/useScrolly.ts"

const { scrollY } = useScrollY();

defineProps<{
    projectList: {id: string; name: string; url: string};
    currentProjectId: string;
}>()

const emit = defineEmits<{
  (e: 'click-project', projectId: string): void
}>()

const clickProject = (projectId: string) => {
  emit('click-project', projectId)
}
</script>

<template>
    <div class="file-tree" :class="{ sticky: scrollY > 150 }">
        <p class="title">Project tree</p>
        <div class="project" v-for="(project, index) in projectList" :key="index" @click="clickProject(project.id)" :class="{ active : currentProjectId === project.id }">
            <div class="first">
                <div class="icon" style="margin-top: -3px;">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2 16C1.45 16 0.979333 15.8043 0.588 15.413C0.196667 15.0217 0.000666667 14.5507 0 14V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196666 1.45067 0.000666667 2 0H8L10 2H18C18.55 2 19.021 2.196 19.413 2.588C19.805 2.98 20.0007 3.45067 20 4V14C20 14.55 19.8043 15.021 19.413 15.413C19.0217 15.805 18.5507 16.0007 18 16H2Z"
                            fill="#111929" />
                    </svg>
                </div>
                <p class="project-title">{{ project.name }}</p>
            </div>
            <div class="second">
                <div class="icon arrow-icon">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7.15706 7.711L1.50006 13.368L0.0860596 11.954L5.03606 7.004L0.0860596 2.054L1.50006 0.639999L7.15706 6.297C7.34453 6.48453 7.44985 6.73884 7.44985 7.004C7.44985 7.26916 7.34453 7.52347 7.15706 7.711Z"
                            fill="#111929" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.file-tree {
    width: 284px;
    flex: none;
    background-color: white;
    margin-right: 40px;
    border-radius: 10px;
    min-height: 600px;
    max-height: 600px;

    &.sticky {
        position: sticky;
        top: 20px;
    }

    .project {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
        cursor: pointer;
        height: 36px;
        transition: 0.4s;

        &.active {
            background-color: #BEBEBE;

            .arrow-icon {
                transform: translateX(5px);
            }
        }

        &:hover {
            background-color: #BEBEBE;

            .arrow-icon {
                transform: translateX(5px);
            }
        }

        .first {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            .project-title {
                color: black;
                font-size: 16px;
                margin-left: 8px;
            }
        }

        .second {
            .arrow-icon {
                transition: 0.4s;
            }
        }
    }

    .title {
        font-size: 32px;
        padding: 20px;
        color: #111929;
    }
}
</style>
