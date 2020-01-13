<!--initial code-->
<!-- <script>
  import Task from './Task.svelte';
  export let loading = false;
  export let tasks = [];

  // reactive declarations (computed prop in other frameworks)
  $: noTasks = tasks.length === 0;
  $: emptyTasks = tasks.length === 0 && !loading;
</script>
{#if loading}
  <div class="list-items">loading</div>
{/if}
{#if emptyTasks}
  <div class="list-items">empty</div>
{/if} 
{#each tasks as task}
  <Task {task} on:onPinTask on:onArchiveTask />
{/each} -->

<!--updated code-->
<!-- 
<script>
  import Task from './Task.svelte';
  import LoadingRow from './LoadingRow.svelte';
  export let loading = false;
  export let tasks = [];

  // reactive declaration (computed prop in other frameworks)
  $: noTasks = tasks.length === 0;
  $: emptyTasks = tasks.length === 0 && !loading;
  $: tasksInOrder = [
    ...tasks.filter(t => t.state === 'TASK_PINNED'),
    ...tasks.filter(t => t.state !== 'TASK_PINNED'),
  ];
</script>
{#if loading}
<div class="list-items">
  <LoadingRow />
  <LoadingRow />
  <LoadingRow />
  <LoadingRow />
  <LoadingRow />
</div>
{/if} 
{#if tasks.length === 0 && !loading}
<div class="list-items">
  <div class="wrapper-message">
    <span class="icon-check" />
    <div class="title-message">You have no tasks</div>
    <div class="subtitle-message">Sit back and relax</div>
  </div>
</div>
{/if} 
{#each tasksInOrder as task}
  <Task {task} on:onPinTask on:onArchiveTask />
{/each} -->


<!--updated code for data section-->
<script>
  import PureTaskList from './PureTaskList.svelte';
  import { taskStore } from '../store';
  function onPinTask(event) {
    taskStore.pinTask(event.detail.id);
  }
  function onArchiveTask(event) {
    taskStore.archiveTask(event.detail.id);
  }
</script>

<div>
  <PureTaskList
    tasks="{$taskStore}"
    on:onPinTask="{onPinTask}"
    on:onArchiveTask="{onArchiveTask}"
  />
</div>
