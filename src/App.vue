<script setup lang="ts">
import { useScrollY } from "../src/composables/useScrolly.ts"

const { scrollY } = useScrollY();
</script>

<template>
  <!-- DETAIL MODAL -->
  <div class="modal">
    <div class="box" :class="{ bug: false, task: true }">

    </div>
  </div>

  <div class="container">
    <!-- LOGO HERE -->
    <div class="logo">
      <p>BugRadar 🐞</p>
    </div>

    <div class="cont">
      <!-- FILE TREE -->
      <div class="file-tree" :class="{ sticky: scrollY > 150 }">
        <p class="title">Project tree</p>

        <div class="project">
          <div class="first">
            <div class="icon" style="margin-top: -3px;">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 16C1.45 16 0.979333 15.8043 0.588 15.413C0.196667 15.0217 0.000666667 14.5507 0 14V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196666 1.45067 0.000666667 2 0H8L10 2H18C18.55 2 19.021 2.196 19.413 2.588C19.805 2.98 20.0007 3.45067 20 4V14C20 14.55 19.8043 15.021 19.413 15.413C19.0217 15.805 18.5507 16.0007 18 16H2Z"
                  fill="#111929" />
              </svg>
            </div>
            <p class="project-title">Project name</p>
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
        <div class="project">
          <div class="first">
            <div class="icon" style="margin-top: -3px;">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 16C1.45 16 0.979333 15.8043 0.588 15.413C0.196667 15.0217 0.000666667 14.5507 0 14V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196666 1.45067 0.000666667 2 0H8L10 2H18C18.55 2 19.021 2.196 19.413 2.588C19.805 2.98 20.0007 3.45067 20 4V14C20 14.55 19.8043 15.021 19.413 15.413C19.0217 15.805 18.5507 16.0007 18 16H2Z"
                  fill="#111929" />
              </svg>
            </div>
            <p class="project-title">Project name</p>
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

      <!-- TICKET LIST -->
      <div class="ticket-list">
        <div class="ticket" :class="{ bug: false, task: true }">
          <div class="priority">
            <p>Priority: 100%</p>
          </div>
          <p class="ticket-type">Task</p>
          <p class="title">
            Bug title, Dom load error
          </p>
          <p class="desc">
            Bug title, Dom load error Bug title, Dom load error,
          </p>
          <p class="commit">Commit title: <span>Create someth</span></p>
          <p class="author">Author: <span>Shako doundobeli</span></p>
          <center>
            <button class="transfer-but">
              <p>Transfer to Jira</p>
            </button>
          </center>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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

    &.bug {
      background: #940128;
      background: linear-gradient(180deg, rgba(148, 1, 40, 1) 0%, rgba(138, 0, 37, 1) 100%);
    }

    &.task {
      background: #007CE1;
      background: linear-gradient(180deg, rgba(0, 124, 225, 1) 0%, rgba(0, 113, 206, 1) 100%);
    }
  }
}

.container {
  .logo {
    font-size: 48px;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .cont {
    display: flex;

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

      .ticket {
        width: calc(20% - 16px);
        height: 300px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
        padding-top: 38px;
        border-radius: 10px;
        position: relative;
        margin-right: 20px;
        margin-bottom: 20px;

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
          top: 11px;
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

          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
  }
}
</style>
