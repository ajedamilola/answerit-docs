<script>
  import { Link } from "svelte-routing";
  import { onMount } from "svelte";
  var update = 1;
  var page = location.pathname;
  onMount(()=>{
    setInterval(()=>{
     page = location.pathname;
    },200)
  })
</script>

<aside>
  <nav class="navbar bg-light navbar-light shadow-lg">
    <a class="navbar-brand" href="#s"> Answerit Docs</a>
    <ul class="navbar-nav mt-3">
      <!-- Intro -->
      <li class="nav-item " data-bs-target="#intros" data-bs-toggle="collapse">
        <Link to="/" class={`nav-link dropdown-toggle ${page == "/" && "active fw-bold"}`}
          >Intro</Link
        >
      </li>
      <div class="collapse ps-2 show" id="intros">
        <ul class="navbar-nav">
          <li class="nav-item nested">
            <Link to="/" class={`nav-link ${page == "/" && "active fw-bold"}`}>Introduction</Link>
          </li>
          <li class="nav-item nested">
            <Link
              to="/basic-concepts"
              class={`nav-link ${
                page == "/basic-concepts" && "active fw-bold"
              }`}>Basic Concepts</Link
            >
          </li>
        </ul>
      </div>
      <!-- Admins -->
      <li class="nav-item" data-bs-target="#admins" data-bs-toggle="collapse">
        <a href="#admins" class="text-dark nav-link dropdown-toggle">Adminstrative Workflow</a>
      </li>
      <div class="collapse ps-2 show" id="admins">
        <ul class="navbar-nav">
          <li class="nav-item nested">
            <Link
              to="/admins-privilages"
              class={`nav-link ${
                page == "/admins-privilages" && "active fw-bold"
              }`}>Adminstrators and Privilages</Link
            >
          </li>
          <li class="nav-item nested">
            <Link
              to="/classes"
              class={`nav-link ${page == "/classes" && "active fw-bold"}`}
              >Managing Classes</Link>
          </li>
          <li class="nav-item nested">
            <Link to="/departments" class={`nav-link ${page == "/departments" && "active fw-bold"}`}>Managing Departments</Link>
          </li>
          <li class="nav-item nested">
            <Link to="/subjects" class={`nav-link ${page == "/subjects" && "active fw-bold"}`}>Managing Subjects</Link>
          </li>
          <li class="nav-item nested">
            <Link to="/students" class={`nav-link ${page == "/students" && "active fw-bold"}`}>Students Management</Link>
          </li>
          <li class="nav-item nested">
            <Link to="/management" class={`nav-link ${page == "/management" && "active fw-bold"}`}>School Managament</Link>
          </li>
          <li class="nav-item nested">
            <Link to="/pricing" class={`nav-link ${page == "/pricing" && "active fw-bold"}`}>Plans And Pricing</Link>
          </li>
        </ul>
      </div>
      <!-- Examination -->
      <li class="nav-item" data-bs-target="#exams" data-bs-toggle="collapse">
        <a href="#" class="text-dark nav-link dropdown-toggle">Examination Management</a>
      </li>
      <div class="collapse ps-2 show" id="exams">
        <ul class="navbar-nav">
          <li class="nav-item nested">
            <Link to="/exams" class={`nav-link ${page == "/exams" && "active fw-bold"}`}>Introduction</Link>
          </li>
          <li class="nav-item nested">
            <Link to="/exam-config" class={`nav-link ${page == "/exam-config" && "active fw-bold"}`}>Subject Configuaration</Link>
          </li>
          <li class="nav-item nested">
            <Link to="/questions" class={`nav-link ${page == "/questions" && "active fw-bold"}`}>Questions Management</Link>
          </li>
        </ul>
      </div>
    </ul>
  </nav>
</aside>

<style>
  nav.navbar {
    min-width: 17vw;
    flex-direction: column;
    padding: 10px;
    position: fixed;
    align-items: flex-start;
    justify-content: start;
    height: 100vh;
    overflow: auto;
  }
  .nav-item {
    font-size: 0.92em;
  }
  .nav-item.nested {
    font-size: 0.76em;
  }
  .line {
    width: 100%;
    border: 0.5px solid white;
    margin-top: -4px;
  }
</style>
