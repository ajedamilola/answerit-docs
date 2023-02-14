<script>
  import { Button } from "sveltestrap";
  import { Link } from "svelte-routing";
  export let next = "#next";
  export let prev = "#prev";
</script>

<main class="content">
  <Link to={prev}>
    <Button color="primary">Prev</Button>
  </Link>
  <Link to={next}>
    <Button color="primary">Next</Button>
  </Link>
</main>

<style>
  .content {
    position: fixed;
    bottom: 20px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(228, 228, 228, 0.377) ; 
    backdrop-filter: blur(6px);
    }
</style>
